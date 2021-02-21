/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
    Description: A class that holds all information for the SIM7100A module
*/

#include "Sim7100A.h"

#include <string.h>
#include <ctype.h>
#include <stdarg.h>


#define CRLF "\r\n"
#define CTRLZ "\x1A"

#define SIM7100A_RX_PIN 7
#define SIM7100A_TX_PIN 6
SoftwareSerial _serial = SoftwareSerial(7,6);

const char *OK = "OK";


bool isNumber(char *buf,int n);

//constructor for SIM7100A
SIM7100A::SIM7100A(int PwrPin) {
  DEBUG_PRINT( F("\n\n\n") );
  
  this->_pwrpin = PwrPin;

  //Begin serial comms @default baud rate
  _serial.begin(SIM_BAUD);

  //Prompt module for response
  DEBUG_PRINT( F("Prompting SIM7100A for OK response... ") );
  write("AT\r\n", 500);
  if (responseMatches(OK)) {

  } else {
    DEBUG_PRINT( F("Expected OK, got ") );
    DEBUG_PRINT(( _response ));
    DEBUG_PRINT( F("Initial response failed") );
    do {
      powerOn(PwrPin);

      flushInput();
      write("AT\r\n", 500);

      DEBUG_PRINT(( _response ));
    } while (responseMatches(OK) == false);
  }

  DEBUG_PRINT( F("Connected!") );
}

void SIM7100A::powerOn(int PwrPin) {
  //Activate SIM7100A module via 1-second pulse to power pin

  DEBUG_PRINT( F("Powering on SIM7100A... ") );
  pinMode(PwrPin, OUTPUT);

  digitalWrite(PwrPin, HIGH);
  delay(1000);
  digitalWrite(PwrPin, LOW);
  delay(9000);

  //Disable echoing
  write("ATE0\r\n", 500);
  flushInput();
}



/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::  Stream Helper Method                                          :*/
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
int SIM7100A::available(void) {
  return _serial.available();
}

int SIM7100A::read(void) {
  return _serial.read();
}

void SIM7100A::write(char *content, int delayfor = 500) {
  _serial.write(content);
  delay(delayfor);
}

int SIM7100A::peek(void) {
  return _serial.peek();
}

void SIM7100A::flush() {
  _serial.flush();
}

void SIM7100A::flushInput() {
  // Read all available serial input to flush pending data.
  uint16_t timeoutloop = 0;
  while (timeoutloop++ < 40) {
    while (available()) {
      read();
      timeoutloop = 0;  // If char was received reset the timer
    }
    delay(1);
  }
}


/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::  Module Communication Methods                                  :*/
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
uint8_t SIM7100A::readline(uint16_t timeout = 100) {
  uint16_t replyidx = 0;
  bool completed = false;

  //Loop to receieve UART input until \n or timeout
  while (timeout > 0 && !completed) {

    int i = 0;
    while (replyidx < 254 && !completed && available()) {
      char c = read();

      if (c == '\r' && peek() == '\n' ) { //ignore \r and \n
        read(); //consume \n
        if (replyidx != 0) {
          completed = true; //only exit loop if no characters collected yet
        }
      } else {
        _response[replyidx] = c;
        replyidx++;
      }
    }

    //Decrement timeout, delay 1ms (Gives buffer at least 100ms to catch up)
    timeout--;
    delay(1);
  }

  _response[replyidx] = '\0';  // null term
  return replyidx;
}

bool SIM7100A::responseMatches(const char* Comparison) {
  readline();
  return (strcmp(Comparison, _response) == 0);
}



/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::  Primary Functionality Methods                                 :*/
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
bool SIM7100A::postJSON(const char *JSONData) {
  bool success = false;
  uint8_t jsonlen = strlen(JSONData);

  //Begin HTTP connection
  flushInput();
  sprintf(builderbuffer, "AT+CHTTPACT=\"%s\",%s\r\n", _serverhost, _serverport);
  write(builderbuffer, 2000);
  
  if ( responseMatches("+CHTTPACT: REQUEST") ) {
    DEBUG_PRINT( F("Sending Packet") );
    sprintf(builderbuffer,
      "POST %s HTTP/1.1"                CRLF
      "Host: %s"                        CRLF
      "User-Agent: %s"                  CRLF
      "Accept: */*"                     CRLF
      "Content-Type: application/json"  CRLF
      "Content-Length: %d"              CRLF CRLF  //Two newlines to distinguish header from body
      "%s"                              CTRLZ,     //Exit AT command
      _postmethod, _serverhost, _useragent, jsonlen, JSONData
    );
    
    DEBUG_PRINT(( builderbuffer ));

    write(builderbuffer);

    if (responseMatches(OK)) {
      DEBUG_PRINT( F("Packet Sent") );
      success = true;
      flushInput();
    }
  } else {
    DEBUG_PRINT( F("Failure to ackowledge AT+CHTTPACT! Response: ") );
    DEBUG_PRINT( _response );
  }

  return success;
}

//AT command lines to pull GPS data from the cell module. 
Report* SIM7100A::getGPSData() {
  Report* pos = NULL;

  static char latbuf[12];  //ddmm.mmmmmm\0
  static char lngbuf[13]; //dddmm.mmmmmm\0
  double templat = 0;
  double templng = 0;
  double millistime = 0;
  

  DEBUG_PRINT( F("Acquiring GPS Data... ") );

  flushInput();
  write("AT+CGPSINFO\r\n");
  
  readline();

  int n = sscanf(_response, "+CGPSINFO: %11s,N,%12s,W", latbuf, lngbuf);

  //Ensure that the lat & long collected are numbers. Would be less common if we had a HardwareSerial.
  if (isNumber(latbuf, 11) && isNumber(lngbuf, 12)) {
    //Modify string format from ddmm.mmmmmm to dd.mmmmmmmm
    latbuf[4] = latbuf[3];
    latbuf[3] = latbuf[2];
    latbuf[2] = '.';

    //Modify string format from dddmm.mmmmmm to ddd.mmmmmmmm
    lngbuf[5] = lngbuf[4];
    lngbuf[4] = lngbuf[3];
    lngbuf[3] = '.';

    
    DEBUG_PRINT( _response );

    //Create a new report object that's deallocated later
    pos = new Report(latbuf,lngbuf,millis());

    
  }
  else {
    DEBUG_PRINT( F("Invalid AT+CGPSINFO response: ") );
    DEBUG_PRINT( _response );
  }

  latbuf[0] = NULL;
  lngbuf[0] = NULL;
  
  DEBUG_PRINT( F("getGPSData Complete") );
  
  return pos;
}

//initializes the GPS using AT commands
bool SIM7100A::initGPS() {
  bool success = false;
  
  DEBUG_PRINT( F("Initializing GPS... ") );
  
  flushInput();
  write("AT+CGPSURL=\"supl.google.com:7275\"\r\n",2000);
  
  if (responseMatches("OK")) {
    DEBUG_PRINT( F("\tSet Google server") );

    flushInput();
    write("AT+CGPSSSL=0\r\n",2000);
    flushInput();
    write( "AT+CGPSSSL?\r\n" );

    if (responseMatches("+CGPSSSL: 0")) {
      DEBUG_PRINT( F("\tSet SSL no-certificate") );
      
      flushInput();
      write("AT+CGPS=1,2\r\n",2000);
      flushInput();
      write("AT+CGPS?\r\n");
      
      if (responseMatches("+CGPS: 1,2")) {
        DEBUG_PRINT( F("\tSet UE-assisted mode") );
        
        //Loop until we get valid GPS data
        do {
          DEBUG_PRINT( F("Checking GPS data...") );
          flushInput();
          write("AT+CGPSINFO\r\n",2000);
        } while ( responseMatches("+CGPSINFO: ,,,,,,,,") );

        if ( strstr(_response,"+CGPSINFO") != NULL ) {
          success = true;
          DEBUG_PRINT( F("Data retrieved: ") );
          DEBUG_PRINT(_response);
        } else { 
          DEBUG_PRINT( F("AT+CGPSINFO fail: ") );
          DEBUG_PRINT(_response);
        }
      } else { 
        DEBUG_PRINT( F("AT+CGPS fail: " ) );
        DEBUG_PRINT( _response );
      }
    } else { 
      DEBUG_PRINT( F("AT+CHPSSSL fail: ") );
      DEBUG_PRINT( _response );
    }
  } else { 
    DEBUG_PRINT( F("AT+CGPSURL fail: ") );
    DEBUG_PRINT( _response );
  }

  
  flushInput();

  return success;
}




//used for parsing to compile packet data. 
bool isNumber(char* buf, int n) {
  int i = 0;
  bool success = true;

  for (i = 0;i < n;i++) {
    if ((buf[i] != '.') && (!isdigit(buf[i])))
      success = false;
  }

  return success;
}
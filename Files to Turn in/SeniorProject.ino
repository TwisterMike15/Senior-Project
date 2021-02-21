/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
    Description: Primary driving code for tracking unit hardware
*/

#include <SoftwareSerial.h>

#include "Debug.h"
#include "Report.h"
#include "SIM7100A.h"
#include "Buttons.h"

#define THIS_BUS_ID 1
#define SIM7100A_PWR_PIN 2
#define SIM7100A_RX_PIN 7
#define SIM7100A_TX_PIN 6
#define AUX_REPORT_INTERVAL   2*1000
#define DIST_MOVED_TO_REPORT  40

Report *LastReport = NULL;
Report *CurrReport = NULL;

SIM7100A *SimModule;

extern buttonName activeButton;
bool Init = false;

void setup() {
  Serial.begin(9600);


  SimModule = &SIM7100A(
    SIM7100A_RX_PIN,        //Tell module to use Serial1 port
    SIM7100A_TX_PIN,
    SIM7100A_PWR_PIN        //Startup using this pin
  );

//Gps initialization
  if ( SimModule->initGPS() == true) {
    DEBUG_PRINT( F("\n\n\n") );

    Init = true;
    InitButtons();
  } else {
    DEBUG_PRINT( F("GPS Init failed; Exiting") );
  }
}


void loop() {
  if ( Init && canSendReport() ) {
    sendCurrReport();
  } else {
    
  }
  delay(2000);
}


//tests if cell module can successfully send a packet containing GPS location data.
bool canSendReport() {
  bool success = false;

  if (activeButton != none) {
    CurrReport = SimModule->getGPSData();
    
    if ( CurrReport != NULL ) {
      if ( LastReport == NULL ) { //If no reports have been made yet
        DEBUG_PRINT( F("No reports sent yet; sending...") );
        
        success = true;
      } else {
        double feetfromlastreport = CurrReport->distanceInFeetTo(*LastReport);
  
        DEBUG_PRINT( F("\tFeet from last report: ") );
        DEBUG_PRINTD( feetfromlastreport, 15 );
        
        if ( feetfromlastreport > DIST_MOVED_TO_REPORT ) {
          DEBUG_PRINT( F("Too much distance traversed from LastReport; sending report...") );
          success = true;
    
        } else {
    
          if ( (millis() - LastReport->timestamp) > AUX_REPORT_INTERVAL ) {
    
            DEBUG_PRINT( F("Auxillary timeout; sending report...") );
            success = true;
          }
        }
      }
    } else {
      DEBUG_PRINT( F("Invalid data!") );
    }
  } else {
    DEBUG_PRINT( F("No button selected yet!") );
  }

  DEBUG_PRINT(( "\n\n\n" ));

  return success;
}

//Sends the current location packet containing and ID, latitude, longitude, and the route the bus is traveling on. 
void sendCurrReport() {
  static char packetstring[100];
  
  //Clean up & rotate to new report
  delete LastReport;
  LastReport = CurrReport;
  CurrReport = NULL;

  
  //use LastReport here
  sprintf(packetstring,
    "{"
      "\"id\" : \"%d\","
      "\"lat\": \"%s\","
      "\"lng\": \"%s\","
      "\"route\": \"%s\""
    "}",
    THIS_BUS_ID,
    LastReport->latbuf,
    LastReport->lngbuf,
    RouteNames[activeButton]
  );

  DEBUG_PRINT( packetstring );
  if (SimModule->postJSON(packetstring)) {
    DEBUG_PRINT( "Packet sent!");
  } else {
    DEBUG_PRINT( "Packet failed to send!");
  }

  memcpy(packetstring,0,sizeof(packetstring));
}
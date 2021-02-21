/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
    Description: A class that holds all information for the SIM7100A module
*/

#ifndef SIM7100A_H
#define SIM7100A_H

#include "Debug.h"
#include "Arduino.h"
#include "Report.h"



#define SIM_MAX_AT_RCV 200
#define SIM_BAUD 9600


#include <SoftwareSerial.h>

//SIM7100A class inspired by AdaFruit FONA SIM7000 library
class SIM7100A {
  public:
    SIM7100A(int PwrPin);
    int _pwrpin;
    char _response[255];
    char *responseend;
    const char *_serverhost = "hwsrv-698431.hostwindsdns.com"; //DO NOT INCLUDE http://
    const char *_postmethod = "/VTT/BusInfoServlet?PostTrackerData";
    const char *_serverport = "8080";
    const char *_useragent  = "NotABus";
    char builderbuffer[320] = {'\0'};

    
    void powerOn(int PwrPin);

    /*Stream Helper Methods*/
    int available(void);
    void write(char *content, int delayfor=500);
    int read(void);
    int peek(void);
    void flush();
    void flushInput();

    /*Module Communication Methods*/
    uint8_t readline(uint16_t timeout = 100);
    bool responseMatches(const char* comparison);

    /*Primary Functionality Methods*/
    bool postJSON(const char *data);
    bool initGPS();
    Report* getGPSData();


  protected:
    //SoftwareSerial* _serial;
};

#endif

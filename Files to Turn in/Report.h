/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
    Description: A class that holds all information that helps schedule reports (position, time sent, etc.)
*/

#ifndef REPORT_H
#define REPORT_H


#include <math.h>

class Report {
  public:
    Report(char *LatBuf,char *LngBuf,unsigned long Time);

    double lat;
    double lng;
    char latbuf[12]; //ddmm.mmmmmm\0
    char lngbuf[13]; //dddmm.mmmmmm\0
    
    unsigned long timestamp;
    
    double distanceInFeetTo(Report Target);
};



#endif

/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
    Description: A conglomerate of methods that handle the buttons
*/

#ifndef BUTTONS_H
#define BUTTONS_H

typedef enum {blue, yellow, white, red, none} buttonName;
typedef enum {regular, express, walmart, offroute} routeName;

static const char* RouteNames[] {
  "REGULAR",
  "EXPRESS",
  "WALMART",
  "OFFROUTE"
};

extern buttonName activeButton;

void InitButtons();
void KillButtons();

#endif

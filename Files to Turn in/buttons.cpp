/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
    Description: A conglomerate of methods that handle the buttons
*/

#include "Debug.h"
#include "Buttons.h"

#include <TimerOne.h>
 
int buttonPins[] = {8,9,10,11};
int numButtons = sizeof(buttonPins)/sizeof(int);
buttonName activeButton = none;

void ReadButtons();

void InitButtons(){
  for (int i=0; i<numButtons; i++) {
    int pinnum = buttonPins[i];
    pinMode(pinnum, OUTPUT);
  }

  //Asynochronously collect button input
  Timer1.initialize(20000);
  Timer1.attachInterrupt(ReadButtons);
  
}

void KillButtons() {
  Timer1.stop();
}

void ReadButtons(){
      static boolean readyToChange = true;
      
      int analogValue = analogRead(A0);  //Read in the button value ( (InputVolts/ProvidedVolts)*1023 )
      
      if (analogValue < 50) {
        //only occurs once all buttons are released. <50 is close enough
        readyToChange = true;
      } else {
 
      //if all buttons have been released before the new button
      if (readyToChange) {
        
        //set the active button to its corresponding value (relates to overall resistance assigned to a button)
        switch (analogValue) {
          case 496 ... 520:
            activeButton = blue;
            break;
          case 473 ... 495:
            activeButton = yellow;
            break;
          case 452 ... 472:
            activeButton = white;
            break;
          case 431 ... 451:
            activeButton = red;
            break;
          default:
            //we shouldn't get to this point.
            break;
          };
      }
      //Switch off all buttons, except the one we want to be on (prevents flicker)
      for (int i=0; i<numButtons; i++) {
        int pinnum = buttonPins[i];      
        if ( i != activeButton)
          digitalWrite(pinnum,LOW);
      }

      
      readyToChange = false; //deny setting of new buttons until all buttons released (see below)
    }
 
    //Keep active the only selected button
    if (activeButton != none) {
        int pinSelected = buttonPins[activeButton];
        digitalWrite(pinSelected, HIGH);
    }

}

/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
    Description: This code defines the bus stop class for the server side. 
 */
package org.webApp2.model;

/**
 *
 * @author ancar
 */
public class BusStop {
    String name;
    LatLng pos;

    // constructor
    public BusStop(String StopName, LatLng StopPostion) {
        this.name = StopName;
        this.pos = StopPostion; 
    }

    //overloads distanceTo from LatLng object
    double distanceTo(LatLng position) {
       return pos.distanceTo(position);
    }
    
}

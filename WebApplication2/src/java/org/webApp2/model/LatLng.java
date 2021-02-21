/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
 */
package org.webApp2.model;

/**
 *
 * @author ancar
 * Stores Lat and Lng in and object
 * 
 */
public class LatLng {
    public double lat;
    public double lng;
    
    //constructor
    public LatLng(double lat, double lng) {
        this.lat = lat;
        this.lng = lng;
    }
    
    //returns distance to given latlng object
    public double distanceTo(LatLng target) {
        if ((this.lat == target.lat) && (this.lng == target.lng)) {
            return 0;
        }
        else {
            double theta = this.lng - target.lng;
            double dist = Math.sin(Math.toRadians(this.lat)) * Math.sin(Math.toRadians(target.lat)) + Math.cos(Math.toRadians(this.lat)) * 
                    Math.cos(Math.toRadians(target.lat)) * Math.cos(Math.toRadians(theta));
            dist = Math.acos(dist);
            dist = Math.toDegrees(dist);
            dist = dist * 60 * 1.1515 *5280;
            return (dist);
        }
    }
    
}

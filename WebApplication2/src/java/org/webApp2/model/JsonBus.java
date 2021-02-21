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
 * @author Plaul
 * Java class to handle JSON bus
 * 
 */
public class JsonBus {
    public String id;
    public double lat;
    public double lng;
    public String prevBusStopName;
    public String route;
    
    public JsonBus(String busId,LatLng pos, String prevName, String busRoute) {
        this.id = busId;
        this.lat = pos.lat;
        this.lng = pos.lng;
        this.prevBusStopName = prevName;
        this.route = busRoute;
    }
}

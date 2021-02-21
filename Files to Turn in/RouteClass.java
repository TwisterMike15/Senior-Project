/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
    Description: This program defines the Route class for the server.
 */
package org.webApp2.model;

/**
 *
 * @author ancar
 * Java class for the routes
 * 
 */
public class RouteClass {
    private BusStop[] Stops;
    public String name;
    
    /*
     * Constructor for RouteClass
    */
    RouteClass(String routeName, BusStop[] busStops){
        this.Stops = busStops;
        this.name = routeName;
    }
    
    // returns next stop from stop passed in
    public BusStop getNextStop(BusStop stop) {
        BusStop nxtBusStop = null;
         for(int i=0; i<Stops.length; i++){
             if(stop == Stops[i]){
                 nxtBusStop = Stops[(i+1)%Stops.length];
             }
         }
        return nxtBusStop;
    }
    
    //returns first stop of given route
    public BusStop getFirstStop() {
        return Stops[0];
    }
}

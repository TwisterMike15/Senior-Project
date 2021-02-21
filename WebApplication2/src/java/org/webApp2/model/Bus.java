/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
 */
package org.webApp2.model;

import com.google.gson.Gson;
import java.util.Timer;
import java.util.TimerTask;

import static org.webApp2.model.BusInfoServlet.AllRoutes;

/**
 *
 * @author Paul
 * Bus object
 * 
 */
public class Bus {
    public long updatetime;
    public String id;
    
    public LatLng prevPos;
    public LatLng pos;
    public BusStop prevBusStop = null;
            
    public RouteClass route;

    public Timer activitytimer = new Timer(true);  // tick tock tick tock says mike
    
    static Gson gson = new Gson();
    
    //constructor
    public Bus(String busId,long updateTime,double busLat,double busLng,String busRoute) {
        this.id = busId;
        this.updateValues(updateTime, busLat, busLng, busRoute);
    }
    
    //updates bus values
    public void updateValues(long updateTime,double busLat,double busLng,String busRoute) {
        this.updatetime = updateTime;
        
        //first time through, prevPos is set to current postion also
        if(this.prevPos != null) {
            this.prevPos = this.pos;
        }
        else {
            this.prevPos = new LatLng(busLat, busLng);
        }
        this.pos =  new LatLng(busLat, busLng);
        
        //if we are off route, pass offroute in as name
        if (busRoute.equalsIgnoreCase("OFFROUTE")) {
            this.route = new RouteClass(busRoute.toUpperCase(), null);
        }
        else {
            this.route = AllRoutes.get(busRoute);
            if(this.route == null) {
                System.out.println("**Rout Error**");
            }
        
            //calculating next stop if necessary
            double distance1,distance2,avg;
            
              //System.out.println("current stop:  " + this.prevBusStop.name);
            //if we haven't been to a previous stop yet
            if(this.prevBusStop == null) {
                 distance1 = this.route.getFirstStop().distanceTo(this.pos);
                 distance2 = this.route.getFirstStop().distanceTo(this.prevPos);
                 avg = (distance1+distance2)/2;  
                 //System.out.println("Avg for 1st busStop: "+ avg);
                 System.out.println("1st Average: " + avg);
                if (avg < 150 ) {
                    this.prevBusStop = this.route.getFirstStop();
                }
            }
            //else calc next stop
            else { 
                distance1 = this.route.getNextStop(this.prevBusStop).distanceTo(this.pos);
                distance2 = this.route.getNextStop(this.prevBusStop).distanceTo(this.prevPos);
                avg = (distance1+distance2)/2;
                System.out.println("Avg for next busStop: " + avg);
                if (avg < 150) {
                    this.prevBusStop = this.route.getNextStop(this.prevBusStop);
                    //System.out.print("named: " + this.prevBusStop.name);
                }
            }
        }
        
        this.setKeepaliveTimeout();
    }
    
    public void setKeepaliveTimeout() {
        //kill timer, if applicable
        this.activitytimer.cancel();
        
        //create new timer
        TimerTask isalive = new ActivityCheckerTask(this.id,this.updatetime);
        this.activitytimer = new Timer(true);
        this.activitytimer.schedule(isalive,30000);
    }
}

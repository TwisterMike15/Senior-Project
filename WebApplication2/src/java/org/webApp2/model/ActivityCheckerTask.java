/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
 */
package org.webApp2.model;

import java.util.TimerTask;
import static org.webApp2.model.BusInfoServlet.ActiveBuses;

/**
 *
 * @author Paul
 */
public class ActivityCheckerTask extends TimerTask {
    String BusId;
    long InitialUpdateTime;
    
    ActivityCheckerTask(String busId, long initialUpdate) {
        this.BusId = busId;
        this.InitialUpdateTime = initialUpdate;
    }
    
    public void run() {
        System.out.println(this.BusId);
        if ( ActiveBuses.containsKey(this.BusId) ) {
            Bus checkingbus = ActiveBuses.get(this.BusId);
            
            //remove the bus if its updatetime hasn't changed since the creation of this task
            if ( checkingbus.updatetime == this.InitialUpdateTime ) {
                System.out.println("REMOVING");
                ActiveBuses.remove(this.BusId);
            } else {
                System.out.println("all good");
            }
        }
    }
}

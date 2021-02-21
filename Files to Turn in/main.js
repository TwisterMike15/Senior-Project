/*
 *  Paul Maclean
 *  Anthony Carrola
 *  Michael Gorse
 *  Robert Breckenridge
 *  VTT
 *  Description: This program is the main javascript program of the project.
 */


//Shared variables (Initialized elsewhere)
var google;                   //google object;  from index.html initMap()
var map;                      //map object;     from index.html initMap()

var BusStops;
var Routes;
var RouteEnums;

//This script's global variables
let InfoWin;             //variable to hold the info window
let HighlightedRoute;
let ActiveBuses = {};



/*
 * @function toggleRouteDisplay
 * @param {string} RouteName: should be a string that corresponds to one of the Routes keys
 * @returns {} 
 */
function toggleRouteDisplay(RouteName) {
    //if not off route
    if(RouteName.toUpperCase() !== "OFFROUTE"){
        let selectedroute = Routes[RouteName]; //RouteName 

        //Make sure nobody enters a route that doesn't exist.
        if (typeof selectedroute !== "undefined") {

            //if we're toggling the route that's already selected:
            if (HighlightedRoute === selectedroute) {
                HighlightedRoute.setVisible( !HighlightedRoute.visible );
            }
            else {//if we're toggling a different route

                //disable current route, if it exists
                if (HighlightedRoute) {
                    HighlightedRoute.setVisible(false);
                }

                //set the selected route as the new one, and make it visible
                HighlightedRoute = selectedroute;
                HighlightedRoute.setVisible(true);
            }

        } else {
            console.log("Mike, you are using the wrong RouteName. Try whatever gets passed into this function.");
        }
    }
    //else if click on offroute, clear everything
    else{
        if(HighlightedRoute){
         HighlightedRoute.setVisible(false);
        }
    }
}


var dirService = new google.maps.DirectionsService();
var dirRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
dirRenderer.setMap(map);



/*
 * 
 * @param {type} Bus
 * @returns {undefined}
 * removes bus
 * 
 */
function removeBus(Bus) {
    console.log("Removing " + Bus.trackerid);
    delete ActiveBuses[Bus.trackerid];
    Bus.remove();
}

/*
 * 
 * @param {type} NewBusData
 * @returns {undefined}
 * Update Bus position
 * 
 */
function updateBusPositions(NewBusData) {
    for (const [busid, busdata] of Object.entries(NewBusData)) {
        let newpos = {
            lat : parseFloat(busdata.lat),
            lng : parseFloat(busdata.lng)
        };
        let newroute = Routes[busdata.route];
        
        //if not off route
        if(newroute.name.toUpperCase() !== "OFFROUTE") {
             prevStopName = busdata.prevBusStopName;
         }
        else {
            prevStopName = "UNKNOWN";
        }
        let existingbus = ActiveBuses[busid];
        //if bus exists
        if (existingbus) {
            console.log("Updating: BusId #"+busid);
            
            //update bus marker based on route
            existingbus.setRoute(newroute);
            //update bus position
            existingbus.updatePosition(newpos);
            //update prev bus stop data
            existingbus.updatePrevBusStop(prevStopName);
            
        //else create mew bus
        } else {
            console.log("Creating: BusId #"+busid);
            ActiveBuses[busid] = new Bus(busid,newroute,newpos);
        }
    }
      
    //Remove non-described buses
    for (const [busid,bus] of Object.entries(ActiveBuses)) {
        console.log(NewBusData[busid])
        if (NewBusData[busid] === undefined) {
            removeBus(bus);
        }
    }
}


/*
 * Gets data from Servlet
 * Calls itself to check again for data
 */
var debug_timesrun = 0;
function fetchNewBusData() {
   setTimeout(fetchNewBusData,5000);

    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let newbusdata_json = httprequest.responseText;
            
            
            //debugging only
//           newbusdata_json = `{
//                "5" : {"lat" : "40.065973000", "lng" : "-79.887712000", "route": "0" },
//                "6" : {"lat" : "40.038933", "lng" : "-79.901007", "route": "1" }
//           }`;
//          if (debug_timesrun === 1) {
//                newbusdata_json = `{
//                    "5" : {"lat" : "40.057973000", "lng" : "-79.9007712000", "route": "0" },
//                   "6" : {"lat" : "40.06138933", "lng" : "-79.9011007", "route": "1" }
//               }`;
//            } else if (debug_timesrun === 2) {
//                newbusdata_json = `{
//                    "5" : {"lat" : "40.065973000", "lng" : "-79.887712000", "route": "0" },
//                    "6" : {"lat" : "40.038933", "lng" : "-79.901007", "route": "1" }
//                }`;
//            }
//            debug_timesrun++;
            
            console.log(newbusdata_json);
            console.log(typeof newbusdata_json);
            
            if (newbusdata_json !== "null" && newbusdata_json !== null) {
                
                updateBusPositions( JSON.parse(newbusdata_json) );
                
            } else {
                //Remove all buses
                for (const [busid,bus] of Object.entries(ActiveBuses)) {
                    removeBus(bus);
                }
            }
        }    
    };
    
    httprequest.open("POST", "BusInfoServlet", true);
    httprequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    httprequest.send();
  
}


/*
* 
* Starts the loop of getting data from server and updating bus
* 
*/
fetchNewBusData();


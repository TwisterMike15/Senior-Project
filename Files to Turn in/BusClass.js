/*
 *  Paul Maclean
 *  Anthony Carrola
 *  Michael Gorse
 *  Robert Breckenridge
 *  VTT 
 *  Description: This code defines the bus class for the client side. 
 */

var google;                 //google object
var map;                    //map object

//Configurations for bus movement
const TimeToMove        = 0.5;   //Seconds to make full tween
const NumSteps          = 15; //Basically the quality. More = better, but more resource intensive
const MsBetweenSteps    = TimeToMove / NumSteps * 1000; //Used in stepBus
const AlphaStep         = 1 / NumSteps; //Used in stepBus


class Bus {
    constructor(TrackerId,InitialRoute,InitialPosition) {
        //Create dummy holder for listeners/anonymous functions
        let _this = this;
        
        //Attributes derived from parameters
        this.trackerid     = TrackerId;
        this.route         = InitialRoute; //initialized formally later with setRoute
        this.currentcoord  = InitialPosition;
        this.image         = InitialRoute.busicon;
        this.marker        = new google.maps.Marker({
            position: this.currentcoord,
            icon: this.image, 
            map: map,
            zIndex : 10
        });
        
        
        //Default attributes
        this.prevBusStopName = "";    //the name of the previous bus stop in all caps
        this.nextBusStop = null;      //stors the next bus stop when found
        
        this.distanceToStop = null;
        this.timeToStop = null;
        this.marker.addListener('click', function() {
            toggleRouteDisplay(_this.route.key);
            map.setCenter(_this.currentcoord);
        });
        
//        this.infoWin = new google.maps.InfoWindow ({
//            content: this.description
//        });
        
        this.button = null;
        
        
        //Initialization Actions
        this.setVisible(true);
        this.setRoute(InitialRoute);
        
        this.createHtml();
        
    }
//    setRoute(NewRoute) {
//        this.route = NewRoute;
//    }
    
    createHtml() {
        var busroute = null;
    //create button for bus
        this.button = document.createElement("BUTTON");
        this.button.innerHTML = `Bus ${String(this.trackerid)}: ${this.route.name} 
                        <div id=btnHTML${String(this.trackerid)} display="inline-block" ${String(this.trackerid)}> 
                            <div align="left"> CALCULATING... &nbsp&nbsp&nbsp ETA:&nbspTBD</div>
                        </div>`;
        this.button.classList.add("bus_buttons");
        if(this.route.name.toUpperCase() === "REGULAR") {
            this.button.classList.add("regRouteButton");
            this.button.id = "REGULAR" + this.trackerid;
            busroute = "REGULAR";
        }
        else if (this.route.name.toUpperCase() === "EXPRESS") {
            this.button.classList.add("exprRouteButton");
            this.button.id = "EXPRESS" + this.trackerid;
            busroute = "EXPRESS";
        }
        else if (this.route.name.toUpperCase() === "WALMART") {
            this.button.classList.add("walmartRouteButton");
            this.button.id = "WALMART" + this.trackerid;
              busroute = "WALMART";
        }
        else if (this.route.name.toUpperCase() === "OFFROUTE") {
            this.button.classList.add("offRouteButton");
            this.button.id = "OFFROUTE" + this.trackerid;
              busroute = "OFFROUTE";
        }
        else {
            alert("Not a valid route! (CSS)");
        }
        var _this = this;
        this.button.onclick = function() { 
            toggleRouteDisplay(busroute);
            map.setCenter(_this.currentcoord);
        };
        document.getElementById("button").appendChild(this.button);

    }
    
    
    
    //function that handles stepping bus marker
    stepBus() {
        //alpha will update from 0 to 1. It represents the % to destination.
        if (this.alpha <= 1) {
            this.alpha+=AlphaStep;
            
            //This allows us to keep track of the bus's current position
            this.currentcoord = {
                lat : this.source.lat + (this.deltalat * this.alpha),
                lng : this.source.lng + (this.deltalng * this.alpha)
            };
            
            this.marker.setPosition(this.currentcoord);
            
            //Create closure value '_this' for recursive method call
            var _this = this; 
            this.movementtimer = setTimeout(function() {
                _this.stepBus(); //call stepBus, with _this closure as the object
            }, MsBetweenSteps);
        }

    }

    
    updatePosition(NewPosition) {
        
        //Kill any queued bus-stepping timers
        if (typeof this.movementtimer !== "undefined") {
            clearTimeout(this.movementtimer);
        }
        
        //this.currentcoord (it exists)
        this.source = this.currentcoord;
        this.destination = NewPosition;
        
        //The total x/y from source to destination
        this.deltalat = (this.destination.lat-this.source.lat);
        this.deltalng = (this.destination.lng-this.source.lng);
        this.alpha=0;
        
        //Begin recursive positioning
        this.stepBus();
    }
   // 
    updatePrevBusStop(busStopName) {
        //if OFFROUTE
        if(busStopName.toUpperCase() === "UNKNOWN") {
            this.prevBusStopName = "Unknown";
            this.setButtonTextHTML(this, "Unknown");
        }
        //else if on regular route
        else {
            this.prevBusStopName = busStopName; 
            
            //if unknown prev BusStop
            if(this.prevBusStopName === 'CALCULATING') {
               this.setButtonTextHTML(this, "TBD");

           }
           //else if we know prev busStop
           else {
              for(var i=0; i<this.route.stopsOnRoute.length; i++){
                 // console.log(this.route.stopsOnRoute[i].ID.toUpperCase());
                  if(this.prevBusStopName.toUpperCase() === this.route.stopsOnRoute[i].stopID.toUpperCase()) {
                      //gets the bus stop (object) beyond the one sent by the server
                      this.nextBusStop = this.route.stopsOnRoute[(i+1) % this.route.stopsOnRoute.length];
                      break;
                  }
              }
              this.getDistanceMatrix(this.nextBusStop);
           }
       }
         
    }
    /*
     * sets HTML text for bus buttons
     * @param {type} _this (bus object)
     * @param {type} eta (time to destination)
     * @returns {null}
     */
    setButtonTextHTML(_this, eta) {
          document.getElementById(_this.button.id).innerHTML = 
                    `Bus ${String(_this.trackerid)}: ${_this.route.name} 
                <div align="left"> ${_this.prevBusStopName}... 
                    &nbsp&nbsp&nbsp ETA:&nbsp${eta}</div>`;
    }
    
    
    setRoute(NewRoute) {
        //if we're setting the same route, don't even bother
        if (NewRoute === this.route) return;
        
        if (NewRoute) {
            console.log(NewRoute.name);
            console.log(NewRoute.busicon);
            this.route = NewRoute;
            this.marker.setIcon(NewRoute.busicon);
        }
    }
    
    setVisible(Visibility) {
        this.marker.setVisible(Visibility);
        this.visible = Visibility;
    }
    
    remove() {
        //stop marker movement
        clearTimeout(this.movementtimer);
        
        //remove marker
        this.marker.setMap(null);
        this.marker = null;
        var div = document.getElementById("button");
        div.removeChild(this.button);
        
    }
    /*
     * 
     * @returns {int Array} of distance and time to destination
     */
    getDistanceMatrix(nextStop) {
        var distance, duration;
        var _this = this;
       // console.log("currentCoord: " + this.currentcoord);
      //  console.log("route stop: " + this.route.stopsOnRoute[stop].position);
            var distService = new google.maps.DistanceMatrixService();
            distService.getDistanceMatrix({
                origins: [_this.currentcoord, "California, Pennsylvania"],
                destinations: [nextStop.position, "California, Pennsylvania"],
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.IMPERIAL
            }, async function(response, status)
                {
                    if(status !== 'OK') {
                        console.log("Error was: ", status);
                        distance = -111;
                        duration = -1;
                    } else {
                       let results = response.rows[0].elements[0];
                        distance = results.distance.text;
                        duration = results.duration.text;
                     //   console.log("Distance, duraction: "+distance+", "+ duration);
                        _this.setButtonTextHTML(_this, duration);
                    }
                });
    }     
}

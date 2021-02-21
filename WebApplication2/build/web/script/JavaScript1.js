/* 
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/


var regularRouteCoordinates;
var expressRouteCoordinates;

var google;                 //google object
var map;                    //map object

//---------------------------------------Highlight routes better @Future Mike
var dirService = new google.maps.DirectionsService();
var dirRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
dirRenderer.setMap(map);


let HighlightedRoute;


const BusStops = {
    STADIUM         : new BusStop("Stadium",                       {lat: 40.047118, lng: -79.899763}),
    PARKANDRIDE     : new BusStop("Vulcan Vullage - Park & Ride",  {lat: 40.050690, lng: -79.895982}),
    UPPHICKORY      : new BusStop("Upper Hickory Street",          {lat: 40.063386, lng: -79.886084}),
    LOWHICKORY      : new BusStop("Lower Hickory Street",          {lat: 40.064164, lng: -79.885351}),
    BOOKTOWERS      : new BusStop("Booker Towers",                 {lat: 40.065569, lng: -79.887057}),
    UPPERVULCAN     : new BusStop("Upper Vulcan Village",          {lat: 40.049754, lng: -79.896895}),
    LOWERVULCAN     : new BusStop("Lower Vulcan Village",          {lat: 40.050148, lng: -79.897562}),
    MORGANHALL      : new BusStop("Lot 11/Morgan Hall",            {lat: 40.062193, lng: -79.882933})
};
Object.freeze(BusStops); //Make BusStops immutable


const Routes = {
    REGULAR     : new Route(
        "Regular",
        "#008CBA",
        regularRouteCoordinates,
        [ BusStops.STADIUM, BusStops.PARKANDRIDE, BusStops.UPPERVULCAN, BusStops.LOWERVULCAN, BusStops.BOOKTOWERS ]
    ),
    EXPRESS     : new Route(
        "Express",
        "#FFFFFF",
        expressRouteCoordinates,
        [ BusStops.LOWERVULCAN, BusStops.PARKANDRIDE, BusStops.BOOKTOWERS, BusStops.LOWHICKORY, BusStops.UPPERVULCAN, BusStops.MORGANHALL ]
    )
};
Object.freeze(Routes);
const RouteEnums = [Routes.REGULAR,Routes.EXPRESS];




/*
 * @function toggleRouteDisplay
 * @param {string} RouteName: should be a string that corresponds to one of the Routes keys
 * @returns {} 
 */
function toggleRouteDisplay(RouteName) {
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

































var curCoord = { lat: busStopCoordinates[0].lat, lng: busStopCoordinates[0].lng};
var nextCoord = { lat: busStopCoordinates[1].lat, lng: busStopCoordinates[1].lng};


var infoWin;             //var to hold the info window
//        var busDesc =              //description of bus1 may contain dest, speed, etc later
//                '<p>Route: Regular</p>';
var routeLine;


/*
 * BUS OBJECT
 * current coordinate
 * next coordinate
 * route to highlight
 * infoWindow
 * description that goes into info window
 */        
var colorOfBus;

var bus = {
    curLatLng: curCoord,
    nextLatLng: nextCoord,
    infoWin: infoWin,
    description: '<p>Route: Regular</p>',
    routeLine: routeLine,
    //routeType: 
    color: colorOfBus,
    image: 'images/blue.png'
};  

var bus2= Object.create(bus);
bus2.curLatLng = nextCoord;
bus2.image = 'images/red.png';
bus2.description = '<p>Route: Express</p>';

bus.color =  "#0080FF";
bus2.color = "#FF0000";


/*
* 
* Starts the loop of getting data from server and updating bus
* 
*/
updateBusPos();

/*
* 
* @param {type} bus
* @returns {null}
* inits buses
* 
*/
 function initBus(bus) {

     bus.marker = new google.maps.Marker({
         position: bus.curLatLng, 
            icon: bus.image, 
            map: map,
            zIndex : 10
     });

     bus.infoWin = new google.maps.InfoWindow ({
            content: bus.description
     });

    bus.infoWin = new google.maps.InfoWindow ({
            content: bus.description
    });

    bus.routeLine = new google.maps.Polyline({
            path: regularRouteCoordinates,
            geodesic: true,
            strokeColor: bus.color,
            strokeOpacity: 1.0,
            strokeWeight: 3
    });

    bus.marker.addListener('click', function() {
            //check and display or undisplay info
            toggleRouteDisplay("regularRouteButton");

    });       
 }

  /*
  * Open busInfo
  * polyLines and window
  * Accessed both by clicking button 
  * and by clicking marker
  */
function displayBusInfo(bus) {
    bus.infoWin.open(map, bus.marker);
    bus.routeLine.setMap(map);
}

/*
 * Close busInfo
 * polyLines and window
 */
function closeBusInfo() {
    bus.routeLine.setMap(null);
    bus.infoWin.close();
    bus2.routeLine.setMap(null);
    bus2.infoWin.close();
  //console.log("Considered map");
}











/*
 * @param {string} id
 * @returns {void)
 * Checks which route (button/marker) was clicked
 * Then displays
 */
function checkRoute(id){
    alreadyClicked = true;
    previousButtonId = id;
    if(id == "regularRouteButton")
        {
            changeRegularRouteMarkerVisibility(true);
            displayBusInfo(bus);
        }
        else if(id == "expressRouteButton")
        {
            changeExpressRouteMarkerVisibility(true);
            displayBusInfo(bus2);
        }
}




/*
 * 
 * 
 * Functions for smooth movment of buses
 * and for accessing the Servlett to get data
 * 
 * 
 */
//gbl vars for staggering  bus mvmnt
var counter = 0;        //counter for stepping bus marker
var deltaStep = 70;     // num of steps between bus coords
var delay = 15;         //ms we delay
var deltaLat;           //change in lat
var deltaLng;           //change in lng
var data;
var dataParsed;         // data from json parsed.

/*
 * Gets data from Servlet
 * If (data is not null)
 *      upates next position
 *      calls nextBusPos
 * Calls itself to check again for data
 */
function updateBusPos() {

    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = req.responseText;
            console.log(data);
        }
    };
    req.open("POST", "Servlet1", true);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send();

    if (data != "null" && data != null && typeof data !== "undefined") {
      dataParsed = JSON.parse(data)
      console.log(dataParsed.ID + " " + parseFloat(dataParsed.lat)+ " " + parseFloat(dataParsed.lng));
      bus.nextLatLng.lat = parseFloat(dataParsed.lat);
      bus.nextLatLng.lng = parseFloat(dataParsed.lng);

      //figure out delta step
      nextBusPos();
      console.log("nextCoord: " + bus.nextLatLng.lat+ " "+  bus.nextLatLng.lng);
    }

     setTimeout(updateBusPos,5000);
}

//function that handles finding the delta sizes and then calling stepBus
function nextBusPos() {
  //  var tempCoord = nextCoord;
    deltaLat = (bus.nextLatLng.lat - bus.curLatLng.lat)/deltaStep;
    deltaLng = (bus.nextLatLng.lng - bus.curLatLng.lng)/deltaStep;
    counter=0;
    stepBus();
}

//function that handles stepping bus marker
function stepBus() {

    //moves busses by delta step i.e. gradually
    if (counter < deltaStep) { 
        counter++;
        bus.curLatLng.lat = bus.curLatLng.lat+deltaLat;
        bus.curLatLng.lng = bus.curLatLng.lng+deltaLng;

        console.log("Setting position to: " + curCoord.lat + " " + curCoord.lng);
        bus.marker.setPosition(bus.curLatLng);
     //   console.log("Done");
        setTimeout(stepBus, delay);
       // console.log("Item in focus is:" + document.activeElement.tagName);
    }
}



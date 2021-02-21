/*
 *  Paul Maclean
 *  Anthony Carrola
 *  Michael Gorse
 *  Robert Breckenridge
 */


var google;                 //google object
var map;                    //map object

var BusStops;

class BusStop {
    constructor(Name,ID, Position) {
        //Attributes derived from parameters
        this.name = Name;
        this.position = Position;
        this.stopID = ID;
        this.marker = new google.maps.Marker({
            position: Position,
            map: map,
            zIndex: 0,
            visible: false
        });
        
        //Default attributes
        this.visible = false;
    }
    setVisible(Visibility) {
        this.marker.setVisible(Visibility);
        this.visible = Visibility;
    }
}

// Object of BusStop Objects
BusStops = {
    STADIUM         : new BusStop("Stadium",                      "STADIUM",        {lat: 40.047118, lng: -79.899763}),
    PARKANDRIDE     : new BusStop("Vulcan Vullage - Park & Ride", "PARKANDRIDE",    {lat: 40.050690, lng: -79.895982}),
    UPPHICKORY      : new BusStop("Upper Hickory Street",         "UPPHICKORY",     {lat: 40.063386, lng: -79.886084}),
    LOWHICKORY      : new BusStop("Lower Hickory Street",         "LOWHICKORY",     {lat: 40.064164, lng: -79.885351}),
    BOOKTOWERS      : new BusStop("Booker Towers",                "BOOKTOWERS",     {lat: 40.065569, lng: -79.887057}),
    UPPERVULCAN     : new BusStop("Upper Vulcan Village",         "UPPERVULCAN",    {lat: 40.049754, lng: -79.896895}),
    LOWERVULCAN     : new BusStop("Lower Vulcan Village",         "LOWERVULCAN",    {lat: 40.050148, lng: -79.897562}),
    MORGANHALL      : new BusStop("Lot 11/Morgan Hall",           "MORGANHALL",     {lat: 40.062193, lng: -79.882933}),
    WALMART         : new BusStop("Brownsville Walmart",          "WALMART",        {lat: 40.026778, lng: -79.898943})
};
Object.freeze(BusStops); //Make BusStops immutable
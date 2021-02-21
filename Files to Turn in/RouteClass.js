/*
 *  Paul Maclean
 *  Anthony Carrola
 *  Michael Gorse
 *  Robert Breckenridge
 *  VTT 
 *  Description: This program defines the Route class for the client side. 
 */
var google;                 //google object
var map;                    //map object

var regularRouteCoordinates;  //from LineCoordinates.js; imported from index.html
var expressRouteCoordinates;  //from LineCoordinates.js
var walmartRouteCoordinates;  //from LineCoordinates.js

var BusStops;
var Routes;


class Route{
    constructor( Key,Name,StopsOnRoute,RouteBusIcon,RouteCoordinates,RouteColor ) {
        //Attributes derived from parameters
        this.key           = Key;
        this.name          = Name;
        this.stopsOnRoute  = StopsOnRoute;
        this.busicon       = RouteBusIcon;
        this.routeLine     = new google.maps.Polyline({
                path: RouteCoordinates,
                geodesic: true,
                strokeColor: RouteColor,
                strokeOpacity: 0.8,
                strokeWeight: 3
        });
        
        //Default attributes
        this.visible = false;
    }
    
    //set visibility of route
    setVisible(Visibility) {
        this.visible = Visibility;
        
        if (Visibility) {
            this.routeLine.setMap(map);
        } else {
            this.routeLine.setMap(null);
        }
        
        this.stopsOnRoute.forEach((item)=>{
            item.setVisible(Visibility);
        });
        
    }
}

/*
 * creates an object of routes
 */
Routes = {
    REGULAR     : new Route(
        "REGULAR","Regular",
        [ BusStops.STADIUM, BusStops.PARKANDRIDE, BusStops.UPPHICKORY, BusStops.LOWHICKORY,BusStops.BOOKTOWERS, BusStops.UPPERVULCAN],
        'images/BusIcon_RegularRoute.png',
        regularRouteCoordinates,
        "#005C9E",
    ),
    EXPRESS     : new Route(
        "EXPRESS","Express",
        [ BusStops.LOWERVULCAN, BusStops.PARKANDRIDE, BusStops.BOOKTOWERS, BusStops.LOWHICKORY, BusStops.UPPHICKORY, BusStops.MORGANHALL ],
        'images/BusIcon_ExpressRoute.png',
        expressRouteCoordinates,
        "#8C0002",
    ),
    WALMART     : new Route(
        "WALMART","Walmart",
        [BusStops.STADIUM, BusStops.PARKANDRIDE, BusStops.UPPHICKORY, BusStops.LOWHICKORY,BusStops.BOOKTOWERS, BusStops.UPPERVULCAN, BusStops.WALMART ],
        'images/BusIcon_WalmartRoute.png',
        walmartRouteCoordinates,
        "#F4A338",
    ),
    OFFROUTE    : new Route(
       "OFFROUTE","Offroute",
       null,
       'images/BusIcon_OffRoute.png',
       null,
       "#b3b3cc",
    )
};

RouteEnums = [Routes.REGULAR,Routes.EXPRESS,Routes.WALMART,Routes.OFFROUTE];
Object.freeze(Routes);
Object.freeze(RouteEnums);

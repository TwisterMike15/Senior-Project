/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var jsonLocData;
var jsonUserLocData;
var map;
var userLoc;
var Loc;
var marker1;
var feel_temp_int;
var directionsRenderer

function getBusData() {
    let dataCheckUrl ="CheckForData";
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            let data = httprequest.responseText;
            jsonLocData = JSON.parse(data);
          //  console.log("Data: " + data);
            for (var i=0;i<jsonLocData.length;i++) {
            //    console.log(jsonLocData[i]);
                var jsonloc = jsonLocData[i];
            
                console.log("Lat: " + jsonloc.lat);
                console.log("Lng: " + jsonloc.lng);
    
                Loc = {lat: jsonloc.lat, lng: jsonloc.lng};
               // map.setCenter(Loc);
                marker1 = new google.maps.Marker({
                    position: Loc,
                    map: map
                });
                var lat = document.getElementById("Lat");
                var lng = document.getElementById("Lng");

                lat.innerHTML = "Lat: " + jsonloc.lat;
                lat.value = jsonloc.lat;

                lng.innerHTML = "Lng: "+jsonloc.lng;
                lng.value = jsonloc.lng;
            }
            
        }
    }
    httprequest.open("GET", dataCheckUrl, true);
   // httprequest.open('Content-type', 'application/x-www-form-urlencoded');
    httprequest.send();
 }
 
 function getUserLoc() {
    let userLocURL ="GetUserLoc";
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            let data = httprequest.responseText;
            jsonUserLocData = JSON.parse(data);
            console.log("JsonUserLocdata:" + jsonUserLocData.lat + ", " + jsonUserLocData.lng);
            userLoc = {lat: jsonUserLocData.lat, lng: jsonUserLocData.lng};
            if(typeof(userMarker) !== "undefined") {userMarker = null;}
            userMarker = new google.maps.Marker({
                    position: userLoc,
                    title: "You",
                    icon: "images/user_location.png",
                    map: map
                });
        }
    }
    httprequest.open("GET", userLocURL, true);
   // httprequest.open('Content-type', 'application/x-www-form-urlencoded');
    httprequest.send();
 }
 
 function getData() {
     getBusData();
     getWeatherData();
     getUserLoc();
 } 
 
 function getWeatherData() {
      //var lat = document.getElementById("Lat").value;
      //var lng = document.getElementById("Lat").value;
      var apiURL = "https://api.openweathermap.org/data/2.5/weather";
      var id = "2ebbc94a5ac2c80703fe967f70b8161e";
      var citycode = "4815352";  //Morgantown
      var weatherURL = apiURL+"?id="+citycode+"&units=imperial"+"&appid="+id;
     //var weatherURL = apiURL+"?q=London&appid="+id;
     //lat={lat}&lon={lon}
     //var weather = "https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=2ebbc94a5ac2c80703fe967f70b8161e"
    // weatherURL = "https://community-open-weather-map.p.rapidapi.com/weather?q=Morgantown%2C%20West%20Virginia"+
      //       "&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html"
      httpGet(weatherURL);
      
 } 
 
function httpGet(weatherURL) {
    const data = null;
   
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          //  console.log(this.responseText);
            var weatherData = JSON.parse(this.responseText);
          //  console.log("Weather data: " + weatherData);
            let WeatherMessage = document.getElementById("WeatherMessage");
            let weatherCondition = document.getElementById("weatherCondition");
            let temperature = document.getElementById("temperature");
            let humidity = document.getElementById("humidity");
            let windSpeed = document.getElementById("windSpeed");
            let feelsLike = document.getElementById("feelsLike");
            
            feel_temp_int = parseFloat(weatherData.main.feels_like);
            if(feel_temp_int < 30) {
               temperature.style.color = "#0033cc";
               feelsLike.style.color = "#0033cc";
            }
            else if(feel_temp_int < 50) {
                temperature.style.color = "#6699ff";
                feelsLike.style.color = "#6699ff";
            }
            else if(feel_temp_int < 75) {
                temperature.style.color = "#ffcc99";
                feelsLike.style.color = "#ffcc99";
            }
            else{
                temperature.style.color = "#ff0000";
                feelsLike.style.color = "#ff0000";
            }
            
            WeatherMessage.innerHTML = "Current Weather Conditions:";
            weatherCondition.innerHTML =  weatherData.weather[0].description;
            temperature.innerHTML = "Real Temperature (\u00B0F): " + weatherData.main.temp;
            humidity.innerHTML = "Humidity: " + weatherData.main.humidity + "%";
            windSpeed.innerHTML = "Wind Speed: " + weatherData.wind.speed + " mph";
            feelsLike.innerHTML = "Feels like (\u00B0F): " + weatherData.main.feels_like;
            
        }
            
    });

    xhr.open("GET",weatherURL);
    xhr.send(data);
}

function addStops(map){
    var EvansdaleCrossingMarker = new google.maps.Marker({
        position: {lat: 39.648, lng: -79.973},
        icon: "images/bus_stop_black.png",
        title: "Evansdale Crossing",
        map: map
    });
    //39.651188005687864, -79.96830669111037
    var KrogerPattesonMarker = new google.maps.Marker({
        position: {lat: 39.651, lng: -79.968},
        icon: "images/bus_stop_black.png",
        title: "Kroger - Patteson Dr.",
        map: map
    });
    //39.649414087565205, -79.96598659848189
    var TowersMarker = new google.maps.Marker({
        position: {lat: 39.6494, lng: -79.9659},
        icon: "images/bus_stop_black.png",
        title: "Towers",
        map: map
    });
    //39.64836269868185, -79.95974547579749
    var LawSchoolMarker = new google.maps.Marker({
        position: {lat: 39.6483, lng: -79.9597},
        icon: "images/bus_stop_black.png",
        title: "Law School Drive",
        map: map
    });
    //39.642223993453904, -79.96013275231391
    var Grand6thMarker = new google.maps.Marker({
        position: {lat: 39.6422, lng: -79.9601},
        icon: "images/bus_stop_black.png",
        title: "Grant & 6th St",
        map: map
    });
    //39.64086857917145, -79.9581155688335
    var Grant4thMarker = new google.maps.Marker({
        position: {lat: 39.6408, lng: -79.9581},
        icon: "images/bus_stop_black.png",
        title: "Grant & 4th St",
        map: map
    });
    //39.63807549333173, -79.95601533728741
    var Grant1stMarker = new google.maps.Marker({
        position: {lat: 39.6380, lng: -79.9560},
        icon: "images/bus_stop_black.png",
        title: "Grant & 1st",
        map: map
    });
    //39.63727141224724, -79.95589345320204
    var LSBSunnysideMarker = new google.maps.Marker({
        position: {lat: 39.6373, lng: -79.9559},
        icon: "images/bus_stop_black.png",
        title: "LSB / Sunnyside",
        map: map
    });
    //39.637807931626256, -79.95783355776831
    var Beechurst1stMarker = new google.maps.Marker({
        position: {lat: 39.6378, lng: -79.9578},
        icon: "images/bus_stop_black.png",
        title: "Beechurst & 1st",
        map: map
    });
    //39.63886599448143, -79.95867194859868
    var Beechurst3rdMarker = new google.maps.Marker({
        position: {lat: 39.6389, lng: -79.9587},
        icon: "images/bus_stop_black.png",
        title: "Beechurst and 3rd",
        map: map
    });
    //39.64114772779259, -79.96149200297945
    var Beechurst6thMarker = new google.maps.Marker({
        position: {lat: 39.6411, lng: -79.9615},
        icon: "images/bus_stop_black.png",
        title: "Beechurst and 6th",
        map: map
    });
    //39.64236427988259, -79.96321303730721
    var Beechurst8thMarker = new google.maps.Marker({
        position: {lat: 39.6424, lng: -79.9632},
        icon: "images/bus_stop_black.png",
        title: "Beechurst and 8th",
        map: map
    });      
}
function getDirectionDistance(val){
    console.log("HI");
  val = JSON.parse(val);
  var directionsService = new google.maps.DirectionsService();
  var service = new google.maps.DistanceMatrixService();
  
  if(typeof(directionsRenderer) !== "undefined"){
       directionsRenderer.setMap(null);
       directionsRenderer = null;
  }   
  directionsRenderer = new google.maps.DirectionsRenderer();

  directionsRenderer.setMap(map);
  console.log("val: " + val.lat + ", " + val.lng);
  
  let dest = val.lat + ", " + val.lng;
  let origin = userLoc.lat + ", " + userLoc.lng;
  let latlngDest = {lat: val.lat, lng: val.lng};
  
  console.log("dest: " + dest + " start: " + origin);
  directionsService.route (
    {
        origin: {
            query: origin
        },
        destination: {
            query: dest
        },
        travelMode: google.maps.TravelMode.WALKING,
    },
    (response, status) => {
        if (status === "OK") {
            directionsRenderer.setDirections(response);
        } else {
            window.alert("Directions request failed: " + status);
        }
    } 
  );
  
  service.getDistanceMatrix(
    {
      origins: [userLoc],
      destinations: [latlngDest],
      travelMode: google.maps.TravelMode.WALKING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false,
    },
    (response, status) => {
        if (status === "OK") {
             let distToDest = response.rows[0].elements[0].distance.text;
             let timeToDest = response.rows[0].elements[0].duration.text;
            //console.log("Response: " + response);
            //console.log("Distance: " + timeToDest +", "+ response.rows[0].elements[0].distance.value);
            //console.log("duration: " + timeToDest);
            
            let timeToDestDiv = document.getElementById("TimeToDest");
            let distToDestDiv = document.getElementById("DistToDest");
            let adviceDiv = document.getElementById("TravelAdvice");
            
            timeToDestDiv.innerHTML = "Travel Time: " + timeToDest;
            distToDestDiv.innerHTML = "Distance: " + distToDest;
            
            let float_dist = parseFloat(response.rows[0].elements[0].distance.value);
            let weatherCondition = document.getElementById("weatherCondition").innerText;
            console.log("int_dist = " + float_dist);
            if (!weatherCondition.toLowerCase().includes("rain") && !weatherCondition.toLowerCase().includes("snow")){
                if (float_dist > 480 && feel_temp_int < 35 || feel_temp_int < 20) {
                    adviceDiv.innerHTML = "Travel Advice: Drive/Bus";
                    console.log("Travel Advice: Drive/Bus");
                }
                else if (float_dist > 3300) {
                    adviceDiv.innerHTML = "Bike/Drive/Bus/Rail";
                    console.log("Bike/Drive/Bus/Rail");
                }
                else {
                    adviceDiv.innerHTML = "Walking/Biking should be fine";
                    console.log("Walking/Biking should be fine");
                }
            } else {
                adviceDiv.innerHTML = "Walking/Biking not recommended";
                console.log("Walking/Biking not recommended");
            }
                 
        } else {
            window.alert("Directions request failed: " + status);
        }
    }
  );
  
}
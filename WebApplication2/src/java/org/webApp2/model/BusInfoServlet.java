/*
    Paul Maclean
    Anthony Carrola
    Michael Gorse
    Robert Breckenridge
    VTT
 */
package org.webApp2.model;

import com.google.gson.*;
import java.io.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.Collectors;
import java.text.SimpleDateFormat;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



/**
 *
 * @author ancar
 */
public class BusInfoServlet extends HttpServlet {

    
    //Gson object to parse JSON
    static Gson gson = new Gson();
    static ConcurrentHashMap<String,Bus> ActiveBuses = new ConcurrentHashMap<>(); //Contains realtime data of all active buses
   
   //enum of bus stops
   enum busStops {
            STADIUM, PARKANDRIDE, 
            UPPHICKORY, LOWHICKORY, 
            BOOKTOWERS, UPPERVULCAN, 
            LOWERVULCAN, MORGANHALL, 
            WALMART
    }
    
   // array of all the bus stops
   static BusStop[] allBusStops = new BusStop[] {
       new BusStop("STADIUM", new LatLng( 40.047118, -79.899763)),
       new BusStop("PARKANDRIDE", new LatLng(40.050690, -79.895982 )),
       new BusStop("UPPHICKORY", new LatLng(40.063386, -79.886084)),
       new BusStop("LOWHICKORY", new LatLng(40.064164, -79.885351)),
       new BusStop("BOOKTOWERS", new LatLng(40.065569, -79.887057)),
       new BusStop("UPPERVULCAN", new LatLng(40.065569, -79.887057)),
       new BusStop("LOWERVULCAN", new LatLng(40.050148, -79.897562)),
       new BusStop("MORGANHALL", new LatLng(40.062193, -79.882933)),
       new BusStop("WALMART", new LatLng(40.026778, -79.898943))
   };
   
   //hashmap of route objects containing <BusStop arrays>
    static ConcurrentHashMap<String, RouteClass> AllRoutes = new ConcurrentHashMap(){{
        put(("REGULAR"), new RouteClass( 
            "REGULAR",
            new BusStop[]{
                allBusStops[busStops.STADIUM.ordinal()],
                allBusStops[busStops.PARKANDRIDE.ordinal()],
                allBusStops[busStops.UPPHICKORY.ordinal()],
                allBusStops[busStops.LOWHICKORY.ordinal()],
                allBusStops[busStops.BOOKTOWERS.ordinal()],
                allBusStops[busStops.UPPERVULCAN.ordinal()],
            }
        ));
        
        put(("EXPRESS"), new RouteClass( 
            "EXPRESS",
            new BusStop[] {
                allBusStops[busStops.LOWERVULCAN.ordinal()],  
                allBusStops[busStops.PARKANDRIDE.ordinal()],
                allBusStops[busStops.BOOKTOWERS.ordinal()],
                allBusStops[busStops.LOWHICKORY.ordinal()],
                allBusStops[busStops.UPPHICKORY.ordinal()],
                allBusStops[busStops.MORGANHALL.ordinal()]
            }
        ));
        
        put(("WALMART"), new RouteClass (
            "WALMART",
            new BusStop[] {
                allBusStops[busStops.STADIUM.ordinal()],
                allBusStops[busStops.PARKANDRIDE.ordinal()],
                allBusStops[busStops.UPPHICKORY.ordinal()],
                allBusStops[busStops.LOWHICKORY.ordinal()],
                allBusStops[busStops.BOOKTOWERS.ordinal()],
                allBusStops[busStops.UPPERVULCAN.ordinal()],
                allBusStops[busStops.WALMART.ordinal()]
        }
        )); 
     }};
    
    
    
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("application/JSON; charset=UTF-8");
            
            long msrequestrecieved  = System.currentTimeMillis();
            PrintWriter out         = response.getWriter(); 
            String reqUrl           = request.getRequestURL().toString();
            String queryString      = request.getQueryString();
            
//            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
//            Date date = new Date();
            
            //if request is from gps
            if(queryString != null && queryString.endsWith("PostTrackerData") 
                    && request.getMethod().equalsIgnoreCase("POST")) {
                String packet = request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
                
                //If data we retrieved is not null,
                if (packet != null) {
                    //Create json parsing objects
                    JsonParser jsonParser = new JsonParser();
                    JsonElement packetJsonTree = jsonParser.parse(packet);
                    
                    //Check if data received is in a proper json format
                    if(packetJsonTree.isJsonObject()) {
                        JsonObject singlebusdata;
                        String busid;
                        double buslat,buslng;
                        String busroute;
                        
                        //System.out.println(packetJsonTree);
                        
                        singlebusdata = packetJsonTree.getAsJsonObject();
                        
                      //get data from JSON
                        busid     = singlebusdata.get("id").getAsString();
                        buslat    = singlebusdata.get("lat").getAsDouble();
                        buslng    = singlebusdata.get("lng").getAsDouble();
                        busroute  = singlebusdata.get("route").getAsString();
                        JsonElement istest    = singlebusdata.get("test");
                        
                        //If this packet is from the tracking unit (not a test),
                        //convert locational format from Decimal Minutes (DMM) to Decimal Degrees (DD)
                        if ( istest == null ) {
                            double latdegrees = (int)buslat;
                            double latminutes = (buslat % 1)*100;
                            buslat = latdegrees + (latminutes/60);
                            
                            double lngdegrees = (int)buslng; //Get everything left of the decimal
                            double lngminutes = (buslng % 1)*100;  //Get everything right of the decimal
                            buslng = lngdegrees + (lngminutes/60);
                            
                            System.out.println(buslat);
                            System.out.println(buslng);
                        }
                        
                        Bus activebus;
                        
                        //look in hashmap for a bus with a matching busid key
                        if ( ActiveBuses.containsKey(busid) ) {
                            //modify existing bus
                            activebus = ActiveBuses.get(busid);
                            
                            System.out.println("Updating bus: "+busid);
                            activebus.updateValues(msrequestrecieved,buslat,buslng,busroute);
                        } else {
                            //create new bus
                            activebus = new Bus(busid,msrequestrecieved,buslat,buslng,busroute);
                            
                            System.out.println("Creating new bus: "+busid);
                            ActiveBuses.put(busid,activebus); //add bus object to hashmap
                        }
                        
                        out.print("null");
                        response.setContentType("application/json, charset=UTF-8");
                    }
                }
            } else {//if request is from web app
                
               // System.out.println("Client requesting data...");
                //if nothing is in data 1 (gps hasn't contacted us yet), send empty data
                if (ActiveBuses.isEmpty()) {
                    System.out.println("No data to give to client!");
                    out.print("null");
                    response.setContentType("text/html, charset=UTF-8");
                }
                //else, we have data from bus and we send it
                else {
                    //Construct the JSON response.
                    HashMap<String,JsonBus> ActiveBusesFormatted = new HashMap<>();
                    for (Map.Entry<String, Bus> entry : ActiveBuses.entrySet()) {
                        String busid = entry.getKey();
                        Bus businfo = entry.getValue();
                        
                        //If we haven't been to previous stop
                        if(businfo.prevBusStop == null) {
                           ActiveBusesFormatted.put(busid,new JsonBus(businfo.id,businfo.pos,"CALCULATING",businfo.route.name));
                        }
                        //else if we have
                        else {
                        //    System.out.println("prev bus stop: " + businfo.prevBusStop.name);
                            ActiveBusesFormatted.put(busid,new JsonBus(businfo.id,businfo.pos,businfo.prevBusStop.name,businfo.route.name));
                        }
                    }
                    String result = gson.toJson(ActiveBusesFormatted);
                   // System.out.println("Giving to client: ");
                   // System.out.println(result);
                    
                    out.print(result);
                }
            }
            
            System.out.println();
            
            response.setCharacterEncoding("UTF-8)");
            response.setStatus(HttpServletResponse.SC_OK);
              
            
               
        } catch (Exception e) {
            System.out.println("Error in BusInfoServlet.java: ");
            e.printStackTrace();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("GET Request!");
        processRequest(request, response);
        
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Handles data from GPS with Bus details";
    }// </editor-fold>
 
}
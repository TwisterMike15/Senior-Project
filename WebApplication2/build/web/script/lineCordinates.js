/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var regularRouteCoordinates =  [
    { lat : 40.064200000, lng: -79.885345000 },
    { lat : 40.064434000, lng: -79.885108000 },
    { lat : 40.064571000, lng: -79.885352000 },
    { lat : 40.064738000, lng: -79.885647000 },
    { lat : 40.064914000, lng: -79.885942000 },
    { lat : 40.065091000, lng: -79.886237000 },
    { lat : 40.065267000, lng: -79.886532000 },
    { lat : 40.065444000, lng: -79.886827000 },
    { lat : 40.065620000, lng: -79.887122000 },
    { lat : 40.065797000, lng: -79.887417000 },
    { lat : 40.065973000, lng: -79.887712000 },
    { lat : 40.066150000, lng: -79.888007000 },
    { lat : 40.066281000, lng: -79.888243000 },
    { lat : 40.066331000, lng: -79.888517000 },
    { lat : 40.066361000, lng: -79.888820000 },
    { lat : 40.066400000, lng: -79.889120000 },
    { lat : 40.066439000, lng: -79.889421000 },
    { lat : 40.066478000, lng: -79.889721000 },
    { lat : 40.066509000, lng: -79.889941000 },
    { lat : 40.066308000, lng: -79.890029000 },
    { lat : 40.066125000, lng: -79.890075000 },
    { lat : 40.065943000, lng: -79.890121000 },
    { lat : 40.065760000, lng: -79.890166000 },
    { lat : 40.065577000, lng: -79.890212000 },
    { lat : 40.065475000, lng: -79.890209000 },
    { lat : 40.065282000, lng: -79.890249000 },
    { lat : 40.065089000, lng: -79.890292000 },
    { lat : 40.064898000, lng: -79.890333000 },
    { lat : 40.064707000, lng: -79.890373000 },
    { lat : 40.064610000, lng: -79.890392000 },
    { lat : 40.064420000, lng: -79.890432000 },
    { lat : 40.064229000, lng: -79.890472000 },
    { lat : 40.064038000, lng: -79.890512000 },
    { lat : 40.063865000, lng: -79.890617000 },
    { lat : 40.063722000, lng: -79.890781000 },
    { lat : 40.063568000, lng: -79.890944000 },
    { lat : 40.063418000, lng: -79.891116000 },
    { lat : 40.063268000, lng: -79.891285000 },
    { lat : 40.063169000, lng: -79.891371000 },
    { lat : 40.063007000, lng: -79.891553000 },
    { lat : 40.062845000, lng: -79.891733000 },
    { lat : 40.062699000, lng: -79.891918000 },
    { lat : 40.062552000, lng: -79.892103000 },
    { lat : 40.062406000, lng: -79.892293000 },
    { lat : 40.062270000, lng: -79.892494000 },
    { lat : 40.062135000, lng: -79.892696000 },
    { lat : 40.061999000, lng: -79.892897000 },
    { lat : 40.061864000, lng: -79.893098000 },
    { lat : 40.061708000, lng: -79.893291000 },
    { lat : 40.061566000, lng: -79.893498000 },
    { lat : 40.061425000, lng: -79.893704000 },
    { lat : 40.061283000, lng: -79.893911000 },
    { lat : 40.061131000, lng: -79.894117000 },
    { lat : 40.060967000, lng: -79.894297000 },
    { lat : 40.060800000, lng: -79.894410000 },
    { lat : 40.060679000, lng: -79.894498000 },
    { lat : 40.060546000, lng: -79.894579000 },
    { lat : 40.060410000, lng: -79.894656000 },
    { lat : 40.060246000, lng: -79.894782000 },
    { lat : 40.060078000, lng: -79.894922000 },
    { lat : 40.059914000, lng: -79.895067000 },
    { lat : 40.059739000, lng: -79.895217000 },
    { lat : 40.059612000, lng: -79.895303000 },
    { lat : 40.059511000, lng: -79.895418000 },
    { lat : 40.059402000, lng: -79.895549000 },
    { lat : 40.059341000, lng: -79.895638000 },
    { lat : 40.059259000, lng: -79.895724000 },
    { lat : 40.059133000, lng: -79.895737000 },
    { lat : 40.059041000, lng: -79.895665000 },
    { lat : 40.058908000, lng: -79.895646000 },
    { lat : 40.058731000, lng: -79.895681000 },
    { lat : 40.058553000, lng: -79.895735000 },
    { lat : 40.058374000, lng: -79.895794000 },
    { lat : 40.058216000, lng: -79.895874000 },
    { lat : 40.058058000, lng: -79.895914000 },
    { lat : 40.057904000, lng: -79.895971000 },
    { lat : 40.057748000, lng: -79.896022000 },
    { lat : 40.057590000, lng: -79.896048000 },
    { lat : 40.057432000, lng: -79.896089000 },
    { lat : 40.057282000, lng: -79.896105000 },
    { lat : 40.057132000, lng: -79.896121000 },
    { lat : 40.056982000, lng: -79.896137000 },
    { lat : 40.056832000, lng: -79.896153000 },
    { lat : 40.056752000, lng: -79.896156000 },
    { lat : 40.056598000, lng: -79.896166000 },
    { lat : 40.056491000, lng: -79.896153000 },
    { lat : 40.056309000, lng: -79.896145000 },
    { lat : 40.056126000, lng: -79.896142000 },
    { lat : 40.055943000, lng: -79.896140000 },
    { lat : 40.055851000, lng: -79.896137000 },
    { lat : 40.055650000, lng: -79.896105000 },
    { lat : 40.055448000, lng: -79.896091000 },
    { lat : 40.055280000, lng: -79.896043000 },
    { lat : 40.055114000, lng: -79.896016000 },
    { lat : 40.054947000, lng: -79.895989000 },
    { lat : 40.054781000, lng: -79.895963000 },
    { lat : 40.054697000, lng: -79.895949000 },
    { lat : 40.054531000, lng: -79.895922000 },
    { lat : 40.054364000, lng: -79.895895000 },
    { lat : 40.054198000, lng: -79.895869000 },
    { lat : 40.054032000, lng: -79.895842000 },
    { lat : 40.053866000, lng: -79.895815000 },
    { lat : 40.053699000, lng: -79.895788000 },
    { lat : 40.053533000, lng: -79.895761000 },
    { lat : 40.053373000, lng: -79.895745000 },
    { lat : 40.053215000, lng: -79.895729000 },
    { lat : 40.053057000, lng: -79.895713000 },
    { lat : 40.052899000, lng: -79.895713000 },
    { lat : 40.052722000, lng: -79.895718000 },
    { lat : 40.052547000, lng: -79.895735000 },
    { lat : 40.052373000, lng: -79.895751000 },
    { lat : 40.052198000, lng: -79.895767000 },
    { lat : 40.052024000, lng: -79.895783000 },
    { lat : 40.051909000, lng: -79.895812000 },
    { lat : 40.051716000, lng: -79.895847000 },
    { lat : 40.051529000, lng: -79.895893000 },
    { lat : 40.051344000, lng: -79.895941000 },
    { lat : 40.051160000, lng: -79.895989000 },
    { lat : 40.050991000, lng: -79.896070000 },
    { lat : 40.050802000, lng: -79.896150000 },
    { lat : 40.050603000, lng: -79.896228000 },
    { lat : 40.050424000, lng: -79.896322000 },
    { lat : 40.050246000, lng: -79.896416000 },
    { lat : 40.050073000, lng: -79.896520000 },
    { lat : 40.049887000, lng: -79.896633000 },
    { lat : 40.049833000, lng: -79.896767000 },
    { lat : 40.049765000, lng: -79.896866000 },
    { lat : 40.049665000, lng: -79.896931000 },
    { lat : 40.049562000, lng: -79.896917000 },
    { lat : 40.049462000, lng: -79.896950000 },
    { lat : 40.049398000, lng: -79.896998000 },
    { lat : 40.049312000, lng: -79.897078000 },
    { lat : 40.049219000, lng: -79.897135000 },
    { lat : 40.049119000, lng: -79.897239000 },
    { lat : 40.049026000, lng: -79.897306000 },
    { lat : 40.048901000, lng: -79.897376000 },
    { lat : 40.048841000, lng: -79.897446000 },
    { lat : 40.048774000, lng: -79.897481000 },
    { lat : 40.048716000, lng: -79.897550000 },
    { lat : 40.048636000, lng: -79.897604000 },
    { lat : 40.048542000, lng: -79.897671000 },
    { lat : 40.048449000, lng: -79.897741000 },
    { lat : 40.048357000, lng: -79.897811000 },
    { lat : 40.048265000, lng: -79.897880000 },
    { lat : 40.048172000, lng: -79.897950000 },
    { lat : 40.048080000, lng: -79.898020000 },
    { lat : 40.047987000, lng: -79.898090000 },
    { lat : 40.047885000, lng: -79.898159000 },
    { lat : 40.047782000, lng: -79.898229000 },
    { lat : 40.047679000, lng: -79.898299000 },
    { lat : 40.047587000, lng: -79.898387000 },
    { lat : 40.047474000, lng: -79.898465000 },
    { lat : 40.047367000, lng: -79.898575000 },
    { lat : 40.047265000, lng: -79.898650000 },
    { lat : 40.047154000, lng: -79.898728000 },
    { lat : 40.047024000, lng: -79.898832000 },
    { lat : 40.046895000, lng: -79.898937000 },
    { lat : 40.046868000, lng: -79.899162000 },
    { lat : 40.046938000, lng: -79.899417000 },
    { lat : 40.047086000, lng: -79.899656000 },
    { lat : 40.047141000, lng: -79.899758000 },
    { lat : 40.047205000, lng: -79.899972000 },
    { lat : 40.047263000, lng: -79.900190000 },
    { lat : 40.047252000, lng: -79.900466000 },
    { lat : 40.047168000, lng: -79.900664000 },
    { lat : 40.047053000, lng: -79.900732000 },
    { lat : 40.046829000, lng: -79.900796000 },
    { lat : 40.046605000, lng: -79.900925000 },
    { lat : 40.046416000, lng: -79.901198000 },
    { lat : 40.046392000, lng: -79.901224000 },
    { lat : 40.046227000, lng: -79.901090000 },
    { lat : 40.046059000, lng: -79.900956000 },
    { lat : 40.045882000, lng: -79.900811000 },
    { lat : 40.045693000, lng: -79.900667000 },
    { lat : 40.045525000, lng: -79.900495000 },
    { lat : 40.045385000, lng: -79.900248000 },
    { lat : 40.045332000, lng: -79.900173000 },
    { lat : 40.045291000, lng: -79.900098000 },
    { lat : 40.045484000, lng: -79.899969000 },
    { lat : 40.045792000, lng: -79.899701000 },
    { lat : 40.046248000, lng: -79.899374000 },
    { lat : 40.046716000, lng: -79.899009000 },
    { lat : 40.047164000, lng: -79.898671000 },
    { lat : 40.047623000, lng: -79.898317000 },
    { lat : 40.048083000, lng: -79.897963000 },
    { lat : 40.048543000, lng: -79.897598000 },
    { lat : 40.048995000, lng: -79.897276000 },
    { lat : 40.049541000, lng: -79.896863000 },
    { lat : 40.049940000, lng: -79.896536000 },
    { lat : 40.050330000, lng: -79.896316000 },
    { lat : 40.050515000, lng: -79.896215000 },
    { lat : 40.050601000, lng: -79.896040000 },
    { lat : 40.050726000, lng: -79.895944000 },
    { lat : 40.050839000, lng: -79.895957000 },
    { lat : 40.050958000, lng: -79.896016000 },
    { lat : 40.051059000, lng: -79.895995000 },
    { lat : 40.051258000, lng: -79.895920000 },
    { lat : 40.051449000, lng: -79.895866000 },
    { lat : 40.051640000, lng: -79.895812000 },
    { lat : 40.051831000, lng: -79.895769000 },
    { lat : 40.052024000, lng: -79.895727000 },
    { lat : 40.052215000, lng: -79.895713000 },
    { lat : 40.052414000, lng: -79.895676000 },
    { lat : 40.052636000, lng: -79.895676000 },
    { lat : 40.052866000, lng: -79.895665000 },
    { lat : 40.053089000, lng: -79.895670000 },
    { lat : 40.053233000, lng: -79.895672000 },
    { lat : 40.053397000, lng: -79.895688000 },
    { lat : 40.053557000, lng: -79.895726000 },
    { lat : 40.053738000, lng: -79.895764000 },
    { lat : 40.053947000, lng: -79.895785000 },
    { lat : 40.054140000, lng: -79.895833000 },
    { lat : 40.054432000, lng: -79.895860000 },
    { lat : 40.054670000, lng: -79.895903000 },
    { lat : 40.054912000, lng: -79.895967000 },
    { lat : 40.055310000, lng: -79.895989000 },
    { lat : 40.055676000, lng: -79.896080000 },
    { lat : 40.056050000, lng: -79.896096000 },
    { lat : 40.056415000, lng: -79.896112000 },
    { lat : 40.056813000, lng: -79.896075000 },
    { lat : 40.057212000, lng: -79.896085000 },
    { lat : 40.057667000, lng: -79.895967000 },
    { lat : 40.058144000, lng: -79.895833000 },
    { lat : 40.058620000, lng: -79.895662000 },
    { lat : 40.059006000, lng: -79.895608000 },
    { lat : 40.059150000, lng: -79.895699000 },
    { lat : 40.059277000, lng: -79.895844000 },
    { lat : 40.059203000, lng: -79.895957000 },
    { lat : 40.059030000, lng: -79.896268000 },
    { lat : 40.058862000, lng: -79.896670000 },
    { lat : 40.058710000, lng: -79.897148000 },
    { lat : 40.058591000, lng: -79.897673000 },
    { lat : 40.058542000, lng: -79.898344000 },
    { lat : 40.058612000, lng: -79.899132000 },
    { lat : 40.058759000, lng: -79.899932000 },
    { lat : 40.058940000, lng: -79.900575000 },
    { lat : 40.059117000, lng: -79.901144000 },
    { lat : 40.059285000, lng: -79.901686000 },
    { lat : 40.059322000, lng: -79.901798000 },
    { lat : 40.059572000, lng: -79.901664000 },
    { lat : 40.059897000, lng: -79.901600000 },
    { lat : 40.060336000, lng: -79.901541000 },
    { lat : 40.060775000, lng: -79.901579000 },
    { lat : 40.061260000, lng: -79.901707000 },
    { lat : 40.061744000, lng: -79.901831000 },
    { lat : 40.062315000, lng: -79.901917000 },
    { lat : 40.062869000, lng: -79.901900000 },
    { lat : 40.063341000, lng: -79.901798000 },
    { lat : 40.063604000, lng: -79.901670000 },
    { lat : 40.063941000, lng: -79.901509000 },
    { lat : 40.064060000, lng: -79.901407000 },
    { lat : 40.064319000, lng: -79.901198000 },
    { lat : 40.064602000, lng: -79.900903000 },
    { lat : 40.064848000, lng: -79.900575000 },
    { lat : 40.065094000, lng: -79.900195000 },
    { lat : 40.065287000, lng: -79.899792000 },
    { lat : 40.065497000, lng: -79.899336000 },
    { lat : 40.065772000, lng: -79.898843000 },
    { lat : 40.066104000, lng: -79.898397000 },
    { lat : 40.066421000, lng: -79.897813000 },
    { lat : 40.066712000, lng: -79.897217000 },
    { lat : 40.066798000, lng: -79.896493000 },
    { lat : 40.066930000, lng: -79.895860000 },
    { lat : 40.067106000, lng: -79.895157000 },
    { lat : 40.067057000, lng: -79.894433000 },
    { lat : 40.066950000, lng: -79.893650000 },
    { lat : 40.066843000, lng: -79.892867000 },
    { lat : 40.066737000, lng: -79.892084000 },
    { lat : 40.066634000, lng: -79.891279000 },
    { lat : 40.066531000, lng: -79.890474000 },
    { lat : 40.066429000, lng: -79.889643000 },
    { lat : 40.066326000, lng: -79.888811000 },
    { lat : 40.066277000, lng: -79.888484000 },
    { lat : 40.066244000, lng: -79.888237000 },
    { lat : 40.066174000, lng: -79.888071000 },
    { lat : 40.066035000, lng: -79.887883000 },
    { lat : 40.065899000, lng: -79.887674000 },
    { lat : 40.065558000, lng: -79.887744000 },
    { lat : 40.065193000, lng: -79.887824000 },
    { lat : 40.064811000, lng: -79.887872000 },
    { lat : 40.064503000, lng: -79.887985000 },
    { lat : 40.064167000, lng: -79.888055000 },
    { lat : 40.063892000, lng: -79.888092000 },
    { lat : 40.063773000, lng: -79.888033000 },
    { lat : 40.063686000, lng: -79.887996000 },
    { lat : 40.063600000, lng: -79.887910000 },
    { lat : 40.063510000, lng: -79.887803000 },
    { lat : 40.063424000, lng: -79.887653000 },
    { lat : 40.063251000, lng: -79.887325000 },
    { lat : 40.063107000, lng: -79.887073000 },
    { lat : 40.063013000, lng: -79.886918000 },
    { lat : 40.062910000, lng: -79.886719000 },
    { lat : 40.062841000, lng: -79.886612000 },
    { lat : 40.062927000, lng: -79.886547000 },
    { lat : 40.063087000, lng: -79.886360000 },
    { lat : 40.063329000, lng: -79.886129000 },
    { lat : 40.063588000, lng: -79.885877000 },
    { lat : 40.063846000, lng: -79.885625000 },
    { lat : 40.063998000, lng: -79.885480000 },
    { lat : 40.064126000, lng: -79.885394000 },
    { lat : 40.064154000, lng: -79.885357000 },
    { lat : 40.064200000, lng: -79.885345000 }
];






var expressRouteCoordinates =  [
    {lat:	40.050128000, lng:	-79.897570000},
    {lat:	40.050008000, lng:	-79.897615000},									
    {lat:	40.049887000, lng:	-79.897666000},									
    {lat:	40.049792000, lng:	-79.897768000},									
    {lat:	40.049657000, lng:	-79.897835000},									
    {lat:	40.049521000, lng:	-79.897926000},									
    {lat:	40.049386000, lng:	-79.898017000},									
    {lat:	40.049295000, lng:	-79.898009000},									
    {lat:	40.049154000, lng:	-79.897961000},									
    {lat:	40.049004000, lng:	-79.897899000},									
    {lat:	40.048860000, lng:	-79.897870000},									
    {lat:	40.048714000, lng:	-79.897851000},									
    {lat:	40.048575000, lng:	-79.897907000},									
    {lat:	40.048408000, lng:	-79.898020000},									
    {lat:	40.048287000, lng:	-79.898173000},									
    {lat:	40.048221000, lng:	-79.898366000},									
    {lat:	40.048141000, lng:	-79.898411000},									
    {lat:	40.048069000, lng:	-79.898312000},									
    {lat:	40.048014000, lng:	-79.898199000},									
    {lat:	40.047961000, lng:	-79.898073000},									
    {lat:	40.048026000, lng:	-79.897996000},									
    {lat:	40.048123000, lng:	-79.897918000},									
    {lat:	40.048223000, lng:	-79.897840000},									
    {lat:	40.048338000, lng:	-79.897752000},									
    {lat:	40.048460000, lng:	-79.897655000},									
    {lat:	40.048605000, lng:	-79.897550000},									
    {lat:	40.048766000, lng:	-79.897411000},									
    {lat:	40.048936000, lng:	-79.897280000},									
    {lat:	40.049104000, lng:	-79.897183000},									
    {lat:	40.049275000, lng:	-79.897033000},									
    {lat:	40.049453000, lng:	-79.896893000},									
    {lat:	40.049638000, lng:	-79.896751000},									
    {lat:	40.049841000, lng:	-79.896609000},									
    {lat:	40.049954000, lng:	-79.896547000},									
    {lat:	40.050108000, lng:	-79.896451000},									
    {lat:	40.050287000, lng:	-79.896368000},									
    {lat:	40.050406000, lng:	-79.896279000},									
    {lat:	40.050503000, lng:	-79.896204000},									
    {lat:	40.050576000, lng:	-79.896089000},									
    {lat:	40.050663000, lng:	-79.895995000},									
    {lat:	40.050794000, lng:	-79.895944000},									
    {lat:	40.050903000, lng:	-79.895989000},									
    {lat:	40.051001000, lng:	-79.896013000},									
    {lat:	40.051110000, lng:	-79.895981000},									
    {lat:	40.051227000, lng:	-79.895928000},									
    {lat:	40.051365000, lng:	-79.895901000},									
    {lat:	40.051500000, lng:	-79.895858000},									
    {lat:	40.051663000, lng:	-79.895834000},									
    {lat:	40.051751000, lng:	-79.895786000},									
    {lat:	40.051864000, lng:	-79.895756000},									
    {lat:	40.051997000, lng:	-79.895743000},									
    {lat:	40.052143000, lng:	-79.895708000},									
    {lat:	40.052301000, lng:	-79.895694000},									
    {lat:	40.052478000, lng:	-79.895678000},									
    {lat:	40.052697000, lng:	-79.895686000},									
    {lat:	40.052917000, lng:	-79.895686000},									
    {lat:	40.053133000, lng:	-79.895649000},									
    {lat:	40.053321000, lng:	-79.895684000},									
    {lat:	40.053533000, lng:	-79.895721000},									
    {lat:	40.053753000, lng:	-79.895759000},									
    {lat:	40.053995000, lng:	-79.895796000},									
    {lat:	40.054245000, lng:	-79.895828000},									
    {lat:	40.054498000, lng:	-79.895879000},									
    {lat:	40.054750000, lng:	-79.895928000},									
    {lat:	40.055007000, lng:	-79.895963000},									
    {lat:	40.055264000, lng:	-79.895997000},									
    {lat:	40.055526000, lng:	-79.896024000},									
    {lat:	40.055797000, lng:	-79.896075000},									
    {lat:	40.056070000, lng:	-79.896094000},									
    {lat:	40.056344000, lng:	-79.896115000},									
    {lat:	40.056606000, lng:	-79.896113000},									
    {lat:	40.056892000, lng:	-79.896094000},									
    {lat:	40.057187000, lng:	-79.896059000},									
    {lat:	40.057493000, lng:	-79.896008000},									
    {lat:	40.057799000, lng:	-79.895957000},									
    {lat:	40.058095000, lng:	-79.895863000},									
    {lat:	40.058392000, lng:	-79.895772000},									
    {lat:	40.058678000, lng:	-79.895635000},									
    {lat:	40.058967000, lng:	-79.895587000},									
    {lat:	40.059212000, lng:	-79.895595000},									
    {lat:	40.059347000, lng:	-79.895496000},									
    {lat:	40.059497000, lng:	-79.895359000},									
    {lat:	40.059663000, lng:	-79.895182000},									
    {lat:	40.059831000, lng:	-79.895018000},									
    {lat:	40.060010000, lng:	-79.894874000},									
    {lat:	40.060226000, lng:	-79.894756000},									
    {lat:	40.060443000, lng:	-79.894595000},									
    {lat:	40.060675000, lng:	-79.894447000},									
    {lat:	40.060903000, lng:	-79.894267000},									
    {lat:	40.061115000, lng:	-79.894066000},									
    {lat:	40.061285000, lng:	-79.893801000},									
    {lat:	40.061468000, lng:	-79.893557000},									
    {lat:	40.061638000, lng:	-79.893313000},									
    {lat:	40.061798000, lng:	-79.893076000},									
    {lat:	40.061960000, lng:	-79.892867000},									
    {lat:	40.062120000, lng:	-79.892655000},									
    {lat:	40.062283000, lng:	-79.892427000},									
    {lat:	40.062445000, lng:	-79.892199000},									
    {lat:	40.062607000, lng:	-79.891971000},									
    {lat:	40.062769000, lng:	-79.891749000},									
    {lat:	40.062939000, lng:	-79.891564000},									
    {lat:	40.063110000, lng:	-79.891371000},									
    {lat:	40.063313000, lng:	-79.891161000},									
    {lat:	40.063518000, lng:	-79.890949000},									
    {lat:	40.063717000, lng:	-79.890713000},									
    {lat:	40.063921000, lng:	-79.890494000},									
    {lat:	40.064087000, lng:	-79.890456000},									
    {lat:	40.064278000, lng:	-79.890416000},									
    {lat:	40.064522000, lng:	-79.890367000},									
    {lat:	40.064682000, lng:	-79.890333000},									
    {lat:	40.064842000, lng:	-79.890298000},									
    {lat:	40.065031000, lng:	-79.890276000},									
    {lat:	40.065212000, lng:	-79.890215000},									
    {lat:	40.065368000, lng:	-79.890185000},									
    {lat:	40.065534000, lng:	-79.890144000},									
    {lat:	40.065635000, lng:	-79.890129000},									
    {lat:	40.065809000, lng:	-79.890088000},									
    {lat:	40.065976000, lng:	-79.890070000},									
    {lat:	40.066191000, lng:	-79.890019000},									
    {lat:	40.066366000, lng:	-79.889962000},									
    {lat:	40.066478000, lng:	-79.889954000},									
    {lat:	40.066452000, lng:	-79.889799000},									
    {lat:	40.066427000, lng:	-79.889630000},									
    {lat:	40.066402000, lng:	-79.889439000},									
    {lat:	40.066372000, lng:	-79.889244000},									
    {lat:	40.066345000, lng:	-79.889029000},									
    {lat:	40.066318000, lng:	-79.888814000},									
    {lat:	40.066292000, lng:	-79.888600000},									
    {lat:	40.066265000, lng:	-79.888385000},									
    {lat:	40.066238000, lng:	-79.888171000},									
    {lat:	40.066162000, lng:	-79.888026000},									
    {lat:	40.066072000, lng:	-79.887897000},									
    {lat:	40.065971000, lng:	-79.887776000},									
    {lat:	40.065871000, lng:	-79.887656000},									
    {lat:	40.065776000, lng:	-79.887495000},									
    {lat:	40.065686000, lng:	-79.887329000},									
    {lat:	40.065596000, lng:	-79.887162000},									
    {lat:	40.065505000, lng:	-79.886996000},									
    {lat:	40.065415000, lng:	-79.886830000},									
    {lat:	40.065325000, lng:	-79.886663000},									
    {lat:	40.065232000, lng:	-79.886505000},									
    {lat:	40.065138000, lng:	-79.886347000},									
    {lat:	40.065044000, lng:	-79.886189000},									
    {lat:	40.064949000, lng:	-79.886009000},									
    {lat:	40.064855000, lng:	-79.885829000},									
    {lat:	40.064808000, lng:	-79.885738000},									
    {lat:	40.064699000, lng:	-79.885556000},									
    {lat:	40.064596000, lng:	-79.885365000},									
    {lat:	40.064493000, lng:	-79.885175000},									
    {lat:	40.064447000, lng:	-79.885114000},									
    {lat:	40.064315000, lng:	-79.885219000},									
    {lat:	40.064033000, lng:	-79.885463000},									
    {lat:	40.063781000, lng:	-79.885695000},									
    {lat:	40.063440000, lng:	-79.886000000},									
    {lat:	40.063173000, lng:	-79.886268000},									
    {lat:	40.062984000, lng:	-79.886462000},									
    {lat:	40.062865000, lng:	-79.886580000},									
    {lat:	40.062841000, lng:	-79.886623000},									
    {lat:	40.062783000, lng:	-79.886526000},									
    {lat:	40.062689000, lng:	-79.886360000},									
    {lat:	40.062590000, lng:	-79.886193000},									
    {lat:	40.062492000, lng:	-79.886027000},									
    {lat:	40.062393000, lng:	-79.885872000},									
    {lat:	40.062233000, lng:	-79.885598000},									
    {lat:	40.062089000, lng:	-79.885362000},									
    {lat:	40.061946000, lng:	-79.885121000},									
    {lat:	40.061806000, lng:	-79.884825000},									
    {lat:	40.061654000, lng:	-79.884396000},									
    {lat:	40.061527000, lng:	-79.883908000},									
    {lat:	40.061342000, lng:	-79.883436000},									
    {lat:	40.061157000, lng:	-79.882964000},									
    {lat:	40.060972000, lng:	-79.882385000},									
    {lat:	40.060862000, lng:	-79.881945000},									
    {lat:	40.060948000, lng:	-79.881886000},									
    {lat:	40.061092000, lng:	-79.881864000},									
    {lat:	40.061280000, lng:	-79.881907000},									
    {lat:	40.061486000, lng:	-79.882009000},									
    {lat:	40.061728000, lng:	-79.882208000},									
    {lat:	40.061946000, lng:	-79.882460000},									
    {lat:	40.062143000, lng:	-79.882792000},									
    {lat:	40.062237000, lng:	-79.882910000},									
    {lat:	40.062352000, lng:	-79.882932000},									
    {lat:	40.062463000, lng:	-79.883018000},									
    {lat:	40.062479000, lng:	-79.883141000},									
    {lat:	40.062426000, lng:	-79.883205000},									
    {lat:	40.062315000, lng:	-79.883211000},									
    {lat:	40.062294000, lng:	-79.883120000},									
    {lat:	40.062221000, lng:	-79.882985000},									
    {lat:	40.062167000, lng:	-79.882905000},									
    {lat:	40.062060000, lng:	-79.882717000},									
    {lat:	40.061974000, lng:	-79.882529000},									
    {lat:	40.061770000, lng:	-79.882283000},									
    {lat:	40.061669000, lng:	-79.882211000},									
    {lat:	40.061572000, lng:	-79.882085000},									
    {lat:	40.061375000, lng:	-79.881975000},									
    {lat:	40.061176000, lng:	-79.881900000},									
    {lat:	40.060969000, lng:	-79.881902000},									
    {lat:	40.060899000, lng:	-79.881953000},									
    {lat:	40.060926000, lng:	-79.882189000},									
    {lat:	40.060998000, lng:	-79.882439000},									
    {lat:	40.061094000, lng:	-79.882720000},									
    {lat:	40.061215000, lng:	-79.883080000},									
    {lat:	40.061388000, lng:	-79.883458000},									
    {lat:	40.061535000, lng:	-79.883874000},									
    {lat:	40.061667000, lng:	-79.884295000},									
    {lat:	40.061808000, lng:	-79.884729000},									
    {lat:	40.062010000, lng:	-79.885199000},									
    {lat:	40.062254000, lng:	-79.885641000},									
    {lat:	40.062496000, lng:	-79.886084000},									
    {lat:	40.062738000, lng:	-79.886430000},									
    {lat:	40.062898000, lng:	-79.886730000},									
    {lat:	40.063050000, lng:	-79.886993000},									
    {lat:	40.063213000, lng:	-79.887240000},									
    {lat:	40.063381000, lng:	-79.887495000},									
    {lat:	40.063561000, lng:	-79.887809000},									
    {lat:	40.063808000, lng:	-79.888034000},									
    {lat:	40.063958000, lng:	-79.888050000},									
    {lat:	40.064149000, lng:	-79.888026000},									
    {lat:	40.064374000, lng:	-79.887943000},									
    {lat:	40.064600000, lng:	-79.887889000},									
    {lat:	40.064844000, lng:	-79.887849000},									
    {lat:	40.065076000, lng:	-79.887779000},									
    {lat:	40.065315000, lng:	-79.887728000},									
    {lat:	40.065553000, lng:	-79.887677000},									
    {lat:	40.065770000, lng:	-79.887658000},									
    {lat:	40.065908000, lng:	-79.887650000},									
    {lat:	40.066025000, lng:	-79.887782000},									
    {lat:	40.066150000, lng:	-79.887924000},									
    {lat:	40.066253000, lng:	-79.888130000},									
    {lat:	40.066298000, lng:	-79.888348000},									
    {lat:	40.066345000, lng:	-79.888584000},									
    {lat:	40.066374000, lng:	-79.888831000},									
    {lat:	40.066402000, lng:	-79.889077000},									
    {lat:	40.066433000, lng:	-79.889327000},									
    {lat:	40.066464000, lng:	-79.889576000},									
    {lat:	40.066497000, lng:	-79.889828000},									
    {lat:	40.066509000, lng:	-79.889987000},									
    {lat:	40.066384000, lng:	-79.890032000},									
    {lat:	40.066259000, lng:	-79.890043000},									
    {lat:	40.066119000, lng:	-79.890088000},									
    {lat:	40.065959000, lng:	-79.890118000},									
    {lat:	40.065799000, lng:	-79.890153000},									
    {lat:	40.065639000, lng:	-79.890188000},									
    {lat:	40.065479000, lng:	-79.890223000},									
    {lat:	40.065319000, lng:	-79.890257000},									
    {lat:	40.065159000, lng:	-79.890292000},									
    {lat:	40.065054000, lng:	-79.890319000},									
    {lat:	40.064865000, lng:	-79.890365000},									
    {lat:	40.064707000, lng:	-79.890386000},									
    {lat:	40.064545000, lng:	-79.890416000},									
    {lat:	40.064383000, lng:	-79.890445000},									
    {lat:	40.064220000, lng:	-79.890475000},									
    {lat:	40.064058000, lng:	-79.890504000},									
    {lat:	40.063974000, lng:	-79.890555000},									
    {lat:	40.063876000, lng:	-79.890630000},									
    {lat:	40.063783000, lng:	-79.890727000},									
    {lat:	40.063674000, lng:	-79.890831000},									
    {lat:	40.063574000, lng:	-79.890952000},									
    {lat:	40.063473000, lng:	-79.891073000},									
    {lat:	40.063364000, lng:	-79.891194000},									
    {lat:	40.063247000, lng:	-79.891312000},									
    {lat:	40.063139000, lng:	-79.891443000},									
    {lat:	40.063026000, lng:	-79.891566000},									
    {lat:	40.062898000, lng:	-79.891684000},									
    {lat:	40.062771000, lng:	-79.891837000},									
    {lat:	40.062650000, lng:	-79.892001000},									
    {lat:	40.062531000, lng:	-79.892175000},									
    {lat:	40.062408000, lng:	-79.892350000},									
    {lat:	40.062285000, lng:	-79.892524000},									
    {lat:	40.062151000, lng:	-79.892696000},									
    {lat:	40.062020000, lng:	-79.892873000},									
    {lat:	40.061886000, lng:	-79.893052000},									
    {lat:	40.061753000, lng:	-79.893232000},									
    {lat:	40.061570000, lng:	-79.893473000},									
    {lat:	40.061453000, lng:	-79.893648000},									
    {lat:	40.061332000, lng:	-79.893822000},									
    {lat:	40.061211000, lng:	-79.893996000},									
    {lat:	40.061076000, lng:	-79.894155000},									
    {lat:	40.060940000, lng:	-79.894313000},									
    {lat:	40.060788000, lng:	-79.894439000},									
    {lat:	40.060475000, lng:	-79.894625000},									
    {lat:	40.060371000, lng:	-79.894678000},									
    {lat:	40.060222000, lng:	-79.894807000},									
    {lat:	40.059920000, lng:	-79.895038000},									
    {lat:	40.059825000, lng:	-79.895147000},									
    {lat:	40.059668000, lng:	-79.895254000},									
    {lat:	40.059595000, lng:	-79.895330000},									
    {lat:	40.059501000, lng:	-79.895442000},									
    {lat:	40.059398000, lng:	-79.895574000},									
    {lat:	40.059322000, lng:	-79.895662000},									
    {lat:	40.059238000, lng:	-79.895759000},									
    {lat:	40.059138000, lng:	-79.895724000},									
    {lat:	40.059023000, lng:	-79.895651000},									
    {lat:	40.058891000, lng:	-79.895641000},									
    {lat:	40.058741000, lng:	-79.895665000},									
    {lat:	40.058649000, lng:	-79.895705000},									
    {lat:	40.058526000, lng:	-79.895761000},									
    {lat:	40.058378000, lng:	-79.895818000},									
    {lat:	40.058204000, lng:	-79.895888000},									
    {lat:	40.058021000, lng:	-79.895941000},									
    {lat:	40.057834000, lng:	-79.895987000},									
    {lat:	40.057627000, lng:	-79.896038000},									
    {lat:	40.057419000, lng:	-79.896075000},									
    {lat:	40.057212000, lng:	-79.896113000},									
    {lat:	40.056996000, lng:	-79.896140000},									
    {lat:	40.056781000, lng:	-79.896150000},									
    {lat:	40.056565000, lng:	-79.896161000},									
    {lat:	40.056350000, lng:	-79.896164000},									
    {lat:	40.056128000, lng:	-79.896140000},									
    {lat:	40.055906000, lng:	-79.896129000},									
    {lat:	40.055703000, lng:	-79.896099000},									
    {lat:	40.055500000, lng:	-79.896070000},									
    {lat:	40.055296000, lng:	-79.896040000},									
    {lat:	40.055093000, lng:	-79.896011000},									
    {lat:	40.054890000, lng:	-79.895981000},									
    {lat:	40.054787000, lng:	-79.895965000},									
    {lat:	40.054584000, lng:	-79.895936000},									
    {lat:	40.054375000, lng:	-79.895895000},									
    {lat:	40.054165000, lng:	-79.895855000},									
    {lat:	40.053956000, lng:	-79.895815000},									
    {lat:	40.053746000, lng:	-79.895775000},									
    {lat:	40.053574000, lng:	-79.895772000},									
    {lat:	40.053402000, lng:	-79.895769000},									
    {lat:	40.053233000, lng:	-79.895745000},									
    {lat:	40.053065000, lng:	-79.895721000},									
    {lat:	40.052888000, lng:	-79.895713000},									
    {lat:	40.052714000, lng:	-79.895716000},									
    {lat:	40.052543000, lng:	-79.895718000},									
    {lat:	40.052373000, lng:	-79.895721000},									
    {lat:	40.052203000, lng:	-79.895735000},									
    {lat:	40.052044000, lng:	-79.895772000},									
    {lat:	40.051872000, lng:	-79.895804000},									
    {lat:	40.051685000, lng:	-79.895855000},									
    {lat:	40.051492000, lng:	-79.895904000},									
    {lat:	40.051299000, lng:	-79.895952000},									
    {lat:	40.051108000, lng:	-79.896000000},									
    {lat:	40.050979000, lng:	-79.896073000},									
    {lat:	40.050774000, lng:	-79.896158000},									
    {lat:	40.050566000, lng:	-79.896247000},									
    {lat:	40.050357000, lng:	-79.896357000},									
    {lat:	40.050149000, lng:	-79.896486000},									
    {lat:	40.049942000, lng:	-79.896614000},									
    {lat:	40.049866000, lng:	-79.896711000},									
    {lat:	40.049804000, lng:	-79.896802000},									
    {lat:	40.049741000, lng:	-79.896891000},									
    {lat:	40.049644000, lng:	-79.896923000},									
    {lat:	40.049560000, lng:	-79.896904000},									
    {lat:	40.049501000, lng:	-79.896950000},									
    {lat:	40.049412000, lng:	-79.897014000},									
    {lat:	40.049320000, lng:	-79.897089000},									
    {lat:	40.049203000, lng:	-79.897215000},									
    {lat:	40.049086000, lng:	-79.897298000},									
    {lat:	40.049016000, lng:	-79.897365000},									
    {lat:	40.048930000, lng:	-79.897384000},									
    {lat:	40.048835000, lng:	-79.897467000},									
    {lat:	40.048737000, lng:	-79.897566000},									
    {lat:	40.048638000, lng:	-79.897666000},									
    {lat:	40.048513000, lng:	-79.897735000},									
    {lat:	40.048388000, lng:	-79.897808000},									
    {lat:	40.048252000, lng:	-79.897929000},									
    {lat:	40.048088000, lng:	-79.898020000},									
    {lat:	40.048020000, lng:	-79.898106000},									
    {lat:	40.048045000, lng:	-79.898226000},									
    {lat:	40.048117000, lng:	-79.898358000},									
    {lat:	40.048197000, lng:	-79.898401000},									
    {lat:	40.048236000, lng:	-79.898312000},									
    {lat:	40.048308000, lng:	-79.898181000},									
    {lat:	40.048404000, lng:	-79.898033000},									
    {lat:	40.048554000, lng:	-79.897955000},									
    {lat:	40.048708000, lng:	-79.897864000},									
    {lat:	40.048864000, lng:	-79.897845000},									
    {lat:	40.049010000, lng:	-79.897870000},									
    {lat:	40.049164000, lng:	-79.897904000},									
    {lat:	40.049310000, lng:	-79.897996000},									
    {lat:	40.049472000, lng:	-79.898006000},									
    {lat:	40.049626000, lng:	-79.897867000},									
    {lat:	40.049806000, lng:	-79.897733000},									
    {lat:	40.049977000, lng:	-79.897644000},									
    {lat:	40.050135000, lng:	-79.897593000},									
    {lat:	40.050113000, lng:	-79.897564000}								
];
              
//export {walmartRouteCordinates};
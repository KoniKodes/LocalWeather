jQuery(document).ready(function($) {
  
  /* Edit these variables */
  var api = "85715ab081aa5f5f";
 
  $.ajax({
  url: "https://api.wunderground.com/api/85715ab081aa5f5f/forecast/conditions/q/autoip.json",
  parsed_jsonType : "jsonp",
  success : function(parsed_json) {
  
    "use strict";
	  var locat = parsed_json.current_observation.display_location.full;
	  var type = parsed_json.current_observation.weather;
	  var wind_dir = parsed_json.current_observation.wind_dir;
	  var wind_spd = parsed_json.current_observation.wind_mph;	 
	  var ico;
	  var tempSwap = true;
	  
	  var temp_f = parsed_json.current_observation.temp_f;
	  temp_f = Math.round(temp_f);
	  
	  temp_f += "<span>&deg; F </span>";
    
	  var temp_c = parsed_json.current_observation.temp_c;
	  temp_c = Math.round(temp_c);
	  temp_c += "<span>&deg; C </span>";
	  
$("#temp").click(function (){
      if (tempSwap === true){
        $("#temp").html(temp_c);
    tempSwap = false;
	}
	 else  {
        $("#temp").html(temp_f);
		tempSwap = true;
    } 
});
	  
	  $("#locat").html(locat);
	  $("#type").html(type);
	  $("#temp").html(temp_f);
	  $("#wind").html(wind_dir);
      $("#wind_spd").html(wind_spd);
	  $("#ico").html(ico);
	  
	 if (type === "Clear" || type === "Sunny") {
	 $("body").css("background-image","url(https://www.konikodes.com/fcc/img/clear.jpg)");
	 
} else if (type === "Mostly Cloudy" || type === "Partly Sunny"){
   $("body").css("background-image","url(https://www.konikodes.com/fcc/img/mostly-cloudy.jpg)");
}
else if 
 (type === "Partly Cloudy" || type === "Mostly Sunny" || type === "Scattered Clouds"){
     $("body").css("background-image","url(https://www.konikodes.com/fcc/img/partly-cloudy.jpg)");
}
else if 
(type === "Cloudy" || type === "Overcast") {
   $("body").css("background-image","url(https://www.konikodes.com/fcc/img/overcast.jpg)");
 }
 else if 
(type === "Haze" || type === "Hazy") {
   $("body").css("background-image","url(https://www.konikodes.com/fcc/img/hazy.jpg)");
 }
 else if 
(type === "Fog" || type === "Foggy") {
   $("body").css("background-image","url(https://www.konikodes.com/fcc/img/fog.jpg)");
 }
  else if 
(type === "Rain" || type === "Light Rain" || type === "Rainy" || type === "Chance of Rain") {
   $("body").css("background-image","url(https://www.konikodes.com/fcc/img/rain.jpg)");
 }

  else if 
(type === "Thunderstorms" || type === "Thunderstorms" || type === "Chance of Thunderstorms" || type === "Chance of Thunderstorm" || type === "Unknown") {
   $("body").css("background-image","url(https://www.konikodes.com/fcc/img/stormy.jpg)");
 }
    else if 
(type === "Freezing Rain" || type === "Sleet" || type === "Chance of Freezing Rain" || type === "Chance of Sleet") {
   $("body").css("background-image","url(https://www.konikodes.com/fcc/img/sleet.jpg)");
 }
   else if 
(type === "Snow" || type === "Flurries" || type === "Chance of Snow" || type === "Chance of Flurries") {
   $("body").css("background-image","url(https://www.konikodes.com/fcc/img/snowy.jpg)");
 }
else {
    $("body").css("background-image","url(https://www.konikodes.com/fcc/img/clear.jpg)");
}
}
});
    
$("#chg").click(function(){
    var str = usrLocat.toString().split(",");
    var ucity = str[0];

	
  $.ajax({
  url: "https://api.wunderground.com/85715ab081aa5f5f/forecast/conditions/q/ustate/ucity/json",
  parsed_jsonType : "jsonp",
  success : function(parsed_json)
{
  
}}
);
});
});

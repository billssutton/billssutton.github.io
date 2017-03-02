// create placeholder variables
var userLatitude
  , userLongitude
  , partyLatitude = 42.050673
  , partyLongitude = -87.683317;

// Uber API Constants
var uberClientId = "AKUT2DSFaCftEZojtOEK6sq5kK0HJ5N4"
  , uberServerToken = "ppL0rm6Uo1JeBTL4cvCeVGKlVoOxcZTzpKHls2bz";

navigator.geolocation.watchPosition(function(position) {
    console.log(position);

    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;

  	// Query Uber API if needed
    getEstimatesForUserLocation(userLatitude, userLongitude);
});

function getEstimatesForUserLocation(latitude,longitude) {
  $.ajax({
    url: "https://api.uber.com/v1.2/estimates/price",
    headers: {
        'Authorization': "Token " + uberServerToken,
     	'Accept-Language': 'en_US',
     	'Content-Type': 'application/json'
    },
    data: {
        start_latitude: userLatitude,
        start_longitude: userLongitude,
        end_latitude: partyLatitude,
        end_longitude: partyLongitude
    },
    success: function(result) {
        console.log(result);
    }
  });
}
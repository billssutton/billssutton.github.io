function getEstimatesForLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);

      // Update latitude and longitude
      userLatitude = position.coords.latitude;
      userLongitude = position.coords.longitude;

      // Query Uber API if needed
      getEstimatesForUserLocation(userLatitude, userLongitude);
  });
};

function getEstimatesForUserLocation(latitude,longitude) {
  console.log('trying');
  myform = document.getElementById("timeform");
  console.log(myform);
  console.log(myform.startlat.value);
  $.ajax({
    url: "http://localhost:8080/RideShare/api/auth/test",
    data: {
        start_latitude: myform.startlat.value,
        start_longitude: myform.startlon.value,
        end_latitude: myform.endlat.value,
        end_longitude: myform.endlon.value
    },
    success: function(data, textStatus, request) {
      console.log('here');
      if(request.getResponseHeader('redirectMe')){
        redirect = request.getResponseHeader('redirectMe');
        var win = window.open(redirect, '_blank');
        win.focus();
      }
      else {
        console.log('no new tab');
        $(".result").html(data);
      }
    }
  });
}
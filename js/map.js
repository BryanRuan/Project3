 function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15.5,
    center: { lat: 41.84245809586425, lng: -87.64776056933353},
  });
  var marker = new google.maps.Marker({
    position: { lat: 41.84245809586425, lng: -87.64776056933353},
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content:"This is the location is a park that is near where I live."
  });
  infowindow.open(map, marker);
  }

window.initMap = initMap;

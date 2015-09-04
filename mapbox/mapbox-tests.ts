/// <reference path="mapbox.d.ts" />

var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-i87786ca/{z}/{x}/{y}.png', {
	attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
});

var map = L.map('map').addLayer(mapboxTiles).setView(new L.LatLng([42.3610, -71.0587]), 15);

var coordinates = document.getElementById('coordinates');

var marker = L.marker(new L.LatLng([0, 0]), {
	icon: L.mapbox.marker.icon({
	  'marker-color': '#f86767'
	}),
	draggable: true
}).addTo(map);

// every time the marker is dragged, update the coordinates container
marker.on('dragend', function() {
	var m = marker.getLatLng();
	coordinates.innerHTML = 'Latitude: ' + m.lat + '<br />Longitude: ' + m.lng;
});

// Build a marker from a simple GeoJSON object:
var marker2 = L.mapbox.featureLayer({
	type: 'Feature',
	geometry: {
		type: 'Point',
		coordinates: [-73.9840, 40.7271]
	},
	properties: {
		title: 'Hello world!',
		'marker-color': '#f86767'
	}
}).addTo(map);

// Iterate over the featureLayer we've called "marker"
// and open its popup instead of clicking to trigger it.
marker2.eachLayer(function(marker: L.Marker) {
  marker.openPopup();
});
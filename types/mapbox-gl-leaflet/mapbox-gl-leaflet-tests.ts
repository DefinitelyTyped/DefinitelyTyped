import * as L from 'leaflet';

var token = 'token';

var map = L.map('map').setView([38.912753, -77.032194], 15);
L.marker([38.912753, -77.032194])
    .bindPopup("Hello <b>Leaflet GL</b>!<br>Whoa, it works!")
    .addTo(map)
    .openPopup();
var gl = L.mapboxGL({
    accessToken: token,
    style: 'mapbox://styles/mapbox/bright-v8'
}).addTo(map);

var gl = L.mapboxGL({
	style: 'https://raw.githubusercontent.com/osm2vectortiles/mapbox-gl-styles/master/styles/bright-v9-cdn.json',
	accessToken: 'no-token'
}).addTo(map);

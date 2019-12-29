import * as L from 'leaflet';

const token = 'token';

const map = L.map('map').setView([38.912753, -77.032194], 15);
L.marker([38.912753, -77.032194])
    .bindPopup("Hello <b>Leaflet GL</b>!<br>Whoa, it works!")
    .addTo(map)
    .openPopup();

const gl = L.mapboxGL({
    accessToken: token,
    style: 'mapbox://styles/mapbox/bright-v8'
}).addTo(map);

import * as L from 'leaflet';
import 'leaflet-offline';
const map: L.Map = L.map('map-container');
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

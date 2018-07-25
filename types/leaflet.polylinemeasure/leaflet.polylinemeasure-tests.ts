import * as L from 'leaflet';
import 'leaflet.polylinemeasure';

const map = L.map('map', {center: L.latLng(43.24209, 76.87743), zoom: 15});

L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    subdomains: ['a', 'b', 'c'],
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.polylineMeasure().addTo(map);

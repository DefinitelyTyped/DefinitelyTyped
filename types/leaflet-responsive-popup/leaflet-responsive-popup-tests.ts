import * as L from 'leaflet';
import 'leaflet-responsive-popup';

const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osmTile = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib });
const map = new L.Map('map', { layers: [osmTile], center: new L.LatLng(50.054, 19.933), zoom: 13 });

const circle = L.circle([50.054, 19.933], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 120,
}).addTo(map);

const popup = new L.responsivePopup({ hasTip: false, autoPan: false }, circle)
    .setLatLng([50.054, 19.933])
    .setContent('Test popup');

circle.bindPopup(popup);

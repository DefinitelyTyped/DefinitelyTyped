import * as L from 'leaflet';
import 'leaflet-responsive-popup';

const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osmTile = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib });
const map = new L.Map('map', {
    layers: [osmTile],
    center: new L.LatLng(50.054, 19.933),
    zoom: 13,
});

const circle1 = L.circle([50.054, 19.933], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 120,
}).addTo(map);

const popup1 = L.responsivePopup({ hasTip: false, autoPan: false }, circle1)
    .setLatLng([50.054, 19.933])
    .setContent('Test popup 1');

circle1.bindPopup(popup1);

const circle2 = L.circle([50.154, 20.033], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 120,
}).addTo(map);

const popup2 = new L.ResponsivePopup({ hasTip: false, autoPan: false }, circle2)
    .setLatLng([50.154, 20.033])
    .setContent('Test popup 2');

circle2.bindPopup(popup2);

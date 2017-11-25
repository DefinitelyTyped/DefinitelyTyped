import * as L from 'leaflet';
import 'leaflet.heat';

const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
const map = new L.Map('map', {
    layers: [osm],
    center: new L.LatLng(50.5, 30.5),
    zoom: 15,
});

// Each point in the input array can be either an array like [50.5, 30.5, 0.5], or a Leaflet LatLng object.
const heat: L.HeatLayer = L.heatLayer([
    [50.5, 30.5, 0.2], // lat, lng, intensity
    [50.6, 30.4, 0.5],
    new L.LatLng(50.7, 30.3),
], {radius: 25}).addTo(map);

// Set options on the heat layer
heat.setOptions({
    minOpacity: 0.05,
    maxZoom: 18,
    max: 1.0,
    radius: 25,
    blur: 15,
    gradient: {0.4: 'blue', 0.65: 'lime', 1: 'red'},
});

// Add new point to heat layer
const newLatLng = new L.LatLng(50.8, 30.2);
heat.addLatLng(newLatLng);

// Set new latLng list to the heat layer
heat.setLatLngs([
    newLatLng,
    newLatLng,
    newLatLng,
    [50.6, 30.4, 0.5],
]);

// Redraw the heat layer
heat.redraw();

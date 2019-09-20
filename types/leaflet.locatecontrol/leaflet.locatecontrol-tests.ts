import * as L from 'leaflet';
import 'leaflet.locatecontrol';

const map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});

// Defaults
L.control.locate().addTo(map);

// Simple
const lc = L.control.locate({
    position: 'topright',
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);

// Locate Options
map.addControl(L.control.locate({
    locateOptions: {
        maxZoom: 10,
        enableHighAccuracy: true
}}));

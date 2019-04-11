import * as L from 'leaflet';

const map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13,
});

const panControl = L.control.pan({position: 'topright'});
map.addControl(panControl);

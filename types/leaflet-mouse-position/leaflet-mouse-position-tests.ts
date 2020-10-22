import * as L from 'leaflet';

const map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13,
});
const mousePosition = L.control.mousePosition({position: 'topright', emptyString: 'Unavailable'});
map.addControl(mousePosition);

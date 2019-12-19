import * as L from 'leaflet';
import 'leaflet.browser.print';

const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
const map = L.map('map', {layers: [osm], center: L.latLng(-37.7772, 175.2756), zoom: 15 });

L.control.browserPrint({
    title: 'Print',
    documentTitle: 'DocumentTitle',
    position: 'topleft',
    printModes: [
        L.control.browserPrint.mode.portrait('Landscape', 'A4')
    ]
}).addTo(map);

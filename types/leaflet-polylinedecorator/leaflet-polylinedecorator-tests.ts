import * as L from 'leaflet';
import 'leaflet-polylinedecorator';

const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
const map = L.map('map', {layers: [osm], center: L.latLng(-37.7772, 175.2756), zoom: 15 });

const polyline = L.polyline([[0, 0], [1, 1]]);

L.polylineDecorator(polyline, {
    patterns: [
        // defines a pattern of 10px-wide dashes, repeated every 20px on the line
        {offset: 0, repeat: 20, symbol: L.Symbol.dash({pixelSize: 10})}
    ]
});

L.polylineDecorator(polyline, {
    patterns: [
        {
            offset: 0,
            endOffset: 10,
            repeat: 15,
            symbol: L.Symbol.dash({
                pixelSize: 12,
                pathOptions: {}
            })}
    ]
}).addTo(map);

L.polylineDecorator(polyline, {
    patterns: [
        {
            offset: 0,
            endOffset: 10,
            repeat: 15,
            symbol: L.Symbol.arrowHead({
                polygon: true,
                headAngle: 45,
                pixelSize: 12,
                pathOptions: {}
            })}
    ]
}).addTo(map);

L.polylineDecorator(polyline, {
    patterns: [
        {
            repeat: 15,
            symbol: L.Symbol.marker({
                rotate: false,
                markerOptions: {}
            })}
    ]
}).addTo(map);

L.polylineDecorator(polyline, {
    patterns: [
        {
            offset: "10%",
            repeat: 0,
            symbol: L.Symbol.arrowHead({
                polygon: true,
                headAngle: 45,
                pixelSize: 12,
                pathOptions: {}
            })}
    ]
}).addTo(map);

L.polylineDecorator(polyline, {
    patterns: [
        {
            endOffset: "20%",
            repeat: 0,
            symbol: L.Symbol.arrowHead({
                polygon: true,
                headAngle: 45,
                pixelSize: 12,
                pathOptions: {}
            })}
    ]
}).addTo(map);

L.polylineDecorator(polyline, {
    patterns: [
        {
            repeat: "5%",
            symbol: L.Symbol.arrowHead({
                polygon: true,
                headAngle: 45,
                pixelSize: 12,
                pathOptions: {}
            })}
    ]
}).addTo(map);

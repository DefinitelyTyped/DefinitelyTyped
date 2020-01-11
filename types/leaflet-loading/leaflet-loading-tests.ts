import * as L from 'leaflet';

const openStreetMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

/* simple example */
const simpleMap = L.map('map', {
    layers: [openStreetMap],
    center: new L.LatLng(40.65, -73.95),
    zoom: 12,
    loadingControl: true,
});

/* separate example */
const separateMap = L.map('map', {
    layers: [openStreetMap],
    center: new L.LatLng(40.65, -73.95),
    zoom: 12
});
const loadingControlSeparate = L.Control.loading({
    separate: true
});
separateMap.addControl(loadingControlSeparate);

/* using custom spinner example */
const spinMap = L.map('map', {
    layers: [openStreetMap],
    center: new L.LatLng(40.65, -73.95),
    zoom: 12
});
const loadingControlSpin = L.Control.loading({
    spinjs: true,
    spin: {
        lines: 7,
        length: 3,
        width: 3,
        radius: 5,
        rotate: 13,
        top: "83%"
    }
});
spinMap.addControl(loadingControlSpin);

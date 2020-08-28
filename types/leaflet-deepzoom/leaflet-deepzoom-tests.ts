import * as L from 'leaflet';
import 'leaflet-deepzoom';

const map = L.map('image2d').setView(new L.LatLng(0, 0), 0);
const dzLayer = L.tileLayer.deepzoom('DeepZoomImage/hubble_files/', {
    width: 2400,
    height: 3000,
}).addTo(map);

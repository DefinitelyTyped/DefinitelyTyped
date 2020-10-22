import * as L from 'leaflet';
import 'leaflet.awesome-markers';

const map: L.Map = L.map('map-container');

const redMarker = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
});

const blueMarker = new L.AwesomeMarkers.Icon({
    icon: 'star',
    markerColor: 'blue'
});

L.marker([51.941196, 4.512291], { icon: redMarker }).addTo(map);
L.marker([51.941196, 4.512291], { icon: blueMarker }).addTo(map);

L.AwesomeMarkers.Icon.prototype.options.prefix = 'fa';

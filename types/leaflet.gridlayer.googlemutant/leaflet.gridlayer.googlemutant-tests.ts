import * as L from 'leaflet';
import 'leaflet.gridlayer.googlemutant';

const map = L.map('foo');

const roads = L.gridLayer.googleMutant({
    type: 'roadmap'
}).addTo(map);

const styled = L.gridLayer.googleMutant({
    type: 'satellite',
    styles: [
        { elementType: 'labels', stylers: [ { visibility: 'off' } ] },
        { featureType: 'water' , stylers: [ { color: '#444444'  } ] }
    ]
}).addTo(map);

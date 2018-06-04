import * as L from 'leaflet';
import 'leaflet-rotatedmarker';

// Test can provide new MarkerOptions is extended correctly.
let marker = L.marker([50.5, 30.5], {
    title: 'test leaflet rotated marker',
    rotationAngle: 10,
    rotationOrigin: 'center center'
});

marker = L.marker([50.5, 30.5], {
    title: 'test leaflet rotated marker',
    rotationAngle: 10,
});

marker = L.marker([50.5, 30.5], {
    title: 'test leaflet rotated marker',
});

marker = L.marker([50.5, 30.5]);

marker = new L.Marker([50.5, 30.5], {
    title: 'test leaflet rotated marker',
    rotationAngle: 10,
    rotationOrigin: 'center center'
});

// Test new marker functions are available
marker
    .setRotationAngle(5)
    .setRotationOrigin('bottom center');

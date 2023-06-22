import * as L from 'leaflet';

const map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13,
    rotate: true,
    bearing: 30,
    trackContainerMutation: false,
    touchRotate: true,
    shiftKeyRotate: true,
    rotateControl: true,
});

map.setBearing(180);

// $ExpectType number
map.getBearing();

const point = new L.Point(0, 0);
// $ExpectType Point
map.rotatedPointToMapPanePoint(point);
// $ExpectType Point
map.mapPanePointToRotatedPoint(point);

// $ExpectType Point
point.rotate(30);
const point2 = new L.Point(20, 20);
// $ExpectType Point
point.rotateFrom(60, point2);

const marker = new L.Marker([0, 0], {
    rotation: 30,
    rotateWithView: true,
});
marker.setRotation(30);

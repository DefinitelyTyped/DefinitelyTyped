import * as L from 'leaflet';

const map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13,
    rotate: true,
    bearing: 30,
});

map.setBearing(180);

// $ExpectType number
map.getBearing();

const point = new L.Point(0, 0);
// $ExpectType Point
map.rotatedPointToMapPanePoint(point);
// $ExpectType Point
map.mapPanePointToRotatedPoint(point);

/// <reference path="../leaflet/leaflet-0.7.d.ts" />
/// <reference path="leaflet-curve.d.ts" />


var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib}),
    map = new L.Map('map', {layers: [osm], center: new L.LatLng(-37.7772, 175.2756), zoom: 15 }),
    objectToSetOnMap = {
        "color": "black",
        start: {
            x: 37.64903402157866,
            y: -3.6474609375000004
        },
        vertex: {
            x: 38.839707613545144,
            y: -1.9555664062500002
        },
        end: {
            x: 39.977120098439634,
            y: -3.6474609375000004
        }
    };


L.curve(
    [
        'M',[objectToSetOnMap.start.x, objectToSetOnMap.start.y],
        'C',[objectToSetOnMap.start.x, objectToSetOnMap.start.y], [objectToSetOnMap.vertex.x, objectToSetOnMap.vertex.y], [objectToSetOnMap.end.x, objectToSetOnMap.end.y],
        'T',[objectToSetOnMap.end.x, objectToSetOnMap.end.y]
    ],
    {color: objectToSetOnMap.color}
).addTo(map);

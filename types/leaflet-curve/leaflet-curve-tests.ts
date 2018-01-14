import * as L from 'leaflet';
import 'leaflet-curve';

const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
const map = new L.Map('map', {layers: [osm], center: new L.LatLng(-37.7772, 175.2756), zoom: 15 });
const objectToSetOnMap = {
    color: 'black',
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
        'M', [objectToSetOnMap.start.x, objectToSetOnMap.start.y],
        'C', [objectToSetOnMap.start.x, objectToSetOnMap.start.y], [objectToSetOnMap.vertex.x, objectToSetOnMap.vertex.y], [objectToSetOnMap.end.x, objectToSetOnMap.end.y],
        'T', [objectToSetOnMap.end.x, objectToSetOnMap.end.y]
    ],
    {color: objectToSetOnMap.color}
).addTo(map);

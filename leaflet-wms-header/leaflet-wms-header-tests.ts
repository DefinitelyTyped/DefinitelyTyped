import * as L from 'leaflet';

const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const headers = [
    { header: 'content-type', value: 'text/plain'},
];
const osm: L.TileLayer.WMSHeader = L.TileLayer.wmsHeader(
    osmUrl,
    { maxZoom: 18, attribution: osmAttrib },
    headers
);
const map = new L.Map(
    'map',
    {center: new L.LatLng(-37.7772, 175.2756), zoom: 15 }
);
osm.addTo(map);
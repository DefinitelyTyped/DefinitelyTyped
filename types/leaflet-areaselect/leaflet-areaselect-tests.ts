import * as L from 'leaflet';
import 'leaflet-areaselect';

const map = L.map('map', {center: L.latLng(-37.7772, 175.2756), zoom: 15 });
let area: L.AreaSelect;
const dim: L.Dimension = { width: 1, height: 2 };

area = L.areaSelect({});

area.remove();
area.addTo(map);
area.getBounds();
area.setDimensions(dim);

L.areaSelect({width: 10, height: 30, keepAspectRatio: true}).addTo(map);

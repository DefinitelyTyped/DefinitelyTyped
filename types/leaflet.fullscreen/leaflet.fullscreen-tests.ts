import * as L from 'leaflet';
import 'leaflet.fullscreen';

const map: L.Map = L.map('map-container');

// Defaults
const icon: L.Control.Fullscreen = L.control.fullscreen({
  position: 'topleft',
  title: 'Full Screen',
  titleCancel: 'Exit Full Screen',
  forceSeparateButton: false,
  forcePseudoFullscreen: false
});

icon.addTo(map);

// My Usage
L.control.fullscreen({
  position: 'topleft',
  content: '<i class="fa fa-arrows-alt"></i>',
  forceSeparateButton: true,
}).addTo(map);

/// <reference path="leaflet-fullscreen.d.ts" />

var map: L.Map;
var icon: L.Control.Fullcircle = new L.control.fullcircle({
  position: 'topleft',
  title: 'Full Screen',
  titleCancel: 'Exit Full Screen',
  forceSeparateButton: false,
  forcePseudoFullscreen: false
});

icon.addTo(map);

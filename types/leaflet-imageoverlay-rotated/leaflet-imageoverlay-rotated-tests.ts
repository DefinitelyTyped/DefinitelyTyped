import * as L from 'leaflet';
import 'leaflet-imageoverlay-rotated';

const topleft = L.latLng(40.52256691873593, -3.7743186950683594);
const topright = L.latLng(40.5210255066156, -3.7734764814376835);
const bottomleft = L.latLng(40.52180437272552, -3.7768453359603886);

const overlay = L.imageOverlay.rotated("image.jpg", topleft, topright, bottomleft, {
    opacity: 0.5,
    interactive: true
});

overlay.reposition(topleft, topright, bottomleft);

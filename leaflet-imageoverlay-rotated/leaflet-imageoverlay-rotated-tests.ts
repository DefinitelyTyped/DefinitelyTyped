var topleft = L.latLng(40.52256691873593, -3.7743186950683594);
var topright = L.latLng(40.5210255066156, -3.7734764814376835);
var bottomleft = L.latLng(40.52180437272552, -3.7768453359603886);

var overlay = L.imageOverlay.rotated("image.jpg", topleft, topright, bottomleft, {
    opacity: 0.5,
    interactive: true
});

overlay.reposition(topleft, topright, bottomleft);

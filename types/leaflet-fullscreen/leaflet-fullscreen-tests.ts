import * as L from 'leaflet';

const map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13,
    fullscreenControl: true,
});

// $ExpectType boolean
map.isFullscreen();
map.toggleFullscreen();
map.toggleFullscreen({ pseudoFullscreen: true });

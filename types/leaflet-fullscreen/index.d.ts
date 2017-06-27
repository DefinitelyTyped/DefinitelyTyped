// Type definitions for leaflet-fullscreen 1.1
// Project: https://github.com/Leaflet/Leaflet.fullscreen
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import L = require('leaflet');

declare module 'leaflet' {
    interface MapOptions {
        fullscreenControl?: true | {pseudoFullscreen: boolean};
    }
}

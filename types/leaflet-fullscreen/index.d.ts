// Type definitions for leaflet-fullscreen 1.0
// Project: https://github.com/Leaflet/Leaflet.fullscreen
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    interface MapOptions {
        fullscreenControl?: true | {pseudoFullscreen: boolean};
    }
}

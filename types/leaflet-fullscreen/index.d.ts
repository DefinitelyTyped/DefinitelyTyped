// Type definitions for leaflet-fullscreen 1.0
// Project: https://github.com/Leaflet/Leaflet.fullscreen
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {
    interface MapOptions {
        fullscreenControl?: true | {pseudoFullscreen: boolean};
    }
}

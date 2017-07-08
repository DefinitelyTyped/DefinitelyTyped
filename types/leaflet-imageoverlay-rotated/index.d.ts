// Type definitions for leaflet-imageoverlay-rotated 0.1
// Project: https://github.com/IvanSanchez/Leaflet.ImageOverlay.Rotated
// Definitions by: Thomas Kleinke <https://github.com/tkleinke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {
    namespace ImageOverlay {
        interface Rotated extends L.ImageOverlay {
            reposition(
                topleft: L.LatLngExpression,
                topright: L.LatLngExpression,
                bottomleft: L.LatLngExpression): void;
        }
    }

    namespace imageOverlay {
        function rotated(
            imgSrc: string | HTMLImageElement | HTMLCanvasElement,
            topleft: L.LatLngExpression,
            topright: L.LatLngExpression,
            bottomleft: L.LatLngExpression,
            options?: L.ImageOverlayOptions): L.ImageOverlay.Rotated;
    }
}

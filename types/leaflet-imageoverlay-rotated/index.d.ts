import * as L from "leaflet";

declare module "leaflet" {
    namespace ImageOverlay {
        interface Rotated extends ImageOverlay {
            reposition(
                topleft: LatLngExpression,
                topright: LatLngExpression,
                bottomleft: LatLngExpression,
            ): void;
        }
    }

    namespace imageOverlay {
        function rotated(
            imgSrc: string | HTMLImageElement | HTMLCanvasElement,
            topleft: LatLngExpression,
            topright: LatLngExpression,
            bottomleft: LatLngExpression,
            options?: ImageOverlayOptions,
        ): ImageOverlay.Rotated;
    }
}

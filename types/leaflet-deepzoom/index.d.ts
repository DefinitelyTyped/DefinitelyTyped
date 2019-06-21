// Type definitions for leaflet-deepzoom 2.0
// Project: https://github.com/alfarisi/leaflet-deepzoom/
// Definitions by: Håkon Løvdal <https://github.com/hlovdal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace TileLayer {
        interface DeepZoomOptions {
            width?: number;
            height?: number;
            imageFormat?: string;
            tileSize?: number;
            maxZoom?: number;
        }

        class DeepZoom extends TileLayer {
            constructor(urlTemplate: string, options?: DeepZoomOptions);
            // getTileUrl(tilePoint: Coords): string;
        }
    }

    namespace tileLayer {
        function deepzoom(urlTemplate: string, options?: TileLayer.DeepZoomOptions): TileLayer.DeepZoom;
    }
}

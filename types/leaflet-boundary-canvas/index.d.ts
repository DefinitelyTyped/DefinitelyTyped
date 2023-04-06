// Type definitions for leaflet-boundary-canvas 1.0
// Project: https://github.com/ttungbmt/leaflet-boundary-canvas#readme
// Definitions by: TurtIeSocks <https://github.com/TurtIeSocks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as L from 'leaflet';
import type { FeatureCollection } from 'geojson';

declare module 'leaflet' {
    namespace TileLayer {
        interface BoundaryCanvasOptions extends TileLayerOptions {
            boundary?: FeatureCollection | undefined;
            crossOrigin?: boolean | undefined;
            trackAttribution?: boolean | undefined;
        }

        class BoundaryCanvas extends TileLayer {
            constructor(url: string, options?: BoundaryCanvasOptions);
            static createFromLayer(tileLayer: TileLayer, options?: BoundaryCanvasOptions): BoundaryCanvas;
        }

        function boundaryCanvas(url: string, options?: BoundaryCanvasOptions): BoundaryCanvas;
    }
}

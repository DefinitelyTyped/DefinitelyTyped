import type { FeatureCollection } from "geojson";
import * as L from "leaflet";

declare module "leaflet" {
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

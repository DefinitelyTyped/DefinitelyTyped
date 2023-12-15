import * as L from "leaflet";

declare module "leaflet" {
    namespace TileLayer {
        interface DeepZoomOptions {
            width?: number | undefined;
            height?: number | undefined;
            imageFormat?: string | undefined;
            tileSize?: number | undefined;
            maxZoom?: number | undefined;
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

// Type definitions for leaflet-rastercoords 1.0
// Project: https://github.com/commenthol/leaflet-rastercoords
// Definitions by: Kan Cheung <https://github.com/chinkan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { LatLng, LatLngBounds, LatLngExpression, Map, Point, PointExpression } from "leaflet";

declare module "leaflet" {
    class RasterCoords {
        constructor(map: Map, imgsize: number[], tilesize?: number, setmaxbounds?: boolean);

        zoomLevel(): number;
        unproject(coords: PointExpression): LatLng;
        project(coords: LatLngExpression): Point;
        getMaxBounds(): LatLngBounds;
        setMaxBounds(): void;
    }
}

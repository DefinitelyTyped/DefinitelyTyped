// Type definitions for leaflet-rastercoords 1.0
// Project: https://github.com/commenthol/leaflet-rastercoords
// Definitions by: Kan Cheung <https://github.com/chinkan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Map, LatLng, Point, LatLngExpression, PointExpression, LatLngBounds } from 'leaflet';

declare module 'leaflet' {
    class RasterCoords {
        constructor(map: Map, imgsize: number[], tilesize?: number);

        zoomLevel(): number;
        unproject(coords: PointExpression): LatLng;
        project(coords: LatLngExpression): Point;
        getMaxBounds(): LatLngBounds;
        setMaxBounds(): void;
    }
}

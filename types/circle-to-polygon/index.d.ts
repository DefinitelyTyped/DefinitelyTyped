// Type definitions for circle-to-polygon 2.2
// Project: https://github.com/gabzim/circle-to-polygon
// Definitions by: Jan Zak <https://github.com/zakjan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as GeoJSON from "geojson";

interface PolygonConfig {
    earthRadius?: number;
    numberOfEdges?: number;
    bearing?: number;
    rightHandRule?: boolean;
}

declare function circleToPolygon(
    center: GeoJSON.Position,
    radius: number,
    numberOfSegments?: number | PolygonConfig,
): GeoJSON.Polygon;

export = circleToPolygon;

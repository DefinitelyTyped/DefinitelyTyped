// Type definitions for circle-to-polygon 2.0
// Project: https://github.com/gabzim/circle-to-polygon
// Definitions by: Jan Zak <https://github.com/zakjan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as GeoJSON from "geojson";

declare function circleToPolygon(center: GeoJSON.Position, radius: number, numberOfSegments?: number): GeoJSON.Polygon;

export = circleToPolygon;

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

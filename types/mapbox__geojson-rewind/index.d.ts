import type { Feature, FeatureCollection, Geometry } from "geojson";

/**
 * The GeoJSON specification is [picky about winding order](https://tools.ietf.org/html/rfc7946#section-3.1.6).
 * This function helps you generate compliant Polygon and MultiPolygon geometries.
 *
 * @param feature GeoJSON {@link FeatureCollection}, {@link Feature}, or {@link Geometry}. ⚠️**This object is mutated.**⚠️
 * @param clockwise if true, the outer ring is clockwise, otherwise it is counterclockwise.
 */
declare function rewind<T extends Feature | FeatureCollection | Geometry>(feature: T, clockwise?: boolean): T;

export = rewind;

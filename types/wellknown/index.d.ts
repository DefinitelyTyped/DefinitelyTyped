// Type definitions for wellknown 0.5
// Project: https://github.com/mapbox/wellknown#readme
// Definitions by: Davide Scalzo <https://github.com/davodesign84>
//                 Yair Tawil <https://github.com/yairtawil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type GeoJSONPosition = [number, number] | [number, number, number];

export interface Geometry<T, C> {
    type: T;
    coordinates: C;
}

export type GeoJSONPoint = Geometry<"Point", GeoJSONPosition>;
export type GeoJSONMultiPoint = Geometry<"MultiPoint", GeoJSONPosition[]>;

export type GeoJSONLineString = Geometry<"LineString", GeoJSONPosition[]>;

export type GeoJSONMultiLineString = Geometry<"MultiLineString", GeoJSONPosition[][]>;

export type GeoJSONPolygon = Geometry<"Polygon", GeoJSONPosition[][]>;

export type GeoJSONMultiPolygon = Geometry<"MultiPolygon", GeoJSONPosition[][][]>;

export type GeoJSONGeometry =
    | GeoJSONPoint
    | GeoJSONMultiPoint
    | GeoJSONLineString
    | GeoJSONMultiLineString
    | GeoJSONPolygon
    | GeoJSONMultiPolygon
    | null;

export function parse(input: string): GeoJSONGeometry;
export function stringify(gj: GeoJSONGeometry): string;

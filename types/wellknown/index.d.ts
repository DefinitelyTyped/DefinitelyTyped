export type GeoJSONPosition = [number, number] | [number, number, number];

export interface Geometry<T, C> {
    type: T;
    coordinates: C;
}

export interface GeoJSONGeometryCollection {
    type: "GeometryCollection";
    geometries: GeoJSONGeometry[];
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
    | GeoJSONGeometryCollection;

export type GeoJSONGeometryOrNull = GeoJSONGeometry | null;

export interface GeoJSONFeature {
    type: "Feature";
    geometry: GeoJSONGeometry;
}

export function parse(input: string): GeoJSONGeometryOrNull;
export function stringify(gj: GeoJSONGeometry | GeoJSONFeature): string;

// Type definitions for geojson-validation 1.0
// Project: https://gitlab.com/mjbecze/GeoJSON-Validation
// Definitions by: Liam A. Clarke <https://github.com/LiamAttClarke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface allTypes {
    Feature: typeof isFeature;
    FeatureCollection: typeof isFeatureCollection;
    Point: typeof isPoint;
    MultiPoint: typeof isMultiPoint;
    LineString: typeof isLineString;
    MultiLineString: typeof isMultiLineString;
    Polygon: typeof isPolygon;
    MultiPolygon: typeof isMultiPolygon;
    GeometryCollection: typeof isGeometryCollection;
    Bbox: typeof isBbox;
    Position: typeof isPosition;
    GeoJSON: typeof isGeoJSONObject;
    GeometryObject: typeof isGeometryObject;
}

export function define(type: keyof allTypes, definition: (...args: any[]) => any): boolean;
export function isPosition(position: unknown, trace?: boolean): string[];
export function isGeoJSONObject(geoJSONObject: unknown, trace?: boolean): string[];
export function valid(geoJSONObject: unknown, trace?: boolean): string[];
export function isGeometryObject(geoJSONObject: unknown, trace?: boolean): string[];
export function isPoint(geoJSONObject: unknown, trace?: boolean): string[];
export function isMultiPointCoor(geoJSONObject: unknown, trace?: boolean): string[];
export function isMultiPoint(geoJSONObject: unknown, trace?: boolean): string[];
export function isLineStringCoor(geoJSONObject: unknown, trace?: boolean): string[];
export function isLineString(geoJSONObject: unknown, trace?: boolean): string[];
export function isMultiLineStringCoor(geoJSONObject: unknown, trace?: boolean): string[];
export function isMultiLineString(geoJSONObject: unknown, trace?: boolean): string[];
export function isPolygonCoor(geoJSONObject: unknown, trace?: boolean): string[];
export function isPolygon(geoJSONObject: unknown, trace?: boolean): string[];
export function isMultiPolygonCoor(geoJSONObject: unknown, trace?: boolean): string[];
export function isMultiPolygon(geoJSONObject: unknown, trace?: boolean): string[];
export function isGeometryCollection(geoJSONObject: unknown, trace?: boolean): string[];
export function isFeature(geoJSONObject: unknown, trace?: boolean): string[];
export function isFeatureCollection(geoJSONObject: unknown, trace?: boolean): string[];
export function isBbox(geoJSONObject: unknown, trace?: boolean): string[];

export interface GeoJSONValidator {
    (geoJSONObject: unknown, trace?: boolean | undefined): string[];
}

export const allTypes: {
    Feature: GeoJSONValidator;
    FeatureCollection: GeoJSONValidator;
    Point: GeoJSONValidator;
    MultiPoint: GeoJSONValidator;
    LineString: GeoJSONValidator;
    MultiLineString: GeoJSONValidator;
    Polygon: GeoJSONValidator;
    MultiPolygon: GeoJSONValidator;
    GeometryCollection: GeoJSONValidator;
    Bbox: GeoJSONValidator;
    Position: GeoJSONValidator;
    GeoJSON: GeoJSONValidator;
    GeometryObject: GeoJSONValidator;
};

export function define(type: keyof typeof allTypes, definition: (...args: any[]) => any): boolean;

export const isPosition: GeoJSONValidator;
export const isGeoJSONObject: GeoJSONValidator;
export const valid: GeoJSONValidator;
export const isGeometryObject: GeoJSONValidator;
export const isPoint: GeoJSONValidator;
export const isMultiPointCoor: GeoJSONValidator;
export const isMultiPoint: GeoJSONValidator;
export const isLineStringCoor: GeoJSONValidator;
export const isLineString: GeoJSONValidator;
export const isMultiLineStringCoor: GeoJSONValidator;
export const isMultiLineString: GeoJSONValidator;
export const isPolygonCoor: GeoJSONValidator;
export const isPolygon: GeoJSONValidator;
export const isMultiPolygonCoor: GeoJSONValidator;
export const isMultiPolygon: GeoJSONValidator;
export const isGeometryCollection: GeoJSONValidator;
export const isFeature: GeoJSONValidator;
export const isFeatureCollection: GeoJSONValidator;
export const isBbox: GeoJSONValidator;

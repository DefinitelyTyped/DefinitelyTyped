// Type definitions for geojson 7946.0
// Project: https://geojson.org/
// Definitions by: Jacob Bruun <https://github.com/cobster>
//                 Arne Schubert <https://github.com/atd-schubert>
//                 Jeff Jacobson <https://github.com/JeffJacobson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Note: as of the RFC 7946 version of GeoJSON, Coordinate Reference Systems
// are no longer supported. (See https://tools.ietf.org/html/rfc7946#appendix-B)}

export as namespace GeoJSON;

/**
 * The valid values for the "type" property of GeoJSON geometry objects.
 * https://tools.ietf.org/html/rfc7946#section-1.4
 */
export type GeoJsonGeometryTypeNames = "Point" | "LineString" | "MultiPoint" | "Polygon" | "MultiLineString" |
    "MultiPolygon" | "GeometryCollection";

/**
 * The value values for the "type" property of GeoJSON Objects.
 * https://tools.ietf.org/html/rfc7946#section-1.4
 */
export type GeoJsonTypeNames = "FeatureCollection" | "Feature" | GeoJsonGeometryTypeNames;

/**
 * Bounding box
 * https://tools.ietf.org/html/rfc7946#section-5
 */
export type BoundingBox = [number, number, number, number] | [number, number, number, number, number];

/**
 * A Position is an array of coordinates.
 * https://tools.ietf.org/html/rfc7946#section-3.1.1
 */
export type Position = [number, number] | [number, number, number];

/**
 * The base GeoJSON object.
 *  https://tools.ietf.org/html/rfc7946#section-3
 */
export interface GeoJsonObject {
    /**
     * Allow foreign members as specified in https://tools.ietf.org/html/rfc7946#section-6.1
     */
    [key: string]: any;
    /**
     * Specifies the type of GeoJSON object.
     */
    type: GeoJsonTypeNames;
    /**
     * Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
     * https://tools.ietf.org/html/rfc7946#section-5
     */
    bbox?: BoundingBox;
}

/**
 * A geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3
 */
export interface GeometryObject extends GeoJsonObject {
    type: GeoJsonGeometryTypeNames;
}

/**
 * Point geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.2
 */
export interface Point extends GeometryObject {
    type: "Point";
    coordinates: Position;
}

/**
 * MultiPoint geometry object.
 *  https://tools.ietf.org/html/rfc7946#section-3.1.3
 */
export interface MultiPoint extends GeometryObject {
    type: "MultiPoint";
    coordinates: Position[];
}

/**
 * LineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.4
 */
export interface LineString extends GeometryObject {
    type: "LineString";
    coordinates: Position[];
}

/**
 * MultiLineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.5
 */
export interface MultiLineString extends GeometryObject {
    type: "MultiLineString";
    coordinates: Position[][];
}

/**
 * Polygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.6
 */
export interface Polygon extends GeometryObject {
    type: "Polygon";
    coordinates: Position[][];
}

/**
 * MultiPolygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.7
 */
export interface MultiPolygon extends GeometryObject {
    type: "MultiPolygon";
    coordinates: Position[][][];
}

/**
 * Geometry Collection
 * https://tools.ietf.org/html/rfc7946#section-3.1.8
 */
export interface GeometryCollection extends GeometryObject {
    type: "GeometryCollection";
    geometries: GeometryObject[];
}

/**
 * A feature object which contains a geometry and associated properties.
 * https://tools.ietf.org/html/rfc7946#section-3.2
 */
export interface Feature extends GeoJsonObject {
    type: "Feature";
    /**
     * The feature's geometry
     */
    geometry: GeometryObject | null;
    /**
     * A value that uniquely identifies this feature in a
     * https://tools.ietf.org/html/rfc7946#section-3.2.
     */
    id?: string | number;
    /**
     * Properties associated with this feature.
     */
    properties: { [name: string]: any; } | null;
}

/**
 * A collection of feature objects.
 *  https://tools.ietf.org/html/rfc7946#section-3.3
 */
export interface FeatureCollection extends GeoJsonObject {
    features: Feature[];
}

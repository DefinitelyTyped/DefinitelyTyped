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
export type GeoJsonGeometryTypes = "Point" | "LineString" | "MultiPoint" | "Polygon" | "MultiLineString" |
    "MultiPolygon" | "GeometryCollection";

/**
 * The value values for the "type" property of GeoJSON Objects.
 * https://tools.ietf.org/html/rfc7946#section-1.4
 */
export type GeoJsonTypes = "FeatureCollection" | "Feature" | GeoJsonGeometryTypes;

/**
 * Bounding box
 * https://tools.ietf.org/html/rfc7946#section-5
 */
export type BBox = [number, number, number, number] | [number, number, number, number, number, number];

/**
 * A Position is an array of coordinates.
 * https://tools.ietf.org/html/rfc7946#section-3.1.1
 * Array should contain between two and three elements.
 * The previous GeoJSON specification allowed more elements (e.g., which could be used to represent M values),
 * but the current specification only allows X, Y, and (optionally) Z to be defined.
 */
export type Position = number[]; // [number, number] | [number, number, number];

/**
 * The base GeoJSON interface extended by most of the interfaces
 * See GeoJsonObject at the end of the file for a stricter type
 * https://tools.ietf.org/html/rfc7946#section-3
 * The GeoJSON specification also allows foreign members
 * (https://tools.ietf.org/html/rfc7946#section-6.1)
 * Developers should use "&" type in TypeScript or extend the interface
 * to add these foreign members.
 */
export interface BaseGeoJsonObject {
    // Don't include foreign members directly into this type def.
    // in order to preserve type safety.
    // [key: string]: any;
    /**
     * Specifies the type of GeoJSON object.
     */
    type: GeoJsonTypes;
    /**
     * Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
     * https://tools.ietf.org/html/rfc7946#section-5
     */
    bbox?: BBox;
}

/**
 * Base interface for geometry objects.
 * See also the GeometryObject type below
 * https://tools.ietf.org/html/rfc7946#section-3
 */
export interface BaseGeometryObject extends BaseGeoJsonObject {
    type: GeoJsonGeometryTypes;
}

/**
 * Point geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.2
 */
export interface Point extends BaseGeometryObject {
    type: "Point";
    coordinates: Position;
}

/**
 * MultiPoint geometry object.
 *  https://tools.ietf.org/html/rfc7946#section-3.1.3
 */
export interface MultiPoint extends BaseGeometryObject {
    type: "MultiPoint";
    coordinates: Position[];
}

/**
 * LineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.4
 */
export interface LineString extends BaseGeometryObject {
    type: "LineString";
    coordinates: Position[];
}

/**
 * MultiLineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.5
 */
export interface MultiLineString extends BaseGeometryObject {
    type: "MultiLineString";
    coordinates: Position[][];
}

/**
 * Polygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.6
 */
export interface Polygon extends BaseGeometryObject {
    type: "Polygon";
    coordinates: Position[][];
}

/**
 * MultiPolygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.7
 */
export interface MultiPolygon extends BaseGeometryObject {
    type: "MultiPolygon";
    coordinates: Position[][][];
}

/**
 * Geometry Collection
 * https://tools.ietf.org/html/rfc7946#section-3.1.8
 */
export interface GeometryCollection extends BaseGeometryObject {
    type: "GeometryCollection";
    geometries: Array<Point | LineString | Polygon | MultiPoint | MultiLineString | MultiPolygon>;
}

/**
 * A geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3
 */
export type GeometryObject = GeometryCollection | LineString | MultiLineString | MultiPoint | MultiPolygon | Point | Polygon;

export type GeoJsonProperties = { [name: string]: any; } | null;

/**
 * A feature object which contains a geometry and associated properties.
 * https://tools.ietf.org/html/rfc7946#section-3.2
 */
export interface Feature<G extends GeometryObject = GeometryObject, P = GeoJsonProperties> extends BaseGeoJsonObject {
    type: "Feature";
    /**
     * The feature's geometry
     */
    geometry: G | null;
    /**
     * A value that uniquely identifies this feature in a
     * https://tools.ietf.org/html/rfc7946#section-3.2.
     */
    id?: string | number;
    /**
     * Properties associated with this feature.
     */
    properties: P | null;
}

/**
 * A collection of feature objects.
 *  https://tools.ietf.org/html/rfc7946#section-3.3
 */
export interface FeatureCollection<G extends GeometryObject = GeometryObject, P = GeoJsonProperties> extends BaseGeoJsonObject {
    type: "FeatureCollection";
    features: Array<Feature<G, P>>;
}

/**
 * GeoJSON object to be used when accepting aribtrary GeoJSON
 * https://tools.ietf.org/html/rfc7946#section-3
 * The GeoJSON specification also allows foreign members
 * (https://tools.ietf.org/html/rfc7946#section-6.1)
 * Developers should use "&" type in TypeScript or extend the interface
 * to add these foreign members.
 */
export type GeoJsonObject = GeometryObject | Feature | FeatureCollection;

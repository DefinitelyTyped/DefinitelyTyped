// Type definitions for non-npm package geojson 7946.0
// Project: https://geojson.org/
// Definitions by: Jacob Bruun <https://github.com/cobster>
//                 Arne Schubert <https://github.com/atd-schubert>
//                 Jeff Jacobson <https://github.com/JeffJacobson>
//                 Ilia Choly <https://github.com/icholy>
//                 Dan Vanderkam <https://github.com/danvk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Note: as of the RFC 7946 version of GeoJSON, Coordinate Reference Systems
// are no longer supported. (See https://tools.ietf.org/html/rfc7946#appendix-B)}

export as namespace GeoJSON;

/**
 * The valid values for the "type" property of GeoJSON geometry objects.
 * https://tools.ietf.org/html/rfc7946#section-1.4
 */
export type GeoJsonGeometryTypes = Geometry['type'];

/**
 * The value values for the "type" property of GeoJSON Objects.
 * https://tools.ietf.org/html/rfc7946#section-1.4
 */
export type GeoJsonTypes = GeoJSON['type'];

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
 * The base GeoJSON object.
 * https://tools.ietf.org/html/rfc7946#section-3
 * The GeoJSON specification also allows foreign members
 * (https://tools.ietf.org/html/rfc7946#section-6.1)
 * Developers should use "&" type in TypeScript or extend the interface
 * to add these foreign members.
 */
export interface GeoJsonObject {
    // Don't include foreign members directly into this type def.
    // in order to preserve type safety.
    // [key: string]: any;
    /**
     * Specifies the type of GeoJSON object.
     */
    type: GeoJsonTypes;
    /**
     * Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
     * The value of the bbox member is an array of length 2*n where n is the number of dimensions
     * represented in the contained geometries, with all axes of the most southwesterly point
     * followed by all axes of the more northeasterly point.
     * The axes order of a bbox follows the axes order of geometries.
     * https://tools.ietf.org/html/rfc7946#section-5
     */
    bbox?: BBox | undefined;
}

/**
 * Union of GeoJSON objects.
 */
export type GeoJSON = Geometry | Feature | FeatureCollection;

/**
 * Geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3
 */
export type Geometry = Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon | GeometryCollection;
export type GeometryObject = Geometry;

/**
 * Point geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.2
 */
export interface Point extends GeoJsonObject {
    type: "Point";
    coordinates: Position;
}

/**
 * MultiPoint geometry object.
 *  https://tools.ietf.org/html/rfc7946#section-3.1.3
 */
export interface MultiPoint extends GeoJsonObject {
    type: "MultiPoint";
    coordinates: Position[];
}

/**
 * LineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.4
 */
export interface LineString extends GeoJsonObject {
    type: "LineString";
    coordinates: Position[];
}

/**
 * MultiLineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.5
 */
export interface MultiLineString extends GeoJsonObject {
    type: "MultiLineString";
    coordinates: Position[][];
}

/**
 * Polygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.6
 */
export interface Polygon extends GeoJsonObject {
    type: "Polygon";
    coordinates: Position[][];
}

/**
 * MultiPolygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.7
 */
export interface MultiPolygon extends GeoJsonObject {
    type: "MultiPolygon";
    coordinates: Position[][][];
}

/**
 * Geometry Collection
 * https://tools.ietf.org/html/rfc7946#section-3.1.8
 */
export interface GeometryCollection extends GeoJsonObject {
    type: "GeometryCollection";
    geometries: Geometry[];
}

export type GeoJsonProperties = { [name: string]: any; } | null;

/**
 * A feature object which contains a geometry and associated properties.
 * https://tools.ietf.org/html/rfc7946#section-3.2
 */
export interface Feature<G extends Geometry | null = Geometry, P = GeoJsonProperties> extends GeoJsonObject {
    type: "Feature";
    /**
     * The feature's geometry
     */
    geometry: G;
    /**
     * A value that uniquely identifies this feature in a
     * https://tools.ietf.org/html/rfc7946#section-3.2.
     */
    id?: string | number | undefined;
    /**
     * Properties associated with this feature.
     */
    properties: P;
}

/**
 * A collection of feature objects.
 *  https://tools.ietf.org/html/rfc7946#section-3.3
 */
export interface FeatureCollection<G extends Geometry | null = Geometry, P = GeoJsonProperties> extends GeoJsonObject {
    type: "FeatureCollection";
    features: Array<Feature<G, P>>;
}

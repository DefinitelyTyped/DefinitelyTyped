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
 * A CRS object may indicate a coordinate reference system by name. In this
 * case, the value of its "type" member must be the string "name". The value of
 * its "properties" member must be an object containing a "name" member. The
 * value of that "name" member must be a string identifying a coordinate
 * reference system. OGC CRS URNs such as "urn:ogc:def:crs:OGC:1.3:CRS84" shall
 * be preferred over legacy identifiers such as "EPSG:4326".
 */

export interface NamedCoordinateReferenceSystemProperties {
    name: string;
}

export interface NamedCoordinateReferenceSystem {
    type: 'name';
    properties: NamedCoordinateReferenceSystemProperties;
}

/**
 * A link object has one required member: "href", and one optional member:
 * "type".
 *
 * The value of the required "href" member must be a dereferenceable URI.
 *
 * The value of the optional "type" member must be a string that hints at the
 * format used to represent CRS parameters at the provided URI. Suggested
 * values are: "proj4", "ogcwkt", "esriwkt", but others can be used.
 *
 * Relative links may be used to direct processors to CRS parameters in an
 * auxiliary file.
 */

export interface LinkedCoordinateReferenceSystemProperties {
    href: string;
    type?: string;
}

export interface LinkedCoordinateReferenceSystem {
    type: 'link';
    properties: LinkedCoordinateReferenceSystemProperties;
}

/**
 * The coordinate reference system (CRS) of a GeoJSON object is determined by
 * its "crs" member (referred to as the CRS object below). If an object has no
 * crs member, then its parent or grandparent object’s crs member may be
 * acquired.  If no crs member can be so acquired, the default CRS shall apply
 * to the GeoJSON object.
 *
 * - The default CRS is a geographic coordinate reference system, using the
 *   WGS84 datum, and with longitude and latitude units of decimal degrees.
 *
 * - The value of a member named "crs" must be a JSON object (referred to as
 *   the CRS object below) or JSON null. If the value of CRS is null, no CRS
 *   can be assumed.
 *
 * - The crs member should be on the top-level GeoJSON object in a hierarchy
 *   (in feature collection, feature, geometry order) and should not be
 *   repeated or overridden on children or grandchildren of the object.
 *
 * - A non-null CRS object has two mandatory members: "type" and "properties".
 *
 * - The value of the type member must be a string, indicating the type of CRS
 *   object.
 *
 * - The value of the properties member must be an object.
 */

export type CoordinateReferenceSystem = NamedCoordinateReferenceSystem | LinkedCoordinateReferenceSystem;

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
    bbox?: BBox;
    crs?: CoordinateReferenceSystem;
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
    id?: string | number;
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

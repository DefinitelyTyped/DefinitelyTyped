// Note: as of the RFC 7946 version of GeoJSON, Coordinate Reference Systems
// are no longer supported. (See https://tools.ietf.org/html/rfc7946#appendix-B)}

export as namespace GeoJSON;

/**
 * The valid values for the "type" property of GeoJSON geometry objects.
 * https://tools.ietf.org/html/rfc7946#section-1.4
 */
export type GeoJsonGeometryTypes = Geometry["type"];

/**
 * The value values for the "type" property of GeoJSON Objects.
 * https://tools.ietf.org/html/rfc7946#section-1.4
 */
export type GeoJsonTypes = GeoJSON["type"];

/**
 * Bounding box
 * https://tools.ietf.org/html/rfc7946#section-5
 */
export type BBox2D = [number, number, number, number];

/**
 * Bounding box
 * https://tools.ietf.org/html/rfc7946#section-5
 */
export type BBox3D = [number, number, number, number, number, number];

/**
 * Bounding box
 * https://tools.ietf.org/html/rfc7946#section-5
 */
export type BBox = BBox2D | BBox3D;

/**
 * A Position is an array of coordinates.
 * https://tools.ietf.org/html/rfc7946#section-3.1.1
 * Array should contain between two and three elements.
 * The previous GeoJSON specification allowed more elements (e.g., which could be used to represent M values),
 * but the current specification only allows X, Y, and (optionally) Z to be defined.
 * @deprecated
 */
export type Position = number[]; // [number, number] | [number, number, number];


/**
 * A Position is an array of coordinates.
 * https://tools.ietf.org/html/rfc7946#section-3.1.1
 * Array should contain between two and three elements.
 * The previous GeoJSON specification allowed more elements (e.g., which could be used to represent M values),
 * but the current specification only allows X, Y, and (optionally) Z to be defined.
 */
export type Position2D = [number, number];

/**
 * A Position is an array of coordinates.
 * https://tools.ietf.org/html/rfc7946#section-3.1.1
 * Array should contain between two and three elements.
 * The previous GeoJSON specification allowed more elements (e.g., which could be used to represent M values),
 * but the current specification only allows X, Y, and (optionally) Z to be defined.
 */
export type Position3D = [number, number, number];

export type StrictPosition = Position2D | Position3D;

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
 * @deprecated
 */
export type GeoJSON = Geometry | Feature | FeatureCollection;

/**
 * Union of GeoJSON objects.
 */
export type StrictGeoJson<P extends StrictPosition> = StrictGeometry<P> | StrictGeometryCollection<P> | StrictFeatureCollection<P>

/**
 * Geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3
 * @deprecated
 */
export type Geometry = Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon | GeometryCollection;
/**
 * Geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3
 */
export type StrictGeometry<P extends StrictPosition> = StrictPoint<P> | StrictMultiPoint<P> | StrictLineString<P> | StrictMultiLineString<P> | StrictPolygon<P> | StrictMultiPolygon<P> | StrictGeometryCollection<P>;
/**
 * Geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3
 * @deprecated
 */
export type GeometryObject = Geometry;

/**
 * Point geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.2
 * @deprecated
 */
export interface Point extends GeoJsonObject {
    type: "Point";
    coordinates: Position;
}

/**
 * MultiPoint geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.3
 * @deprecated
 */
export interface MultiPoint extends GeoJsonObject {
    type: "MultiPoint";
    coordinates: Position[];
}

/**
 * LineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.4
 * @deprecated
 */
export interface LineString extends GeoJsonObject {
    type: "LineString";
    coordinates: Position[];
}

/**
 * MultiLineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.5
 * @deprecated
 */
export interface MultiLineString extends GeoJsonObject {
    type: "MultiLineString";
    coordinates: Position[][];
}

/**
 * Polygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.6
 * @deprecated
 */
export interface Polygon extends GeoJsonObject {
    type: "Polygon";
    coordinates: Position[][];
}

/**
 * MultiPolygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.7
 * @deprecated
 */
export interface MultiPolygon extends GeoJsonObject {
    type: "MultiPolygon";
    coordinates: Position[][][];
}

// #region
/**
 * Point geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.2
 */
export interface StrictPoint<P extends StrictPosition> extends GeoJsonObject {
    type: 'Point';
    coordinates: P;
}

/**
 * MultiPoint geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.3
 */
export interface StrictMultiPoint<P extends StrictPosition> extends GeoJsonObject {
    type: 'MultiPoint';
    coordinates: P[];
}

/**
 * LineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.4
 */
export interface StrictLineString<P extends StrictPosition> extends GeoJsonObject {
    type: 'LineString';
    coordinates: P[];
}

/**
 * MultiLineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.5
 */
export interface StrictMultiLineString<P extends StrictPosition> extends GeoJsonObject {
    type: 'MultiLineString';
    coordinates: P[][];
}

/**
 * Polygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.6
 */
export interface StrictPolygon<P extends StrictPosition> extends GeoJsonObject {
    type: 'Polygon';
    coordinates: P[][];
}

/**
 * MultiPolygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.7
 */
export interface StrictMultiPolygon<P extends StrictPosition> extends GeoJsonObject {
    type: 'MultiPolygon';
    coordinates: P[][][];
}

// #endregion

/**
 * Geometry Collection
 * https://tools.ietf.org/html/rfc7946#section-3.1.8
 * @deprecated
 */
export interface GeometryCollection<G extends Geometry = Geometry> extends GeoJsonObject {
    type: "GeometryCollection";
    geometries: G[];
}

/**
 * Geometry Collection
 * https://tools.ietf.org/html/rfc7946#section-3.1.8
 */
export interface StrictGeometryCollection<P extends StrictPosition, G extends StrictGeometry<P> = StrictGeometry<P>> extends GeoJsonObject {
    type: 'GeometryCollection';
    geometries: G[];
}

export type GeoJsonProperties = { [name: string]: any } | null;

/**
 * A feature object which contains a geometry and associated properties.
 * https://tools.ietf.org/html/rfc7946#section-3.2
 * @deprecated
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
 * @deprecated
 */
export interface FeatureCollection<G extends Geometry | null = Geometry, P = GeoJsonProperties> extends GeoJsonObject {
    type: "FeatureCollection";
    features: Array<Feature<G, P>>;
}

/**
 * A feature object which contains a geometry and associated properties.
 * https://tools.ietf.org/html/rfc7946#section-3.2
 */
export interface StrictFeature<T extends StrictPosition, G extends StrictGeometry<T> | null = StrictGeometry<T>, P = GeoJsonProperties> extends GeoJsonObject {
    type: 'Feature';
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
export interface StrictFeatureCollection<T extends StrictPosition, G extends StrictGeometry<T> | null = StrictGeometry<T>, P = GeoJsonProperties> extends GeoJsonObject {
    type: 'FeatureCollection';
    features: Array<StrictFeature<T, G, P>>;
}

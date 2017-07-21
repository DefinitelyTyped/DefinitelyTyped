// Type definitions for GeoJSON Format Specification Revision 1.0
// Project: http://geojson.org/
// Definitions by: Jacob Bruun <https://github.com/cobster/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace GeoJSON;

// Shared fields across all GeoJsonObjects.
interface BaseGeoJsonObject {
    /** A 2*n array where n is the number of dimensions */
    bbox?: number[];

    /**
     * Coordinate reference system.
     * Note: This was removed from RFC 7946. GeoJSON should always use WGS 84.
     */
    crs?: CoordinateReferenceSystem;
}

/**
 * http://geojson.org/geojson-spec.html#positions
 */
export type Position = number[];

/**
 * http://geojson.org/geojson-spec.html#point
 */
export interface Point extends BaseGeoJsonObject {
    type: 'Point';
    coordinates: Position;
}

/**
 * http://geojson.org/geojson-spec.html#multipoint
 */
export interface MultiPoint extends BaseGeoJsonObject {
    type: 'MultiPoint';
    coordinates: Position[];
}

/**
 * http://geojson.org/geojson-spec.html#linestring
 */
export interface LineString extends BaseGeoJsonObject {
    type: 'LineString';
    coordinates: Position[];
}

/**
 * http://geojson.org/geojson-spec.html#multilinestring
 */
export interface MultiLineString extends BaseGeoJsonObject {
    type: 'MultiLineString';
    coordinates: Position[][];
}

/**
 * http://geojson.org/geojson-spec.html#polygon
 */
export interface Polygon extends BaseGeoJsonObject {
    type: 'Polygon';
    coordinates: Position[][];
}

/**
 * http://geojson.org/geojson-spec.html#multipolygon
 */
export interface MultiPolygon extends BaseGeoJsonObject {
    type: 'MultiPolygon';
    coordinates: Position[][][];
}

/**
 * http://geojson.org/geojson-spec.html#geometry-collection
 */
export interface GeometryCollection extends BaseGeoJsonObject {
    type: 'GeometryCollection';
    geometries: GeometryObject[];
}

/**
 * GeometryObject supports geometry collection as well
 */
export type GeometryObject =
    Point |
    MultiPoint |
    LineString |
    MultiLineString |
    Polygon |
    MultiPolygon |
    GeometryCollection;

/**
 * http://geojson.org/geojson-spec.html#feature-objects
 */
export interface Feature<
    GeomT extends GeometryObject=GeometryObject,
    PropsT=any
> extends BaseGeoJsonObject {
    type: 'Feature';
    geometry: GeomT;
    properties: PropsT;
    id?: string|number;
}

/**
 * http://geojson.org/geojson-spec.html#feature-collection-objects
 */
export interface FeatureCollection<
    GeomT extends GeometryObject=GeometryObject,
    PropsT=any
> extends BaseGeoJsonObject {
    type: 'FeatureCollection';
    features: Array<Feature<GeomT, PropsT>>;
}

/**
 * http://geojson.org/geojson-spec.html#geojson-objects
 */
export type GeoJsonObject<PropsT=any> =
    GeometryObject |
    FeatureCollection<GeometryObject, PropsT> |
    Feature<GeometryObject, PropsT>;

/**
 * Note: With RFC 7946, GeoJSON always uses WGS84.
 * http://geojson.org/geojson-spec.html#coordinate-reference-system-objects
 */
export interface CoordinateReferenceSystem {
    type: string;
    properties: any;
}

export interface NamedCoordinateReferenceSystem extends CoordinateReferenceSystem {
    properties: { name: string };
}

export interface LinkedCoordinateReferenceSystem extends CoordinateReferenceSystem {
    properties: { href: string; type: string };
}

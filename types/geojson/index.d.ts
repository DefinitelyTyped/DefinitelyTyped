// Type definitions for GeoJSON Format Specification Revision 1.0
// Project: http://geojson.org/
// Definitions by: Jacob Bruun <https://github.com/cobster>
//                 Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace GeoJSON;

/***
 * http://geojson.org/geojson-spec.html#geojson-objects
 */
export interface GeoJsonObject {
    type: string;
    bbox?: number[];
    crs?: CoordinateReferenceSystem;
}

/***
 * http://geojson.org/geojson-spec.html#positions
 */
export type Position = number[];

/***
 * http://geojson.org/geojson-spec.html#geometry-objects
 */
export interface DirectGeometryObject extends GeoJsonObject {
    coordinates: Position[][][] | Position[][] | Position[] | Position;
}
/**
 * GeometryObject supports geometry collection as well
 */
export type GeometryObject = DirectGeometryObject | GeometryCollection;

/***
 * http://geojson.org/geojson-spec.html#point
 */
export interface Point extends DirectGeometryObject {
    type: "Point";
    coordinates: Position;
}

/***
 * http://geojson.org/geojson-spec.html#multipoint
 */
export interface MultiPoint extends DirectGeometryObject {
    type: "MultiPoint";
    coordinates: Position[];
}

/***
 * http://geojson.org/geojson-spec.html#linestring
 */
export interface LineString extends DirectGeometryObject {
    type: "LineString";
    coordinates: Position[];
}

/***
 * http://geojson.org/geojson-spec.html#multilinestring
 */
export interface MultiLineString extends DirectGeometryObject {
    type: "MultiLineString";
    coordinates: Position[][];
}

/***
 * http://geojson.org/geojson-spec.html#polygon
 */
export interface Polygon extends DirectGeometryObject {
    type: "Polygon";
    coordinates: Position[][];
}

/***
 * http://geojson.org/geojson-spec.html#multipolygon
 */
export interface MultiPolygon extends DirectGeometryObject {
    type: "MultiPolygon";
    coordinates: Position[][][];
}

/***
 * http://geojson.org/geojson-spec.html#geometry-collection
 */
export interface GeometryCollection extends GeoJsonObject {
    type: "GeometryCollection";
    geometries: GeometryObject[];
}

/***
 * https://tools.ietf.org/html/rfc7946#section-3.2
 */
export interface Feature<G extends GeometryObject, P = any> extends GeoJsonObject {
    type: "Feature";
    geometry: G;
    properties: P;
    id?: string | number;
}

/***
 * http://geojson.org/geojson-spec.html#feature-collection-objects
 */
export interface FeatureCollection<G extends GeometryObject, P = any> extends GeoJsonObject {
    type: "FeatureCollection";
    features: Array<Feature<G, P>>;
}

/***
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

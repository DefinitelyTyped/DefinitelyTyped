// Type definitions for GeoJSON Format Specification
// Project: http://geojson.org/
// Definitions by: Jacob Bruun <https://github.com/cobster/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GeoJSON {

    /***
    * http://geojson.org/geojson-spec.html#geojson-objects
    */
    export interface GeoJsonObject
    {
        type: string;
        bbox?: number[];
        crs?: CoordinateReferenceSystem;
    }

    /***
    * http://geojson.org/geojson-spec.html#positions
    */
    export type Position = number[]

    /***
    * http://geojson.org/geojson-spec.html#geometry-objects
    */
    export interface GeometryObject extends GeoJsonObject
    {
        coordinates: any
    }

    /***
    * http://geojson.org/geojson-spec.html#point
    */
    export interface Point extends GeometryObject
    {
        type: 'Point'
        coordinates: Position
    }

    /***
    * http://geojson.org/geojson-spec.html#multipoint
    */
    export interface MultiPoint extends GeometryObject
    {
        type: 'MultiPoint'
        coordinates: Position[]
    }

    /***
    * http://geojson.org/geojson-spec.html#linestring
    */
    export interface LineString extends GeometryObject
    {
        type: 'LineString'
        coordinates: Position[]
    }

    /***
    * http://geojson.org/geojson-spec.html#multilinestring
    */
    export interface MultiLineString extends GeometryObject
    {
        type: 'MultiLineString'
        coordinates: Position[][]
    }

    /***
    * http://geojson.org/geojson-spec.html#polygon
    */
    export interface Polygon extends GeometryObject
    {
        type: 'Polygon'
        coordinates: Position[][]
    }

    /***
    * http://geojson.org/geojson-spec.html#multipolygon
    */
    export interface MultiPolygon extends GeometryObject
    {
        type: 'MultiPolygon'
        coordinates: Position[][][]
    }

    /***
    * http://geojson.org/geojson-spec.html#geometry-collection
    */
    export interface GeometryCollection extends GeoJsonObject
    {
        type: 'GeometryCollection'
        geometries: GeometryObject[];
    }

    /***
    * http://geojson.org/geojson-spec.html#feature-objects
    */
    export interface Feature<T extends GeometryObject> extends GeoJsonObject
    {
        type: 'Feature'
        geometry: T;
        properties: any;
        id?: string;
    }

    /***
    * http://geojson.org/geojson-spec.html#feature-collection-objects
    */
    export interface FeatureCollection<T extends GeometryObject> extends GeoJsonObject
    {
        type: 'FeatureCollection'
        features: Feature<T>[];
    }

    /***
    * http://geojson.org/geojson-spec.html#coordinate-reference-system-objects
    */
    export interface CoordinateReferenceSystem
    {
        type: string;
        properties: any;
    }

    export interface NamedCoordinateReferenceSystem extends CoordinateReferenceSystem
    {
        properties: { name: string }
    }

    export interface LinkedCoordinateReferenceSystem extends CoordinateReferenceSystem
    {
        properties: { href: string; type: string }
    }
}

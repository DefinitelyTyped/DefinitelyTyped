// Type definitions for GeoJSON Format Specification
// Project: http://geojson.org/
// Definitions by: Jacob Bruun <https://github.com/cobster/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module GeoJSON {

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
    export interface Position
    {
        [index: number]: number;
    }

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
        coordinates: Position
    }

    /***
    * http://geojson.org/geojson-spec.html#multipoint
    */
    export interface MultiPoint extends GeometryObject
    {
    
        coordinates: Position[]
    }

    /***
    * http://geojson.org/geojson-spec.html#linestring
    */
    export interface LineString extends GeometryObject
    {
        coordinates: Position[]
    }

    /***
    * http://geojson.org/geojson-spec.html#multilinestring
    */
    export interface MultiLineString extends GeometryObject
    {
        coordinates: Position[][]
    }

    /***
    * http://geojson.org/geojson-spec.html#polygon
    */
    export interface Polygon extends GeometryObject
    {
        coordinates: Position[][]
    }

    /***
    * http://geojson.org/geojson-spec.html#multipolygon
    */
    export interface MultiPolygon extends GeometryObject
    {
        coordinates: Position[][][]
    }

    /***
    * http://geojson.org/geojson-spec.html#geometry-collection
    */
    export interface GeometryCollection extends GeoJsonObject
    {
        geometries: GeometryObject[];
    }

    /***
    * http://geojson.org/geojson-spec.html#feature-objects
    */
    export interface Feature extends GeoJsonObject
    {
        geometry: GeometryObject;
        properties: any;
        id?: string;
    }

    /***
    * http://geojson.org/geojson-spec.html#feature-collection-objects
    */
    export interface FeatureCollection extends GeoJsonObject
    {
        features: Feature[];
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
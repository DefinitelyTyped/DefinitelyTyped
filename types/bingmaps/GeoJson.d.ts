declare module Microsoft.Maps {

    /** GeoJSON object definition */
    export interface IGeoJsonObject {
        /**
         * Type of the object
         * could be one of the following:
         * Point
         * LineString
         * Polygon
         * MultiPoint
         * MultiLineString
         * MultiPolygon
         * GeometryCollection
         * Feature
         * FeatureCollection
         */
        type: string;

        /** Geometric coordinates of the object */
        coordinates?: number[] | number[][] | number[][][] | number[][][][];

        /** Additional properties of the object as a key,value pair */
        properties?: any;

        /** Set of features (only applicable if the type is 'featurecollection') */
        features?: IGeoJsonObject[];

        /** Set of geometries (only applicable if the type is 'geometrycollection') */
        geometries?: IGeoJsonObject[];

        /** Geometry (only applicable if the type is 'feature') */
        geometry?: IGeoJsonObject;

        /** identifier of a feature (only applicable if the type is 'feature') */
        id?: any;
    }

    /**
     * Class responsible for reading/writing geo data in GeoJson format
     * @requires The Microsoft.Maps.GeoJson module.
     */
    export module GeoJson {
       /**
       * Reads the data from a given url and returns the shapes.
       * @param url GeoJson download url.
       * @param callback Callback function that needs to be called once the data is downloaded and parsed.
       * @param jsonpQueryParam The name of the url query param to make a jsonp request.
       * @param styles Styles that needs to be applied.
       */
        export function readFromUrl(url: string, callback: (data: IPrimitive | IPrimitive[]) => void, jsonpQueryParam?: string, styles?: IStylesOptions): void;

        /**
         * Reads the data in geoJson format and returns the shapes.
         * @param geoJson GeoJson data object that needs to be parsed into shapes.
         * @param styles Styles that needs to be applied.
         * @returns An array of shapes.
         */
        export function read(geoJson: IGeoJsonObject | string, styles?: IStylesOptions): IPrimitive | IPrimitive[];

        /**
        * Writes the data into geoJson format.
        * @param data Data that needs to be serialized.
        * @returns A geoJson formatted string.
        */
        export function write(data: IPrimitive | IPrimitive[]): IGeoJsonObject;
    }
}
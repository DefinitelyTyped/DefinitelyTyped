/// <reference path="FeatureGroup.d.ts" />
/// <reference path="GeoJSONOptions.d.ts" />
/// <reference path="LatLng.d.ts" />
/// <reference path="Path.d.ts" />
/// <reference path="PathOptions.d.ts" />
/// <reference path="ILayer.d.ts" />
declare module L {

    /**
      * Creates a GeoJSON layer. Optionally accepts an object in GeoJSON format
      * to display on the map (you can alternatively add it later with addData method)
      * and an options object.
      */
    function geoJson(geojson?: any, options?: GeoJSONOptions): GeoJSON;

    export class GeoJSON extends FeatureGroup {

        /**
          * Creates a GeoJSON layer. Optionally accepts an object in GeoJSON format
          * to display on the map (you can alternatively add it later with addData method)
          * and an options object.
          */
        constructor(geojson?: any, options?: GeoJSONOptions);
    
        /**
          * Adds a GeoJSON object to the layer. 
          */
        addData(data: any): boolean;
    
        /**
          * Changes styles of GeoJSON vector layers with the given style function.
          */
        setStyle(style: (featureData: any) => any): GeoJSON;
    
        /**
          * Resets the the given vector layer's style to the original GeoJSON style,
          * useful for resetting style after hover events.
          */
        resetStyle(layer: Path): GeoJSON;
    
        /**
          * Creates a layer from a given GeoJSON feature.
          */
        static geometryToLayer(featureData: GeoJSON, pointToLayer?: (featureData: any, latlng: LatLng) => ILayer): ILayer;
    
        /**
          * Creates a LatLng object from an array of 2 numbers (latitude, longitude)
          * used in GeoJSON for points. If reverse is set to true, the numbers will be interpreted
          * as (longitude, latitude).
          */
        static coordsToLatlng(coords: number[], reverse?: boolean): LatLng;
    
        /**
          * Creates a multidimensional array of LatLng objects from a GeoJSON coordinates
          * array. levelsDeep specifies the nesting level (0 is for an array of points,
          * 1 for an array of arrays of points, etc., 0 by default). If reverse is set to
          * true, the numbers will be interpreted as (longitude, latitude).
          */
        static coordsToLatlngs(coords: number[], levelsDeep?: number, reverse?: boolean): LatLng[];
    
    }
}





declare module L {
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
          * NOTE: A fake signature to allow an overriding overload.
          */
        setStyle(style: PathOptions): FeatureGroup;
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
        static coordsToLatlng(coords: Array, reverse?: boolean): LatLng;
    
        /**
          * Creates a multidimensional array of LatLng objects from a GeoJSON coordinates
          * array. levelsDeep specifies the nesting level (0 is for an array of points,
          * 1 for an array of arrays of points, etc., 0 by default). If reverse is set to
          * true, the numbers will be interpreted as (longitude, latitude).
          */
        static coordsToLatlngs(coords: Array, levelsDeep?: number, reverse?: boolean): Array;
    
    }
} 
 
 

/// <reference path="ILayer.d.ts" />
/// <reference path="LatLng.d.ts" />
declare module L {
    export interface GeoJSONOptions {
        /**
          * Function that will be used for creating layers for GeoJSON points (if not
          * specified, simple markers will be created).
          */
        pointToLayer?: (featureData: any, latlng: LatLng) => ILayer;

        /**
          * Function that will be used to get style options for vector layers created
          * for GeoJSON features.
          */
        style?: (featureData: any) => any;

        /**
          * Function that will be called on each created feature layer. Useful for attaching
          * events and popups to features.
          */
        onEachFeature?: (featureData: any, layer: ILayer) => void;

        /**
          * Function that will be used to decide whether to show a feature or not.
          */
        filter?: (featureData: any, layer: ILayer) => boolean;

        /**
          * Function that will be used for converting GeoJSON coordinates to LatLng points
          * (if not specified, coords will be assumed to be WGS84 — standard[longitude, latitude]
          * values in degrees).
          */
        coordsToLatLng?: (coords: any[]) => LatLng[];
    }
}

 
 

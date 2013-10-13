//// updated to 0.6.4
/// <reference path="FeatureGroup.d.ts" />
/// <reference path="LatLng.d.ts" />
/// <reference path="PolylineOptions.d.ts" />
declare module L {

    export class MultiPolygon extends FeatureGroup {

        /**
          * Instantiates a multi-polyline object given an array of latlngs arrays (one
          * for each individual polygon) and optionally an options object (the same
          * as for MultiPolyline).
          */
        constructor(latlngs: LatLng[][], options?: PolylineOptions);
    
        /**
          * Instantiates a multi-polyline object given an array of latlngs arrays (one
          * for each individual polygon) and optionally an options object (the same
          * as for MultiPolyline).
          */
        static multiPolygon(latlngs: LatLng[][], options?: PolylineOptions): MultiPolygon;

        /**
          * Replace all polygons and their paths with the given array of arrays
          * of geographical points.
          */
        setLatLngs(latlngs: LatLng[][]): MultiPolygon;

        /**
          * Returns an array of arrays of geographical points in each polygon.
          */
        getLatLngs(): LatLng[][];

        /**
          * Returns a GeoJSON representation of the multipolygon (GeoJSON MultiPolygon Feature).
          */
        toGeoJSON(): any;
    }
}

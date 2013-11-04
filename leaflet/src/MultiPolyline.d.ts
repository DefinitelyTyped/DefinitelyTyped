/// <reference path="FeatureGroup.d.ts" />
/// <reference path="LatLng.d.ts" />
/// <reference path="PolylineOptions.d.ts" />
declare module L {

    /**
      * Instantiates a multi-polyline object given an array of arrays of geographical
      * points (one for each individual polyline) and optionally an options object.
      */
    function multiPolyline(latlngs: LatLng[][], options?: PolylineOptions): MultiPolyline;

    export class MultiPolyline extends FeatureGroup {

        /**
          * Instantiates a multi-polyline object given an array of arrays of geographical
          * points (one for each individual polyline) and optionally an options object.
          */
        constructor(latlngs: LatLng[][], options?: PolylineOptions);

        /**
          * Replace all polygons and their paths with the given array of arrays
          * of geographical points.
          */
        setLatLngs(latlngs: LatLng[][]): MultiPolyline;

        /**
          * Returns an array of arrays of geographical points in each polygon.
          */
        getLatLngs(): LatLng[][];

        /**
          * Returns a GeoJSON representation of the multipolyline (GeoJSON MultiLineString Feature).
          */
        toGeoJSON(): any;
    }
}

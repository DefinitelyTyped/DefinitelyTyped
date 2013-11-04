/// <reference path="Path.d.ts" />
/// <reference path="LatLng.d.ts" />
/// <reference path="PolylineOptions.d.ts" />
/// <reference path="LatLngBounds.d.ts" />
declare module L {

    /**
      * Instantiates a polyline object given an array of geographical points and
      * optionally an options object.
      */
    function polyline(latlngs: LatLng[], options?: PolylineOptions): Polyline;

    export class Polyline extends Path {

        /**
          * Instantiates a polyline object given an array of geographical points and
          * optionally an options object.
          */
        constructor(latlngs: LatLng[], options?: PolylineOptions);
    
        /**
          * Adds a given point to the polyline.
          */
        addLatLng(latlng: LatLng): Polyline;
    
        /**
          * Replaces all the points in the polyline with the given array of geographical
          * points.
          */
        setLatLngs(latlngs: LatLng[]): Polyline;
    
        /**
          * Returns an array of the points in the path.
          */
        getLatLngs(): LatLng[];
    
        /**
          * Allows adding, removing or replacing points in the polyline. Syntax is the
          * same as in Array#splice. Returns the array of removed points (if any).
          */
        spliceLatLngs(index: number, pointsToRemove: number, ...latlngs: LatLng[]): LatLng[];
    
        /**
          * Returns the LatLngBounds of the polyline.
          */
        getBounds(): LatLngBounds;

        /**
          * Returns a GeoJSON representation of the polyline (GeoJSON LineString Feature).
          */
        toGeoJSON();
    }
}

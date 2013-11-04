/// <reference path="Path.d.ts" />
/// <reference path="LatLng.d.ts" />
/// <reference path="PathOptions.d.ts" />
declare module L {

    /**
      * Instantiates a circle object given a geographical point, a radius in meters
      * and optionally an options object.
      */
    function circle(latlng: LatLng, radius: number, options?: PathOptions): Circle;

    export class Circle extends Path {

        /**
          * Instantiates a circle object given a geographical point, a radius in meters
          * and optionally an options object.
          */
        constructor(latlng: LatLng, radius: number, options?: PathOptions);
    
        /**
          * Returns the current geographical position of the circle.
          */
        getLatLng(): LatLng;
    
        /**
          * Returns the current radius of a circle. Units are in meters.
          */
        getRadius(): number;
    
        /**
          * Sets the position of a circle to a new location.
          */
        setLatLng(latlng: LatLng): Circle;
    
        /**
          * Sets the radius of a circle. Units are in meters.
          */
        setRadius(radius: number): Circle;

        /**
          * Returns a GeoJSON representation of the circle (GeoJSON Point Feature).
          */
        toGeoJSON(): any;

    }
}

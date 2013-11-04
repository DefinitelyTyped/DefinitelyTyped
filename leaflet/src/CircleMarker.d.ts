/// <reference path="Circle.d.ts" />
/// <reference path="LatLng.d.ts" />
/// <reference path="PathOptions.d.ts" />
declare module L {

    /**
      * Instantiates a circle marker given a geographical point and optionally
      * an options object. The default radius is 10 and can be altered by passing a
      * "radius" member in the path options object.
      */
    function circleMarker(latlng: LatLng, options?: PathOptions): CircleMarker;

    export class CircleMarker extends Circle {

        /**
          * Instantiates a circle marker given a geographical point and optionally
          * an options object. The default radius is 10 and can be altered by passing a
          * "radius" member in the path options object.
          */
        constructor(latlng: LatLng, options?: PathOptions);

        /**
          * Sets the position of a circle marker to a new location.
          */
        setLatLng(latlng: LatLng): CircleMarker;
    
        /**
          * Sets the radius of a circle marker. Units are in pixels.
          */
        setRadius(radius: number): CircleMarker;

        /**
          * Returns a GeoJSON representation of the circle marker (GeoJSON Point Feature).
          */
        toGeoJSON(): any;
    }
}

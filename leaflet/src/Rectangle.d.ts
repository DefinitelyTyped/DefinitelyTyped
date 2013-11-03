/// <reference path="Polygon.d.ts" />
/// <reference path="LatLngBounds.d.ts" />
/// <reference path="PathOptions.d.ts" />
declare module L {

    /**
      * Instantiates a rectangle object with the given geographical bounds and
      * optionally an options object.
      */
    function rectangle(bounds: LatLngBounds, options?: PathOptions): Rectangle;

    export class Rectangle extends Polygon {

        /**
          * Instantiates a rectangle object with the given geographical bounds and
          * optionally an options object.
          */
        constructor(bounds: LatLngBounds, options?: PathOptions);
    
        /**
          * Redraws the rectangle with the passed bounds.
          */
        setBounds(bounds: LatLngBounds): Rectangle;
    }
}

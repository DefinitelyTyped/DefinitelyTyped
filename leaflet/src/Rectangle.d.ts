//// updated to 0.6.4
/// <reference path="Polygon.d.ts" />
/// <reference path="LatLngBounds.d.ts" />
/// <reference path="PathOptions.d.ts" />
declare module L {

    export class Rectangle extends Polygon {

        /**
          * Instantiates a rectangle object with the given geographical bounds and
          * optionally an options object.
          */
        constructor(bounds: LatLngBounds, options?: PathOptions);
    
        /**
          * Instantiates a rectangle object with the given geographical bounds and
          * optionally an options object.
          */
        static rectangle(bounds: LatLngBounds, options?: PathOptions): Rectangle;

        /**
          * Redraws the rectangle with the passed bounds.
          */
        setBounds(bounds: LatLngBounds): Rectangle;
    }
}

//// updated 0.6.4
declare module L {

    export interface PolylineOptions {

        /**
          * How much to simplify the polyline on each zoom level. More means better performance
          * and smoother look, and less means more accurate representation.
          *
          * Default value: 1.0.
          */
        smoothFactor?: number;
    
        /**
          * Disabled polyline clipping.
          *
          * Default value: false.
          */
        noClip?: boolean;
    }
}

declare module L {
    export interface PolylineOptions {
        /**
          * How much to simplify the polyline on each zoom level. More means better performance
          * and smoother look, and less means more accurate representation.
          */
        smoothFactor?: number;
    
        /**
          * Disabled polyline clipping.
          */
        noClip?: boolean;
    
    }
} 
 
 

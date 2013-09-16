


declare module L {
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
 
 

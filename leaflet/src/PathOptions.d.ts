declare module L {
    export interface PathOptions {
        /**
          * Whether to draw stroke along the path. Set it to false to disable borders on
          * polygons or circles.
          */
        stroke?: boolean;
    
        /**
          * Stroke color.
          */
        color?: string;
    
        /**
          * Stroke width in pixels.
          */
        weight?: number;
    
        /**
          * Stroke opacity.
          */
        opacity?: number;
    
        /**
          * Whether to fill the path with color. Set it to false to disable filling on polygons
          * or circles.
          */
        fill?: boolean;
    
        /**
          * Fill color.
          */
        fillColor?: string;
    
        /**
          * Fill opacity.
          */
        fillOpacity?: number;
    
        /**
          * A string that defines the stroke dash pattern. Doesn't work on canvas-powered
          * layers (e.g. Android 2).
          */
        dashArray?: string;
    
        /**
          * If false, the vector will not emit mouse events and will act as a part of the
          * underlying map.
          */
        clickable?: boolean;
    
    }
} 
 
 

declare module L {

    export interface PathOptions {

        /**
          * Whether to draw stroke along the path. Set it to false to disable borders on
          * polygons or circles.
          *
          * Default value: true.
          */
        stroke?: boolean;
    
        /**
          * Stroke color.
          *
          * Default value: '#03f'.
          */
        color?: string;
    
        /**
          * Stroke width in pixels.
          *
          * Default value: 5.
          */
        weight?: number;
    
        /**
          * Stroke opacity.
          *
          * Default value: 0.5.
          */
        opacity?: number;
    
        /**
          * Whether to fill the path with color. Set it to false to disable filling on polygons
          * or circles.
          */
        fill?: boolean;
    
        /**
          * Fill color.
          *
          * Default value: same as color.
          */
        fillColor?: string;
    
        /**
          * Fill opacity.
          *
          * Default value: 0.2.
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
          *
          * Default value: true.
          */
        clickable?: boolean;

        /**
          * Sets the pointer-events attribute on the path if SVG backend is used.
          */
        pointerEvents?: boolean;
    
    }
}

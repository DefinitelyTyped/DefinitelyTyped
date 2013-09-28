/// <reference path="Icon.d.ts" />

declare module L {
    export interface MarkerOptions {
        /**
          * Icon class to use for rendering the marker. See Icon documentation for details
          * on how to customize the marker icon. Set to new L.Icon.Default() by default.
          */
        icon?: Icon;
    
        /**
          * If false, the marker will not emit mouse events and will act as a part of the
          * underlying map.
          */
        clickable?: boolean;
    
        /**
          * Whether the marker is draggable with mouse/touch or not.
          */
        draggable?: boolean;
    
        /**
          * Text for the browser tooltip that appear on marker hover (no tooltip by default).
          */
        title?: string;
    
        /**
          * By default, marker images zIndex is set automatically based on its latitude.
          * You this option if you want to put the marker on top of all others (or below),
          * specifying a high value like 1000 (or high negative value, respectively).
          */
        zIndexOffset?: number;
    
        /**
          * The opacity of the marker.
          */
        opacity?: number;
    
        /**
          * If true, the marker will get on top of others when you hover the mouse over it.
          */
        riseOnHover?: boolean;
    
        /**
          * The z-index offset used for the riseOnHover feature.
          */
        riseOffset?: number;
    
    }
} 
 
 

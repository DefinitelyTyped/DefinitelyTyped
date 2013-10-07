/// <reference path="Point.d.ts" />

declare module L {
    export interface PopupOptions {
        /**
          * Max width of the popup.
          */
        maxWidth?: number;
    
        /**
          * Min width of the popup.
          */
        minWidth?: number;
    
        /**
          * If set, creates a scrollable container of the given height inside a popup
          * if its content exceeds it.
          */
        maxHeight?: number;
    
        /**
          * Set it to false if you don't want the map to do panning animation to fit the opened
          * popup.
          */
        autoPan?: boolean;
    
        /**
          * Controls the presense of a close button in the popup.
          */
        closeButton?: boolean;
    
        /**
          * The offset of the popup position. Useful to control the anchor of the popup
          * when opening it on some overlays.
          */
        offset?: Point;
    
        /**
          * The margin between the popup and the edges of the map view after autopanning
          * was performed.
          */
        autoPanPadding?: Point;
    
        /**
          * Whether to animate the popup on zoom. Disable it if you have problems with
          * Flash content inside popups.
          */
        zoomAnimation?: boolean;
    
    }
} 
 
 

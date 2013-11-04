/// <reference path="Point.d.ts" />
declare module L {

    export interface PopupOptions {

        /**
          * Max width of the popup.
          *
          * Default value: 300.
          */
        maxWidth?: number;
    
        /**
          * Min width of the popup.
          *
          * Default value: 50.
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
          *
          * Default value: true.
          */
        autoPan?: boolean;
    
        /**
          * Controls the presense of a close button in the popup.
          *
          * Default value: true.
          */
        closeButton?: boolean;
    
        /**
          * The offset of the popup position. Useful to control the anchor of the popup
          * when opening it on some overlays.
          *
          * Default value: new Point(0, 6).
          */
        offset?: Point;
    
        /**
          * The margin between the popup and the edges of the map view after autopanning
          * was performed.
          *
          * Default value: new Point(5, 5).
          */
        autoPanPadding?: Point;
    
        /**
          * Whether to animate the popup on zoom. Disable it if you have problems with
          * Flash content inside popups.
          *
          * Default value: true.
          */
        zoomAnimation?: boolean;

        /**
          * Set it to false if you want to override the default behavior of the popup 
          * closing when user clicks the map (set globally by the Map closePopupOnClick
          * option).
          */
        closeOnClick?: boolean;
    }
}

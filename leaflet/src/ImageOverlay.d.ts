/// <reference path="Class.d.ts" />
/// <reference path="ILayer.d.ts" />
/// <reference path="LatLngBounds.d.ts" />
/// <reference path="ImageOverlayOptions.d.ts" />
/// <reference path="Map.d.ts" />
declare module L {

    /**
      * Instantiates an image overlay object given the URL of the image and the geographical
      * bounds it is tied to.
      */
    function imageOverlay(imageUrl: string, bounds: LatLngBounds, options?: ImageOverlayOptions): ImageOverlay;

    export class ImageOverlay extends Class implements ILayer {

        /**
          * Instantiates an image overlay object given the URL of the image and the geographical
          * bounds it is tied to.
          */
        constructor(imageUrl: string, bounds: LatLngBounds, options?: ImageOverlayOptions);

        /**
          * Adds the overlay to the map.
          */
        addTo(map: Map): ImageOverlay;
    
        /**
          * Sets the opacity of the overlay.
          */
        setOpacity(opacity: number): ImageOverlay;
    
        /**
          * Brings the layer to the top of all overlays.
          */
        bringToFront(): ImageOverlay;
    
        /**
          * Brings the layer to the bottom of all overlays.
          */
        bringToBack(): ImageOverlay;

        ////////////
        //// ILayer members
        ////////////
        /**
          * Should contain code that creates DOM elements for the overlay, adds them
          * to map panes where they should belong and puts listeners on relevant map events.
          * Called on map.addLayer(layer).
          */
        onAdd(map: Map): void;
    
        /**
          * Should contain all clean up code that removes the overlay's elements from
          * the DOM and removes listeners previously added in onAdd. Called on map.removeLayer(layer).
          */
        onRemove(map: Map): void;
    }
}

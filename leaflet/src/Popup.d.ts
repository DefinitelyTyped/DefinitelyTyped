/// <reference path="ILayer.d.ts" />
/// <reference path="PopupOptions.d.ts" />
/// <reference path="Map.d.ts" />
/// <reference path="LatLng.d.ts" />
declare module L {

    /**
      * Instantiates a Popup object given an optional options object that describes
      * its appearance and location and an optional object that is used to tag the
      * popup with a reference to the source object to which it refers.
      */
    function popup(options?: PopupOptions, source?: any): Popup;

    export class Popup implements ILayer {

        /**
          * Instantiates a Popup object given an optional options object that describes
          * its appearance and location and an optional object that is used to tag the
          * popup with a reference to the source object to which it refers.
          */
        constructor(options?: PopupOptions, source?: any);
    
        /**
          * Adds the popup to the map.
          */
        addTo(map: Map): Popup;
    
        /**
          * Adds the popup to the map and closes the previous one. The same as map.openPopup(popup).
          */
        openOn(map: Map): Popup;
    
        /**
          * Sets the geographical point where the popup will open.
          */
        setLatLng(latlng: LatLng): Popup;
    
        /**
          * Sets the HTML content of the popup.
          */
        setContent(html: string): Popup;

        /**
          * Sets the HTML content of the popup.
          */
        setContent(el: HTMLElement): Popup;

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

/// <reference path="Class.d.ts" />
/// <reference path="ILayer.d.ts" />
/// <reference path="IEventPowered.d.ts" />
/// <reference path="MarkerOptions.d.ts" />
/// <reference path="Icon.d.ts" />
/// <reference path="Popup.d.ts" />
/// <reference path="PopupOptions.d.ts" />
/// <reference path="LatLng.d.ts" />
declare module L {

    /**
      * Instantiates a Marker object given a geographical point and optionally
      * an options object.
      */
    function marker(latlng: LatLng, options?: MarkerOptions): Marker;

    export class Marker extends Class implements ILayer, IEventPowered<Marker> {

        /**
          * Instantiates a Marker object given a geographical point and optionally
          * an options object.
          */
        constructor(latlng: LatLng, options?: MarkerOptions);
    
        /**
          * Adds the marker to the map.
          */
        addTo(map: Map): Marker;
    
        /**
          * Returns the current geographical position of the marker.
          */
        getLatLng(): LatLng;
    
        /**
          * Changes the marker position to the given point.
          */
        setLatLng(latlng: LatLng): Marker;
    
        /**
          * Changes the marker icon.
          */
        setIcon(icon: Icon): Marker;
    
        /**
          * Changes the zIndex offset of the marker.
          */
        setZIndexOffset(offset: number): Marker;
    
        /**
          * Changes the opacity of the marker.
          */
        setOpacity(opacity: number): Marker;
    
        /**
          * Updates the marker position, useful if coordinates of its latLng object
          * were changed directly.
          */
        update(): Marker;
    
        /**
          * Binds a popup with a particular HTML content to a click on this marker. You
          * can also open the bound popup with the Marker openPopup method.
          */
        bindPopup(html: string, options?: PopupOptions): Marker;
    
        /**
          * Binds a popup with a particular HTML content to a click on this marker. You
          * can also open the bound popup with the Marker openPopup method.
          */
        bindPopup(el: HTMLElement, options?: PopupOptions): Marker;

        /**
          * Binds a popup with a particular HTML content to a click on this marker. You
          * can also open the bound popup with the Marker openPopup method.
          */
        bindPopup(popup: Popup, options?: PopupOptions): Marker;

        /**
          * Unbinds the popup previously bound to the marker with bindPopup.
          */
        unbindPopup(): Marker;
    
        /**
          * Opens the popup previously bound by the bindPopup method.
          */
        openPopup(): Marker;
    
        /**
          * Closes the bound popup of the marker if it's opened.
          */
        closePopup(): Marker;

        /**
          * Toggles the popup previously bound by the bindPopup method.
          */
        togglePopup(): Marker;

        /**
          * Sets an HTML content of the popup of this marker.
          */
        setPopupContent(html: string, options?: PopupOptions): Marker;

        /**
          * Sets an HTML content of the popup of this marker.
          */
        setPopupContent(el: HTMLElement, options?: PopupOptions): Marker;

        /**
          * Returns a GeoJSON representation of the marker (GeoJSON Point Feature).
          */
        toGeoJSON(popup: Popup, options?: PopupOptions): any;

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
        
        ////////////////
        //// Methods for events
        ////////////////
        addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Marker;
        addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Marker;
        removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): Marker;
        hasEventListeners(type: string): boolean;
        fireEvent(type: string, data?: any): Marker;
        on(type: string, fn: (e: LeafletEvent) => void, context?: any): Marker;
        once(type: string, fn: (e: LeafletEvent) => void, context?: any): Marker;
        off(type: string, fn?: (e: LeafletEvent) => void, context?: any): Marker;
        fire(type: string, data?: any): Marker;
		addEventListener(eventMap: any, context?: any): Marker;
        removeEventListener(eventMap?: any, context?: any): Marker;
        cleanAllEventListeners(): Marker
        on(eventMap: any, context?: any): Marker;
        off(eventMap?: any, context?: any): Marker;
    }
}

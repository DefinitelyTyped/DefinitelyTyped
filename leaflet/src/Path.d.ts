/// <reference path="Class.d.ts" />
/// <reference path="ILayer.d.ts" />
/// <reference path="PopupOptions.d.ts" />
/// <reference path="PathOptions.d.ts" />
/// <reference path="LeafletEvent.d.ts" />
/// <reference path="LatLngBounds.d.ts" />
/// <reference path="Map.d.ts" />
/// <reference path="IEventPowered.d.ts" />
declare module L {

    export class Path extends Class implements ILayer, IEventPowered<Path> {

        /**
          * Adds the layer to the map.
          */
        addTo(map: Map): Path;
    
        /**
          * Binds a popup with a particular HTML content to a click on this path.
          */
        bindPopup(html: string, options?: PopupOptions): Path;
    
        /**
          * Binds a popup with a particular HTML content to a click on this path.
          */
        bindPopup(el: HTMLElement, options?: PopupOptions): Path;

        /**
          * Binds a popup with a particular HTML content to a click on this path.
          */
        bindPopup(popup: Popup, options?: PopupOptions): Path;

        /**
          * Unbinds the popup previously bound to the path with bindPopup.
          */
        unbindPopup(): Path;
    
        /**
          * Opens the popup previously bound by the bindPopup method in the given point,
          * or in one of the path's points if not specified.
          */
        openPopup(latlng?: LatLng): Path;
    
        /**
          * Closes the path's bound popup if it is opened.
          */
        closePopup(): Path;
    
        /**
          * Changes the appearance of a Path based on the options in the Path options object.
          */
        setStyle(object: PathOptions): Path;
    
        /**
          * Returns the LatLngBounds of the path.
          */
        getBounds(): LatLngBounds;
    
        /**
          * Brings the layer to the top of all path layers.
          */
        bringToFront(): Path;
    
        /**
          * Brings the layer to the bottom of all path layers.
          */
        bringToBack(): Path;
    
        /**
          * Redraws the layer. Sometimes useful after you changed the coordinates that
          * the path uses.
          */
        redraw(): Path;
    
        /**
          * True if SVG is used for vector rendering (true for most modern browsers).
          */
        static SVG: boolean;
    
        /**
          * True if VML is used for vector rendering (IE 6-8).
          */
        static VML: boolean;
    
        /**
          * True if Canvas is used for vector rendering (Android 2). You can also force
          * this by setting global variable L_PREFER_CANVAS to true before the Leaflet
          * include on your page — sometimes it can increase performance dramatically
          * when rendering thousands of circle markers, but currently suffers from
          * a bug that causes removing such layers to be extremely slow.
          */
        static CANVAS: boolean;
    
        /**
          * How much to extend the clip area around the map view (relative to its size,
          * e.g. 0.5 is half the screen in each direction). Smaller values mean that you
          * will see clipped ends of paths while you're dragging the map, and bigger values
          * decrease drawing performance.
          */
        static CLIP_PADDING: number;

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
        addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Path;
        addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Path;
        removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): Path;
        hasEventListeners(type: string): boolean;
        fireEvent(type: string, data?: any): Path;
        on(type: string, fn: (e: LeafletEvent) => void, context?: any): Path;
        once(type: string, fn: (e: LeafletEvent) => void, context?: any): Path;
        off(type: string, fn?: (e: LeafletEvent) => void, context?: any): Path;
        fire(type: string, data?: any): Path;
		addEventListener(eventMap: any, context?: any): Path;
        removeEventListener(eventMap?: any, context?: any): Path;
        cleanAllEventListeners(): Path
        on(eventMap: any, context?: any): Path;
        off(eventMap?: any, context?: any): Path;
    }
}

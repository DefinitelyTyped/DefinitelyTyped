/// <reference path="Class.d.ts" />
/// <reference path="IEventPowered.d.ts" />
/// <reference path="MapOptions.d.ts" />
/// <reference path="LatLng.d.ts" />
/// <reference path="ZoomPanOptions.d.ts" />
/// <reference path="ZoomOptions.d.ts" />
/// <reference path="LatLngBounds.d.ts" />
/// <reference path="FitBoundsOptions.d.ts" />
/// <reference path="PanOptions.d.ts" />
/// <reference path="ILayer.d.ts" />
/// <reference path="LeafletMouseEvent.d.ts" />
/// <reference path="IHandler.d.ts" />
/// <reference path="Zoom.d.ts" />
/// <reference path="Attribution.d.ts" />
/// <reference path="LocateOptions.d.ts" />
/// <reference path="Bounds.d.ts" />
/// <reference path="PopupOptions.d.ts" />
/// <reference path="Popup.d.ts" />
/// <reference path="MapPanes.d.ts" />
declare module L {

    /**
      * Instantiates a map object given a div element and optionally an
      * object literal with map options described below.
      */
    function map(id: HTMLElement, options?: MapOptions): Map;

    /**
      * Instantiates a map object given a div element id and optionally an
      * object literal with map options described below.
      */
    function map(id: string, options?: MapOptions): Map;

    export class Map extends Class implements IEventPowered<Map> {

        /**
          * Instantiates a map object given a div element and optionally an
          * object literal with map options described below.
          *
          * @constructor
          */
        constructor(id: HTMLElement, options?: MapOptions);

        /**
          * Instantiates a map object given a div element id and optionally an
          * object literal with map options described below.
          *
          * @constructor
          */
        constructor(id: string, options?: MapOptions);

        // Methods for Modifying Map State

        /**
          * Sets the view of the map (geographical center and zoom) with the given
          * animation options.
          */
        setView(center: LatLng, zoom: number, options?: ZoomPanOptions): Map;
    
        /**
          * Sets the zoom of the map.
          */
        setZoom(zoom: number, options?: ZoomOptions): Map;
    
        /**
          * Increases the zoom of the map by delta (1 by default).
          */
        zoomIn(delta?: number, options?: ZoomOptions): Map;
        
        /**
          * Decreases the zoom of the map by delta (1 by default).
          */
        zoomOut(delta?: number, options?: ZoomOptions): Map;

        /**
          * Zooms the map while keeping a specified point on the map stationary
          * (e.g. used internally for scroll zoom and double-click zoom).
          */
        setZoomAround(latlng: LatLng, zoom: number, options?: ZoomOptions): Map;
        
        /**
          * Sets a map view that contains the given geographical bounds with the maximum
          * zoom level possible.
          */
        fitBounds(bounds: LatLngBounds, options?: FitBoundsOptions): Map;
        
        /**
          * Sets a map view that mostly contains the whole world with the maximum zoom
          * level possible.
          */
        fitWorld(options?: FitBoundsOptions): Map;
        
        /**
          * Pans the map to a given center. Makes an animated pan if new center is not more
          * than one screen away from the current one.
          */
        panTo(latlng: LatLng, options?: PanOptions): Map;
    
        /**
          * Pans the map to the closest view that would lie inside the given bounds (if
          * it's not already).
          */
        panInsideBounds(bounds: LatLngBounds): Map;
        
        /**
          * Pans the map by a given number of pixels (animated).
          */
        panBy(point: Point, options?: PanOptions): Map;
        
        /**
          * Checks if the map container size changed and updates the map if so — call it
          * after you've changed the map size dynamically, also animating pan by default.
          * If options.pan is false, panning will not occur.
          */
        invalidateSize(options: ZoomPanOptions): Map;
    
        /**
          * Checks if the map container size changed and updates the map if so — call it
          * after you've changed the map size dynamically, also animating pan by default.
          */
        invalidateSize(animate: boolean): Map;

        /**
          * Restricts the map view to the given bounds (see map maxBounds option),
          * passing the given animation options through to `setView`, if required.
          */
        setMaxBounds(bounds: LatLngBounds, options?: ZoomPanOptions): Map;
    
        /**
          * Tries to locate the user using Geolocation API, firing locationfound event
          * with location data on success or locationerror event on failure, and optionally
          * sets the map view to the user location with respect to detection accuracy
          * (or to the world view if geolocation failed). See Locate options for more
          * details.
          */
        locate(options?: LocateOptions): Map;
        
        /**
          * Stops watching location previously initiated by map.locate({watch: true})
          * and aborts resetting the map view if map.locate was called with {setView: true}.
          */
        stopLocate(): Map;

        /**
          * Destroys the map and clears all related event listeners.
          */
        remove(): Map;
    
        // Methods for Getting Map State

        /**
          * Returns the geographical center of the map view.
          */
        getCenter(): LatLng;
    
        /**
          * Returns the current zoom of the map view.
          */
        getZoom(): number;
    
        /**
          * Returns the minimum zoom level of the map.
          */
        getMinZoom(): number;
    
        /**
          * Returns the maximum zoom level of the map.
          */
        getMaxZoom(): number;
    
        /**
          * Returns the LatLngBounds of the current map view.
          */
        getBounds(): LatLngBounds;
    
        /**
          * Returns the maximum zoom level on which the given bounds fit to the map view
          * in its entirety. If inside (optional) is set to true, the method instead returns
          * the minimum zoom level on which the map view fits into the given bounds in its
          * entirety.
          */
        getBoundsZoom(bounds: LatLngBounds, inside?: boolean): number;
    
        /**
          * Returns the current size of the map container.
          */
        getSize(): Point;
    
        /**
          * Returns the bounds of the current map view in projected pixel coordinates
          * (sometimes useful in layer and overlay implementations).
          */
        getPixelBounds(): Bounds;
    
        /**
          * Returns the projected pixel coordinates of the top left point of the map layer
          * (useful in custom layer and overlay implementations).
          */
        getPixelOrigin(): Point;
    
        // Methods for Layers and Controls

        /**
          * Adds the given layer to the map. If optional insertAtTheBottom is set to true,
          * the layer is inserted under all others (useful when switching base tile layers).
          */
        addLayer(layer: ILayer, insertAtTheBottom?: boolean): Map;
    
        /**
          * Removes the given layer from the map.
          */
        removeLayer(layer: ILayer): Map;
    
        /**
          * Returns true if the given layer is currently added to the map.
          */
        hasLayer(layer: ILayer): boolean;
    
        /**
          * Opens the specified popup while closing the previously opened (to make sure
          * only one is opened at one time for usability).
          */
        openPopup(popup: Popup): Map;
        
        /**
          * Creates a popup with the specified options and opens it in the given point 
          * on a map.
          */
        openPopup(html: string, latlng: LatLng, options?: PopupOptions): Map;
        
        /**
          * Creates a popup with the specified options and opens it in the given point 
          * on a map.
          */
        openPopup(el: HTMLElement, latlng: LatLng, options?: PopupOptions): Map;

        /**
          * Closes the popup previously opened with openPopup (or the given one).
          */
        closePopup(): Map;
    
        /**
          * Adds the given control to the map.
          */
        addControl(control: IControl): Map;
    
        /**
          * Removes the given control from the map.
          */
        removeControl(control: IControl): Map;
    
        // Conversion Methods

        /**
          * Returns the map layer point that corresponds to the given geographical coordinates
          * (useful for placing overlays on the map).
          */
        latLngToLayerPoint(latlng: LatLng): Point;
    
        /**
          * Returns the geographical coordinates of a given map layer point.
          */
        layerPointToLatLng(point: Point): LatLng;
    
        /**
          * Converts the point relative to the map container to a point relative to the
          * map layer.
          */
        containerPointToLayerPoint(point: Point): Point;
    
        /**
          * Converts the point relative to the map layer to a point relative to the map
          * container.
          */
        layerPointToContainerPoint(point: Point): Point;
    
        /**
          * Returns the map container point that corresponds to the given geographical
          * coordinates.
          */
        latLngToContainerPoint(latlng: LatLng): Point;
    
        /**
          * Returns the geographical coordinates of a given map container point.
          */
        containerPointToLatLng(point: Point): LatLng;
    
        /**
          * Projects the given geographical coordinates to absolute pixel coordinates
          * for the given zoom level (current zoom level by default).
          */
        project(latlng: LatLng, zoom?: number): Point;
    
        /**
          * Projects the given absolute pixel coordinates to geographical coordinates
          * for the given zoom level (current zoom level by default).
          */
        unproject(point: Point, zoom?: number): LatLng;
    
        /**
          * Returns the pixel coordinates of a mouse click (relative to the top left corner
          * of the map) given its event object.
          */
        mouseEventToContainerPoint(event: LeafletMouseEvent): Point;
    
        /**
          * Returns the pixel coordinates of a mouse click relative to the map layer given
          * its event object.
          */
        mouseEventToLayerPoint(event: LeafletMouseEvent): Point;
    
        /**
          * Returns the geographical coordinates of the point the mouse clicked on given
          * the click's event object.
          */
        mouseEventToLatLng(event: LeafletMouseEvent): LatLng;
    
        // Other Methods

        /**
          * Returns the container element of the map.
          */
        getContainer(): HTMLElement;
    
        /**
          * Returns an object with different map panes (to render overlays in).
          */
        getPanes(): MapPanes;
    
        // REVIEW: Should we make it more flexible declaring parameter 'fn' as Function?
        /**
          * Runs the given callback when the map gets initialized with a place and zoom,
          * or immediately if it happened already, optionally passing a function context.
          */
        whenReady(fn: (Map) => void, context?: any): Map;
    
        // Properties

        /**
          * Map dragging handler (by both mouse and touch).
          */
        dragging: IHandler;
    
        /**
          * Touch zoom handler.
          */
        touchZoom: IHandler;
    
        /**
          * Double click zoom handler.
          */
        doubleClickZoom: IHandler;
    
        /**
          * Scroll wheel zoom handler.
          */
        scrollWheelZoom: IHandler;
    
        /**
          * Box (shift-drag with mouse) zoom handler.
          */
        boxZoom: IHandler;
    
        /**
          * Keyboard navigation handler.
          */
        keyboard: IHandler;
    
        /**
          * Mobile touch hacks (quick tap and touch hold) handler.
          */
        tap: IHandler;

        /**
          * Zoom control.
          */
        zoomControl: Control.Zoom;

        /**
          * Attribution control.
          */
        attributionControl: Control.Attribution;


        ////////////////
        //// Methods for events
        ////////////////
        addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Map;
        addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Map;
        removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): Map;
        hasEventListeners(type: string): boolean;
        fireEvent(type: string, data?: any): Map;
        on(type: string, fn: (e: LeafletEvent) => void, context?: any): Map;
        once(type: string, fn: (e: LeafletEvent) => void, context?: any): Map;
        off(type: string, fn?: (e: LeafletEvent) => void, context?: any): Map;
        fire(type: string, data?: any): Map;addEventListener(eventMap: any, context?: any): Map;
        removeEventListener(eventMap?: any, context?: any): Map;
        cleanAllEventListeners(): Map
        on(eventMap: any, context?: any): Map;
        off(eventMap?: any, context?: any): Map;
    }
}

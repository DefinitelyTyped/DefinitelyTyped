




declare module L {
    export class TileLayer implements ILayer, IEventPowered<TileLayer> {
        /**
          * Instantiates a tile layer object given a URL template and optionally an options
          * object.
          */
        constructor(urlTemplate: string, options?: TileLayerOptions);
    
        /**
          * Adds the layer to the map.
          */
        addTo(map: Map): TileLayer;
    
        /**
          * Brings the tile layer to the top of all tile layers.
          */
        bringToFront(): TileLayer;
    
        /**
          * Brings the tile layer to the bottom of all tile layers.
          */
        bringToBack(): TileLayer;
    
        /**
          * Changes the opacity of the tile layer.
          */
        setOpacity(opacity: number): TileLayer;
    
        /**
          * Sets the zIndex of the tile layer.
          */
        setZIndex(zIndex: number): TileLayer;
    
        /**
          * Causes the layer to clear all the tiles and request them again.
          */
        redraw(): TileLayer;
    
        /**
          * Updates the layer's URL template and redraws it.
          */
        setUrl(urlTemplate: string): TileLayer;
        static WMS: new () => WMS;
    
        static Canvas: new () => Canvas;
		
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
        addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): TileLayer;
        addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): TileLayer;
        removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): TileLayer;
        hasEventListeners(type: string): boolean;
        fireEvent(type: string, data?: any): TileLayer;
        on(type: string, fn: (e: LeafletEvent) => void, context?: any): TileLayer;
        once(type: string, fn: (e: LeafletEvent) => void, context?: any): TileLayer;
        off(type: string, fn?: (e: LeafletEvent) => void, context?: any): TileLayer;
        fire(type: string, data?: any): TileLayer;
		addEventListener(eventMap: any, context?: any): TileLayer;
        removeEventListener(eventMap?: any, context?: any): TileLayer;
        cleanAllEventListeners(): TileLayer
        on(eventMap: any, context?: any): TileLayer;
        off(eventMap?: any, context?: any): TileLayer;
    }
} 
 
 

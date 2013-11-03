/// <reference path="ILayer.d.ts" />
/// <reference path="Map.d.ts" />
/// <reference path="TileLayerOptions.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="WMS.d.ts" />
/// <reference path="WMSOptions.d.ts" />
/// <reference path="Canvas.d.ts" />
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

        /**
          * Returns the HTML element that contains the tiles for this layer.
          */
        getContainer(): HTMLElement;

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

    module TileLayer {

        export class WMS {

            /**
              * Instantiates a WMS tile layer object given a base URL of the WMS service and
              * a WMS parameters/options object.
              */
            constructor(baseUrl: string, options: WMSOptions);

            /**
              * Merges an object with the new parameters and re-requests tiles on the current
              * screen (unless noRedraw was set to true).
              */
            setParams(params: WMS, noRedraw?: boolean): WMS;
        }

        export class Canvas {

            /**
              * Instantiates a Canvas tile layer object given an options object (optionally).
              */
            constructor(options?: TileLayerOptions);

            /**
              * You need to define this method after creating the instance to draw tiles;
              * canvas is the actual canvas tile on which you can draw, tilePoint represents
              * the tile numbers, and zoom is the current zoom.
              */
            drawTile(canvas: HTMLCanvasElement, tilePoint: Point, zoom: number): Canvas;

            /**
              * Calling redraw will cause the drawTile method to be called for all tiles.
              * May be used for updating dynamic content drawn on the Canvas
              */
            redraw(): Canvas;
        }
    }

    export class tileLayer {
        
        /**
          * Instantiates a tile layer object given a URL template and optionally an options
          * object.
          */
        function (urlTemplate: string, options?: TileLayerOptions): TileLayer;

        /**
          * Instantiates a WMS tile layer object given a base URL of the WMS service and
          * a WMS parameters/options object.
          */
        static wms(baseUrl: string, options: WMSOptions): L.TileLayer.WMS;

        /**
          * Instantiates a Canvas tile layer object given an options object (optionally).
          */
        static canvas(options?: TileLayerOptions): L.TileLayer.Canvas;
    }
}

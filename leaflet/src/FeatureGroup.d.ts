/// <reference path="ILayer.d.ts" />
/// <reference path="IEventPowered.d.ts" />
/// <reference path="PopupOptions.d.ts" />
/// <reference path="LatLngBounds.d.ts" />
/// <reference path="PathOptions.d.ts" />
/// <reference path="LayerGroup.d.ts" />
/// <reference path="LeafletEvent.d.ts" />
/// <reference path="Map.d.ts" />
declare module L {

    /**
      * Create a layer group, optionally given an initial set of layers.
      */
    function featureGroup(layers?: ILayer[]): FeatureGroup;

    export class FeatureGroup extends LayerGroup implements ILayer, IEventPowered<FeatureGroup> {

        /**
          * Create a layer group, optionally given an initial set of layers.
          */
        constructor(layers?: ILayer[]);
    
        /**
          * Binds a popup with a particular HTML content to a click on any layer from the
          * group that has a bindPopup method.
          */
        bindPopup(htmlContent: string, options?: PopupOptions): FeatureGroup;
    
        /**
          * Returns the LatLngBounds of the Feature Group (created from bounds and coordinates
          * of its children).
          */
        getBounds(): LatLngBounds;
    
        /**
          * Sets the given path options to each layer of the group that has a setStyle method.
          */
        setStyle(style: PathOptions): FeatureGroup;
    
        /**
          * Brings the layer group to the top of all other layers.
          */
        bringToFront(): FeatureGroup;
    
        /**
          * Brings the layer group to the bottom of all other layers.
          */
        bringToBack(): FeatureGroup;

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
        addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): FeatureGroup;
        addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): FeatureGroup;
        removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): FeatureGroup;
        hasEventListeners(type: string): boolean;
        fireEvent(type: string, data?: any): FeatureGroup;
        on(type: string, fn: (e: LeafletEvent) => void, context?: any): FeatureGroup;
        once(type: string, fn: (e: LeafletEvent) => void, context?: any): FeatureGroup;
        off(type: string, fn?: (e: LeafletEvent) => void, context?: any): FeatureGroup;
        fire(type: string, data?: any): FeatureGroup;
		addEventListener(eventMap: any, context?: any): FeatureGroup;
        removeEventListener(eventMap?: any, context?: any): FeatureGroup;
        cleanAllEventListeners(): FeatureGroup
        on(eventMap: any, context?: any): FeatureGroup;
        off(eventMap?: any, context?: any): FeatureGroup;
    }
}

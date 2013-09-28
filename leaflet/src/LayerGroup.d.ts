/// <reference path="ILayer.d.ts" />
/// <reference path="Map.d.ts" />


declare module L {
    export class LayerGroup implements ILayer {
        /**
          * Create a layer group, optionally given an initial set of layers.
          */
        constructor(layers?: ILayer[]);
    
        /**
          * Adds the group of layers to the map.
          */
        addTo(map: Map): LayerGroup;
    
        /**
          * Adds a given layer to the group.
          */
        addLayer(layer: ILayer): LayerGroup;
    
        /**
          * Removes a given layer from the group.
          */
        removeLayer(layer: ILayer): LayerGroup;
    
        /**
          * Removes all the layers from the group.
          */
        clearLayers(): LayerGroup;
    
        /**
          * Iterates over the layers of the group, optionally specifying context of
          * the iterator function.
          */
        eachLayer(fn: (layer: ILayer) => void, context?: any): LayerGroup;
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
 
 

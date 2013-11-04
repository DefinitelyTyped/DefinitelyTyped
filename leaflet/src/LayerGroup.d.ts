/// <reference path="Class.d.ts" />
/// <reference path="ILayer.d.ts" />
/// <reference path="Map.d.ts" />
declare module L {

    /**
      * Create a layer group, optionally given an initial set of layers.
      */
    function layerGroup(layers?: ILayer[]): LayerGroup;

    export class LayerGroup extends Class implements ILayer {

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
          * Removes a given layer of the given id from the group.
          */
        removeLayer(id: string): LayerGroup;

        /**
          * Returns true if the given layer is currently added to the group.
          */
        hasLayer(layer: ILayer): boolean;

        /**
          * Returns the layer with the given id.
          */
        getLayer(id: string): ILayer;

        /**
          * Returns an array of all the layers added to the group.
          */
        getLayers(): ILayer[];

        /**
          * Removes all the layers from the group.
          */
        clearLayers(): LayerGroup;
    
        /**
          * Iterates over the layers of the group, optionally specifying context of
          * the iterator function.
          */
        eachLayer(fn: (layer: ILayer) => void, context?: any): LayerGroup;

        /**
          * Returns a GeoJSON representation of the layer group (GeoJSON FeatureCollection).
          */
        toGeoJSON(): any;

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

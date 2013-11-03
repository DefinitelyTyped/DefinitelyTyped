/// <reference path="ILayer.d.ts" />
/// <reference path="LeafletEvent.d.ts" />
declare module L {

    export interface Leaflet extends LeafletEvent {

        /**
          * The layer for the GeoJSON feature that is being added to the map.
          */
        layer: ILayer;
    
        /**
          * GeoJSON properties of the feature.
          */
        properties: any;
    
        /**
          * GeoJSON geometry type of the feature.
          */
        geometryType: string;
    
        /**
          * GeoJSON ID of the feature (if present).
          */
        id: string;
    }
}

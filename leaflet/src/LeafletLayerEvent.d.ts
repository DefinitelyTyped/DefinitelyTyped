

declare module L {
    export interface LeafletLayerEvent extends LeafletEvent {
        /**
          * The layer that was added or removed.
          */
        layer: ILayer;
    
    }
} 
 
 

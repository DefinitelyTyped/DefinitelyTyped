/// <reference path="LeafletEvent.d.ts" />
/// <reference path="ILayer.d.ts" />
declare module L {

    export interface LeafletLayerEvent extends LeafletEvent {

        /**
          * The layer that was added or removed.
          */
        layer: ILayer;
    }
}

//// updated to 0.6.4
/// <reference path="LeafletEvent.d.ts" />
declare module L {

    export interface LeafletTileEvent extends LeafletEvent {

        /**
          * The tile element (image).
          */
        tile: HTMLElement;
    
        /**
          * The source URL of the tile.
          */
        url: string;
    }
}

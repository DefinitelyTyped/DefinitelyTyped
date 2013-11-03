/// <reference path="LeafletEvent.d.ts" />
declare module L {

    export interface LeafletErrorEvent extends LeafletEvent {

        /**
          * Error message.
          */
        message: string;
    
        /**
          * Error code (if applicable).
          */
        code: number;
    }
}

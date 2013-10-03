//// updated to 0.6.4
declare module L {

    export interface IHandler {

        /**
          * Enables the handler.
          */
        enable(): void;
    
        /**
          * Disables the handler.
          */
        disable(): void;
    
        /**
          * Returns true if the handler is enabled.
          */
        enabled(): boolean;
    }
}

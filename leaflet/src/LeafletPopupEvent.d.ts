

declare module L {
    export interface LeafletPopupEvent extends LeafletEvent {
        /**
          * The popup that was opened or closed.
          */
        popup: Popup;
    
    }
} 
 
 



declare module L {
    export interface LeafletResizeEvent extends LeafletEvent {
        /**
          * The old size before resize event.
          */
        oldSize: Point;
        
        /**
          * The new size after the resize event.
          */
        newSize: Point;
    
    }
} 
 
 

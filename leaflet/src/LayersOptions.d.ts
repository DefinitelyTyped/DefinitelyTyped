declare module L {

    export interface LayersOptions {

        /**
          * The position of the control (one of the map corners). See control positions.
          *
          * Default value: 'topright'.
          */
        position?: string;
    
        /**
          * If true, the control will be collapsed into an icon and expanded on mouse hover
          * or touch.
          *
          * Default value: true.
          */
        collapsed?: boolean;
    
        /**
          * If true, the control will assign zIndexes in increasing order to all of its
          * layers so that the order is preserved when switching them on/off.
          *
          * Default value: true.
          */
        autoZIndex?: boolean;
    
    }
}

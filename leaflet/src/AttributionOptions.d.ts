declare module L {

    export interface AttributionOptions {

        /**
          * The position of the control (one of the map corners). See control positions.
          * Default value: 'bottomright'.
          */
        position?: string;
    
        /**
          * The HTML text shown before the attributions. Pass false to disable.
          * Default value: 'Powered by Leaflet'.
          */
        prefix?: string;
    
    }
}

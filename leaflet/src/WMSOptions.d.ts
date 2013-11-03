declare module L {

    export interface WMSOptions {

        /**
          * (required) Comma-separated list of WMS layers to show.
          *
          * Default value: ''.
          */
        layers?: string;
    
        /**
          * Comma-separated list of WMS styles.
          *
          * Default value: 'image/jpeg'.
          */
        styles?: string;
    
        /**
          * WMS image format (use 'image/png' for layers with transparency).
          *
          * Default value: false.
          */
        format?: string;
    
        /**
          * If true, the WMS service will return images with transparency.
          *
          * Default value: '1.1.1'.
          */
        transparent?: boolean;
    
        /**
          * Version of the WMS service to use.
          */
        version?: string;
    
    }
}

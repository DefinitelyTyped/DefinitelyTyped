declare module L {
    export interface WMSOptions {
        /**
          * (required) Comma-separated list of WMS layers to show.
          */
        layers?: string;
    
        /**
          * Comma-separated list of WMS styles.
          */
        styles?: string;
    
        /**
          * WMS image format (use 'image/png' for layers with transparency).
          */
        format?: string;
    
        /**
          * If true, the WMS service will return images with transparency.
          */
        transparent?: boolean;
    
        /**
          * Version of the WMS service to use.
          */
        version?: string;
    
    }
} 
 
 

declare module L {
    export interface LocateOptions {
        /**
          * If true, starts continous watching of location changes (instead of detecting
          * it once) using W3C watchPosition method. You can later stop watching using
          * map.stopLocate() method.
          */
        watch?: boolean;
        
        /**
          * If true, automatically sets the map view to the user location with respect
          * to detection accuracy, or to world view if geolocation failed.
          */
        setView?: boolean;
        
        /**
          * The maximum zoom for automatic view setting when using `setView` option.
          */
        maxZoom?: number;
        
        /**
          * Number of millisecond to wait for a response from geolocation before firing
          * a locationerror event.
          */
        timeout?: number;
        
        /**
          * Maximum age of detected location. If less than this amount of milliseconds
          * passed since last geolocation response, locate will return a cached location.
          */
        maximumAge?: number;
        
        /**
          * Enables high accuracy, see description in the W3C spec.
          */
        enableHighAccuracy?: boolean;
    }
} 
 
 

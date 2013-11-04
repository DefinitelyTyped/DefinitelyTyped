declare module L {

    export interface LocateOptions {

        /**
          * If true, starts continous watching of location changes (instead of detecting
          * it once) using W3C watchPosition method. You can later stop watching using
          * map.stopLocate() method.
          *
          * Default value: false.
          */
        watch?: boolean;
        
        /**
          * If true, automatically sets the map view to the user location with respect
          * to detection accuracy, or to world view if geolocation failed.
          *
          * Default value: false.
          */
        setView?: boolean;
        
        /**
          * The maximum zoom for automatic view setting when using `setView` option.
          *
          * Default value: Infinity.
          */
        maxZoom?: number;
        
        /**
          * Number of millisecond to wait for a response from geolocation before firing
          * a locationerror event.
          *
          * Default value: 10000.
          */
        timeout?: number;
        
        /**
          * Maximum age of detected location. If less than this amount of milliseconds
          * passed since last geolocation response, locate will return a cached location.
          *
          * Default value: 0.
          */
        maximumAge?: number;
        
        /**
          * Enables high accuracy, see description in the W3C spec.
          *
          * Default value: false.
          */
        enableHighAccuracy?: boolean;
    }
}

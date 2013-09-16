


declare module L {
    export interface LeafletLocationEvent extends LeafletEvent {
        /**
          * Detected geographical location of the user.
          */
        latlng: LatLng;
    
        /**
          * Geographical bounds of the area user is located in (with respect to the accuracy
          * of location).
          */
        bounds: LatLngBounds;
    
        /**
          * Accuracy of location in meters.
          */
        accuracy: number;
    
    }
} 
 
 

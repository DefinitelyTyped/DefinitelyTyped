/// <reference path="LeafletEvent.d.ts" />
/// <reference path="LatLng.d.ts" />
/// <reference path="LatLngBounds.d.ts" />
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

        /**
          * Height of the position above the WGS84 ellipsoid in meters.
          */
        altitude: number;

        /**
          * Accuracy of altitude in meters.
          */
        altitudeAccuracy: number;

        /**
          * The direction of travel in degrees counting clockwise from true North.
          */
        heading: number;

        /**
          * Current velocity in meters per second.
          */
        speed: number;

        /**
          * The time when the position was acquired.
          */
        timestamp: number;
    
    }
}

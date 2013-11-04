declare module L {

    /**
      * Creates an object representing a geographical point with the given latitude
      * and longitude.
      */
    function latLng(latitude: number, longitude: number): LatLng;

    /**
      * Creates an object representing a geographical point with the given latitude
      * and longitude.
      */
    function latLng(coords: number[]): LatLng;

    export class LatLng {

        /**
          * Creates an object representing a geographical point with the given latitude
          * and longitude.
          */
        constructor(latitude: number, longitude: number);
    
        /**
          * Creates an object representing a geographical point with the given latitude
          * and longitude.
          */
        constructor(coords: number[]);

        /**
          * Returns the distance (in meters) to the given LatLng calculated using the
          * Haversine formula. See description on wikipedia
          */
        distanceTo(otherLatlng: LatLng): number;
    
        /**
          * Returns true if the given LatLng point is at the same position (within a small
          * margin of error).
          */
        equals(otherLatlng: LatLng): boolean;
    
        /**
          * Returns a string representation of the point (for debugging purposes).
          */
        toString(): string;
    
        /**
          * Returns a new LatLng object with the longitude wrapped around left and right
          * boundaries (-180 to 180 by default).
          */
        wrap(left: number, right: number): LatLng;
    
        /**
          * Latitude in degrees.
          */
        lat: number;
    
        /**
          * Longitude in degrees.
          */
        lng: number;

        /**
          * A multiplier for converting degrees into radians.
          *
          * Value: Math.PI / 180.
          */
        static DEG_TO_RAD: number;		

        /**
          * A multiplier for converting radians into degrees.
          *
          * Value: 180 / Math.PI.
          */
        static RAD_TO_DEG: number;

        /**
          * Max margin of error for the equality check.
          *
          * Value: 1.0E-9.
          */
        static MAX_MARGIN: number;
    }
}

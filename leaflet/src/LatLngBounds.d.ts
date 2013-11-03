/// <reference path="LatLng.d.ts" />
declare module L {

    /**
      * Creates a LatLngBounds object by defining south-west and north-east corners
      * of the rectangle.
      */
    function latLngBounds(southWest: LatLng, northEast: LatLng): LatLngBounds;

    /**
      * Creates a LatLngBounds object defined by the geographical points it contains.
      * Very useful for zooming the map to fit a particular set of locations with fitBounds.
      */
    function latLngBounds(latlngs: LatLng[]): LatLngBounds;

    export class LatLngBounds {

        /**
          * Creates a LatLngBounds object by defining south-west and north-east corners
          * of the rectangle.
          */
        constructor(southWest: LatLng, northEast: LatLng);
    
        /**
          * Creates a LatLngBounds object defined by the geographical points it contains.
          * Very useful for zooming the map to fit a particular set of locations with fitBounds.
          */
        constructor(latlngs: LatLng[]);

        /**
          * Extends the bounds to contain the given point.
          */
        extend(latlng: LatLng): LatLngBounds;
    
        /**
          * Extends the bounds to contain the given bounds.
          */
        extend(latlng: LatLngBounds): LatLngBounds;

        /**
          * Returns the south-west point of the bounds.
          */
        getSouthWest(): LatLng;
    
        /**
          * Returns the north-east point of the bounds.
          */
        getNorthEast(): LatLng;
    
        /**
          * Returns the north-west point of the bounds.
          */
        getNorthWest(): LatLng;
    
        /**
          * Returns the south-east point of the bounds.
          */
        getSouthEast(): LatLng;
    
        /**
          * Returns the center point of the bounds.
          */
        getCenter(): LatLng;
    
        /**
          * Returns true if the rectangle contains the given one.
          */
        contains(otherBounds: LatLngBounds): boolean;
    
        /**
          * Returns true if the rectangle contains the given point.
          */
        contains(latlng: LatLng): boolean;
    
        /**
          * Returns true if the rectangle intersects the given bounds.
          */
        intersects(otherBounds: LatLngBounds): boolean;
    
        /**
          * Returns true if the rectangle is equivalent (within a small margin of error)
          * to the given bounds.
          */
        equals(otherBounds: LatLngBounds): boolean;
    
        /**
          * Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat'
          * format. Useful for sending requests to web services that return geo data.
          */
        toBBoxString(): string;
    
        /**
          * Returns bigger bounds created by extending the current bounds by a given
          * percentage in each direction.
          */
        pad(bufferRatio: number): LatLngBounds;
    
        /**
          * Returns true if the bounds are properly initialized.
          */
        isValid(): boolean;
    
    }
}

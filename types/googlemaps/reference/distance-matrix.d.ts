declare namespace google.maps {
    /**
     * A service for computing distances between multiple origins and destinations.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixService Maps JavaScript API}
     */
    class DistanceMatrixService {
        /**
         * Issues a distance matrix request.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixService.getDistanceMatrix Maps JavaScript API}
         */
        getDistanceMatrix(
            request: DistanceMatrixRequest,
            callback: (response: DistanceMatrixResponse, status: DistanceMatrixStatus) => void,
        ): void;
    }

    interface DistanceMatrixRequest {
        destinations: Array<string | LatLng | LatLngLiteral | Place>;
        origins: Array<string | LatLng | LatLngLiteral | Place>;
        travelMode: TravelMode;
        avoidFerries?: boolean;
        avoidHighways?: boolean;
        avoidTolls?: boolean;
        drivingOptions?: DrivingOptions;
        region?: string;
        transitOptions?: TransitOptions;
        unitSystem?: UnitSystem;
    }

    interface DistanceMatrixResponse {
        destinationAddresses: string[];
        originAddresses: string[];
        rows: DistanceMatrixResponseRow[];
    }

    interface DistanceMatrixResponseRow {
        elements: DistanceMatrixResponseElement[];
    }

    interface DistanceMatrixResponseElement {
        distance: Distance;
        duration: Duration;
        duration_in_traffic: Duration;
        fare: TransitFare;
        status: DistanceMatrixElementStatus;
    }

    /**
     * The top-level status about the request in general returned by the {@link DistanceMatrixService} upon completion
     * of a distance matrix request. Specify these by value, or by using the constant's name.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixStatus Maps JavaScript API}
     */
    enum DistanceMatrixStatus {
        /**
         * The provided request was invalid.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixStatus.INVALID_REQUEST Maps JavaScript API}
         */
        INVALID_REQUEST = 'INVALID_REQUEST',

        /**
         * The request contains more than 25 origins, or more than 25 destinations.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixStatus.MAX_DIMENSIONS_EXCEEDED Maps JavaScript API}
         */
        MAX_DIMENSIONS_EXCEEDED = 'MAX_DIMENSIONS_EXCEEDED',

        /**
         * The product of origins and destinations exceeds the per-query limit.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixStatus.MAX_ELEMENTS_EXCEEDED Maps JavaScript API}
         */
        MAX_ELEMENTS_EXCEEDED = 'MAX_ELEMENTS_EXCEEDED',

        /**
         * The response contains a valid result.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixStatus.OK Maps JavaScript API}
         */
        OK = 'OK',

        /**
         * Too many elements have been requested within the allowed time period. The request should succeed if you try again after some time.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixStatus.OVER_QUERY_LIMIT Maps JavaScript API}
         */
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',

        /**
         * The service denied use of the Distance Matrix service by your web page.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixStatus.REQUEST_DENIED Maps JavaScript API}
         */
        REQUEST_DENIED = 'REQUEST_DENIED',

        /**
         * A Distance Matrix request could not be processed due to a server error. The request may succeed if you try again.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixStatus.UNKNOWN_ERROR Maps JavaScript API}
         */
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    }

    /**
     * The element-level status about a particular origin-destination pairing returned by the
     * {@link DistanceMatrixService} upon completion of a distance matrix request.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixElementStatus Maps JavaScript API}
     */
    enum DistanceMatrixElementStatus {
        /**
         * The origin and/or destination of this pairing could not be geocoded.
         * @see {@link  Maps JavaScript API}
         */
        NOT_FOUND = 'NOT_FOUND',

        /**
         * The response contains a valid result.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixElementStatus.OK Maps JavaScript API}
         */
        OK = 'OK',

        /**
         * No route could be found between the origin and destination.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixElementStatus.ZERO_RESULTS Maps JavaScript API}
         */
        ZERO_RESULTS = 'ZERO_RESULTS',
    }
}

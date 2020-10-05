declare namespace google.maps {
    class DistanceMatrixService {
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

    enum DistanceMatrixStatus {
        INVALID_REQUEST = 'INVALID_REQUEST',
        MAX_DIMENSIONS_EXCEEDED = 'MAX_DIMENSIONS_EXCEEDED',
        MAX_ELEMENTS_EXCEEDED = 'MAX_ELEMENTS_EXCEEDED',
        OK = 'OK',
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
        REQUEST_DENIED = 'REQUEST_DENIED',
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

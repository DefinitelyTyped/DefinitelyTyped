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

    /**
     * A distance matrix query sent by the {@link DistanceMatrixService} containing arrays of origin and destination
     * locations, and various options for computing metrics.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest Maps JavaScript API}
     */
    interface DistanceMatrixRequest {
        /**
         * An array containing destination address strings, or {@link LatLng}, or {@link Place} objects, to which to
         * calculate distance and time.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest.destinations Maps JavaScript API}
         */
        destinations: Array<string | LatLng | LatLngLiteral | Place>;

        /**
         * An array containing origin address strings, or {@link LatLng}, or {@link Place} objects, from which to
         * calculate distance and time.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest.origins Maps JavaScript API}
         */
        origins: Array<string | LatLng | LatLngLiteral | Place>;

        /**
         * Type of routing requested.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest.travelMode Maps JavaScript API}
         */
        travelMode: TravelMode;

        /**
         * If true, instructs the Distance Matrix service to avoid ferries where possible.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest.avoidFerries Maps JavaScript API}
         */
        avoidFerries?: boolean;

        /**
         * If true, instructs the Distance Matrix service to avoid highways where possible.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest.avoidHighways Maps JavaScript API}
         */
        avoidHighways?: boolean;

        /**
         * If true, instructs the Distance Matrix service to avoid toll roads where possible.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest.avoidTolls Maps JavaScript API}
         */
        avoidTolls?: boolean;

        /**
         * Settings that apply only to requests where {@link travelMode} is {@link TravelMode.DRIVING DRIVING}. This
         * object will have no effect for other travel modes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest.drivingOptions Maps JavaScript API}
         */
        drivingOptions?: DrivingOptions;

        /**
         * Region code used as a bias for geocoding requests.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest.region Maps JavaScript API}
         */
        region?: string;

        /**
         * Settings that apply only to requests where {@link travelMode} is {@link TravelMode.TRANSIT TRANSIT}. This
         * object will have no effect for other travel modes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest.transitOptions Maps JavaScript API}
         */
        transitOptions?: TransitOptions;

        /**
         * Preferred unit system to use when displaying distance.
         * @default UnitSystem.METRIC
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixRequest.unitSystem Maps JavaScript API}
         */
        unitSystem?: UnitSystem;
    }

    /**
     * The response to a {@link DistanceMatrixService} request, consisting of the formatted origin and destination
     * addresses, and a sequence of {@link DistanceMatrixResponseRow}s, one for each corresponding origin address.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponse Maps JavaScript API}
     */
    interface DistanceMatrixResponse {
        /**
         * The formatted destination addresses.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponse.destinationAddresses Maps JavaScript API}
         */
        destinationAddresses: string[];

        /**
         * The formatted origin addresses.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponse.originAddresses Maps JavaScript API}
         */
        originAddresses: string[];

        /**
         * The rows of the matrix, corresponding to the origin addresses.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponse.rows Maps JavaScript API}
         */
        rows: DistanceMatrixResponseRow[];
    }

    /**
     * A row of the response to a {@link DistanceMatrixService} request, consisting of a sequence of
     * {@link DistanceMatrixResponseElement}s, one for each corresponding destination address.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponseRow Maps JavaScript API}
     */
    interface DistanceMatrixResponseRow {
        /**
         * The row's elements, corresponding to the destination addresses.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponseRow.elements Maps JavaScript API}
         */
        elements: DistanceMatrixResponseElement[];
    }

    /**
     * A single element of a response to a {@link DistanceMatrixService} request, which contains the duration and
     * distance from one origin to one destination.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponseElement Maps JavaScript API}
     */
    interface DistanceMatrixResponseElement {
        /**
         * The distance for this origin-destination pairing. This property may be undefined as the distance may be
         * unknown.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponseElement.distance Maps JavaScript API}
         */
        distance: Distance;

        /**
         * The duration for this origin-destination pairing. This property may be undefined as the duration may be
         * unknown.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponseElement.duration Maps JavaScript API}
         */
        duration: Duration;

        /**
         * The duration for this origin-destination pairing, taking into account the traffic conditions indicated by the
         * `trafficModel` property. This property may be undefined as the duration may be unknown. Only available to
         * Premium Plan customers when {@link DistanceMatrixRequest#drivingOptions drivingOptions} is defined when
         * making the request.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponseElement.duration_in_traffic Maps JavaScript API}
         */
        duration_in_traffic: Duration;

        /**
         * The total fare for this origin-destination pairing. Only applicable to transit requests.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponseElement.fare Maps JavaScript API}
         */
        fare: TransitFare;

        /**
         * The status of this particular origin-destination pairing.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixResponseElement.status Maps JavaScript API}
         */
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
         * Too many elements have been requested within the allowed time period. The request should succeed if you try
         * again after some time.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixStatus.OVER_QUERY_LIMIT Maps JavaScript API}
         */
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',

        /**
         * The service denied use of the Distance Matrix service by your web page.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixStatus.REQUEST_DENIED Maps JavaScript API}
         */
        REQUEST_DENIED = 'REQUEST_DENIED',

        /**
         * A Distance Matrix request could not be processed due to a server error. The request may succeed if you try
         * again.
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
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/distance-matrix#DistanceMatrixElementStatus.NOT_FOUND Maps JavaScript API}
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

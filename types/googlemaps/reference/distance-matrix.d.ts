declare namespace google.maps {
    class DistanceMatrixService {
        getDistanceMatrix(
            request: DistanceMatrixRequest,
            callback: (response: DistanceMatrixResponse, status: DistanceMatrixStatus) => void,
        ): void;
    }

    interface DistanceMatrixRequest {
        avoidFerries?: boolean;
        avoidHighways?: boolean;
        avoidTolls?: boolean;
        destinations?: Array<(string | LatLng | LatLngLiteral | Place)>;
        drivingOptions?: DrivingOptions;
        durationInTraffic?: boolean;
        origins?: Array<(string | LatLng | LatLngLiteral | Place)>;
        region?: string;
        transitOptions?: TransitOptions;
        travelMode?: TravelMode;
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

    enum DistanceMatrixElementStatus {
        NOT_FOUND = 'NOT_FOUND',
        OK = 'OK',
        ZERO_RESULTS = 'ZERO_RESULTS',
    }
}

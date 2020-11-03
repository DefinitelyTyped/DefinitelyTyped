declare namespace google.maps {
    class ElevationService {
        getElevationAlongPath(
            request: PathElevationRequest,
            callback: (results: ElevationResult[], status: ElevationStatus) => void,
        ): void;
        getElevationForLocations(
            request: LocationElevationRequest,
            callback: (results: ElevationResult[], status: ElevationStatus) => void,
        ): void;
    }

    interface LocationElevationRequest {
        locations: Array<LatLngLiteral | LatLng>;
    }

    interface PathElevationRequest {
        path?: Array<LatLngLiteral | LatLng>;
        samples?: number;
    }

    interface ElevationResult {
        elevation: number;
        location: LatLng;
        resolution: number;
    }

    enum ElevationStatus {
        INVALID_REQUEST = 'INVALID_REQUEST',
        OK = 'OK',
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
        REQUEST_DENIED = 'REQUEST_DENIED',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    }
}

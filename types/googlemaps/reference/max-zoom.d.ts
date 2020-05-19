declare namespace google.maps {
    class MaxZoomService {
        getMaxZoomAtLatLng(latlng: LatLng | LatLngLiteral, callback: (result: MaxZoomResult) => void): void;
    }

    interface MaxZoomResult {
        status: MaxZoomStatus;
        zoom: number;
    }

    enum MaxZoomStatus {
        ERROR = 'ERROR',
        OK = 'OK',
    }
}

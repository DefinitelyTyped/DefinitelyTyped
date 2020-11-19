import LatLng = google.maps.LatLng;
import MaxZoomService = google.maps.MaxZoomService;
import MaxZoomStatus = google.maps.MaxZoomStatus;

const maxZoom = new MaxZoomService();

maxZoom.getMaxZoomAtLatLng(new LatLng(0, 0), () => {});
maxZoom.getMaxZoomAtLatLng({ lat: 0, lng: 0 }, result => {
    result.status; // $ExpectType MaxZoomStatus
    result.zoom; // $ExpectError

    if (result.status === MaxZoomStatus.OK) {
        result.status; // $ExpectType MaxZoomStatus.OK
        result.zoom; // $ExpectType number
        return;
    }

    result.status; // $ExpectType MaxZoomStatus.ERROR
    result.zoom; // $ExpectError
});

export {};

import DistanceMatrixService = google.maps.DistanceMatrixService;
import LatLng = google.maps.LatLng;
import TravelMode = google.maps.TravelMode;

const distanceMatrixService = new DistanceMatrixService();

distanceMatrixService.getDistanceMatrix({}, () => {}); // $ExpectError
distanceMatrixService.getDistanceMatrix(
    {
        destinations: ['', new LatLng(0, 0), { lat: 0, lng: 0 }, { query: '' }],
        origins: ['', new LatLng(0, 0), { lat: 0, lng: 0 }, { query: '' }],
        travelMode: TravelMode.WALKING,
    },
    (response, status) => {
        response; // $ExpectType DistanceMatrixResponse
        status; // $ExpectType DistanceMatrixStatus
    },
);

export {};

import Geocoder = google.maps.Geocoder;

const geocoder = new Geocoder();

geocoder.geocode({}, (results, status) => {
    results; // $ExpectType GeocoderResult[]
    status; // $ExpectType GeocoderStatus
});

export {};

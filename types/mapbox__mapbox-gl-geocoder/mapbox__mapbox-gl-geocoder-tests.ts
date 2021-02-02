import MapboxGeocoder, { GeocoderOptions, LngLatLiteral } from 'mapbox__mapbox-gl-geocoder';

const token = 'token';

const options: GeocoderOptions = {
    accessToken: 'token',
};

const geocoder = new MapboxGeocoder({
    accessToken: token
});

// $ExpectedType MapboxGeocoder
geocoder.query('Paris');

// $ExpectedType MapboxGeocoder
geocoder.setProximity({latitude: 12, longitude: 42});

// $ExpectedType LngLatLiteral
geocoder.getProximity();

// $ExpectedType MapboxGeocoder
geocoder.setLanguage('en');

// $ExpectedType string
geocoder.getLanguage();

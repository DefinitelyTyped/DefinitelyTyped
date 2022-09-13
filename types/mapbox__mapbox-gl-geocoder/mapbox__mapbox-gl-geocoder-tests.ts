import MapboxGeocoder, { GeocoderOptions, LngLatLiteral } from 'mapbox__mapbox-gl-geocoder';

const token = 'token';

const geocoder = new MapboxGeocoder({
    accessToken: token,
});

// $ExpectType MapboxGeocoder
geocoder.query('Paris');

// $ExpectType MapboxGeocoder
geocoder.setProximity({ latitude: 12, longitude: 42 });

// $ExpectType LngLatLiteral
geocoder.getProximity();

// $ExpectType MapboxGeocoder
geocoder.setLanguage('en');

// $ExpectType string
geocoder.getLanguage();

// $ExpectType void
geocoder.clear();

// $ExpectType void
geocoder.clear(new Event('clear'));

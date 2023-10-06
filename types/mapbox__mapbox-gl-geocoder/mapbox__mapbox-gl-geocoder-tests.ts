import MapboxGeocoder, { GeocoderOptions, LngLatLiteral } from "mapbox__mapbox-gl-geocoder";

const token = "token";

const geocoder = new MapboxGeocoder({
    accessToken: token,
});

// $ExpectType MapboxGeocoder
geocoder.query("Paris");

// $ExpectType MapboxGeocoder
geocoder.setProximity({ latitude: 12, longitude: 42 });

// $ExpectType LngLatLiteral
geocoder.getProximity();

// $ExpectType MapboxGeocoder
geocoder.setLanguage("en");

// $ExpectType string
geocoder.getLanguage();

// $ExpectType void
geocoder.clear();

// $ExpectType void
geocoder.clear(new Event("clear"));

// $ExpectType MapboxGeocoder
geocoder.setAutocomplete(true);

// $ExpectType boolean
geocoder.getAutocomplete();

// $ExpectType MapboxGeocoder
geocoder.setFuzzyMatch(true);

// $ExpectType boolean
geocoder.getFuzzyMatch();

// $ExpectType MapboxGeocoder
geocoder.setRouting(true);

// $ExpectType boolean
geocoder.getRouting();

// $ExpectType MapboxGeocoder
geocoder.setWorldview("en");

// $ExpectType string
geocoder.getWorldview();

import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "mapbox__mapbox-gl-geocoder";

let geocoder = new MapboxGeocoder({ accessToken: "accessToken" });

geocoder = new MapboxGeocoder({
    accessToken: "accessToken",
    origin: "https://api.mapbox.com",
    zoom: 1,
    placeholder: "placeholder",
    flyTo: true,
    proximity: { longitude: 1, latitude: 1 },
    trackProximity: true,
    collapsed: true,
    clearAndBlurOnEsc: true,
    clearOnBlur: true,
    bbox: [1, 2, 3, 4],
    flipCoordinates: true,
    types: "types",
    countries: "countries",
    minLength: 1,
    limit: 1,
    language: "language",
    filter: (feature) => true,
    externalGeocoder: (searchInput, features) => Promise.resolve([]),
    reverseGeocode: true,
    enableEventLogging: true,
    enableGeolocation: true,
    addressAccuracy: "address",
    marker: true,
    render: (feature) => "render",
    getItemValue: (feature) => "getItemValue",
    mode: "mapbox.places",
    localGeocoder: (query) => [],
    localGeocoderOnly: true,
    autocomplete: true,
    fuzzyMatch: true,
    routing: true,
    worldview: "worldview",
    useBrowserFocus: true,
    reverseMode: "distance",
});

// $ExpectType MapboxGeocoder
geocoder.query("Paris");

// $ExpectType MapboxGeocoder
geocoder.setProximity({ latitude: 12, longitude: 42 });
// $ExpectType MapboxGeocoder
geocoder.setProximity({ latitude: 12, longitude: 42 }, false);

// $ExpectType MapboxGeocoder
geocoder.setProximity("ip");

// $ExpectType MapboxGeocoder
geocoder.setProximity("ip", false);

// $ExpectType LngLatLiteral
geocoder.getProximity();

// $ExpectType MapboxGeocoder
geocoder.setLanguage("en");

// $ExpectType string
geocoder.getLanguage();

// $ExpectType MapboxGeocoder
geocoder.setInput("Paris");

// $ExpectType MapboxGeocoder
geocoder.setInput("Paris", false);

// $ExpectType MapboxGeocoder
geocoder.setInput("Paris", true);

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

// $ExpectType MapboxGeocoder
geocoder.setFilter((feature) => true);

// $ExpectType (feature: Result) => boolean
geocoder.getFilter();

// $ExpectType MapboxGeocoder
geocoder.setOrigin("https://example.com");

// $ExpectType string
geocoder.getOrigin();

// $ExpectType MapboxGeocoder
geocoder.on("clear", () => {});
// $ExpectType MapboxGeocoder
geocoder.on("loading", (args: { query: string }) => {});
// $ExpectType MapboxGeocoder
geocoder.on("results", (args: { results: MapboxGeocoder.Results }) => {});
// $ExpectType MapboxGeocoder
geocoder.on("result", (args: { result: MapboxGeocoder.Result }) => {});
// $ExpectType MapboxGeocoder
geocoder.on("error", (args: { error: unknown }) => {});
// $ExpectType MapboxGeocoder
geocoder.on("any", () => {});

// $ExpectType MapboxGeocoder
geocoder.off("clear", () => {});
// $ExpectType MapboxGeocoder
geocoder.off("loading", (args: { query: string }) => {});
// $ExpectType MapboxGeocoder
geocoder.off("results", (args: { results: MapboxGeocoder.Results }) => {});
// $ExpectType MapboxGeocoder
geocoder.off("result", (args: { result: MapboxGeocoder.Result }) => {});
// $ExpectType MapboxGeocoder
geocoder.off("error", (args: { error: unknown }) => {});
// $ExpectType MapboxGeocoder
geocoder.off("any", () => {});

declare let mapDiv: HTMLDivElement;
declare let map: mapboxgl.Map;

// $ExpectType HTMLElement
geocoder.onAdd(map);

// $ExpectType MapboxGeocoder
geocoder.onRemove();

// $ExpectType MapboxGeocoder
geocoder.addTo(map);

// $ExpectType MapboxGeocoder
geocoder.addTo(mapDiv);

// $ExpectType MapboxGeocoder
geocoder.addTo("#map");

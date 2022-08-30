// These examples are adapted from Woosmap Map JS Developers Documentation
// https://developers.woosmap.com/products/map-api/get-started/

/**
 * Display a Map
 */
const mapOptions = expectType({
    center: new woosmap.map.LatLng(43.3, 3.883),
    zoom: 13,
    defaultStyle: 'streets',
    disableDefaultUI: true,
    gestureHandling: 'greedy',
    styles: [
        {
            featureType: 'poi',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
    ],
}) as woosmap.map.MapOptions;
const map = new woosmap.map.Map(document.getElementById('mapContainer') as HTMLElement, mapOptions);

// $ExpectType LatLngBounds
const bounds = map.getBounds({ left: 100 });
// $ExpectType number
const heading = map.getHeading();
// $ExpectType number
const tilt = map.getTilt();
// $ExpectType number
const zoom = map.getZoom();
// $ExpectType void
map.fitBounds(new woosmap.map.LatLngBounds({ lat: 43.3, lng: 3.3 }, { lat: 48.3, lng: 2.3 }), { left: 100 });
// $ExpectType void
map.panBy(100, 50);
// $ExpectType void
map.panTo({ lat: 43.3, lng: 3.3 });
// $ExpectType void
map.panToBounds(new woosmap.map.LatLngBounds({ lat: 43.3, lng: 3.3 }, { lat: 48.3, lng: 2.3 }), { left: 100 });
// $ExpectType void
map.setZoom(12);

/**
 * Marker
 */
const simpleMarkerOptions = expectType({
    position: map.getCenter(),
    anchorPoint: new woosmap.map.Point(12, 12),
    clickable: true,
    draggable: true,
    opacity: 0.8,
    title: 'Marker Title',
    visible: true,
    icon: {
        url: 'https://images.woosmap.com/marker-red.svg',
        scaledSize: {
            height: 64,
            width: 46,
        },
    },
}) as woosmap.map.MarkerOptions;
const marker = new woosmap.map.Marker(simpleMarkerOptions);

marker.setMap(map);
// $ExpectType number
const opacity = marker.getOpacity();
// $ExpectType LatLng
const position = marker.getPosition();
// $ExpectType Point
const offset = marker.getOffset();
// $ExpectType boolean
const draggable = marker.getDraggable();
// $ExpectType number
const rotation = marker.getRotation();
// $ExpectType string
const rotationAlignment = marker.getRotationAlignment();
// $ExpectType string
const pitchAlignment = marker.getPitchAlignment();
// $ExpectType void
marker.setIcon({
    url: 'https://images.woosmap.com/marker-green.svg',
    anchor: new woosmap.map.Point(12, 12),
    labelOrigin: new woosmap.map.Point(0, 10),
    scaledSize: new woosmap.map.Size(32, 38),
    size: new woosmap.map.Size(32, 38),
});
// $ExpectType void
marker.setOpacity(0.5);
// $ExpectType Marker
marker.setOffset(new woosmap.map.Point(12, 12));
// $ExpectType void
marker.setPosition({ lat: 43.3, lng: 3.883 });
// $ExpectType Marker
marker.setDraggable(true);
// $ExpectType Marker
marker.setRotation(0);
// $ExpectType Marker
marker.setRotationAlignment('auto');
// $ExpectType Marker
marker.setPitchAlignment('auto');
// $ExpectType MapEventListener
marker.addListener('click', () => {
    marker.setMap(null);
});

/**
 * Marker Label
 */
const labelMarkerOptions = expectType({
    position: { lat: 43.3, lng: 3.883 },
    icon: {
        labelOrigin: new woosmap.map.Point(12, 12),
        url: 'https://images.woosmap.com/marker-red.svg',
    },
    label: {
        text: 'some label',
        color: 'blue',
        className: 'someClass',
        fontWeight: 'bold',
        fontSize: '42pt',
        fontFamily: 'Helvetica',
    },
    map,
}) as woosmap.map.MarkerOptions;
const markerLabel = new woosmap.map.Marker(labelMarkerOptions);

/**
 * Map Event Handler
 */
const events = [
    'bounds_changed',
    'center_changed',
    'click',
    'dblclick',
    'drag',
    'dragend',
    'dragstart',
    'idle',
    'mousemove',
    'mouseout',
    'mouseover',
    'rightclick',
    'zoom_changed',
];
events.forEach(eventName => () => {
    // $ExpectType MapEventListener
    map.addListener(eventName, () => {
        console.log(eventName);
    });
});
const clickListener = map.addListener('click', () => {
    console.log('click');
});
// $ExpectType void
clickListener.remove();

/**
 * StoresOverlay
 */
const style = expectType({
    breakPoint: 14,
    default: {
        color: '#008a2f',
        size: 8,
        minSize: 1,
        icon: {
            url: 'https://images.woosmap.com/marker-red.svg',
            scaledSize: {
                height: 40,
                width: 34,
            },
            anchor: {
                x: 0,
                y: 5,
            },
        },
        selectedIcon: {
            url: 'https://images.woosmap.com/marker-blue.svg',
        },
    },
    rules: [
        {
            color: '#FF5221',
            type: 'click_and_collect',
            icon: {
                url: 'https://images.woosmap.com/marker-green.svg',
            },
            selectedIcon: {
                url: 'https://images.woosmap.com/marker-green.svg',
            },
        },
    ],
}) as woosmap.map.Style;
const rules = expectType(style.rules[0]) as woosmap.map.TypedStyleRule;
const defaultStyle = expectType(style.default) as woosmap.map.StyleRule;

const storesOverlay = new woosmap.map.StoresOverlay(style);
storesOverlay.setQuery('type:"click_and_collect"');
storesOverlay.setMap(map);

/**
 * Shapes
 */
const outerShape = [
    { lat: 28.59, lng: -100.65 },
    { lat: 28.59, lng: -96.08 },
    { lat: 31.33, lng: -96.08 },
    { lat: 31.33, lng: -100.65 },
    { lat: 28.59, lng: -100.65 },
];
const innerShape = [
    { lat: 29.07, lng: -98.81 },
    { lat: 29.07, lng: -96.63 },
    { lat: 30.16, lng: -96.63 },
    { lat: 30.16, lng: -98.81 },
    { lat: 29.07, lng: -98.81 },
];
const polygonOption = expectType({
    paths: [outerShape, innerShape],
    strokeColor: '#b71c1c',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b71c1c',
    fillOpacity: 0.5,
}) as woosmap.map.PolygonOptions;
const polygon = new woosmap.map.Polygon(polygonOption);
polygon.setMap(map);

const polylinePath = [
    { lng: -0.12638568878173828, lat: 51.50099581189912 },
    { lng: -0.12201905250549315, lat: 51.500832183172456 },
    { lng: -0.11891841888427736, lat: 51.50078877137083 },
    { lng: -0.11869311332702637, lat: 51.500832183172456 },
];
const polyLineOptions = expectType({
    path: polylinePath,
    strokeColor: '#b71c1c',
    strokeOpacity: 0.8,
    strokeWeight: 4,
}) as woosmap.map.PolylineOptions;
const polyline = new woosmap.map.Polyline(polyLineOptions);
polyline.setMap(map);

const latlng = { lat: 43.34, lng: -24.76 };
const radius50km = 50000;
const circleOptions = expectType({
    strokeColor: '#b71c1c',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b71c1c',
    fillOpacity: 0.5,
    map,
    center: latlng,
    radius: radius50km,
}) as woosmap.map.CircleOptions;

const cityCircle = new woosmap.map.Circle(circleOptions);

const feature = expectType({
    geometry: new woosmap.map.Data.Point(new woosmap.map.LatLng(43.34, -24.76)),
    id: 'ID_1234',
    properties: { some_properties: 'some_value' },
}) as woosmap.map.FeatureData;

map.data.add(feature);
map.data.loadGeoJson('https://demo.woosmap.com/misc/data/europe.geojson.json');
map.data.setStyle(feature => {
    let color = '#b71c1c';
    if (feature.getProperty('highlighted')) {
        color = '#C51162';
    }
    return {
        fillColor: color,
        strokeColor: color,
        strokeOpacity: 1,
        strokeWeight: 2,
    };
});

map.data.addListener('click', (event: any) => {
    const feature: woosmap.map.data.Feature | null = map.data.getFeatureById('ID_1234');
    feature?.setProperty('highlighted', false);
    event.feature?.setProperty('highlighted', true);
});

/**
 * Directions
 */
const directionsRequest = expectType({
    origin: { lat: 48.86288, lng: 2.34946 },
    destination: { lat: 52.52457, lng: 13.42347 },
    provideRouteAlternatives: false,
    travelMode: woosmap.map.TravelMode.DRIVING,
    unitSystem: woosmap.map.UnitSystem.IMPERIAL,
    waypoints: [
        {
            location: new woosmap.map.LatLng(50.8467, 4.35684),
        },
        {
            location: new woosmap.map.LatLng(52.37342, 4.84631),
        },
    ],
}) as woosmap.map.DirectionRequest;

let directionsService;
directionsService = new woosmap.map.DirectionsService();
directionsService.route(directionsRequest, (result, status) => {});

/**
 * InfoWindow
 */
let infoWindow;
infoWindow = new woosmap.map.InfoWindow({});
infoWindow.setContent('<div>Some Content</div>');
infoWindow = new woosmap.map.InfoWindow({ content: '<div>Some Content</div>' });
infoWindow.open(map, marker);
infoWindow.close();

/**
 * woosmap.map.event
 */
const listener = woosmap.map.event.addListener(map, 'click', () => {}); // $ExpectType MapEventListener
woosmap.map.event.addListenerOnce(map, 'click', () => {}); // $ExpectType MapEventListener
woosmap.map.event.removeListener(listener); // $ExpectType void
listener.remove(); // $ExpectType void

/**
 * woosmap.map.geometry
 */
const isContained = woosmap.map.geometry.containsLocation({ lat: 43.3, lng: 3.3 }, polygon); // $ExpectType boolean

/**
 * helper functions for testing purpose
 */
function expectType(value: any) {
    return value;
}

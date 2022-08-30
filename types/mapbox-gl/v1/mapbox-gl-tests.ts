import { IControl } from 'mapbox-gl';
import mapboxgl = require('mapbox-gl');

// These examples adapted from Mapbox's examples (https://www.mapbox.com/mapbox-gl-js/examples)

/**
 * Set API Access Token
 */
mapboxgl.accessToken = 'foo';

/**
 * Set Base API URL
 */
mapboxgl.baseApiUrl = 'https://example.com';

/**
 * Set amount of workers
 */
mapboxgl.workerCount = 3;

/**
 * Set max amount of parallel images requests
 */
mapboxgl.maxParallelImageRequests = 10;

/**
 * Clears browser storage used by this library
 */
mapboxgl.clearStorage(() => {});

/**
 * Get RTL Text Plugin Status
 */
expectType<mapboxgl.PluginStatus>(mapboxgl.getRTLTextPluginStatus());

/**
 * Set RTL Text Plugin
 */
// $ExpectType void
mapboxgl.setRTLTextPlugin('https://github.com', e => {}, false);

// $ExpectType void
mapboxgl.prewarm();

// $ExpectType void
mapboxgl.clearPrewarmedResources();

/**
 * Display a Map
 */
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8',
    center: [-50, 50],
    zoom: 10,
    minZoom: 1,
    maxZoom: 2,
    minPitch: 0,
    maxPitch: 60,
    interactive: true,
    attributionControl: true,
    customAttribution: '© YourCo',
    bearingSnap: 7,
    scrollZoom: true,
    maxBounds: [
        [-100, -90],
        [100, 90],
    ],
    boxZoom: true,
    dragRotate: false,
    dragPan: true,
    antialias: true,
    accessToken: 'some-token',
    locale: {
        'FullscreenControl.Enter': 'Розгорнути на весь екран',
        'FullscreenControl.Exit': 'Вийти з повоноеранного режиму',
    },
});

/**
 * Initialize map with bounds
 */
expectType<mapboxgl.MapboxOptions>({
    container: 'map',
    bounds: new mapboxgl.LngLatBounds([-100, -90, 100, 90]),
    fitBoundsOptions: {
        padding: 0,
        offset: new mapboxgl.Point(0, 0),
        linear: true,
        maxZoom: 22,
        easing: time => time,
    },
});
expectType<mapboxgl.MapboxOptions>({
    container: 'map',
    bounds: [
        [-100, -90],
        [100, 90],
    ],
    fitBoundsOptions: {
        offset: [0, 0],
    },
});
expectType<mapboxgl.MapboxOptions>({
    container: 'map',
    bounds: [-100, -90, 100, 90],
});

expectType<mapboxgl.MapboxOptions>({
    container: 'map',
    touchPitch: true,
});

/**
 * Create and style marker clusters
 */
map.on('load', function () {
    // Add a new source from our GeoJSON data and set the
    // 'cluster' option to true.
    map.addSource('data', {
        type: 'geojson',
        data: '/data.geojson',
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterMinPoints: 8,
        clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
        clusterProperties: { sum: ['+', ['get', 'property']] },
        filter: 'something',
    });

    map.addLayer({
        id: 'layer',
        type: 'symbol',
        source: 'data',
        layout: {
            'icon-image': 'marker-15',
            'text-field': ['get', 'property'],
            'text-max-width': {
                stops: [
                    [10, 2],
                    [12, 5],
                ],
            },
        },
    });

    var layers: [number, string][] = [
        [150, '#f28cb1'],
        [20, '#f1f075'],
        [0, '#51bbd6'],
    ];

    layers.forEach(function (layer, i) {
        map.addLayer({
            id: 'cluster-' + i,
            type: 'circle',
            source: 'data',
            paint: {
                'circle-color': layer[1],
                'circle-radius': 18,
            },
            filter:
                i == 0
                    ? ['>=', 'point_count', layer[0]]
                    : ['all', ['>=', 'point_count', layer[0]], ['<', 'point_count', layers[i - 1][0]]],
        });
    });

    // Add a layer for the clusters' count labels
    map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'data',
        layout: {
            'text-field': '{point_count}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12,
        },
    });

    /**
     * Add a GeoJSON line
     */
    map.addSource('route', {
        type: 'geojson',
        data: {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: [
                    [-122.48369693756104, 37.83381888486939],
                    [-122.48348236083984, 37.83317489144141],
                    [-122.48339653015138, 37.83270036637107],
                    [-122.48356819152832, 37.832056363179625],
                    [-122.48404026031496, 37.83114119107971],
                    [-122.48404026031496, 37.83049717427869],
                    [-122.48348236083984, 37.829920943955045],
                    [-122.48356819152832, 37.82954808664175],
                    [-122.48507022857666, 37.82944639795659],
                    [-122.48610019683838, 37.82880236636284],
                    [-122.48695850372314, 37.82931081282506],
                    [-122.48700141906738, 37.83080223556934],
                    [-122.48751640319824, 37.83168351665737],
                    [-122.48803138732912, 37.832158048267786],
                    [-122.48888969421387, 37.83297152392784],
                    [-122.48987674713133, 37.83263257682617],
                    [-122.49043464660643, 37.832937629287755],
                    [-122.49125003814696, 37.832429207817725],
                    [-122.49163627624512, 37.832564787218985],
                    [-122.49223709106445, 37.83337825839438],
                    [-122.49378204345702, 37.83368330777276],
                ],
            },
        },
        promoteId: { original: 'COUNTY' },
    });

    map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
            'line-join': 'round',
            'line-cap': 'round',
        },
        paint: {
            'line-color': '#888',
            'line-width': 8,
            'line-dasharray': ['step', ['zoom'], ['literal', [1, 0]], 15, ['literal', [1.75, 1]]],
        },
    });

    // Add a vector source
    map.addSource('vector-source', {
        type: 'vector',
        promoteId: { original: 'COUNTY' },
    });

    // Add a custom layer
    map.addLayer({
        id: 'custom',
        type: 'custom',
        renderingMode: '3d',
        onRemove: function (map, gl) {
            map; // $ExpectType Map
            gl; // $ExpectType WebGLRenderingContext
        },
        render: function (gl, matrix) {
            gl; // $ExpectType WebGLRenderingContext
            matrix; // $ExpectType number[]
        },
    });
});

// FlyTo
map.flyTo({
    center: [0, 0],
    zoom: 10,
    speed: 0.5,
    curve: 1,
    screenSpeed: 1,
    easing: function (t: number) {
        return t;
    },
    maxDuration: 1,
});

// QueryRenderedFeatures
const features = map.queryRenderedFeatures([0, 0], { layers: ['custom'], validate: false });
features; // $ExpectType MapboxGeoJSONFeature[]

// querySourceFeatures
const features2 = map.querySourceFeatures('some_source', {
    sourceLayer: 'source_layer',
    filter: ['all'],
    validate: null,
});
features2; // $ExpectType MapboxGeoJSONFeature[]

/**
 * GeoJSONSource
 */
var geoJSONSourceObj = new mapboxgl.GeoJSONSource({
    data: {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: null,
                geometry: {
                    type: 'Point',
                    coordinates: [-50, 0],
                },
            },
        ],
    },
});
map.addSource('some id', geoJSONSourceObj); // add
map.removeSource('some id'); // remove

/**
 * ImageSource
 */
var imageSourceObj = new mapboxgl.ImageSource({
    url: '/foo.png',
    coordinates: [
        [-76.54335737228394, 39.18579907229748],
        [-76.52803659439087, 39.1838364847587],
        [-76.5295386314392, 39.17683392507606],
        [-76.54520273208618, 39.17876344106642],
    ],
});
map.addSource('some id', imageSourceObj); // add
map.removeSource('some id'); // remove

imageSourceObj.updateImage({
    url: '/foo.png',
    coordinates: [
        [-76.54335737228394, 39.18579907229748],
        [-76.52803659439087, 39.1838364847587],
        [-76.5295386314392, 39.17683392507606],
        [-76.54520273208618, 39.17876344106642],
    ],
});

imageSourceObj.setCoordinates([
    [-76.54335737228394, 39.18579907229748],
    [-76.52803659439087, 39.1838364847587],
    [-76.5295386314392, 39.17683392507606],
    [-76.54520273208618, 39.17876344106642],
]);

/**
 * Video Source
 */
var videoSourceObj = new mapboxgl.VideoSource({
    urls: ['/blah.mp4', '/blah.webm'],
    coordinates: [
        [-76.54335737228394, 39.18579907229748],
        [-76.52803659439087, 39.1838364847587],
        [-76.5295386314392, 39.17683392507606],
        [-76.54520273208618, 39.17876344106642],
    ],
});
map.addSource('some id', videoSourceObj); // add
map.removeSource('some id'); // remove

/**
 * Vector Source
 */
const vectorSource = map.getSource('tile-source') as mapboxgl.VectorSourceImpl;
// $ExpectType VectorSourceImpl
vectorSource.setTiles(['a', 'b']);
// $ExpectType VectorSourceImpl
vectorSource.setUrl('https://github.com');

/**
 * Add Raster Source /// made URL optional to allow only tiles.
 */
map.addSource('radar', {
    type: 'raster',
    tiles: [
        'https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WmsServer?bbox={bbox-epsg-3857}&service=WMS&request=GetMap&version=1.3.0&layers=1&styles=&format=image/png&transparent=true&height=256&width=256&crs=EPSG:3857',
    ],
    tileSize: 256,
});

map.addLayer({
    id: 'radar',
    type: 'raster',
    source: 'radar',
    paint: {},
});

/**
 * Manipulate feature state
 */
let featureIdentifier = {
    id: 1337,
    source: 'source-id',
    sourceLayer: 'liam-was-here',
};
expectType<mapboxgl.FeatureIdentifier>(featureIdentifier);
map.setFeatureState(featureIdentifier, { someState: true, someOtherState: 123 });
map.getFeatureState(featureIdentifier);
map.removeFeatureState(featureIdentifier, 'someState');
map.removeFeatureState(featureIdentifier);

/**
 * Popup
 */
const popupOptions: mapboxgl.PopupOptions = {
    closeOnClick: false,
    closeOnMove: true,
    closeButton: true,
    focusAfterOpen: true,
    anchor: 'top-right',
    offset: {
        top: [0, 0] as [number, number],
        bottom: [25, -50] as [number, number],
    },
    className: 'custom-class',
    maxWidth: '400px',
};

const popup = new mapboxgl.Popup(popupOptions)
    .setLngLat([-50, 50])
    .trackPointer()
    .setHTML('<h1>Hello World!</h1>')
    .setMaxWidth('none')
    .addTo(map);
popup.getMaxWidth();
popup.getElement(); // $ExpectType HTMLElement
popup.addClassName('class1');
popup.removeClassName('class2');
popup.toggleClassName('class3');
// $ExpectType Popup
popup.setOffset([10, 20]);

/**
 * Add an image
 */
var mapStyle: mapboxgl.Style = {
    version: 8,
    name: 'Dark',
    sources: {
        mapbox: {
            type: 'vector',
            url: 'mapbox://mapbox.mapbox-streets-v6',
        },
        overlay: {
            type: 'image',
            url: '/mapbox-gl-js/assets/radar.gif',
            coordinates: [
                [-50, 40],
                [0, 40],
                [0, 0],
                [-50, 0],
            ],
        },
    },
    sprite: 'mapbox://sprites/mapbox/dark-v8',
    glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
    layers: [
        {
            id: 'background',
            type: 'background',
            paint: { 'background-color': '#111' },
        },
        {
            id: 'water',
            source: 'mapbox',
            'source-layer': 'water',
            type: 'fill',
            paint: { 'fill-color': '#2c2c2c' },
        },
        {
            id: 'boundaries',
            source: 'mapbox',
            'source-layer': 'admin',
            type: 'line',
            paint: { 'line-color': '#797979', 'line-dasharray': [2, 2, 6, 2] },
            filter: ['all', ['==', 'maritime', 0]],
        },
        {
            id: 'overlay',
            source: 'overlay',
            type: 'raster',
            paint: { 'raster-opacity': 0.85 },
        },
        {
            id: 'cities',
            source: 'mapbox',
            'source-layer': 'place_label',
            type: 'symbol',
            layout: {
                'text-field': '{name_en}',
                'text-font': ['DIN Offc Pro Bold', 'Arial Unicode MS Bold'],
                'text-size': {
                    stops: [
                        [4, 9],
                        [6, 12],
                    ],
                },
            },
            paint: {
                'text-color': '#969696',
                'text-halo-width': 2,
                'text-halo-color': 'rgba(0, 0, 0, 0.85)',
            },
        },
        {
            id: 'states',
            source: 'mapbox',
            'source-layer': 'state_label',
            type: 'symbol',
            layout: {
                'text-transform': 'uppercase',
                'text-field': '{name_en}',
                'text-font': [
                    'step',
                    ['zoom'],
                    ['literal', ['DIN Offc Pro Regular', 'Arial Unicode MS Regular']],
                    8,
                    [
                        'step',
                        ['get', 'symbolrank'],
                        ['literal', ['DIN Offc Pro Medium', 'Arial Unicode MS Regular']],
                        11,
                        ['literal', ['DIN Offc Pro Regular', 'Arial Unicode MS Regular']],
                    ],
                ],
                'text-justify': [
                    'step',
                    ['zoom'],
                    [
                        'match',
                        ['get', 'text_anchor'],
                        ['bottom', 'top'],
                        'center',
                        ['left', 'bottom-left', 'top-left'],
                        'left',
                        ['right', 'bottom-right', 'top-right'],
                        'right',
                        'center',
                    ],
                    8,
                    'center',
                ],
                'text-letter-spacing': 0.15,
                'text-max-width': 7,
                'text-size': {
                    stops: [
                        [4, 10],
                        [6, 14],
                    ],
                },
            },
            filter: ['>=', 'area', 80000],
            paint: {
                'text-color': '#969696',
                'text-halo-width': 2,
                'text-halo-color': 'rgba(0, 0, 0, 0.85)',
            },
        },
    ],
};

/**
 * Add video
 */
var videoStyle: mapboxgl.Style = {
    version: 8,
    sources: {
        satellite: {
            type: 'raster',
            url: 'mapbox://mapbox.satellite',
            tileSize: 256,
        },
        video: {
            type: 'video',
            urls: ['drone.mp4', 'drone.webm'],
            coordinates: [
                [-122.51596391201019, 37.56238816766053],
                [-122.51467645168304, 37.56410183312965],
                [-122.51309394836426, 37.563391708549425],
                [-122.51423120498657, 37.56161849366671],
            ],
        },
    },
    layers: [
        {
            id: 'background',
            type: 'background',
            paint: {
                'background-color': 'rgb(4,7,14)',
            },
        },
        {
            id: 'satellite',
            type: 'raster',
            source: 'satellite',
        },
        {
            id: 'video',
            type: 'raster',
            source: 'video',
        },
    ],
};

map = new mapboxgl.Map({
    container: 'map',
    minZoom: 14,
    zoom: 17,
    center: [-122.514426, 37.562984],
    bearing: -96,
    style: mapStyle,
    hash: false,
});

map = new mapboxgl.Map({
    container: 'map',
    minZoom: 14,
    zoom: 17,
    center: [-122.514426, 37.562984],
    bearing: -96,
    style: videoStyle,
    hash: false,
});

map = new mapboxgl.Map({
    container: 'map',
    hash: 'customHash',
});

/**
 * Marker
 */
let marker = new mapboxgl.Marker(undefined, {
    element: undefined,
    offset: [10, 0],
    anchor: 'bottom-right',
    color: 'green',
    draggable: false,
    clickTolerance: 10,
    rotation: 15,
    rotationAlignment: 'map',
    pitchAlignment: 'viewport',
    scale: 5.5,
})
    .setLngLat([-50, 50])
    .setPitchAlignment('map')
    .setRotationAlignment('viewport')
    .addTo(map);

// $ExpectType Alignment
marker.getPitchAlignment();

// $ExpectType Alignment
marker.getRotationAlignment();

marker.remove();

/*
 * LngLatBounds
 */
let bool: boolean;
let bounds = new mapboxgl.LngLatBounds();
bool = bounds.isEmpty();
expectType<boolean>(bounds.contains([37, 50]));

// $ExpectType LngLatBounds
bounds.extend(new mapboxgl.LngLat(45, 30));
// $ExpectType LngLatBounds
bounds.extend({ lng: 45, lat: 30 });
// $ExpectType LngLatBounds
bounds.extend({ lon: 45, lat: 30 });
// $ExpectType LngLatBounds
bounds.extend([45, 30]);
// $ExpectType LngLatBounds
bounds.extend(new mapboxgl.LngLatBounds());
// $ExpectType LngLatBounds
bounds.extend([
    [45, 30],
    [60, 60],
]);
// $ExpectType LngLatBounds
bounds.extend([45, 30, 60, 60]);

// controls
// $ExpectType IControl
new mapboxgl.Control() as IControl;
// $ExpectType IControl
new mapboxgl.AttributionControl() as IControl;

/*
 * GeolocateControl
 */
const geolocateControl = new mapboxgl.GeolocateControl({ showAccuracyCircle: true });

/*
 * AttributionControl
 */
let attributionControl = new mapboxgl.AttributionControl({ compact: false, customAttribution: '© YourCo' });
attributionControl.on('click', () => {});

/*
 * FullscreenControl
 */
new mapboxgl.FullscreenControl();
new mapboxgl.FullscreenControl(null);
new mapboxgl.FullscreenControl({});
new mapboxgl.FullscreenControl({ container: document.querySelector('body') });

// $ExpectType boolean
map.hasControl(attributionControl);

declare var lnglat: mapboxgl.LngLat;
declare var lnglatlike: mapboxgl.LngLatLike;
declare var lnglatboundslike: mapboxgl.LngLatBoundsLike;
declare var mercatorcoordinate: mapboxgl.MercatorCoordinate;
declare var pointlike: mapboxgl.PointLike;

function expectType<T>(value: T) {
    return value;
}

// prettier-ignore
interface EitherType {
    <A>(a: A): A;
    <A, B>(a: A, b: B): A | B;
    <A, B, C>(a: A, b: B, c: C): A | B | C;
    <A, B, C, D>(a: A, b: B, c: C, d: D): A | B | C | D;
    <A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A | B | C | D | E;
    <A, B, C, D, E, F>(a: A, b: B, c: C, d: D, e: E, f: F): A | B | C | D | E | F;
    <A, B, C, D, E, F, G>(a: A, b: B, c: C, d: D, e: E, f: F, g: G): A | B | C | D | E | F | G;
    <A, B, C, D, E, F, G, H>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): A | B | C | D | E | F | G | H;
    <A, B, C, D, E, F, G, H, I>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): A | B | C | D | E | F | G | H | I;
    /* Add more as needed */
}

/**
 * Takes a variable amount of arguments and returns a new
 * type that is a union of all the provided argument types. Useful to test properties
 * that accept multiple types
 */
const eitherType: EitherType = () => {
    /* let the compiler handle things */
};

/*
 * LngLatLike
 */

expectType<mapboxgl.LngLatLike>(new mapboxgl.LngLat(0, 0));
expectType<mapboxgl.LngLatLike>([0, 0]);
expectType<mapboxgl.LngLatLike>({ lng: 0, lat: 0 });
expectType<mapboxgl.LngLatLike>({ lon: 0, lat: 0 });

/*
 * LngLat
 */

new mapboxgl.LngLat(0, 0);
expectType<mapboxgl.LngLat>(mapboxgl.LngLat.convert(lnglatlike));
expectType<number>(new mapboxgl.LngLat(0, 0).distanceTo(new mapboxgl.LngLat(0, 0)));

/*
 * LngLatBoundsLike
 */

expectType<mapboxgl.LngLatBoundsLike>([lnglatlike, lnglatlike]);
expectType<mapboxgl.LngLatBoundsLike>([0, 0, 1, 1]);
expectType<mapboxgl.LngLatBoundsLike>(new mapboxgl.LngLatBounds());

/*
 * LngLatBounds
 */

new mapboxgl.LngLatBounds();
new mapboxgl.LngLatBounds([0, 0, 1, 1]);
new mapboxgl.LngLatBounds([lnglatlike, lnglatlike]);
new mapboxgl.LngLatBounds(lnglat, lnglat);
new mapboxgl.LngLatBounds(lnglatlike, lnglatlike);
expectType<mapboxgl.LngLatBounds>(mapboxgl.LngLatBounds.convert(lnglatboundslike));

/*
 * PointLike
 */

expectType<mapboxgl.PointLike>(new mapboxgl.Point(0, 0));
expectType<mapboxgl.PointLike>([0, 0]);

/*
 * Point
 */

new mapboxgl.Point(0, 0);
expectType<mapboxgl.Point>(mapboxgl.Point.convert(pointlike));

/*
 * MercatorCoordinate
 */

new mapboxgl.MercatorCoordinate(0, 0);
new mapboxgl.MercatorCoordinate(0, 0, 0);
mercatorcoordinate.toAltitude(); // $ExpectType number
mercatorcoordinate.toLngLat(); // $ExpectType LngLat
mapboxgl.MercatorCoordinate.fromLngLat(lnglatlike); // $ExpectType MercatorCoordinate
mapboxgl.MercatorCoordinate.fromLngLat(lnglatlike, 0); // $ExpectType MercatorCoordinate
mercatorcoordinate.meterInMercatorCoordinateUnits(); // $ExpectType number

/*
 * TransformRequestFunction
 */

expectType<mapboxgl.TransformRequestFunction>((url: string) => ({ url }));
expectType<mapboxgl.TransformRequestFunction>((url: string, resourceType: mapboxgl.ResourceType) => ({
    url,
    credentials: 'same-origin',
    headers: { 'Accept-Encoding': 'compress' },
    method: 'POST',
    collectResourceTiming: true,
}));

/*
 * Map
 */

let padding: mapboxgl.PaddingOptions = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
};
let animOpts: mapboxgl.AnimationOptions = {
    essential: true,
};
let cameraOpts: mapboxgl.CameraOptions = {
    around: lnglatlike,
    center: lnglatlike,
    bearing: 0,
    pitch: 0,
    zoom: 0,
};
let cameraForBoundsOpts: mapboxgl.CameraForBoundsOptions = {
    offset: pointlike,
    maxZoom: 10,
    padding,
    ...cameraOpts,
};

expectType<mapboxgl.CameraForBoundsResult | undefined>(map.cameraForBounds(lnglatboundslike));
expectType<mapboxgl.CameraForBoundsResult | undefined>(map.cameraForBounds(lnglatboundslike, cameraForBoundsOpts));

expectType<mapboxgl.Map>(map.fitScreenCoordinates([0, 0], pointlike, 1));
expectType<mapboxgl.Map>(map.fitScreenCoordinates([0, 0], pointlike, 1, cameraOpts));
expectType<mapboxgl.Map>(map.fitScreenCoordinates([0, 0], pointlike, 1, cameraOpts, { key: 'value' }));

// $ExpectType void
map.triggerRepaint();

// $ExpectType PaddingOptions
map.getPadding();

// $ExpectType Map
map.setPadding({ top: 10, bottom: 20, left: 30, right: 40 }, { myData: 'MY DATA' });

map.setPaintProperty('layerId', 'layerName', null, { validate: true });
map.setPaintProperty('layerId', 'layerName', null, { validate: false });
map.setPaintProperty('layerId', 'layerName', null, {});
// @ts-expect-error
map.setPaintProperty('layerId', 'layerName', null, { some_option: 'some_string' });

map.setLayoutProperty('layerId', 'layerName', null, { validate: true });
map.setLayoutProperty('layerId', 'layerName', null, { validate: false });
map.setLayoutProperty('layerId', 'layerName', null, {});
// @ts-expect-error
map.setLayoutProperty('layerId', 'layerName', null, { some_option: 'some_string' });

map.setLight({ anchor: 'viewport', color: 'blue', intensity: 0.5 }, { validate: true });
map.setLight({ anchor: 'viewport', color: 'blue', intensity: 0.5 }, { validate: false });
map.setLight({ anchor: 'viewport', color: 'blue', intensity: 0.5 }, {});
// @ts-expect-error
map.setLight({ anchor: 'viewport', color: 'blue', intensity: 0.5 }, { some_option: 'some_string' });

// $ExpectType boolean
map.showPadding;
map.showPadding = false;

expectType<mapboxgl.Map>(map.setFilter('layerId', true));
expectType<mapboxgl.Map>(map.setFilter('layerId', false));

map.setFilter('layerId', true, { validate: true });
map.setFilter('layerId', true, { validate: null });
map.setFilter('layerId', true, {});
// @ts-expect-error
map.setFilter('layerId', true, { some_option: 'some_string' });

// $ExpectType Map
map.setMinZoom(5);
// $ExpectType Map
map.setMaxZoom(10);
// $ExpectType Map
map.setMinZoom(null);
// $ExpectType Map
map.setMinZoom();
// $ExpectType Map
map.setMaxZoom(null);
// $ExpectType Map
map.setMaxZoom();

// $ExpectType number
map.getMinZoom();
// $ExpectType number
map.getMaxZoom();

// $ExpectType Map
map.setMinPitch(5);
// $ExpectType Map
map.setMaxPitch(10);
// $ExpectType Map
map.setMinPitch(null);
// $ExpectType Map
map.setMinPitch();
// $ExpectType Map
map.setMaxPitch(null);
// $ExpectType Map
map.setMaxPitch();
// $ExpectType Map
map.resetNorthPitch(animOpts);

// $ExpectType number
map.getMinPitch();
// $ExpectType number
map.getMaxPitch();

/*
 * Map Events
 */

// General events
expectType<mapboxgl.Map>(
    map.on('load', ev => {
        expectType<mapboxgl.MapboxEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
    }),
);
// $ExpectType Map
map.on('idle', ev => {
    ev; // $ExpectType MapboxEvent<undefined> & EventData
});
expectType<mapboxgl.Map>(
    map.on('remove', ev => {
        expectType<mapboxgl.MapboxEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('render', ev => {
        expectType<mapboxgl.MapboxEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('resize', ev => {
        expectType<mapboxgl.MapboxEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
    }),
);

// Error event
expectType<mapboxgl.Map>(
    map.on('error', ev => {
        expectType<mapboxgl.ErrorEvent>(ev);
        expectType<Error>(ev.error);
        expectType<undefined>(ev.originalEvent);
    }),
);

// Mouse events
expectType<mapboxgl.Map>(
    map.on('mousedown', ev => {
        expectType<mapboxgl.MapMouseEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.Point>(ev.point);
        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<MouseEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mouseup', ev => {
        expectType<mapboxgl.MapMouseEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.Point>(ev.point);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<MouseEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('click', ev => {
        expectType<mapboxgl.MapMouseEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.Point>(ev.point);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<MouseEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('dblclick', ev => {
        expectType<mapboxgl.MapMouseEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.Point>(ev.point);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<MouseEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mousemove', ev => {
        expectType<mapboxgl.MapMouseEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.Point>(ev.point);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<MouseEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mouseover', ev => {
        expectType<mapboxgl.MapMouseEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.Point>(ev.point);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<MouseEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mouseout', ev => {
        expectType<mapboxgl.MapMouseEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.Point>(ev.point);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<MouseEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('contextmenu', ev => {
        expectType<mapboxgl.MapMouseEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.Point>(ev.point);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<MouseEvent>(ev.originalEvent);
    }),
);

// Touch events
expectType<mapboxgl.Map>(
    map.on('touchcancel', ev => {
        expectType<mapboxgl.MapTouchEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.LngLat[]>(ev.lngLats);
        expectType<mapboxgl.Point>(ev.point);
        expectType<mapboxgl.Point[]>(ev.points);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<TouchEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('touchmove', ev => {
        expectType<mapboxgl.MapTouchEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.LngLat[]>(ev.lngLats);
        expectType<mapboxgl.Point>(ev.point);
        expectType<mapboxgl.Point[]>(ev.points);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<TouchEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('touchend', ev => {
        expectType<mapboxgl.MapTouchEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.LngLat[]>(ev.lngLats);
        expectType<mapboxgl.Point>(ev.point);
        expectType<mapboxgl.Point[]>(ev.points);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<TouchEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('touchstart', ev => {
        expectType<mapboxgl.MapTouchEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<mapboxgl.LngLat>(ev.lngLat);
        expectType<mapboxgl.LngLat[]>(ev.lngLats);
        expectType<mapboxgl.Point>(ev.point);
        expectType<mapboxgl.Point[]>(ev.points);

        // $ExpectType void
        ev.preventDefault();
        expectType<boolean>(ev.defaultPrevented);

        expectType<TouchEvent>(ev.originalEvent);
    }),
);

// Context events
expectType<mapboxgl.Map>(
    map.on('webglcontextlost', ev => {
        expectType<mapboxgl.MapContextEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<WebGLContextEvent>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('webglcontextrestored', ev => {
        expectType<mapboxgl.MapContextEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<WebGLContextEvent>(ev.originalEvent);
    }),
);

// Data events
expectType<mapboxgl.Map>(
    map.on('dataloading', ev => {
        expectType<mapboxgl.MapDataEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('data', ev => {
        expectType<mapboxgl.MapDataEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('tiledataloading', ev => {
        expectType<mapboxgl.MapDataEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
    }),
);
expectType<mapboxgl.Map>(
    map.on('sourcedataloading', ev => {
        expectType<mapboxgl.MapSourceDataEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
        expectType<'source'>(ev.dataType);
    }),
);
expectType<mapboxgl.Map>(
    map.on('sourcedata', ev => {
        expectType<mapboxgl.MapSourceDataEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
        expectType<'source'>(ev.dataType);
    }),
);
expectType<mapboxgl.Map>(
    map.on('styledataloading', ev => {
        expectType<mapboxgl.MapStyleDataEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
        expectType<'style'>(ev.dataType);
    }),
);
expectType<mapboxgl.Map>(
    map.on('styledata', ev => {
        expectType<mapboxgl.MapStyleDataEvent>(ev);
        expectType<mapboxgl.Map>(ev.target);
        expectType<undefined>(ev.originalEvent);
        expectType<'style'>(ev.dataType);
    }),
);

// Layer events
expectType<mapboxgl.Map>(
    map.on('click', 'text', ev => {
        expectType<mapboxgl.MapLayerMouseEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('dblclick', 'text', ev => {
        expectType<mapboxgl.MapLayerMouseEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mousedown', 'text', ev => {
        expectType<mapboxgl.MapLayerMouseEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mouseup', 'text', ev => {
        expectType<mapboxgl.MapLayerMouseEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mousemove', 'text', ev => {
        expectType<mapboxgl.MapLayerMouseEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mouseenter', 'text', ev => {
        expectType<mapboxgl.MapLayerMouseEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mouseleave', 'text', ev => {
        expectType<mapboxgl.MapLayerMouseEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mouseover', 'text', ev => {
        expectType<mapboxgl.MapLayerMouseEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('mouseout', 'text', ev => {
        expectType<mapboxgl.MapLayerMouseEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('contextmenu', 'text', ev => {
        expectType<mapboxgl.MapLayerMouseEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);

expectType<mapboxgl.Map>(
    map.on('touchstart', 'text', ev => {
        expectType<mapboxgl.MapLayerTouchEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('touchend', 'text', ev => {
        expectType<mapboxgl.MapLayerTouchEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);
expectType<mapboxgl.Map>(
    map.on('touchcancel', 'text', ev => {
        expectType<mapboxgl.MapLayerTouchEvent>(ev);
        expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
    }),
);

/*
 * Expression
 */
expectType<mapboxgl.Expression>(['id']);
expectType<mapboxgl.Expression>(['get', 'property']);
expectType<mapboxgl.Expression>([
    'format',
    ['concat', ['get', 'name'], '\n'],
    {},
    ['concat', ['get', 'area'], 'foobar', { 'font-scale': 0.8 }],
]);
const expression = expectType<mapboxgl.Expression>(['coalesce', ['get', 'property'], ['get', 'property']]);

/*
 *    ScrollZoomHandler
 */
// $ExpectType void
new mapboxgl.Map().scrollZoom.setZoomRate(1);

// $ExpectType void
new mapboxgl.Map().scrollZoom.setWheelZoomRate(1);

const touchPitchHandler = new mapboxgl.TouchPitchHandler(map);
// $ExpectType void
touchPitchHandler.enable();
// $ExpectType boolean
touchPitchHandler.isActive();
// $ExpectType boolean
touchPitchHandler.isEnabled();
// $ExpectType void
touchPitchHandler.disable();

new mapboxgl.Map().touchPitch = touchPitchHandler;

/*
 * Visibility
 */
expectType<mapboxgl.Visibility>('visible');
expectType<mapboxgl.Visibility>('none');

/*
 * Transition
 */

expectType<mapboxgl.Transition>({ duration: 0 });
expectType<mapboxgl.Transition>({ delay: 0 });
const transition = expectType<mapboxgl.Transition>({ duration: 0, delay: 0 });

/*
 * StyleFunction
 */

expectType<mapboxgl.StyleFunction>({ base: 1, type: 'categorical' });
const styleFunction = expectType<mapboxgl.StyleFunction>({
    base: 1,
    type: 'exponential',
    default: 0,
    stops: [
        [1, 2],
        [3, 4],
    ],
});

/*
 * Anchor
 */

expectType<mapboxgl.Anchor>(
    eitherType('center', 'left', 'right', 'top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'),
);
const anchor: mapboxgl.Anchor = 'center';

/*
 * Layouts and Paint options
 */

const backgroundLayout: mapboxgl.BackgroundLayout = {
    visibility: eitherType('visible', 'none'),
};

const backgroundPaint: mapboxgl.BackgroundPaint = {
    'background-color': eitherType('#000', expression),
    'background-color-transition': transition,
    'background-pattern': 'pattern',
    'background-pattern-transition': transition,
    'background-opacity': eitherType(0, expression),
    'background-opacity-transition': transition,
};

const fillLayout: mapboxgl.FillLayout = {
    'fill-sort-key': eitherType(0, expression),
};

const fillPaint: mapboxgl.FillPaint = {
    'fill-antialias': eitherType(false, expression),
    'fill-opacity': eitherType(0, styleFunction, expression),
    'fill-opacity-transition': transition,
    'fill-color': eitherType('#000', styleFunction, expression),
    'fill-color-transition': transition,
    'fill-outline-color': eitherType('#000', styleFunction, expression),
    'fill-outline-color-transition': transition,
    'fill-translate': [1],
    'fill-translate-transition': transition,
    'fill-translate-anchor': eitherType('map', 'viewport'),
    'fill-pattern': eitherType('#000', expression),
    'fill-pattern-transition': transition,
};

const fillExtrusionLayout: mapboxgl.FillExtrusionLayout = {
    visibility: eitherType('visible', 'none'),
};

const fillExtrusionPaint: mapboxgl.FillExtrusionPaint = {
    'fill-extrusion-opacity': eitherType(0, expression),
    'fill-extrusion-opacity-transition': transition,
    'fill-extrusion-color': eitherType('#000', styleFunction, expression),
    'fill-extrusion-color-transition': transition,
    'fill-extrusion-translate': eitherType([0], expression),
    'fill-extrusion-translate-transition': transition,
    'fill-extrusion-translate-anchor': eitherType('map', 'viewport'),
    'fill-extrusion-pattern': eitherType('#000', expression),
    'fill-extrusion-pattern-transition': transition,
    'fill-extrusion-height': eitherType(0, styleFunction, expression),
    'fill-extrusion-height-transition': transition,
    'fill-extrusion-base': eitherType(0, styleFunction, expression),
    'fill-extrusion-base-transition': transition,
    'fill-extrusion-vertical-gradient': false,
};

const lineLayout: mapboxgl.LineLayout = {
    'line-cap': eitherType('butt', 'round', 'square'),
    'line-join': eitherType('bevel', 'round', 'miter', expression),
    'line-miter-limit': eitherType(0, expression),
    'line-round-limit': eitherType(0, expression),
    'line-sort-key': eitherType(0, expression),
};

const linePaint: mapboxgl.LinePaint = {
    'line-opacity': eitherType(0, styleFunction, expression),
    'line-opacity-transition': transition,
    'line-color': eitherType('#000', styleFunction, expression),
    'line-color-transition': transition,
    'line-translate': eitherType([0], expression),
    'line-translate-transition': transition,
    'line-translate-anchor': eitherType('map', 'viewport'),
    'line-width': eitherType(0, styleFunction, expression),
    'line-width-transition': transition,
    'line-gap-width': eitherType(0, styleFunction, expression),
    'line-gap-width-transition': transition,
    'line-offset': eitherType(0, styleFunction, expression),
    'line-offset-transition': transition,
    'line-blur': eitherType(0, styleFunction, expression),
    'line-blur-transition': transition,
    'line-dasharray': eitherType([0], expression),
    'line-dasharray-transition': transition,
    'line-pattern': eitherType('#000', expression),
    'line-pattern-transition': transition,
    'line-gradient': expression,
};

const symbolLayout: mapboxgl.SymbolLayout = {
    'symbol-placement': eitherType('point', 'line', 'line-center'),
    'symbol-spacing': eitherType(0, expression),
    'symbol-avoid-edges': false,
    'symbol-z-order': eitherType('viewport-y', 'source'),
    'icon-allow-overlap': eitherType(false, styleFunction, expression),
    'icon-ignore-placement': eitherType(false, expression),
    'icon-optional': false,
    'icon-rotation-alignment': eitherType('map', 'viewport', 'auto'),
    'icon-size': eitherType(0, styleFunction, expression),
    'icon-text-fit': eitherType('none', 'both', 'width', 'height'),
    'icon-text-fit-padding': eitherType([0], expression),
    'icon-image': eitherType('#000', styleFunction, expression),
    'icon-rotate': eitherType(0, styleFunction, expression),
    'icon-padding': eitherType(0, expression),
    'icon-keep-upright': false,
    'icon-offset': eitherType([0], styleFunction, expression),
    'icon-anchor': eitherType('center', styleFunction, expression),
    'icon-pitch-alignment': eitherType('map', 'viewport', 'auto'),
    'text-pitch-alignment': eitherType('map', 'viewport', 'auto'),
    'text-rotation-alignment': eitherType('map', 'viewport', 'auto'),
    'text-field': eitherType('#000', styleFunction, expression),
    'text-font': eitherType('arial', ['arial'], expression),
    'text-size': eitherType(0, styleFunction, expression),
    'text-max-width': eitherType(0, styleFunction, expression),
    'text-line-height': eitherType(0, expression),
    'text-letter-spacing': eitherType(0, expression),
    'text-justify': eitherType('auto', 'left', 'center', 'right', expression),
    'text-anchor': eitherType('center', styleFunction, expression),
    'text-max-angle': eitherType(0, expression),
    'text-rotate': eitherType(0, styleFunction, expression),
    'text-padding': eitherType(0, expression),
    'text-keep-upright': false,
    'text-transform': eitherType('none', 'uppercase', 'lowercase', styleFunction, expression),
    'text-offset': eitherType([0], expression),
    'text-allow-overlap': false,
    'text-ignore-placement': false,
    'text-optional': false,
    'text-radial-offset': eitherType(0, expression),
    'text-variable-anchor': [anchor],
    'text-writing-mode': eitherType<
        Array<'horizontal' | 'vertical'>,
        Array<'horizontal' | 'vertical'>,
        Array<'horizontal' | 'vertical'>
    >(['horizontal'], ['vertical'], ['horizontal', 'vertical']),
    'symbol-sort-key': eitherType(0, expression),
};

const symbolPaint: mapboxgl.SymbolPaint = {
    'icon-opacity': eitherType(0, styleFunction, expression),
    'icon-opacity-transition': transition,
    'icon-color': eitherType('#000', styleFunction, expression),
    'icon-color-transition': transition,
    'icon-halo-color': eitherType('#000', styleFunction, expression),
    'icon-halo-color-transition': transition,
    'icon-halo-width': eitherType(0, styleFunction, expression),
    'icon-halo-width-transition': transition,
    'icon-halo-blur': eitherType(0, styleFunction, expression),
    'icon-halo-blur-transition': transition,
    'icon-translate': eitherType([0], expression),
    'icon-translate-transition': transition,
    'icon-translate-anchor': eitherType('map', 'viewport'),
    'text-opacity': eitherType(0, styleFunction, expression),
    'text-opacity-transition': transition,
    'text-color': eitherType('#000', styleFunction, expression),
    'text-color-transition': transition,
    'text-halo-color': eitherType('#000', styleFunction, expression),
    'text-halo-color-transition': transition,
    'text-halo-width': eitherType(0, styleFunction, expression),
    'text-halo-width-transition': transition,
    'text-halo-blur': eitherType(0, styleFunction, expression),
    'text-halo-blur-transition': transition,
    'text-translate': eitherType([0], expression),
    'text-translate-transition': transition,
    'text-translate-anchor': eitherType('map', 'viewport'),
};

const rasterLayout: mapboxgl.RasterLayout = {
    visibility: eitherType('visible', 'none'),
};

const rasterPaint: mapboxgl.RasterPaint = {
    'raster-opacity': eitherType(0, expression),
    'raster-opacity-transition': transition,
    'raster-hue-rotate': eitherType(0, expression),
    'raster-hue-rotate-transition': transition,
    'raster-brightness-min': eitherType(0, expression),
    'raster-brightness-min-transition': transition,
    'raster-brightness-max': eitherType(0, expression),
    'raster-brightness-max-transition': transition,
    'raster-saturation': eitherType(0, expression),
    'raster-saturation-transition': transition,
    'raster-contrast': eitherType(0, expression),
    'raster-contrast-transition': transition,
    'raster-fade-duration': eitherType(0, expression),
    'raster-resampling': eitherType('linear', 'nearest'),
};

const circleLayout: mapboxgl.CircleLayout = {
    visibility: eitherType('visible', 'none'),
    'circle-sort-key': eitherType(0, expression),
};

const circlePaint: mapboxgl.CirclePaint = {
    'circle-radius': eitherType(0, styleFunction, expression),
    'circle-radius-transition': transition,
    'circle-color': eitherType('#000', styleFunction, expression),
    'circle-color-transition': transition,
    'circle-blur': eitherType(0, styleFunction, expression),
    'circle-blur-transition': transition,
    'circle-opacity': eitherType(0, styleFunction, expression),
    'circle-opacity-transition': transition,
    'circle-translate': eitherType([0], expression),
    'circle-translate-transition': transition,
    'circle-translate-anchor': eitherType('map', 'viewport'),
    'circle-pitch-scale': eitherType('map', 'viewport'),
    'circle-pitch-alignment': eitherType('map', 'viewport'),
    'circle-stroke-width': eitherType(0, styleFunction, expression),
    'circle-stroke-width-transition': transition,
    'circle-stroke-color': eitherType('#000', styleFunction, expression),
    'circle-stroke-color-transition': transition,
    'circle-stroke-opacity': eitherType(0, styleFunction, expression),
    'circle-stroke-opacity-transition': transition,
};

const heatmapLayout: mapboxgl.HeatmapLayout = {
    visibility: eitherType('visible', 'none'),
};

const heatmapPaint: mapboxgl.HeatmapPaint = {
    'heatmap-radius': eitherType(0, styleFunction, expression),
    'heatmap-radius-transition': transition,
    'heatmap-weight': eitherType(0, styleFunction, expression),
    'heatmap-intensity': eitherType(0, styleFunction, expression),
    'heatmap-intensity-transition': transition,
    'heatmap-color': eitherType('#000', styleFunction, expression),
    'heatmap-opacity': eitherType(0, styleFunction, expression),
    'heatmap-opacity-transition': transition,
};

const hillshadeLayout: mapboxgl.HillshadeLayout = {
    visibility: eitherType('visible', 'none'),
};

const hillshadePaint: mapboxgl.HillshadePaint = {
    'hillshade-illumination-direction': eitherType(0, expression),
    'hillshade-illumination-anchor': eitherType('map', 'viewport'),
    'hillshade-exaggeration': eitherType(0, expression),
    'hillshade-exaggeration-transition': transition,
    'hillshade-shadow-color': eitherType('#000', expression),
    'hillshade-shadow-color-transition': transition,
    'hillshade-highlight-color': eitherType('#000', expression),
    'hillshade-highlight-color-transition': transition,
    'hillshade-accent-color': eitherType('#000', expression),
    'hillshade-accent-color-transition': transition,
};

/* Make sure every layout has all properties optional */
eitherType<
    mapboxgl.BackgroundLayout,
    mapboxgl.FillLayout,
    mapboxgl.FillExtrusionLayout,
    mapboxgl.LineLayout,
    mapboxgl.SymbolLayout,
    mapboxgl.RasterLayout,
    mapboxgl.CircleLayout,
    mapboxgl.HeatmapLayout,
    mapboxgl.HillshadeLayout
>({}, {}, {}, {}, {}, {}, {}, {}, {});

/* Make sure every paint has all properties optional */
eitherType<
    mapboxgl.BackgroundPaint,
    mapboxgl.FillPaint,
    mapboxgl.FillExtrusionPaint,
    mapboxgl.LinePaint,
    mapboxgl.SymbolPaint,
    mapboxgl.RasterPaint,
    mapboxgl.CirclePaint,
    mapboxgl.HeatmapPaint,
    mapboxgl.HillshadePaint
>({}, {}, {}, {}, {}, {}, {}, {}, {});

/*
 * AnyLayout
 */
expectType<mapboxgl.AnyLayout>(
    eitherType(
        backgroundLayout,
        fillLayout,
        fillExtrusionLayout,
        lineLayout,
        symbolLayout,
        rasterLayout,
        circleLayout,
        heatmapLayout,
        hillshadeLayout,
    ),
);

/*
 * AnyPaint
 */
expectType<mapboxgl.AnyPaint>(
    eitherType(
        backgroundPaint,
        fillPaint,
        fillExtrusionPaint,
        linePaint,
        symbolPaint,
        rasterPaint,
        circlePaint,
        heatmapPaint,
        hillshadePaint,
    ),
);

/*
 * Make sure layer gets proper Paint, corresponding to layer's type
 */

expectType<mapboxgl.AnyLayer>({ id: 'unique', type: 'background', paint: { 'background-opacity': 1 } });
// @ts-expect-error
expectType<mapboxgl.AnyLayer>({ id: 'unique', type: 'background', paint: { 'line-opacity': 1 } });

expectType<mapboxgl.AnyLayer>({ id: 'unique', type: 'fill', paint: { 'fill-opacity': 1 } });
// @ts-expect-error
expectType<mapboxgl.AnyLayer>({ id: 'unique', type: 'fill', paint: { 'line-opacity': 1 } });

expectType<mapboxgl.AnyLayer>({ id: 'unique', type: 'line', paint: { 'line-opacity': 1 } });
// @ts-expect-error
expectType<mapboxgl.AnyLayer>({ id: 'unique', type: 'line', paint: { 'fill-opacity': 1 } });

/**
 * Test map.addImage()
 */

// HTMLImageElement
const fooHTMLImageElement = document.createElement('img');
map.addImage('foo', fooHTMLImageElement);

// ImageData
const fooImageData = new ImageData(8, 8);
map.addImage('foo', fooImageData);

// ImageData like
const fooImageDataLike1 = {
    width: 10,
    height: 10,
    data: new Uint8ClampedArray(8),
};
map.addImage('foo', fooImageDataLike1);

const fooImageDataLike2 = {
    width: 10,
    height: 10,
    data: new Uint8Array(8),
};
map.addImage('foo', fooImageDataLike2);

// ArrayBufferView
const fooArrayBufferView: ArrayBufferView = new Uint8Array(8);
map.addImage('foo', fooArrayBufferView);

// ImageBitmap
createImageBitmap(fooHTMLImageElement).then(fooImageBitmap => {
    map.addImage('foo', fooImageBitmap);
});

// KeyboardHandler
var keyboardHandler = new mapboxgl.KeyboardHandler(map);
// $ExpectType void
keyboardHandler.enableRotation();
// $ExpectType void
keyboardHandler.disableRotation();

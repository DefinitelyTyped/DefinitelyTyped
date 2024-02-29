/**
 * Display a Map
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-map-options.example.html
 */
let map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 13,
    minZoom: 7,
    zoomControl: true,
    zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
    },
    mapTypes: new naver.maps.MapTypeRegistry({
        normal: naver.maps.NaverStyleMapTypeOptions.getNormalMap({
            overlayType: "bg",
        }),
    }),
});

/**
 * Change any combination of center, zoom and padding with an animated transition
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-map-options.example.html
 */
const jeju = new naver.maps.LatLng(33.3590628, 126.534361);
const busan = new naver.maps.LatLng(35.1797865, 129.0750194);
const dokdo = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(37.2380651, 131.8562652),
    new naver.maps.LatLng(37.2444436, 131.8786475),
);
const seoul = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
    new naver.maps.LatLng(37.7010174173061, 127.18379493229875),
);

map.setCenter(jeju);
map.setZoom(6, true);
map.fitBounds(dokdo);
map.panTo(jeju);
map.panToBounds(seoul);
map.panBy(new naver.maps.Point(10, 10));

/**
 * Event Basic Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-1-event-simple.example.html
 */
naver.maps.Event.addListener(map, "click", function(e) {});
naver.maps.Event.addListener(map, "keydown", function(e) {});

/**
 * Layer Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-4-street.example.html
 */
const street = new naver.maps.StreetLayer();
const cadastral = new naver.maps.CadastralLayer();

naver.maps.Event.once(map, "init", function() {
    street.setMap(map);
    cadastral.setMap(map);
});

/**
 * Marker Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Marker.html
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-5-marker-html-icon.example.html
 */
const htmlMarker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3606904, 127.1061625),
    map: map,
    icon: {
        content: `<div>Marker</div>`,
        size: new naver.maps.Size(22, 35),
        anchor: new naver.maps.Point(11, 35),
    },
    animation: naver.maps.Animation.BOUNCE,
});
const imageMarker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3849483, 127.1229117),
    map: map,
    icon: {
        url: "https://navermaps.github.io/maps.js.ncp/docs/img/example/sally.png",
        size: new naver.maps.Size(50, 52),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26),
    },
});
const symbolIconMarker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3595704, 127.105399),
    map: map,
    icon: {
        path: [
            new naver.maps.Point(0, 70),
            new naver.maps.Point(20, 100),
            new naver.maps.Point(40, 70),
            new naver.maps.Point(30, 70),
            new naver.maps.Point(70, 0),
            new naver.maps.Point(10, 70),
        ],
        anchor: new naver.maps.Point(23, 103),
        fillColor: "#ff0000",
        fillOpacity: 1,
        strokeColor: "#000000",
        strokeStyle: "solid",
        strokeWeight: 3,
    },
});

htmlMarker.getElement();
htmlMarker.setOptions("visible", false);
htmlMarker.setAnimation(null);
const getAnimation = htmlMarker.getAnimation();

/**
 * InfoWindow Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-1-infowindow-simple.example.html
 */
const infowindow = new naver.maps.InfoWindow({
    content: `<div>InfoWindow Title</div>`,
});
infowindow.open(map, htmlMarker);
infowindow.close();

/**
 * Overlay(Rectangle, Circle, Ellipse, Polyline) Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-1-shape-simple.example.html
 */
const rectangle = new naver.maps.Rectangle({
    map: map,
    bounds: new naver.maps.LatLngBounds(
        new naver.maps.LatLng(37.1793196, 125.8795594),
        new naver.maps.LatLng(37.5398662, 126.3312422),
    ),
});

const circle = new naver.maps.Circle({
    map: map,
    center: new naver.maps.LatLng(37.3595953, 127.1053971),
    radius: 20000,
    fillColor: "crimson",
    fillOpacity: 0.8,
});

const ellipse = new naver.maps.Ellipse({
    map: map,
    bounds: new naver.maps.LatLngBounds(
        new naver.maps.LatLng(37.1793196, 127.6795594),
        new naver.maps.LatLng(37.5398662, 128.4312422),
    ),
    strokeColor: "yellowgreen",
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: "yellowgreen",
    fillOpacity: 0.3,
});

const coords = [
    [37.1793196, 125.8795594],
    [37.5398662, 126.3312422],
];
const polyline = new naver.maps.Polyline({
    map: map,
    path: coords.map(coord => new naver.maps.LatLng(coord[0], coord[1])),
    strokeLineCap: "round",
    strokeLineJoin: "round",
});

const getBicycleLayer = naver.maps.NaverStyleMapTypeOptions.getBicycleLayer();
const getBlankMap = naver.maps.NaverStyleMapTypeOptions.getBlankMap();
const getCadastralLayer = naver.maps.NaverStyleMapTypeOptions.getCadastralLayer();
const getHybridMap = naver.maps.NaverStyleMapTypeOptions.getHybridMap();
const getMapTypes = naver.maps.NaverStyleMapTypeOptions.getMapTypes();
const getNormalLabelLayer = naver.maps.NaverStyleMapTypeOptions.getNormalLabelLayer();
const getNormalMap = naver.maps.NaverStyleMapTypeOptions.getNormalMap();
const getSatelliteLabelLayer = naver.maps.NaverStyleMapTypeOptions.getSatelliteLabelLayer();
const getSatelliteMap = naver.maps.NaverStyleMapTypeOptions.getSatelliteMap();
const getStreetLayer = naver.maps.NaverStyleMapTypeOptions.getStreetLayer();
const getTerrainMap = naver.maps.NaverStyleMapTypeOptions.getTerrainMap();
const getTrafficLayer = naver.maps.NaverStyleMapTypeOptions.getTrafficLayer();
const getVectorMap = naver.maps.NaverStyleMapTypeOptions.getVectorMap();
const getWorldMap = naver.maps.NaverStyleMapTypeOptions.getWorldMap();

/**
 * Polygon Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-4-polygon-hole.example.html
 */
const arrayPaths = [
    [
        new naver.maps.LatLng(37.37544345085402, 127.11224555969238),
        new naver.maps.LatLng(37.37230584065902, 127.10791110992432),
        new naver.maps.LatLng(37.35975408751081, 127.10795402526855),
        new naver.maps.LatLng(37.359924641705476, 127.11576461791992),
        new naver.maps.LatLng(37.35931064479073, 127.12211608886719),
        new naver.maps.LatLng(37.36043630196386, 127.12293148040771),
        new naver.maps.LatLng(37.36354029942161, 127.12310314178465),
        new naver.maps.LatLng(37.365211629488016, 127.12456226348876),
        new naver.maps.LatLng(37.37544345085402, 127.11224555969238),
    ],
    [
        new naver.maps.LatLng(37.368485964153784, 127.10971355438232),
        new naver.maps.LatLng(37.368520071054576, 127.11464881896971),
        new naver.maps.LatLng(37.36350619025713, 127.11473464965819),
        new naver.maps.LatLng(37.363403862670665, 127.1097993850708),
        new naver.maps.LatLng(37.368485964153784, 127.10971355438232),
    ],
];
const kvoArrayPaths = new naver.maps.KVOArray([
    new naver.maps.KVOArray([
        new naver.maps.LatLng(37.37544345085402, 127.11224555969238),
        new naver.maps.LatLng(37.37230584065902, 127.10791110992432),
        new naver.maps.LatLng(37.35975408751081, 127.10795402526855),
        new naver.maps.LatLng(37.359924641705476, 127.11576461791992),
        new naver.maps.LatLng(37.35931064479073, 127.12211608886719),
        new naver.maps.LatLng(37.36043630196386, 127.12293148040771),
        new naver.maps.LatLng(37.36354029942161, 127.12310314178465),
        new naver.maps.LatLng(37.365211629488016, 127.12456226348876),
        new naver.maps.LatLng(37.37544345085402, 127.11224555969238),
    ]),
    new naver.maps.KVOArray([
        new naver.maps.LatLng(37.368485964153784, 127.10971355438232),
        new naver.maps.LatLng(37.368520071054576, 127.11464881896971),
        new naver.maps.LatLng(37.36350619025713, 127.11473464965819),
        new naver.maps.LatLng(37.363403862670665, 127.1097993850708),
        new naver.maps.LatLng(37.368485964153784, 127.10971355438232),
    ]),
]);
const literalArrayPaths: naver.maps.ArrayOfCoordsLiteral[] = [
    [
        [37.37544345085402, 127.11224555969238],
        [37.37230584065902, 127.10791110992432],
        [37.35975408751081, 127.10795402526855],
        [37.359924641705476, 127.11576461791992],
        [37.35931064479073, 127.12211608886719],
        [37.36043630196386, 127.12293148040771],
        [37.36354029942161, 127.12310314178465],
        [37.365211629488016, 127.12456226348876],
        [37.37544345085402, 127.11224555969238],
    ],
    [
        [37.368485964153784, 127.10971355438232],
        [37.368520071054576, 127.11464881896971],
        [37.36350619025713, 127.11473464965819],
        [37.363403862670665, 127.1097993850708],
        [37.368485964153784, 127.10971355438232],
    ],
];

const polygon = new naver.maps.Polygon({
    map: map,
    paths: arrayPaths,
    fillColor: "#ff0000",
    fillOpacity: 0.3,
    strokeColor: "#ff0000",
    strokeOpacity: 0.6,
    strokeWeight: 3,
});
polygon.setPaths(arrayPaths);
polygon.setPaths(kvoArrayPaths);
polygon.setPaths(literalArrayPaths);
expectType<naver.maps.ArrayOfCoords[] | naver.maps.KVOArray<naver.maps.KVOArrayOfCoords>>(polygon.getPaths());

polygon.setOptions("paths", kvoArrayPaths);
polygon.setOptions("paths", literalArrayPaths);
expectType<
    naver.maps.ArrayOfCoords[] | naver.maps.KVOArray<naver.maps.KVOArrayOfCoords> | naver.maps.ArrayOfCoordsLiteral[]
>(polygon.getOptions("paths"));
expectType<naver.maps.PolygonOptions>(polygon.getOptions());

/**
 * Panorama Basic Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-1-panorama-simple.example.html
 */
const pano = new naver.maps.Panorama("pano", {
    // panoId: "OregDk87L7tsQ35dcpp+Mg==":
    position: new naver.maps.LatLng(37.3599605, 127.1058814),
    pov: {
        pan: -135,
        tilt: 29,
        fov: 100,
    },
    flightSpot: true,
});

/**
 * Geocode Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-3-geocoder-geocoding.example.html
 */
const geoAddress = "경기도 성남시 분당구 불정로 6";
naver.maps.Service.geocode(
    {
        query: geoAddress,
    },
    (status, response) => {
        const point = response.result.items[0].point;
        point.x;
        point.y;
        const addresses = response.v2.addresses;
        addresses[0].roadAddress;
    },
);

naver.maps.Service.reverseGeocode(
    {
        coords: jeju,
        orders: [naver.maps.Service.OrderType.ADDR, naver.maps.Service.OrderType.ROAD_ADDR].join(","),
    },
    (status, response) => {
        const address = response.v2.address;
        address.roadAddress;
        address.jibunAddress;

        const results = response.v2.results;
        results[0].name;
        results[0].code;
        results[0].region;

        const v2Status = response.v2.status;
        v2Status.code;
        v2Status.name;
        v2Status.message;
    },
);

/**
 * Overlay define options and DrawingManager event Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-3-drawing-restore.example.html
 */
let drawingManager: naver.maps.drawing.DrawingManager | undefined;
naver.maps.Event.once(map, "init", function() {
    drawingManager = new naver.maps.drawing.DrawingManager({
        map: map,
        rectangleOptions: {
            fillColor: "#ff0000",
            fillOpacity: 0.5,
            strokeWeight: 3,
            strokeColor: "#ff0000",
        },
        ellipseOptions: {
            fillColor: "#ff25dc",
            fillOpacity: 0.5,
            strokeWeight: 3,
            strokeColor: "#ff25dc",
        },
        polylineOptions: {
            strokeColor: "#222",
            strokeWeight: 3,
        },
        arrowlineOptions: {
            endIconSize: 16,
            strokeWeight: 3,
        },
        polygonOptions: {
            fillColor: "#ffc300",
            fillOpacity: 0.5,
            strokeWeight: 3,
            strokeColor: "#ffc300",
        },
    });

    drawingManager.addListener(naver.maps.drawing.DrawingEvents.ADD, function(e) {});
    drawingManager.addListener(naver.maps.drawing.DrawingEvents.REMOVE, function(e) {});
    drawingManager.addListener(naver.maps.drawing.DrawingEvents.SELECT, function(e) {});
});

/**
 * DrawingManager setOptions and getOptions Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-drawing-options.example.html
 */
/* setOptions */
// drawing options
const drawingManagerOptions: naver.maps.drawing.DrawingOptions = {
    map: map,
};
drawingManager?.setOptions(drawingManagerOptions);
// drawing control
const drawingControl: naver.maps.drawing.DrawingMode[] = [];
drawingManager?.setOptions("drawingControl", drawingControl);
drawingManager?.setOptions("drawingControl", null);
// drawint control options
const drawingControlOptions: naver.maps.drawing.DrawingControlOptions = {
    position: naver.maps.Position.TOP_CENTER,
};
drawingManager?.setOptions("drawingControlOptions", drawingControlOptions);
// drawing mode
const drawingMode: naver.maps.drawing.DrawingMode = naver.maps.drawing.DrawingMode.POLYGON;
drawingManager?.setOptions("drawingMode", drawingMode);
// control point options
const controlPointOptions: naver.maps.drawing.ControlPointOptions = {
    anchorPointOptions: {
        center: [0, 0],
    },
    midPointOptions: {
        center: [0, 0],
    },
    position: 0,
};
drawingManager?.setOptions("controlPointOptions", controlPointOptions);
// rectangle options
const rectangleOptions: Partial<naver.maps.RectangleOptions> = {};
drawingManager?.setOptions("rectangleOptions", rectangleOptions);
// ellipse options
const ellipseOptions: Partial<naver.maps.EllipseOptions> = {};
drawingManager?.setOptions("ellipseOptions", ellipseOptions);
// polyline options
const polylineOptions: Partial<naver.maps.PolylineOptions> = {};
drawingManager?.setOptions("polylineOptions", polylineOptions);
// arrowline options
const arrowlineOptions: Partial<naver.maps.PolylineOptions> = {};
drawingManager?.setOptions("arrowlineOptions", arrowlineOptions);
// polygon options
const polygonOptions: Partial<naver.maps.PolygonOptions> = {};
drawingManager?.setOptions("polygonOptions", polygonOptions);
// marker options
const markerOptions: Partial<naver.maps.MarkerOptions> = {};
drawingManager?.setOptions("markerOptions", markerOptions);

/* getOptions */
// drawingControl
drawingManager?.getOptions("drawingControl")?.length;
// drawingControlOptions
drawingManager?.getOptions("drawingControlOptions")?.position;
drawingManager?.getOptions("drawingControlOptions")?.style;
// controlPointOptions
drawingManager?.getOptions("controlPointOptions")?.anchorPointOptions;
drawingManager?.getOptions("controlPointOptions")?.midPointOptions;
drawingManager?.getOptions("controlPointOptions")?.position;
// rectangleOptions
drawingManager?.getOptions("rectangleOptions")?.clickable;
drawingManager?.getOptions("rectangleOptions")?.fillColor;
drawingManager?.getOptions("rectangleOptions")?.fillOpacity;
drawingManager?.getOptions("rectangleOptions")?.strokeColor;
drawingManager?.getOptions("rectangleOptions")?.strokeLineCap;
drawingManager?.getOptions("rectangleOptions")?.strokeLineJoin;
drawingManager?.getOptions("rectangleOptions")?.strokeOpacity;
drawingManager?.getOptions("rectangleOptions")?.strokeStyle;
drawingManager?.getOptions("rectangleOptions")?.strokeWeight;
drawingManager?.getOptions("rectangleOptions")?.visible;
drawingManager?.getOptions("rectangleOptions")?.zIndex;
// ellipseOptions
drawingManager?.getOptions("ellipseOptions")?.clickable;
drawingManager?.getOptions("ellipseOptions")?.fillColor;
drawingManager?.getOptions("ellipseOptions")?.fillOpacity;
drawingManager?.getOptions("ellipseOptions")?.strokeColor;
drawingManager?.getOptions("ellipseOptions")?.strokeLineCap;
drawingManager?.getOptions("ellipseOptions")?.strokeLineJoin;
drawingManager?.getOptions("ellipseOptions")?.strokeOpacity;
drawingManager?.getOptions("ellipseOptions")?.strokeStyle;
drawingManager?.getOptions("ellipseOptions")?.strokeWeight;
drawingManager?.getOptions("ellipseOptions")?.visible;
drawingManager?.getOptions("ellipseOptions")?.zIndex;
// polylineOptions
drawingManager?.getOptions("polylineOptions")?.clickable;
drawingManager?.getOptions("polylineOptions")?.endIcon;
drawingManager?.getOptions("polylineOptions")?.endIconSize;
drawingManager?.getOptions("polylineOptions")?.path;
drawingManager?.getOptions("polylineOptions")?.startIcon;
drawingManager?.getOptions("polylineOptions")?.startIconSize;
drawingManager?.getOptions("polylineOptions")?.strokeColor;
drawingManager?.getOptions("polylineOptions")?.strokeLineCap;
drawingManager?.getOptions("polylineOptions")?.strokeLineJoin;
drawingManager?.getOptions("polylineOptions")?.strokeOpacity;
drawingManager?.getOptions("polylineOptions")?.strokeStyle;
drawingManager?.getOptions("polylineOptions")?.strokeWeight;
drawingManager?.getOptions("polylineOptions")?.visible;
drawingManager?.getOptions("polylineOptions")?.zIndex;
// arrowlineOptions
drawingManager?.getOptions("arrowlineOptions")?.clickable;
drawingManager?.getOptions("arrowlineOptions")?.endIcon;
drawingManager?.getOptions("arrowlineOptions")?.endIconSize;
drawingManager?.getOptions("arrowlineOptions")?.path;
drawingManager?.getOptions("arrowlineOptions")?.startIcon;
drawingManager?.getOptions("arrowlineOptions")?.startIconSize;
drawingManager?.getOptions("arrowlineOptions")?.strokeColor;
drawingManager?.getOptions("arrowlineOptions")?.strokeLineCap;
drawingManager?.getOptions("arrowlineOptions")?.strokeLineJoin;
drawingManager?.getOptions("arrowlineOptions")?.strokeOpacity;
drawingManager?.getOptions("arrowlineOptions")?.strokeStyle;
drawingManager?.getOptions("arrowlineOptions")?.strokeWeight;
drawingManager?.getOptions("arrowlineOptions")?.visible;
drawingManager?.getOptions("arrowlineOptions")?.zIndex;
// polygonOptions
drawingManager?.getOptions("polygonOptions")?.clickable;
drawingManager?.getOptions("polygonOptions")?.fillColor;
drawingManager?.getOptions("polygonOptions")?.fillOpacity;
drawingManager?.getOptions("polygonOptions")?.strokeColor;
drawingManager?.getOptions("polygonOptions")?.strokeLineCap;
drawingManager?.getOptions("polygonOptions")?.strokeLineJoin;
drawingManager?.getOptions("polygonOptions")?.strokeOpacity;
drawingManager?.getOptions("polygonOptions")?.strokeStyle;
drawingManager?.getOptions("polygonOptions")?.strokeWeight;
drawingManager?.getOptions("polygonOptions")?.visible;
drawingManager?.getOptions("polygonOptions")?.zIndex;
// markerOptions
drawingManager?.getOptions("markerOptions")?.animation;
drawingManager?.getOptions("markerOptions")?.clickable;
drawingManager?.getOptions("markerOptions")?.cursor;
drawingManager?.getOptions("markerOptions")?.draggable;
drawingManager?.getOptions("markerOptions")?.icon;
drawingManager?.getOptions("markerOptions")?.shape;
drawingManager?.getOptions("markerOptions")?.title;
drawingManager?.getOptions("markerOptions")?.visible;
drawingManager?.getOptions("markerOptions")?.zIndex;

/**
 * Map Data Layer Event
 */
map.data.addListener("click", function(e: naver.maps.PointerEvent) {
    const feature = e.feature;
    if (feature.getProperty("focus") !== true) {
        feature.setProperty("focus", true);
    } else {
        feature.setProperty("focus", false);
    }
});

/*
 * LatLng
 */
expectType<naver.maps.LatLng>(new naver.maps.LatLng(37.3595704, 127.105399));

/**
 * Point
 */
expectType<naver.maps.Point>(new naver.maps.Point(1, 1));

/**
 * LatLngBounds
 */
new naver.maps.LatLngBounds([-100, -90, 100, 90]);
new naver.maps.LatLngBounds(new naver.maps.LatLng(37.5, 126.9), new naver.maps.LatLng(37.5, 126.9));
expectType<naver.maps.LatLngBounds>(
    naver.maps.LatLngBounds.bounds(new naver.maps.LatLng(-180, -90), new naver.maps.LatLng(0, 0)),
);

/**
 * PointBounds
 */
new naver.maps.PointBounds([0, 0, 10, 10]);
new naver.maps.PointBounds(new naver.maps.Point(-10, -10), new naver.maps.Point(10, 10));
expectType<naver.maps.PointBounds>(
    naver.maps.PointBounds.bounds(new naver.maps.Point(-1, -1), new naver.maps.Point(0, 0)),
);

function expectType<T>(value: T) {
    return value;
}

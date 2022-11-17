/**
 * Display a Map
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-map-options.example.html
 */
let map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 13,
    minZoom: 7,
    zoomControl: true,
    zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
    },
    mapTypes: new naver.maps.MapTypeRegistry({
        normal: naver.maps.NaverStyleMapTypeOptions.getNormalMap({
            overlayType: 'bg',
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
naver.maps.Event.addListener(map, 'click', function (e) {});
naver.maps.Event.addListener(map, 'keydown', function (e) {});

/**
 * Layer Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-4-street.example.html
 */
const street = new naver.maps.StreetLayer();
const cadastral = new naver.maps.CadastralLayer();

naver.maps.Event.once(map, 'init', function () {
    street.setMap(map);
    cadastral.setMap(map);
});

/**
 * Marker Example
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
});
const imageMarker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3849483, 127.1229117),
    map: map,
    icon: {
        url: 'https://navermaps.github.io/maps.js.ncp/docs/img/example/sally.png',
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
        fillColor: '#ff0000',
        fillOpacity: 1,
        strokeColor: '#000000',
        strokeStyle: 'solid',
        strokeWeight: 3,
    },
});

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
    fillColor: 'crimson',
    fillOpacity: 0.8,
});

const ellipse = new naver.maps.Ellipse({
    map: map,
    bounds: new naver.maps.LatLngBounds(
        new naver.maps.LatLng(37.1793196, 127.6795594),
        new naver.maps.LatLng(37.5398662, 128.4312422),
    ),
    strokeColor: 'yellowgreen',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: 'yellowgreen',
    fillOpacity: 0.3,
});

const coords = [
    [37.1793196, 125.8795594],
    [37.5398662, 126.3312422],
];
const polyline = new naver.maps.Polyline({
    map: map,
    path: coords.map(coord => new naver.maps.LatLng(coord[0], coord[1])),
    strokeLineCap: 'round',
    strokeLineJoin: 'round',
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
 * Panorama Basic Example
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-1-panorama-simple.example.html
 */
const pano = new naver.maps.Panorama('pano', {
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
const geoAddress = '경기도 성남시 분당구 불정로 6';
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
        orders: [naver.maps.Service.OrderType.ADDR, naver.maps.Service.OrderType.ROAD_ADDR].join(','),
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

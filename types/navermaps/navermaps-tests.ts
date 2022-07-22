let map = new naver.maps.Map('map');

map = new naver.maps.Map(document.createElement('div'));
map.setMapTypeId(naver.maps.MapTypeId.HYBRID);

const jeju = new naver.maps.LatLng(33.3590628, 126.534361);

map.setCenter(jeju); // 중심 좌표 이동
map.setZoom(13); // 줌 레벨 변경

const seoul = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
    new naver.maps.LatLng(37.7010174173061, 127.18379493229875),
);

map.fitBounds(seoul); // 좌표 경계 이동

map.panBy(new naver.maps.Point(10, 10)); // 우측 하단으로 10 픽셀 이동

map = new naver.maps.Map('map', {
    mapTypeId: naver.maps.MapTypeId.HYBRID,
});

const registry = new naver.maps.MapTypeRegistry();

map = new naver.maps.Map('map', {
    mapTypes: registry,
    mapTypeId: naver.maps.MapTypeId.SATELLITE,
});

map.mapTypes.set(naver.maps.MapTypeId.SATELLITE, naver.maps.NaverMapTypeOption.getSatelliteMap());
map.mapTypes.set(naver.maps.MapTypeId.HYBRID, naver.maps.NaverMapTypeOption.getHybridMap());

map.setMapTypeId(naver.maps.MapTypeId.NORMAL); // error thrown

const GTA5MapTypeOption1 = {
    minZoom: 0,
    maxZoom: 22,
    projection: naver.maps.EPSG3857,
    name: '세계 지도',
    tileSize: new naver.maps.Size(256, 256),
    repeatX: true,
    vendor: 'MyCorp.',
    provider: [
        {
            title: '내 지도 ver 1.0',
        },
        {
            title: 'OpenStreetMap',
            link: 'http://www.openstreetmap.org/copyright',
        },
        {
            title: '/인천광역시',
            bounds: new naver.maps.LatLngBounds(
                new naver.maps.LatLng(36.915887, 125.690716),
                new naver.maps.LatLng(37.687529, 126.853252),
            ),
        },
    ],
    tileSet: [
        'http://mymap1.com/tiles/world/{z}/{x}/{y}.png',
        'http://mymap2.com/tiles/world/{z}/{x}/{y}.png',
        'http://mymap3.com/tiles/world/{z}/{x}/{y}.png',
        'http://mymap4.com/tiles/world/{z}/{x}/{y}.png',
    ],
};

map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(74.92514151088395, -127.880859375),
    useStyleMap: true,
    zoom: 2,
    mapTypes: new naver.maps.MapTypeRegistry({
        Atlas: new naver.maps.ImageMapType(GTA5MapTypeOption1),
    }),
});

map.setMapTypeId('Atlas');

map.destroy();

const map2 = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
});

const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3595704, 127.105399),
    map: map2,
});

const HOME_PATH = '';

const cityhall = new naver.maps.LatLng(37.5666805, 126.9784147);
const map3 = new naver.maps.Map('map', {
    center: cityhall.destinationPoint(0, 500),
    zoom: 10,
});
const marker2 = new naver.maps.Marker({
    map: map3,
    position: cityhall,
});
const marker3 = new naver.maps.Marker({
    map: map3,
    position: cityhall,
    animation: naver.maps.Animation.BOUNCE,
    icon: {
        content: '<p>Test</p>'
    }
});

const contentString = [
    `<div class="iw_inner">
   <h3>서울특별시청</h3>
   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />
       <img src="${HOME_PATH}/img/example/hi-seoul.jpg" width="55" height="55" alt="서울시청" class="thumb" /><br />
       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />
       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>
   </p>
</div>`,
].join('');

const infowindow = new naver.maps.InfoWindow({
    content: contentString,
});

naver.maps.Event.addListener(marker2, 'click', () => {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map3, marker2);
    }
});

infowindow.open(map3, marker2);

const GREEN_FACTORY = new naver.maps.LatLng(37.3595953, 127.1053971);

const map4 = new naver.maps.Map('map', {
    center: GREEN_FACTORY,
    zoom: 3,
});

const rectangle = new naver.maps.Rectangle({
    map: map4,
    bounds: new naver.maps.LatLngBounds(
        new naver.maps.LatLng(37.1793196, 125.8795594),
        new naver.maps.LatLng(37.5398662, 126.3312422),
    ),
});

const circle = new naver.maps.Circle({
    map: map4,
    center: GREEN_FACTORY,
    radius: 20000,
    fillColor: 'crimson',
    fillOpacity: 0.8,
});

const ellipse = new naver.maps.Ellipse({
    map: map4,
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

// Polyline options
const coords = [
    [37.1793196, 125.8795594],
    [37.5398662, 126.3312422],
];
const polyline = new naver.maps.Polyline({
    map: map4,
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

// Point x,y
const point = new naver.maps.Point(37.1793196, 125.8795594);
point.x;
point.y;

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

const panoramaOptions = {
    size: new naver.maps.Size(256, 256),
    panoId: 'aaa',
    position: new naver.maps.LatLng(37.3599605, 127.1058814),
    pov: {
        pan: -135,
        tilt: 29,
        fov: 100,
    },
    flightSpot: true,
};

const pano = new naver.maps.Panorama('pano', panoramaOptions);
if (pano.aroundControl) {
    pano.aroundControl.getElement();
}
pano.controls[0].clear();

// HeatMap Tests
// https://navermaps.github.io/maps.js.ncp/docs/naver.maps.visualization.WeightedLocation.html#toc0
// https://navermaps.github.io/maps.js.ncp/docs/naver.maps.visualization.HeatMap.html#setData

const map5 = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
});

const heatmapData = [
    new naver.maps.visualization.WeightedLocation(37.5529258, 126.9730588, Math.random()),
    new naver.maps.visualization.WeightedLocation(37.5529088, 126.9732841, Math.random()),
    new naver.maps.visualization.WeightedLocation(37.5529343, 126.9735738, Math.random()),
    new naver.maps.visualization.WeightedLocation(37.5526791, 126.9736274, Math.random()),
    new naver.maps.visualization.WeightedLocation(37.5526877, 126.9733270, Math.random()),
    new naver.maps.visualization.WeightedLocation(37.5526877, 126.9730910, Math.random()),
];

const heatmap = new naver.maps.visualization.HeatMap({
    map: map5,
    data: heatmapData,
});

const getHeatmapData = heatmap.getData();
heatmap.setData([
    ...heatmapData,
    new naver.maps.visualization.WeightedLocation(37.5525090, 126.9731125, Math.random()),
]);
heatmap.redraw();

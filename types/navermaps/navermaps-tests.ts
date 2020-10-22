let map = new naver.maps.Map('map');

map = new naver.maps.Map(document.createElement('div'));
map.setMapTypeId(naver.maps.MapTypeId.HYBRID);

const jeju = new naver.maps.LatLng(33.3590628, 126.534361);

map.setCenter(jeju); // 중심 좌표 이동
map.setZoom(13);     // 줌 레벨 변경

const seoul = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
    new naver.maps.LatLng(37.7010174173061, 127.18379493229875));

map.fitBounds(seoul); // 좌표 경계 이동

map.panBy(new naver.maps.Point(10, 10)); // 우측 하단으로 10 픽셀 이동

map = new naver.maps.Map('map', {
    mapTypeId: naver.maps.MapTypeId.HYBRID
});

const registry = new naver.maps.MapTypeRegistry();

map = new naver.maps.Map('map', {
    mapTypes: registry,
    mapTypeId: naver.maps.MapTypeId.SATELLITE
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
    provider: [{
        title: "내 지도 ver 1.0"
    }, {
        title: "OpenStreetMap",
        link: "http://www.openstreetmap.org/copyright"
    }, {
        title: "/인천광역시",
        bounds: new naver.maps.LatLngBounds(
            new naver.maps.LatLng(36.915887, 125.690716),
            new naver.maps.LatLng(37.687529, 126.853252))
    }],
    tileSet: [
        "http://mymap1.com/tiles/world/{z}/{x}/{y}.png",
        "http://mymap2.com/tiles/world/{z}/{x}/{y}.png",
        "http://mymap3.com/tiles/world/{z}/{x}/{y}.png",
        "http://mymap4.com/tiles/world/{z}/{x}/{y}.png"
    ]
};

map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(74.92514151088395, -127.880859375),
    zoom: 2,
    mapTypes: new naver.maps.MapTypeRegistry({
        Atlas: new naver.maps.ImageMapType(GTA5MapTypeOption1)
    })
});

map.setMapTypeId("Atlas");

const map2 = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
});

const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3595704, 127.105399),
    map: map2
});

const HOME_PATH = '';

const cityhall = new naver.maps.LatLng(37.5666805, 126.9784147);
const map3 = new naver.maps.Map('map', {
    center: cityhall.destinationPoint(0, 500),
    zoom: 10
});
const marker2 = new naver.maps.Marker({
    map: map3,
    position: cityhall
});

const contentString = [
  `<div class="iw_inner">
   <h3>서울특별시청</h3>
   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />
       <img src="${HOME_PATH}/img/example/hi-seoul.jpg" width="55" height="55" alt="서울시청" class="thumb" /><br />
       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />
       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>
   </p>
</div>`
    ].join('');

const infowindow = new naver.maps.InfoWindow({
    content: contentString
});

naver.maps.Event.addListener(marker2, "click", () => {
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
    zoom: 3
});

const rectangle = new naver.maps.Rectangle({
    map: map4,
    bounds: new naver.maps.LatLngBounds(
        new naver.maps.LatLng(37.1793196, 125.8795594),
        new naver.maps.LatLng(37.5398662, 126.3312422)
    )
});

const circle = new naver.maps.Circle({
    map: map4,
    center: GREEN_FACTORY,
    radius: 20000,
    fillColor: 'crimson',
    fillOpacity: 0.8
});

const ellipse = new naver.maps.Ellipse({
    map: map4,
    bounds: new naver.maps.LatLngBounds(
        new naver.maps.LatLng(37.1793196, 127.6795594),
        new naver.maps.LatLng(37.5398662, 128.4312422)
    ),
    strokeColor: 'yellowgreen',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: 'yellowgreen',
    fillOpacity: 0.3
});

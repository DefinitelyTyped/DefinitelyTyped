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
        position: naver.maps.Position.TOP_RIGHT
    }
});

/**
 * Change any combination of center, zoom and padding with an animated transition
 * See https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-map-options.example.html
 */
const jeju = new naver.maps.LatLng(33.3590628, 126.534361);
const busan = new naver.maps.LatLng(35.1797865, 129.0750194);
const dokdo = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(37.2380651, 131.8562652),
    new naver.maps.LatLng(37.2444436, 131.8786475)
);
const seoul = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
    new naver.maps.LatLng(37.7010174173061, 127.18379493229875)
);

map.setCenter(jeju);
map.setZoom(6, true);
map.fitBounds(dokdo);
map.panTo(jeju);
map.panToBounds(seoul);
map.panBy(new naver.maps.Point(10, 10));

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
expectType<naver.maps.LatLngBounds>(naver.maps.LatLngBounds.bounds(new naver.maps.LatLng(-180, -90), new naver.maps.LatLng(0, 0)));

 /**
  * PointBounds
  */
new naver.maps.PointBounds([0, 0, 10, 10]);
new naver.maps.PointBounds(
    new naver.maps.Point(-10, -10), new naver.maps.Point(10, 10)
);
expectType<naver.maps.PointBounds>(naver.maps.PointBounds.bounds(new naver.maps.Point(-1, -1), new naver.maps.Point(0, 0)));

function expectType<T>(value: T) {
    return value;
}

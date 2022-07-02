const container = document.createElement('map');
const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
};
const map = new kakao.maps.Map(container, options);

// example: https://apis.map.kakao.com/web/sample/donut/
const polygon = new kakao.maps.Polygon({ map });

const path = [
    new kakao.maps.LatLng(33.45086654081833, 126.56906858718982),
    new kakao.maps.LatLng(33.45010890948828, 126.56898629127468),
    new kakao.maps.LatLng(33.44979857909499, 126.57049357211622),
    new kakao.maps.LatLng(33.450137483918496, 126.57202991943016),
    new kakao.maps.LatLng(33.450706188506054, 126.57223147947938),
    new kakao.maps.LatLng(33.45164068091554, 126.5713126693152)
];

const hole = [
    new kakao.maps.LatLng(33.4506262491095, 126.56997323165163),
    new kakao.maps.LatLng(33.45029422800042, 126.57042659659218),
    new kakao.maps.LatLng(33.45032339792896, 126.5710395101452),
    new kakao.maps.LatLng(33.450622037218295, 126.57136070280123),
    new kakao.maps.LatLng(33.450964416902046, 126.57129448564594),
    new kakao.maps.LatLng(33.4510527150534, 126.57075627706975)
];

polygon.setPath(path); // $ExpectType void
polygon.setPath([path, hole]); // $ExpectType void
// @ts-expect-error
polygon.setPath(path, hole);

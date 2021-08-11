var container = document.createElement('map'),
    options = {
         center: new kakao.maps.LatLng(33.450701, 126.570667),
         level: 3
    };
var map = new kakao.maps.Map(container, options);

map.setCenter(new kakao.maps.LatLng(37.537183, 127.005454));

var position = map.getCenter();

// 지도 레벨을 4로 설정한다
map.setLevel(4);

// 지도 레벨을 4로 설정하고 특정 좌표를 기준으로 확대 또는 축소되도록 한다
map.setLevel(4, {anchor: new kakao.maps.LatLng(33.450705, 126.570677)});

// setLevel 시 애니메이션 효과 옵션 설정, 기본지속시간은 300ms이다
map.setLevel(4, {animate: true});

// setLevel 시 애니메이션 효과의 지속시간을 500ms로 설정
map.setLevel(4, {
    animate: {
        duration: 500
    }
});

var level = map.getLevel();

map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);

map.getMapTypeId(); // kakao.maps.MapTypeId.ROADMAP

var bounds = new kakao.maps.LatLngBounds(new kakao.maps.LatLng(33.450705, 126.570677), new kakao.maps.LatLng(33.450705, 126.570677))
map.setBounds(bounds);

var bounds = map.getBounds();
bounds.toString();

map.setMinLevel(3);
map.setMaxLevel(10);

map.panBy(100, 50);

var moveLatLng = new kakao.maps.LatLng(33.450580, 126.574942);   
map.panTo(moveLatLng);

var control = new kakao.maps.ZoomControl();
map.addControl(control, kakao.maps.ControlPosition.TOPRIGHT); 

map.removeControl(control);

map.setDraggable(false);

// 지도가 드래그로 이동이 가능한 상태면 true, 아니면 false를 반환한다.
map.getDraggable();

// 지도의 마우스 휠, 모바일 터치를 이용한 확대, 축소 기능을 막는다.
map.setZoomable(false);

// 지도 객체 함수 호출을 통한 확대, 축소는 동작한다. 
map.setLevel(3);

// 지도가 마우스 휠과 모바일 터치를 이용해 확대, 축소가 가능한 상태이면 true, 아니면 false를 반환한다.
map.getZoomable();

// API 내부의 좌표게가 특정 투영법을 사용하지 않도록 할 경우.
//map.setProjectionId(kakao.maps.ProjectionId.NONE);
//map.getProjectionId();

container.style.width = '1200px';
container.style.height = '800px';

map.relayout();

map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

// 키보드로 지도를 조작할 수 없도록 설정한다
map.setKeyboardShortcuts(false);

// true를 반환하면 현재 지도를 키보드로 조작할 수 있는 상태이다
map.getKeyboardShortcuts();

// copyright의 위치를 오른쪽 아래로 설정하고, 로고와의 위치를 반전시킨다
// 실행 결과는 아래 이미지와 같다
map.setCopyrightPosition(kakao.maps.CopyrightPosition.BOTTOMRIGHT, true);

var proj = map.getProjection();

// 커서 스타일을 'move'로 변경한다. 
map.setCursor('move');

kakao.maps.event.addListener(map, 'center_changed', function() {
    alert('center changed!');
});
kakao.maps.event.addListener(map, 'zoom_start', function() {
    alert('Map is going to zoom!');
});
kakao.maps.event.addListener(map, 'zoom_changed', function() {
    alert('zoom changed!');
});
kakao.maps.event.addListener(map, 'bounds_changed', function() {
    alert('bounds changed!');
});
kakao.maps.event.addListener(map, 'click', function(mouseEvent: kakao.maps.MouseEvent) {
    var latlng = mouseEvent.latLng;
    alert('click! ' + latlng.toString());
});
kakao.maps.event.addListener(map, 'dblclick', function(mouseEvent: kakao.maps.MouseEvent) {
    var latlng = mouseEvent.latLng;
    alert('double click! ' + latlng.toString());
});
kakao.maps.event.addListener(map, 'rightclick', function(mouseEvent: kakao.maps.MouseEvent) {
    var latlng = mouseEvent.latLng;
    alert('right click! ' + latlng.toString());
});
kakao.maps.event.addListener(map, 'mousemove', function(mouseEvent: kakao.maps.MouseEvent) {
    // do something
});
kakao.maps.event.addListener(map, 'dragstart', function() {
    // do something
});
kakao.maps.event.addListener(map, 'drag', function() {
    // do something
});
kakao.maps.event.addListener(map, 'dragend', function() {
    // do something
});
kakao.maps.event.addListener(map, 'idle', function() {
    // do something
});
kakao.maps.event.addListener(map, 'tilesloaded', function() {
    // do something
});
kakao.maps.event.addListener(map, 'maptypeid_changed', function() {
    // do something
});

var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도 오른쪽 위에 지도 타입 컨트롤이 표시되도록 지도에 컨트롤을 추가한다.
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 아래와 같이 옵션을 입력하지 않아도 된다
var zoomControl = new kakao.maps.ZoomControl();

// 지도 오른쪽에 줌 컨트롤이 표시되도록 지도에 컨트롤을 추가한다.
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var tileset =
    new kakao.maps.Tileset(256, 256, function(x: any, y: any, z: any) {
        /**
         * x: column
         * y: row
         * z: level
         **/
        // 세 parameter를 조합하여 타일 주소를 조합/반환한다.
        return 'http://return.tile.image.url/' + z + '/' + y + '/' + x + '.png';
    }, [], false, 2, 5);

kakao.maps.Tileset.add('SAMPLE', tileset); // kakao.maps.MapTypeId.SAMPLE
 
var copyright = new kakao.maps.TilesetCopyright('Nasa', 'Nasa', 9);

var coords = new kakao.maps.Coords(400207.5, -11710);
coords.getX(); // 400207.5 
coords.getY(); // -11710  

var coords = new kakao.maps.Coords(400207.5, -11710),
	coords1 = new kakao.maps.Coords(400207.5, -11710),
	coords2 = new kakao.maps.Coords(400207, 11710);

coords.equals(coords1); // true
coords.equals(coords2); // false

var coords = new kakao.maps.Coords(400207.5, -11710);
coords.toString(); // (400207.5, -11710)

var coords = new kakao.maps.Coords(400207.5, -11710);
coords.toLatLng().toString(); // (33.45067375096625, 126.5706721005115) 

var latlng = new kakao.maps.LatLng(37, 127);
latlng.getLat(); // 37
latlng.getLng(); // 127

var latlng = new kakao.maps.LatLng(37.1, 127.1),
    latlng1 = new kakao.maps.LatLng(37.1, 127.1),
    latlng2 = new kakao.maps.LatLng(37.2, 127.2);

latlng.equals(latlng1); // true
latlng.equals(latlng2); // false

var latlng = new kakao.maps.LatLng(37, 127);
latlng.toString(); // "(37, 127)"

var latlng = new kakao.maps.LatLng(37, 127);
latlng.toCoords().toString(); // "(500000, 972532.3892234056)"

var sw = new kakao.maps.LatLng(36, 127),
    ne = new kakao.maps.LatLng(37, 128);

var bounds = new kakao.maps.LatLngBounds(sw, ne); // 인자를 주지 않으면 빈 영역을 생성한다.

var sw = new kakao.maps.LatLng(36, 127),
    ne = new kakao.maps.LatLng(37, 128),
    lb = new kakao.maps.LatLngBounds(sw, ne),
    lb1 = new kakao.maps.LatLngBounds(sw, ne),
    lb2 = new kakao.maps.LatLngBounds();

lb.equals(lb1); // true
lb.equals(lb2); // false

var sw = new kakao.maps.LatLng(36, 127),
    ne = new kakao.maps.LatLng(37, 128),
    lb = new kakao.maps.LatLngBounds(sw, ne);

lb.toString(); // "((36, 127), (37, 128))"

var sw = new kakao.maps.LatLng(36, 127),
    ne = new kakao.maps.LatLng(37, 128),
    lb = new kakao.maps.LatLngBounds(sw, ne);

lb.getSouthWest().toString(); // "(36, 127)"

var sw = new kakao.maps.LatLng(36, 127),
    ne = new kakao.maps.LatLng(37, 128),
    lb = new kakao.maps.LatLngBounds(sw, ne);

lb.getNorthEast().toString(); // "(37, 128)"

var sw = new kakao.maps.LatLng(36, 127),
    ne = new kakao.maps.LatLng(37, 128),
    lb1 = new kakao.maps.LatLngBounds(sw, ne);
    lb2 = new kakao.maps.LatLngBounds();

lb1.isEmpty(); // false
lb2.isEmpty(); // true

var sw = new kakao.maps.LatLng(36, 127),
    ne = new kakao.maps.LatLng(37, 128),
    lb = new kakao.maps.LatLngBounds(sw, ne),
    extraLatLng = new kakao.maps.LatLng(36.5, 128.5);

lb.toString(); // "((36, 127), (37, 128))"

lb.extend(extraLatLng);

lb.toString(); // "((36, 127), (37, 128.5))"

var sw = new kakao.maps.LatLng(36, 127),
    ne = new kakao.maps.LatLng(37, 128),
    lb = new kakao.maps.LatLngBounds(sw, ne),
    l1 = new kakao.maps.LatLng(36.5, 127.5),
    l2 = new kakao.maps.LatLng(37, 128);

lb.contain(l1); // true
lb.contain(l2); // false

var point = new kakao.maps.Point(12, 34);

var p = new kakao.maps.Point(1, 1),
    p1 = new kakao.maps.Point(1, 1),
    p2 = new kakao.maps.Point(2, 2);

p.equals(p1); // true
p.equals(p2); // false

var p = new kakao.maps.Point(480, 960);
p.toString(); // "(480, 960)"

var size = new kakao.maps.Size(56, 78);

var s = new kakao.maps.Size(1, 1),
    s1 = new kakao.maps.Size(1, 1),
    s2 = new kakao.maps.Size(2, 2);

s.equals(s1); // true
s.equals(s2); // false

var s = new kakao.maps.Size(480, 960);
s.toString(); // "(480, 960)"

kakao.maps.event.addListener(map, 'idle', function() {
    alert('nothing to do');
 });

var clickHandler = function(event: kakao.maps.MouseEvent) {    
    alert('click: ' + event.latLng.toString());   
}; 
 
kakao.maps.event.addListener(map, 'click', clickHandler);
kakao.maps.event.removeListener(map, 'click', clickHandler);

kakao.maps.event.preventMap();

kakao.maps.event.addListener(map, 'click', function(mouseEvent: kakao.maps.MouseEvent) {
    alert(mouseEvent.latLng instanceof kakao.maps.LatLng); // true
});

kakao.maps.event.addListener(map, 'click', function(event: kakao.maps.MouseEvent) {
    alert(event.point instanceof kakao.maps.Point); // true
});

var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(33.450701, 126.570667)
});

marker.setMap(map); // 지도에 올린다.
marker.setMap(null); // 지도에서 제거한다.

marker.getMap();

var markerImage = new kakao.maps.MarkerImage(
    'https://i1.daumcdn.net/dmaps/apis/nlocalblit04.png',
    new kakao.maps.Size(31, 35));
marker.setImage(markerImage);

marker.getImage(); // 지정했던 MarkerImage의 인스턴스를 리턴한다.

// 지도 혹은 로드뷰에서 마커의 위치를 지정
marker.setPosition(new kakao.maps.LatLng(33.450701, 126.570667));

// 로드뷰에서 특정 시점에 고정된 마커의 위치를 지정
marker.setPosition(new kakao.maps.Viewpoint(30, -10, 0));

// 로드뷰에서 특정 시점 및 특정 panoId에서만 보이도록 고정된 마커의 위치를 지정
marker.setPosition(new kakao.maps.Viewpoint(30, -10, 0, 1033283653));

marker.getPosition();

marker.setZIndex(3);

var marker = new kakao.maps.Marker({
    zIndex: 4
});
marker.getZIndex(); // 4

marker.setVisible(false); // 마커를 숨긴다.

marker.setVisible(true);
marker.getVisible(); // true

marker.setTitle('타이틀');

var marker = new kakao.maps.Marker({
    title: "마커 타이틀을 획득하셨습니다."
});
marker.getTitle(); // "마커 타이틀을 획득하셨습니다."

marker.setDraggable(true); // 드래그 가능하도록 설정

marker.getDraggable();

marker.setClickable(true);

marker.getClickable();

marker.setAltitude(10);

var marker = new kakao.maps.Marker({
	altitude: 10
});
marker.getAltitude(); // 10

marker.setRange(300);

var marker = new kakao.maps.Marker({
    range: 300
});
marker.getRange(); // 300

marker.setOpacity(0.5);

var marker = new kakao.maps.Marker({
    opacity: 0.5
});
marker.getOpacity(); // 0.5

kakao.maps.event.addListener(marker, 'click', function() {
    alert('marker click!');
});
kakao.maps.event.addListener(marker, 'mouseover', function() {
    alert('marker mouseover!');
});
kakao.maps.event.addListener(marker, 'mouseout', function() {
    alert('marker mouseout!');
});
kakao.maps.event.addListener(marker, 'rightclick', function() {
    alert('marker rightclick!');
});
kakao.maps.event.addListener(marker, 'dragstart', function() {
    alert('marker dragstart!');
});
kakao.maps.event.addListener(marker, 'dragend', function() {
    alert('marker dragend!');
});

// 세 번째 파라메터로 options를 사용.
var icon = new kakao.maps.MarkerImage(
    'https://localimg.daum-img.net/localimages/07/2009/map/icon/blog_icon01_on.png',
    new kakao.maps.Size(31, 35),
    {
        offset: new kakao.maps.Point(16, 34),
        alt: "마커 이미지 예제",
        shape: "poly",
        coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
    }
);
/*
아래와 같이 세번째 파라메터부터 순서대로 offset, shape, coords 값을 넣어주는 방식으로도 사용 가능하다.
var icon = new kakao.maps.MarkerImage(
    'https://localimg.daum-img.net/localimages/07/2009/map/icon/blog_icon01_on.png',
    new kakao.maps.Size(31, 35),
    new kakao.maps.Point(16, 34),
    "poly",
    "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
);
*/

new kakao.maps.Marker({
    position: new kakao.maps.LatLng(33.450701, 126.570667),
    image: icon
}).setMap(map);

var icon = new kakao.maps.MarkerImage(
    'https://i1.daumcdn.net/dmaps/apis/n_local_blit_04.png',
    new kakao.maps.Size(31, 35));

var icon = new kakao.maps.MarkerImage(
    'https://i1.daumcdn.net/dmaps/apis/n_local_blit_04.png',
    new kakao.maps.Size(31, 35),
    {
        shape: 'poly',
        coords: '16,0,20,2,24,6,26,10,26,16,23,22,17,25,14,35,13,35,9,25,6,24,2,20,0,16,0,10,2,6,6,2,10,0'        
    });
    
var infowindow = new kakao.maps.InfoWindow({
        map: map,
        position: new kakao.maps.LatLng(33.450701, 126.570667),
        content: 'I am InfoWindow'
    });

var map = new kakao.maps.Map(container, options);

var infowindow = new kakao.maps.InfoWindow({
    position: new kakao.maps.LatLng(33.450701, 126.570667),
    content: 'open me plz.'
});

var infoWindow = new kakao.maps.InfoWindow({
    position: new kakao.maps.LatLng(33.450701, 126.570667),
    content: 'open me plz.'
});

infowindow.open(map, marker);

infowindow.close();

infowindow.getMap();

var position = new kakao.maps.LatLng(33.450701, 126.570667);
infowindow.setPosition(position);

infowindow.getPosition();

infowindow.setContent('This is all for you');

infowindow.getContent(); // "This is all for you"

infowindow.setZIndex(3);

infowindow.getZIndex(); // 4

infowindow.setAltitude(10);

var infoWindow = new kakao.maps.InfoWindow({
	altitude: 10
});
infoWindow.getAltitude(); // 10

infoWindow.setRange(300);

var infoWindow = new kakao.maps.InfoWindow({
    range: 300
});
infoWindow.getRange(); // 300

var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    clickable: true,
    content: '<div class="customOverlay"><a href="#">Chart</a></div>',
    position: new kakao.maps.LatLng(33.450701, 126.570667),
    xAnchor: 0.5,
    yAnchor: 1,
    zIndex: 3
});

customOverlay.setMap(map); // 지도에 올린다.
customOverlay.setMap(null); // 지도에서 제거한다.


customOverlay.getMap();
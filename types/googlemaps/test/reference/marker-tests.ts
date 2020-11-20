import GoogleAnimation = google.maps.Animation;
import LatLng = google.maps.LatLng;
import GoogleMap = google.maps.Map;
import Marker = google.maps.Marker;
import Point = google.maps.Point;
import Size = google.maps.Size;
import StreetViewPanorama = google.maps.StreetViewPanorama;
import SymbolPath = google.maps.SymbolPath;

Marker.MAX_ZINDEX; // $ExpectType number
Marker.MAX_ZINDEX = 10; // $ExpectError

const marker = new Marker();

const markerWithEmptyOptions = new Marker({});

const markerWithAllOptions = new Marker({
    anchorPoint: new Point(0, 0),
    animation: GoogleAnimation.BOUNCE,
    clickable: true,
    crossOnDrag: true,
    cursor: 'test',
    draggable: true,
    icon: 'test',
    label: 'test',
    map: new GoogleMap(document.createElement('div')),
    opacity: 0.5,
    optimized: true,
    position: { lat: 0, lng: 0 },
    title: 'test',
    visible: true,
    zIndex: 0,
});

marker.getAnimation(); // $ExpectType Animation | null | undefined

marker.getClickable(); // $ExpectType boolean

marker.getCursor(); // $ExpectType string | null | undefined

marker.getDraggable(); // $ExpectType boolean | null | undefined

marker.getIcon(); // $ExpectType string | ReadonlyIcon | ReadonlySymbol | null | undefined

marker.getLabel(); // $ExpectType ReadonlyMarkerLabel | null | undefined

marker.getMap(); // $ExpectType Map<Element> | StreetViewPanorama | null | undefined

marker.getOpacity(); // $ExpectType number | null | undefined

marker.getPosition(); // $ExpectType LatLng | null | undefined

marker.getShape(); // $ExpectType MarkerShapeCircle | MarkerShapeRect | MarkerShapePoly | null | undefined

marker.getTitle(); // $ExpectType string | null | undefined

marker.getVisible(); // $ExpectType boolean

marker.getZIndex(); // $ExpectType number | null | undefined

marker.setAnimation(GoogleAnimation.BOUNCE);
marker.setAnimation(null);

marker.setClickable(true);

marker.setCursor('test');
marker.setCursor(null);

marker.setDraggable(true);
marker.setDraggable(null);

marker.setIcon({
    anchor: new Point(0, 0),
    labelOrigin: new Point(0, 0),
    origin: new Point(0, 0),
    scaledSize: new Size(10, 10),
    size: new Size(10, 10),
    url: 'test',
});
marker.setIcon({ url: 'test' });
marker.setIcon({
    anchor: new Point(0, 0),
    fillColor: 'black',
    fillOpacity: 0,
    labelOrigin: new Point(0, 0),
    path: SymbolPath.BACKWARD_CLOSED_ARROW,
    rotation: 0,
    scale: 1,
    strokeColor: 'black',
    strokeOpacity: 0,
    strokeWeight: 0,
});
marker.setIcon({}); // $ExpectError
marker.setIcon('test');
marker.setIcon(null);

marker.setLabel({
    text: 'test',
    color: 'test',
    fontFamily: 'test',
    fontSize: 'test',
    fontWeight: 'test',
});
marker.setLabel({ text: 'test' });
marker.setLabel({}); // $ExpectError
marker.setLabel('test');
marker.setLabel(null);

marker.setMap(new GoogleMap(document.createElement('div')));
marker.setMap(new StreetViewPanorama(document.createElement('div')));
marker.setMap(null);

marker.setOpacity(0.5);
marker.setOpacity(null);

marker.setOptions({
    anchorPoint: new Point(0, 0),
    animation: GoogleAnimation.BOUNCE,
    clickable: true,
    crossOnDrag: true,
    cursor: '',
    draggable: true,
    icon: '',
    label: '',
    map,
    opacity: 0.5,
    optimized: true,
    position: { lat: 0, lng: 0 },
    title: '',
    visible: true,
    zIndex: 0,
});
marker.setOptions({});

marker.setPosition(new LatLng(0, 0));
marker.setPosition({ lat: 0, lng: 0 });
marker.setPosition(null);

marker.setShape({ type: 'circle' }); // $ExpectError
marker.setShape({ type: 'circle', coords: [] }); // $ExpectError
marker.setShape({ type: 'circle', coords: [0] }); // $ExpectError
marker.setShape({ type: 'circle', coords: [0, 0] }); // $ExpectError
marker.setShape({ type: 'circle', coords: [0, 0, 10] });
marker.setShape({ type: 'circle', coords: [0, 0, 10, 0] }); // $ExpectError
marker.setShape({ type: 'rect' }); // $ExpectError
marker.setShape({ type: 'rect', coords: [0] }); // $ExpectError
marker.setShape({ type: 'rect', coords: [0, 0] }); // $ExpectError
marker.setShape({ type: 'rect', coords: [0, 0, 10] }); // $ExpectError
marker.setShape({ type: 'rect', coords: [0, 0, 10, 10] });
marker.setShape({ type: 'rect', coords: [0, 0, 10, 10, 10] }); // $ExpectError
marker.setShape({ type: 'poly' }); // $ExpectError
marker.setShape({ type: 'poly', coords: [0] }); // $ExpectError
marker.setShape({ type: 'poly', coords: [0, 0] }); // $ExpectError
marker.setShape({ type: 'poly', coords: [0, 0, 10] }); // $ExpectError
marker.setShape({ type: 'poly', coords: [0, 0, 10, 10] });
marker.setShape({ type: 'poly', coords: [0, 0, 10, 10, 10] });
marker.setShape({ type: 'poly', coords: [0, 0, 10, 10, 10, 10] });
marker.setShape({ type: 'test' }); // $ExpectError
marker.setShape({ type: 'test', coords: [0] }); // $ExpectError
marker.setShape({ type: 'test', coords: [0, 0] }); // $ExpectError
marker.setShape({ type: 'test', coords: [0, 0, 0] }); // $ExpectError
marker.setShape({ type: 'test', coords: [0, 0, 0, 0] }); // $ExpectError
marker.setShape({}); // $ExpectError
marker.setShape(null);

marker.setTitle('test');
marker.setTitle(null);

marker.setVisible(true);

marker.setZIndex(0);
marker.setZIndex(null);

marker.addListener('animation_changed', () => {});
marker.addListener('animation_changed', event => {}); // $ExpectError
marker.addListener('click', event => {
    event; // $ExpectType MouseEvent
});
marker.addListener('clickable_changed', () => {});
marker.addListener('clickable_changed', event => {}); // $ExpectError
marker.addListener('cursor_changed', () => {});
marker.addListener('cursor_changed', event => {}); // $ExpectError
marker.addListener('dblclick', event => {
    event; // $ExpectType MouseEvent
});
marker.addListener('drag', event => {
    event; // $ExpectType MouseEvent
});
marker.addListener('dragend', event => {
    event; // $ExpectType MouseEvent
});
marker.addListener('draggable_changed', () => {});
marker.addListener('draggable_changed', event => {}); // $ExpectError
marker.addListener('dragstart', event => {
    event; // $ExpectType MouseEvent
});
marker.addListener('flat_changed', () => {});
marker.addListener('flat_changed', event => {}); // $ExpectError
marker.addListener('icon_changed', () => {});
marker.addListener('icon_changed', event => {}); // $ExpectError
marker.addListener('mousedown', event => {
    event; // $ExpectType MouseEvent
});
marker.addListener('mouseout', event => {
    event; // $ExpectType MouseEvent
});
marker.addListener('mouseover', event => {
    event; // $ExpectType MouseEvent
});
marker.addListener('mouseup', event => {
    event; // $ExpectType MouseEvent
});
marker.addListener('position_changed', () => {});
marker.addListener('position_changed', event => {}); // $ExpectError
marker.addListener('rightclick', event => {
    event; // $ExpectType MouseEvent
});
marker.addListener('shape_changed', () => {});
marker.addListener('shape_changed', event => {}); // $ExpectError
marker.addListener('title_changed', () => {});
marker.addListener('title_changed', event => {}); // $ExpectError
marker.addListener('visible_changed', () => {});
marker.addListener('visible_changed', event => {}); // $ExpectError
marker.addListener('zindex_changed', () => {});
marker.addListener('zindex_changed', event => {}); // $ExpectError

export {};

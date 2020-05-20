/**
 * preset.ts
 */

declare const map: AMap.Map;
declare const lnglat: AMap.LngLat;
declare const size: AMap.Size;
declare const lnglatTuple: [number, number];
declare const pixel: AMap.Pixel;
declare const markerShape: AMap.MarkerShape;
declare const icon: AMap.Icon;
declare const bounds: AMap.Bounds;
declare const div: HTMLDivElement;
declare const lang: AMap.Lang;
declare const domEle: HTMLElement;
declare const canvasEle: HTMLCanvasElement;
declare const imgEle: HTMLImageElement;

declare const circle: AMap.Circle;
declare const marker: AMap.Marker;
declare const layer: AMap.Layer;
declare const tileLayer: AMap.TileLayer;
declare const massMarksLayer: AMap.MassMarks;
declare const labelMarker: AMap.LabelMarker;

// declare const videoLayer: AMap.VideoLayer;
// declare const buildings: AMap.Buildings;
// declare const canvasLayer: AMap.CanvasLayer;
// declare const flexible: AMap.TileLayer.Flexible;
// declare const imageLayer: AMap.ImageLayer;
// declare const tileLayerGroup: AMap.LayerGroup<AMap.TileLayer>;
// declare const layerGroup: AMap.LayerGroup;
// declare const trafficLayer: AMap.TileLayer.Traffic;
// declare const bezierCurve: AMap.BezierCurve;
// declare const contextMenu: AMap.ContextMenu;
// declare const polyline: AMap.Polyline;
// declare const polygon: AMap.Polygon;

/**
 * arryBounds.ts
 */

// $ExpectType ArrayBounds
const testArrayBounds = new AMap.ArrayBounds([lnglat, lnglat, lnglat]);

// $ExpectType LngLat[]
testArrayBounds.bounds;

// $ExpectType boolean
testArrayBounds.contains(lnglat);

// $ExpectType Bounds
testArrayBounds.toBounds();

// $ExpectType LngLat
testArrayBounds.getCenter();

/**
 * bounds.ts
 */

// $ExpectType Bounds
const testBounds = new AMap.Bounds(lnglat, lnglat);
// $ExpectType Bounds
new AMap.Bounds();
// $ExpectError
new AMap.Bounds([0, 0, 0]);
// $ExpectType Bounds
new AMap.Bounds([0, 0, 0, 0]);
// $ExpectType Bounds
new AMap.Bounds(lnglatTuple, lnglatTuple);
// $ExpectType Bounds
new AMap.Bounds(0, 0, 0, 0);

// $ExpectType boolean
testBounds.contains(lnglat);
// $ExpectType boolean
testBounds.contains(lnglatTuple);

// $ExpectType LngLat
testBounds.getCenter();

// $ExpectType LngLat
testBounds.getSouthWest();

// $ExpectType LngLat
testBounds.getSouthEast();

// $ExpectType LngLat
testBounds.getNorthEast();

// $ExpectType LngLat
testBounds.getNorthWest();

// $ExpectType string
testBounds.toString();

/**
 * browser.ts
 */

const brwoser = AMap.Browser;

// $ExpectType string
brwoser.ua;

// $ExpectType boolean
brwoser.mobile;

const plat: 'android' | 'ios' | 'windows' | 'mac' | 'other' = brwoser.plat;

// $ExpectType boolean
brwoser.mac;

// $ExpectType boolean
brwoser.windows;

// $ExpectType boolean
brwoser.ios;

// $ExpectType boolean
brwoser.iPad;

// $ExpectType boolean
brwoser.iPhone;

// $ExpectType boolean
brwoser.android;

// $ExpectType boolean
brwoser.android23;

// $ExpectType boolean
brwoser.chrome;

// $ExpectType boolean
brwoser.firefox;

// $ExpectType boolean
brwoser.safari;

// $ExpectType boolean
brwoser.wechat;

// $ExpectType boolean
brwoser.uc;

// $ExpectType boolean
brwoser.qq;

// $ExpectType boolean
brwoser.ie;

// $ExpectType boolean
brwoser.ie6;

// $ExpectType boolean
brwoser.ie7;

// $ExpectType boolean
brwoser.ie8;

// $ExpectType boolean
brwoser.ie9;

// $ExpectType boolean
brwoser.ie10;

// $ExpectType boolean
brwoser.ie11;

// $ExpectType boolean
brwoser.edge;

// $ExpectType boolean
brwoser.ielt9;

// $ExpectType boolean
brwoser.baidu;

// $ExpectType boolean
brwoser.isLocalStorage;

// $ExpectType boolean
brwoser.isGeolocation;

// $ExpectType boolean
brwoser.mobileWebkit;

// $ExpectType boolean
brwoser.mobileWebkit3d;

// $ExpectType boolean
brwoser.mobileOpera;

// $ExpectType boolean
brwoser.retina;

// $ExpectType boolean
brwoser.touch;

// $ExpectType boolean
brwoser.msPointer;

// $ExpectType boolean
brwoser.pointer;

// $ExpectType boolean
brwoser.webkit;

// $ExpectType boolean
brwoser.ie3d;

// $ExpectType boolean
brwoser.webkit3d;

// $ExpectType boolean
brwoser.gecko3d;

// $ExpectType boolean
brwoser.opera3d;

// $ExpectType boolean
brwoser.any3d;

// $ExpectType boolean
brwoser.isCanvas;

// $ExpectType boolean
brwoser.isSvg;

// $ExpectType boolean
brwoser.isVML;

// $ExpectType boolean
brwoser.isWorker;

// $ExpectType boolean
brwoser.isWebsocket;

// $ExpectType boolean
brwoser.isWebGL();

/**
 * convert-from.ts
 */

declare const convertType: 'baidu' | 'mapbar' | 'gps' | null;
// $ExpectType void
AMap.convertFrom(lnglat, convertType, (status, result) => {
    const temp: 'complete' | 'error' = status;
    if (typeof result !== 'string') {
        // $ExpectType string
        result.info;
        // $ExpectType LngLat[]
        result.locations;
    } else {
        // $ExpectType string
        result;
    }
});
// $ExpectType void
AMap.convertFrom([lnglat], null, () => { });
// $ExpectType void
AMap.convertFrom(lnglatTuple, null, () => { });
// $ExpectType void
AMap.convertFrom([lnglatTuple], null, () => { });

/**
 * dom-util.ts
 */

const domUtil = AMap.DomUtil;

// $ExpectType Size
domUtil.getViewport(div);

// $ExpectType Pixel
domUtil.getViewportOffset(div);

// $ExpectType HTMLDivElement
domUtil.create('div');
// $ExpectType HTMLAnchorElement
domUtil.create('a');
// $ExpectType HTMLDivElement
domUtil.create('div', div);
// $ExpectType HTMLDivElement
domUtil.create('div', div, 'className');

// $ExpectType void
domUtil.setClass(div);
// $ExpectType void
domUtil.setClass(div, 'className');

// $ExpectType boolean
domUtil.hasClass(div, 'className');

// $ExpectType void
domUtil.removeClass(div, 'className');

// $ExpectType void
domUtil.setOpacity(div, 1);

// $ExpectType void
domUtil.rotate(div, 10);
// $ExpectType void
domUtil.rotate(div, 10, { x: 10, y: 10 });

const util2: typeof AMap.DomUtil = domUtil.setCss(div, { textAlign: 'left' });
// $ExpectError
domUtil.setCss(div, { textAlign: 10 });

// $ExpectType void
domUtil.empty(div);

// $ExpectType void
domUtil.remove(div);

/**
 * event.ts
 */

// $ExpectType Map
map.on('hotspotclick', (event: AMap.Map.EventMap['hotspotclick']) => {
    // $ExpectType "hotspotclick"
    event.type;
    // $ExpectType string
    event.id;
    // $ExpectType LngLat
    event.lnglat;
});

// $ExpectType EventListener<0>
AMap.event.addDomListener(div, 'click', event => {
    // $ExpectType number
    event.clientX;
});

// $ExpectType EventListener<1>
AMap.event.addListener(map, 'hotspotclick', function(event: AMap.Map.EventMap['hotspotclick']) {
    // $ExpectType "hotspotclick"
    event.type;
    // $ExpectType string
    event.id;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType number
    this.test;
}, { test: 1 });
AMap.event.addListener(map, 'click', (event: AMap.Map.EventMap['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Map
    event.target;
});

// $ExpectType EventListener<1>
const eventListener = AMap.event.addListenerOnce(map, 'hotspotclick', function(event: AMap.Map.EventMap['hotspotclick']) {
    // $ExpectType "hotspotclick"
    event.type;
    // $ExpectType string
    event.id;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType number
    this.test;
}, { test: 1 });

// $ExpectType void
AMap.event.removeListener(eventListener);

// $ExpectType void
AMap.event.trigger(map, 'click', {
    lnglat,
    pixel,
    target: map
});
// $ExpectType void
AMap.event.trigger(map, 'hotspotclick', {
    lnglat,
    name: 'name',
    id: 'id',
    isIndoorPOI: true
});
// $ExpectType void
AMap.event.trigger(map, 'complete');

/**
 * geometry-util.ts
 */

{
    const point = lnglat;
    const pointTuple = lnglatTuple;
    const line = [point];
    const lineTuple = [pointTuple];
    const ring = [point];
    const ringTuple = [pointTuple];
    const polygon = [ring];
    const polygonTuple = [ringTuple];
    const geometryUtil = AMap.GeometryUtil;

    // $ExpectType number
    geometryUtil.distance(point, point);
    // $ExpectType number
    geometryUtil.distance(pointTuple, pointTuple);
    // $ExpectType number
    geometryUtil.distance(point, line);
    // $ExpectType number
    geometryUtil.distance(pointTuple, lineTuple);

    // $ExpectType number
    geometryUtil.ringArea(ring);
    // $ExpectType number
    geometryUtil.ringArea(ringTuple);

    // $ExpectType boolean
    geometryUtil.isClockwise(ring);
    // $ExpectType boolean
    geometryUtil.isClockwise(ringTuple);

    // $ExpectType number
    geometryUtil.distanceOfLine(line);
    // $ExpectType number
    geometryUtil.distanceOfLine(lineTuple);

    // $ExpectType [number, number][]
    geometryUtil.ringRingClip(ring, ring);
    // $ExpectType [number, number][]
    geometryUtil.ringRingClip(ringTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.doesRingRingIntersect(ring, ring);
    // $ExpectType boolean
    geometryUtil.doesRingRingIntersect(ringTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.doesLineRingIntersect(line, ring);
    // $ExpectType boolean
    geometryUtil.doesLineRingIntersect(lineTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.doesLineLineIntersect(line, line);
    // $ExpectType boolean
    geometryUtil.doesLineLineIntersect(lineTuple, lineTuple);

    // $ExpectType boolean
    geometryUtil.doesSegmentPolygonIntersect(point, point, polygon);
    // $ExpectType boolean
    geometryUtil.doesSegmentPolygonIntersect(pointTuple, pointTuple, polygonTuple);

    // $ExpectType boolean
    geometryUtil.doesSegmentRingIntersect(point, point, ring);
    // $ExpectType boolean
    geometryUtil.doesSegmentRingIntersect(pointTuple, pointTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.doesSegmentLineIntersect(point, point, line);
    // $ExpectType boolean
    geometryUtil.doesSegmentLineIntersect(pointTuple, pointTuple, lineTuple);

    // $ExpectType boolean
    geometryUtil.doesSegmentsIntersect(point, point, point, point);
    // $ExpectType boolean
    geometryUtil.doesSegmentsIntersect(pointTuple, pointTuple, pointTuple, pointTuple);

    // $ExpectType boolean
    geometryUtil.isPointInRing(point, ring);
    // $ExpectType boolean
    geometryUtil.isPointInRing(pointTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.isRingInRing(ring, ring);
    // $ExpectType boolean
    geometryUtil.isRingInRing(ringTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.isPointInPolygon(point, polygon);
    // $ExpectType boolean
    geometryUtil.isPointInPolygon(pointTuple, polygonTuple);

    // $ExpectType [number, number][]
    geometryUtil.makesureClockwise(lineTuple);

    // $ExpectType [number, number][]
    geometryUtil.makesureAntiClockwise(lineTuple);

    // $ExpectType [number, number]
    geometryUtil.closestOnSegment(point, point, point);
    // $ExpectType [number, number]
    geometryUtil.closestOnSegment(pointTuple, pointTuple, pointTuple);

    // $ExpectType [number, number]
    geometryUtil.closestOnSegment(point, point, point);
    // $ExpectType [number, number]
    geometryUtil.closestOnSegment(pointTuple, pointTuple, pointTuple);

    // $ExpectType [number, number]
    geometryUtil.closestOnLine(point, line);
    // $ExpectType [number, number]
    geometryUtil.closestOnLine(pointTuple, lineTuple);

    // $ExpectType number
    geometryUtil.distanceToSegment(point, point, point);
    // $ExpectType number
    geometryUtil.distanceToSegment(pointTuple, pointTuple, pointTuple);

    // $ExpectType number
    geometryUtil.distanceToLine(point, line);
    // $ExpectType number
    geometryUtil.distanceToLine(pointTuple, lineTuple);

    // $ExpectType boolean
    geometryUtil.isPointOnSegment(point, point, point);
    // $ExpectType boolean
    geometryUtil.isPointOnSegment(point, point, point, 1);
    // $ExpectType boolean
    geometryUtil.isPointOnSegment(pointTuple, pointTuple, pointTuple);
    // $ExpectType boolean
    geometryUtil.isPointOnSegment(pointTuple, pointTuple, pointTuple, 1);

    // $ExpectType boolean
    geometryUtil.isPointOnLine(point, line);
    // $ExpectType boolean
    geometryUtil.isPointOnLine(point, line, 1);
    // $ExpectType boolean
    geometryUtil.isPointOnLine(pointTuple, lineTuple);
    // $ExpectType boolean
    geometryUtil.isPointOnLine(pointTuple, lineTuple, 1);

    // $ExpectType boolean
    geometryUtil.isPointOnRing(point, ring);
    // $ExpectType boolean
    geometryUtil.isPointOnRing(point, ring, 1);
    // $ExpectType boolean
    geometryUtil.isPointOnRing(pointTuple, ringTuple);
    // $ExpectType boolean
    geometryUtil.isPointOnRing(pointTuple, ringTuple, 1);

    // $ExpectType boolean
    geometryUtil.isPointOnPolygon(point, polygon);
    // $ExpectType boolean
    geometryUtil.isPointOnPolygon(point, polygon, 1);
    // $ExpectType boolean
    geometryUtil.isPointOnPolygon(pointTuple, polygonTuple);
    // $ExpectType boolean
    geometryUtil.isPointOnPolygon(pointTuple, polygonTuple, 1);
}

/**
 * lnglat.ts
 */

// $ExpectType LngLat
new AMap.LngLat(114, 22);
// $ExpectType LngLat
const testLnglat = new AMap.LngLat(113, 21);

// $ExpectType LngLat
testLnglat.offset(1, 2);

// $ExpectType number
testLnglat.distance(testLnglat);
// $ExpectType number
testLnglat.distance([testLnglat]);

// $ExpectType number
testLnglat.getLng();

// $ExpectType number
testLnglat.getLat();

// $ExpectType boolean
testLnglat.equals(testLnglat);

// $ExpectType string
testLnglat.toString();

// $ExpectType LngLat
testLnglat.add(testLnglat);
// $ExpectType LngLat
testLnglat.add(testLnglat, true);

// $ExpectType LngLat
testLnglat.subtract(testLnglat);
// $ExpectType LngLat
testLnglat.subtract(testLnglat, true);

// $ExpectType LngLat
testLnglat.divideBy(1);
// $ExpectType LngLat
testLnglat.divideBy(1, true);

// $ExpectType LngLat
testLnglat.multiplyBy(1);
// $ExpectType LngLat
testLnglat.multiplyBy(1, true);

/**
 * map.ts
 */

// $ExpectType Map
new AMap.Map('map');
// $ExpectType Map
new AMap.Map(div);

// $ExpectType Map
new AMap.Map(div, {});

// $ExpectType Map
const testMap = new AMap.Map(div, {
    layers: [tileLayer],
    zoom: 15,
    center: [1, 2],
    labelzIndex: 110,
    zooms: [5, 15],
    lang: 'zh_cn',
    defaultCursor: 'default',
    crs: 'EPSG4326',
    animateEnable: true,
    isHotspot: false,
    defaultLayer: tileLayer,
    rotateEnable: true,
    resizeEnable: true,
    showIndoorMap: true,
    // indoorMap, // TODO
    expandZoomRange: true,
    dragEnable: true,
    zoomEnable: true,
    doubleClickZoom: true,
    keyboardEnable: true,
    jogEnable: true,
    scrollWheel: true,
    touchZoom: true,
    mapStyle: '',
    features: ['road'],
    showBuildingBlock: true,
    skyColor: '#fff',
    preloadMode: true,
    mask: [[1, 2], [2, 3], [3, 4]]
});

// $ExpectType number
testMap.getZoom();

// $ExpectType Layer[]
testMap.getLayers();

// $ExpectType LngLat
testMap.getCenter();

// $ExpectType HTMLElement | null
testMap.getContainer();

testMap.getCity(city => {
    // $ExpectType string
    city.city;
    // $ExpectType string
    city.citycode;
    // $ExpectType string
    city.district;
    // $ExpectType string | never[]
    city.province;
});

// $ExpectType Bounds
testMap.getBounds();

// $ExpectType number
testMap.getLabelzIndex();

// $ExpectType Lang
testMap.getLang();

// $ExpectType Size
testMap.getSize();

// $ExpectType number
testMap.getRotation();

// $ExpectType Status
const mapStatus = testMap.getStatus();
// $ExpectType boolean
mapStatus.animateEnable;
// $ExpectType boolean
mapStatus.doubleClickZoom;
// $ExpectType boolean
mapStatus.dragEnable;
// $ExpectType boolean
mapStatus.isHotspot;
// $ExpectType boolean
mapStatus.jogEnable;
// $ExpectType boolean
mapStatus.keyboardEnable;
// $ExpectType boolean
mapStatus.pitchEnable;
// $ExpectType boolean
mapStatus.resizeEnable;
// $ExpectType boolean
mapStatus.rotateEnable;
// $ExpectType boolean
mapStatus.scrollWheel;
// $ExpectType boolean
mapStatus.touchZoom;
// $ExpectType boolean
mapStatus.zoomEnable;

// $ExpectType string
testMap.getDefaultCursor();

// $ExpectType number
testMap.getResolution();

// $ExpectType number
testMap.getScale();
// $ExpectType number
testMap.getScale(1);

// $ExpectType void
testMap.setZoom(1);

// $ExpectType void
testMap.setLabelzIndex(1);

// $ExpectType void
testMap.setLayers([tileLayer]);

// $ExpectType void
testMap.setCenter(lnglat);
// $ExpectType void
testMap.setCenter([1, 2]);

// $ExpectType void
testMap.setZoomAndCenter(13, lnglat);
// $ExpectType void
testMap.setZoomAndCenter(13, [1, 2]);

// $ExpectType void
testMap.setCity('city', (coord, zoom) => {
    // $ExpectType string
    coord[0];
    // $ExpectType string
    coord[1];
    // $ExpectType number
    zoom;
});

// $ExpectType Bounds
testMap.setBounds(bounds);

// $ExpectType void
testMap.setLimitBounds(bounds);

// $ExpectType void
testMap.clearLimitBounds();

// $ExpectType void
testMap.setLang('zh_cn');

// $ExpectType void
testMap.setRotation(1);

// $ExpectType void
testMap.setStatus({});
// $ExpectType void
testMap.setStatus({
    animateEnable: true,
    doubleClickZoom: true,
    dragEnable: true,
    isHotspot: true,
    jogEnable: true,
    keyboardEnable: true,
    pitchEnable: false,
    resizeEnable: false,
    rotateEnable: false,
    scrollWheel: true,
    touchZoom: true,
    zoomEnable: true
});

// $ExpectType void
testMap.setDefaultCursor('default');

// $ExpectType void
testMap.zoomIn();

// $ExpectType void
testMap.zoomOut();

// $ExpectType void
testMap.panTo([1, 2]);
// $ExpectType void
testMap.panTo(lnglat);

// $ExpectType void
testMap.panBy(1, 2);

// $ExpectType void
testMap.clearMap();

// $ExpectType Map
testMap.plugin('plugin name', () => { });
// $ExpectType Map
testMap.plugin(['plugin name'], () => { });

// $ExpectType void
testMap.clearInfoWindow();

// $ExpectType LngLat
testMap.pixelToLngLat(pixel);
// $ExpectType LngLat
testMap.pixelToLngLat(pixel, 1);

// $ExpectType Pixel
testMap.lnglatToPixel(lnglat);
// $ExpectType Pixel
testMap.lnglatToPixel(lnglat, 1);

// $ExpectType LngLat
testMap.containerToLngLat(pixel);

// $ExpectType Pixel
testMap.lngLatToContainer(lnglat);
// $ExpectType Pixel
testMap.lnglatTocontainer(lnglat);

// $ExpectType void
testMap.setMapStyle('');
// $ExpectType string
testMap.getMapStyle();

// $ExpectType void
testMap.setFeatures('all');
// $ExpectType void
testMap.setFeatures(['bg']);

const feature: 'all' | 'bg' | 'point' | 'road' | 'building' | AMap.Map.Feature[] = testMap.getFeatures();

// $ExpectType void
testMap.setDefaultLayer(tileLayer);

// $ExpectType void
testMap.setPitch(1);
// $ExpectType number
testMap.getPitch();

// $ExpectType ViewMode
testMap.getViewMode_();

// $ExpectType Pixel
testMap.lngLatToGeodeticCoord(lnglat);
// $ExpectType Pixel
testMap.lngLatToGeodeticCoord(lnglatTuple);

// $ExpectType LngLat
testMap.geodeticCoordToLngLat(pixel);

// $ExpectType void
testMap.destroy();

declare function dblClickHandler(this: AMap.Map, event: AMap.Map.EventMap['dblclick']): void;

// $ExpectType Map
testMap.on('click', (event: AMap.Map.EventMap['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Pixel
    event.pixel;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Map
    event.target;
});
// $ExpectType Map
testMap.on('dblclick', dblClickHandler);
// $ExpectType Map
testMap.on('complete', (event: AMap.Map.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectError
    event.value;
});
// $ExpectType Map
testMap.on('hotspotclick', (event: AMap.Map.EventMap['hotspotclick']) => {
    // $ExpectType string
    event.id;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType string
    event.name;
    // $ExpectType "hotspotclick"
    event.type;
});
// $ExpectType Map
testMap.on('custom', (event: AMap.Event<'custom', { test: string }>) => {
    // $ExpectType "custom"
    event.type;
    // $ExpectType string
    event.test;
});

// $ExpectType Map
testMap.off('dblclick', dblClickHandler);
// $ExpectType Map
testMap.off('click', 'mv');

// $ExpectType Map
testMap.emit('click', {
    target: testMap,
    lnglat,
    pixel
});

testMap.emit('complete');
// $ExpectType Map
testMap.emit('hotspotclick', {
    lnglat,
    name: '123',
    id: '123',
    isIndoorPOI: true
});
// $ExpectType Map
testMap.emit('custom', {
    test: 1
});
// $ExpectType Map
testMap.emit('custom', undefined);

/**
 * pixel.ts
 */

// $ExpectType Pixel
new AMap.Pixel(10, 20);
// $ExpectType Pixel
const testPixel = new AMap.Pixel(10, 20);

// $ExpectType number
testPixel.getX();

// $ExpectType number
testPixel.getY();

// $ExpectType boolean
testPixel.equals(testPixel);

// $ExpectType string
testPixel.toString();

// $ExpectType Pixel
testPixel.add({ x: 1, y: 2 });
// $ExpectType Pixel
testPixel.add({ x: 1, y: 2 }, false);

// $ExpectType Pixel
testPixel.round();

// $ExpectType Pixel
testPixel.floor();

// $ExpectType number
testPixel.length();

// $ExpectType number | null
testPixel.direction();

// $ExpectType Pixel
testPixel.toFixed();
// $ExpectType Pixel
testPixel.toFixed(2);

/**
 * plugin.ts
 */

AMap.plugin('plugin name', () => {
 // callback
});

AMap.service('plugin name', () => {
 // callback
});

/**
 * size.ts
 */

// $ExpectType Size
const testSize = new AMap.Size(10, 20);

// $ExpectType number
testSize.getHeight();

// $ExpectType number
testSize.getWidth();

// $ExpectType string
testSize.toString();

// $ExpectType boolean
testSize.contains({ x: 10, y: 10 });

/**
 * util.ts
 */

const util = AMap.Util;

// $ExpectType string
util.colorNameToHex('colorName');

// $ExpectType string
util.rgbHex2Rgba('rgbHex');

// $ExpectType string
util.argbHex2Rgba('argbHex');

// $ExpectType boolean
util.isEmpty({});
// $ExpectError
util.isEmpty(1);

// $ExpectType number[]
util.deleteItemFromArray([1], 1);

// $ExpectType number[]
util.deleteItemFromArrayByIndex([1], 1);

// $ExpectType number
util.indexOf([1], 1);
// $ExpectError
util.indexOf([1], '1');

// $ExpectType number
util.format(1);
// $ExpectType number
util.format(1, 1);

declare const value1: number | number[];
// $ExpectType boolean
util.isArray(value1);
if (util.isArray(value1)) {
    // $ExpectType number[]
    value1;
} else {
    // $ExpectType number
    value1;
}

declare const value2: number | HTMLElement;
// $ExpectType boolean
util.isDOM(value2);
if (util.isDOM(value2)) {
    // $ExpectType HTMLElement
    value2;
} else {
    // $ExpectType number
    value2;
}

// $ExpectType boolean
util.includes([1], 1);
// $ExpectError
util.includes([1], '1');

// $ExpectType number
util.requestIdleCallback(() => { });
// $ExpectType number
const idleCallbackHandle = util.requestIdleCallback(() => { }, { timeout: 1 });

// $ExpectType void
util.cancelIdleCallback(idleCallbackHandle);

// $ExpectType number
util.requestAnimFrame(() => { });
// $ExpectType number
const animFrameHandle = util.requestAnimFrame(function() {
    // $ExpectType number
    this.test;
}, { test: 1 });

// $ExpectType void
util.cancelAnimFrame(animFrameHandle);

/**
 * view2d.ts
 */

// $ExpectType View2D
new AMap.View2D();
// $ExpectType View2D
new AMap.View2D({});

// $ExpectType View2D
new AMap.View2D({
    center: [1, 2],
    rotation: 1,
    zoom: 10,
    crs: 'EPGS3395'
});

// $ExpectType View2D
const testView2d = new AMap.View2D({
    center: lnglat
});

// $ExpectType View2D
testView2d.on('complete', () => { });

/**
 * layer/buildings.ts
 */

// $ExpectType Buildings
new AMap.Buildings();
// $ExpectType Buildings
new AMap.Buildings();
// $ExpectType Buildings
const testBuildings = new AMap.Buildings({
    zooms: [1, 18],
    opacity: 0.8,
    heightFactor: 1,
    visible: true,
    zIndex: 10,
    map
});

testBuildings.setStyle({
    hideWithoutStyle: false,
    areas: [
        {
            visible: true,
            rejectTexture: true,
            color1: 'ffffff00',
            color2: 'ffffcc00',
            path: [[1, 2]]
        },
        {
            visible: true,
            rejectTexture: true,
            color1: 'ffffff00',
            color2: 'ffffcc00',
            path: [lnglat]
        },
        {
            color1: 'ff99ff00',
            path: [lnglat]
        },
    ]
});

/**
 * layer/canvasLayer.ts
 */

// $ExpectType CanvasLayer
new AMap.CanvasLayer({
    map,
    bounds,
    visible: true,
    zooms: [1, 2],
    opacity: 1
});

// $ExpectType CanvasLayer
new AMap.CanvasLayer();
// $ExpectType CanvasLayer
new AMap.CanvasLayer({});
// $ExpectType CanvasLayer
const testCanvasLayer = new AMap.CanvasLayer({
    bounds
});

// $ExpectType void
testCanvasLayer.setMap(null);
// $ExpectType void
testCanvasLayer.setMap(map);

// $ExpectType Map | null | undefined
testCanvasLayer.getMap();

// $ExpectType void
testCanvasLayer.show();

// $ExpectType void
testCanvasLayer.hide();

// $ExpectType number
testCanvasLayer.getzIndex();

// $ExpectType void
testCanvasLayer.setzIndex(10);

// $ExpectType HTMLCanvasElement | null
testCanvasLayer.getElement();

// $ExpectType void
testCanvasLayer.setCanvas(canvasEle);

// $ExpectType HTMLCanvasElement | undefined
testCanvasLayer.getCanvas();

/**
 * layer/flexible.ts
 */

// $ExpectType Flexible
new AMap.TileLayer.Flexible();
// $ExpectType Flexible
new AMap.TileLayer.Flexible({});
// $ExpectType Flexible
const testFlexible = new AMap.TileLayer.Flexible({
    createTile(x, y, z, success, fail) {
        // $ExpectType number
        x;
        // $ExpectType number
        y;
        // $ExpectType number
        z;
        // $ExpectType void
        success(imgEle);
        // $ExpectType void
        success(canvasEle);
        // $ExpectType void
        fail();
    },
    cacheSize: 10,
    opacity: 1,
    visible: true,
    map,
    zIndex: 1,
    zooms: [1, 2]
});

// $ExpectType void
testFlexible.setMap(null);
// $ExpectType void
testFlexible.setMap(map);

// $ExpectType Map | null | undefined
testFlexible.getMap();

// $ExpectType void
testFlexible.show();

// $ExpectType void
testFlexible.hide();

// $ExpectType void
testFlexible.setzIndex(10);

// $ExpectType number
testFlexible.getzIndex();

/**
 * layer/imageLayer.ts
 */

// $ExpectType ImageLayer
new AMap.ImageLayer({
    map,
    bounds,
    visible: true,
    zooms: [1, 2],
    opacity: 1
});

// $ExpectType ImageLayer
new AMap.ImageLayer();
// $ExpectType ImageLayer
new AMap.ImageLayer({});
// $ExpectType ImageLayer
const testImageLayer = new AMap.ImageLayer({
    bounds
});

// $ExpectType void
testImageLayer.setMap(null);
// $ExpectType void
testImageLayer.setMap(map);

// $ExpectType Map | null | undefined
testImageLayer.getMap();

// $ExpectType void
testImageLayer.show();

// $ExpectType void
testImageLayer.hide();

// $ExpectType number
testImageLayer.getzIndex();

// $ExpectType void
testImageLayer.setzIndex(10);

// $ExpectType HTMLImageElement | null
testImageLayer.getElement();

// $ExpectType void
testImageLayer.setImageUrl('url');

// $ExpectType string | undefined
testImageLayer.getImageUrl();

/**
 * layer/labelsLayer.ts
 */

// $ExpectType LabelsLayer
new AMap.LabelsLayer();
// $ExpectType LabelsLayer
new AMap.LabelsLayer({});
// $ExpectType LabelsLayer
const testLabelsLayer = new AMap.LabelsLayer({
    visible: true,
    zIndex: 1,
    zooms: [1, 1],
    opacity: 1
});

// $ExpectType void
testLabelsLayer.add(labelMarker);
// $ExpectType void
testLabelsLayer.add([labelMarker]);

// $ExpectType void
testLabelsLayer.remove(labelMarker);

// $ExpectType void
testLabelsLayer.clear();

// $ExpectType any
testLabelsLayer.on('click', () => { });

// $ExpectType any
testLabelsLayer.off('click', () => { });

// $ExpectType any
testLabelsLayer.on('click', (event: AMap.LabelsLayer.EventMap['click']) => {
    {
        const { data, opts } = event.data;
        // $ExpectType number
        data.id;
        // $ExpectType string
        data.name;
        // $ExpectType [number, number] | [string, string]
        data.position;
        // $ExpectType number | undefined
        data.rank;
        // $ExpectType string | undefined
        data.txt;
        // $ExpectType [number, number]
        data.zooms;

        // $ExpectType number
        opts.opacity;
        // $ExpectType number
        opts.zIndex;

        {
            // $ExpectType TextOptions
            const textOptions = opts.text;

            // $ExpectType string | undefined
            textOptions.content;
            if (textOptions.direction !== undefined) {
                // $ExpectType TextDirection
                textOptions.direction;
            } else {
                // $ExpectType undefined
                textOptions.direction;
            }

            if (textOptions.offset !== undefined) {
                // $ExpectType [number, number] | Pixel
                textOptions.offset;
            } else {
                // $ExpectType undefined
                textOptions.offset;
            }

            // $ExpectType [number, number] | undefined
            textOptions.zooms;

            {
                const textStyle = textOptions.style;
                if (textStyle) {
                    // $ExpectType string | undefined
                    textStyle.fillColor;

                    // $ExpectType string | undefined
                    textStyle.fontFamily;

                    if (textStyle.fontWeight !== undefined) {
                        // $ExpectType FontWeight
                        textStyle.fontWeight;
                    } else {
                        // $ExpectType undefined
                        textStyle.fontWeight;
                    }

                    // $ExpectType string | undefined
                    textStyle.fillColor;

                    // $ExpectType string | undefined
                    textStyle.strokeColor;

                    // $ExpectType number | undefined
                    textStyle.strokeWidth;
                }
            }
        }

        {
            const iconOptions = opts.icon;
            // $ExpectType string | undefined
            iconOptions.image;

            if (iconOptions.size !== undefined) {
                // $ExpectType number[] | Size
                iconOptions.size;
            } else {
                // $ExpectType undefined
                iconOptions.size;
            }

            if (iconOptions.clipOrigin !== undefined) {
                // $ExpectType number[] | Pixel
                iconOptions.clipOrigin;
            } else {
                // $ExpectType undefined
                iconOptions.clipOrigin;
            }

            if (iconOptions.anchor !== undefined) {
                // $ExpectType Anchor
                iconOptions.anchor;
            } else {
                // $ExpectType undefined
                iconOptions.anchor;
            }

            // $ExpectType boolean | undefined
            iconOptions.retina;
        }
    }

    // $ExpectType LngLat
    event.lnglat;

    // $ExpectType Pixel
    event.pixel;

    // $ExpectType LabelsLayer
    event.target;
});

/**
 * layer/layer.ts
 */

// $ExpectError
new AMap.Layer();

// $ExpectType HTMLDivElement | undefined
layer.getContainer();

// $ExpectType [number, number]
layer.getZooms();

// $ExpectType void
layer.setOpacity(1);

// $ExpectType number
layer.getOpacity();

// $ExpectType void
layer.show();

// $ExpectType void
layer.hide();

// $ExpectType void
layer.setMap();
// $ExpectType void
layer.setMap(map);

// $ExpectType void
layer.setzIndex(1);

// $ExpectType number
layer.getzIndex();

/**
 * layer/layerGroup.ts
 */

// $ExpectError
new AMap.LayerGroup();

// $ExpectType LayerGroup<TileLayer>
new AMap.LayerGroup(tileLayer);
// $ExpectType LayerGroup<TileLayer>
const testTileLayerGroup = new AMap.LayerGroup([tileLayer]);
// $ExpectType LayerGroup<any>
const testAnyLauerGroup = new AMap.LayerGroup<any>([]);

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.addLayer(tileLayer);
// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.addLayer([tileLayer]);
// $ExpectError
testTileLayerGroup.addLayer(massMarksLayer);

// $ExpectType TileLayer[]
testTileLayerGroup.getLayers();

// $ExpectType TileLayer | null
testTileLayerGroup.getLayer(function(item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType null
    this;

    return true;
});

testTileLayerGroup.hasLayer(function(item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType null
    this;

    return true;
});
testTileLayerGroup.hasLayer(tileLayer);

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.removeLayer(tileLayer);
// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.removeLayer([tileLayer]);

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.clearLayers();

testTileLayerGroup.eachLayer(function(item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType TileLayer
    this;
});
testTileLayerGroup.eachLayer(function(item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType number
    this.test;
}, { test: 1 });

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.setMap(map);

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.hide();

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.show();

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.reload();

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.setOptions({});

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.setOptions({
    tileSize: 256
});
// layerGruop.setOptions({
//     // $ExpectError
//     interval: 1
// });

testAnyLauerGroup.addLayer(tileLayer);

testAnyLauerGroup.addLayer(massMarksLayer);

testAnyLauerGroup.setOptions({
    test: 1
});

/**
 * layer/massMarks.ts
 */

const massMarksStyle1 = {
    anchor: pixel,
    url: '',
    size,
    rotation: 1
};
const massMarksStyle2 = {
    anchor: pixel,
    url: '',
    size
};
const massMarksData1 = {
    lnglat
};

interface MassMarksCustomData extends AMap.MassMarks.Data {
    name: string;
    id: string;
}
const massMarksMassMarksCustomData: MassMarksCustomData = {
    lnglat: [1, 2],
    style: 1,
    name: '',
    id: ''
};

// $ExpectError
new AMap.MassMarks();
// $ExpectError
new AMap.MassMarks([], {});

new AMap.MassMarks([], {
    style: [massMarksStyle1, massMarksStyle2]
});
new AMap.MassMarks([massMarksData1], {
    style: [massMarksStyle1, massMarksStyle2]
});

// $ExpectType MassMarks<MassMarksCustomData>
const testMassMarks = new AMap.MassMarks<MassMarksCustomData>([massMarksMassMarksCustomData], {
    style: [massMarksStyle1, massMarksStyle2]
});

// $ExpectType void
testMassMarks.setStyle(massMarksStyle1);
// $ExpectType void
testMassMarks.setStyle([massMarksStyle1]);

// $ExpectType Style | Style[]
testMassMarks.getStyle();

// $ExpectType void
testMassMarks.setData('');

// $ExpectError
testMassMarks.setData(massMarksData1);
// $ExpectError
testMassMarks.setData(massMarksMassMarksCustomData);

const massMarksCustomData = testMassMarks.getData()[0];
// $ExpectType string
massMarksCustomData.name;
// $ExpectType string
massMarksCustomData.id;
// $ExpectType LngLat
massMarksCustomData.lnglat;

// $ExpectType void
testMassMarks.clear();

testMassMarks.on('click', (event: AMap.MassMarks.EventMap<typeof testMassMarks>['click']) => {
    // $ExpectType "click"
    event.type;

    // $ExpectType MassMarksCustomData
    event.data;

    // $ExpectType MassMarks<MassMarksCustomData>
    event.target;
});

/**
 * layer/tileLayer.ts
 */

// $ExpectType TileLayer
new AMap.TileLayer();

// $ExpectType TileLayer
new AMap.TileLayer({});

// $ExpectType TileLayer
const testTileLayer = new AMap.TileLayer({
    map,
    tileSize: 256,
    tileUrl: '',
    errorUrl: '',
    getTileUrl: (x, y, z) => '',
    zIndex: 1,
    opacity: 0.1,
    zooms: [3, 18],
    detectRetina: true
});

// $ExpectType string[]
testTileLayer.getTiles();

// $ExpectType void
testTileLayer.reload();

// $ExpectType void
testTileLayer.setTileUrl('');
// $ExpectType void
testTileLayer.setTileUrl((x, y, level) => {
    // $ExpectType number
    x;
    // $ExpectType number
    y;
    // $ExpectType number
    level;
    return '';
});

// $ExpectType TileLayer
testTileLayer.on('complete', () => { });

testTileLayer.off('complete', () => { });

testTileLayer.emit('complete');

// $ExpectType Traffic
const testTrafficLayer = new AMap.TileLayer.Traffic({});
// $ExpectType Traffic
new AMap.TileLayer.Traffic({
    autoRefresh: true,
    interval: 180
});

testTrafficLayer.on('complete', () => { });

/**
 * layer/videoLayer.ts
 */

// $ExpectType VideoLayer
new AMap.VideoLayer({
    map,
    bounds,
    visible: true,
    zooms: [1, 2],
    opacity: 1
});

// $ExpectType VideoLayer
new AMap.VideoLayer();
// $ExpectType VideoLayer
new AMap.VideoLayer({});
// $ExpectType VideoLayer
const testVideoLayer = new AMap.VideoLayer({
    bounds
});

// $ExpectType void
testVideoLayer.setMap(null);
// $ExpectType void
testVideoLayer.setMap(map);

// $ExpectType Map | null | undefined
testVideoLayer.getMap();

// $ExpectType void
testVideoLayer.show();

// $ExpectType void
testVideoLayer.hide();

// $ExpectType number
testVideoLayer.getzIndex();

// $ExpectType void
testVideoLayer.setzIndex(10);

// $ExpectType HTMLVideoElement | null
testVideoLayer.getElement();

// $ExpectType void
testVideoLayer.setVideoUrl('url');

// $ExpectType string | string[] | undefined
testVideoLayer.getVideoUrl();

/**
 * layer/wms.ts
 */

// $ExpectType WMS
new AMap.TileLayer.WMS({
    url: 'url',
    params: {}
});
// $ExpectType WMS
const testWms = new AMap.TileLayer.WMS({
    url: 'url',
    blend: true,
    params: {
        VERSION: 'version',
        LAYERS: 'layers',
        STYLES: 'styles',
        FORMAT: 'format',
        TRANSPARENT: 'TRUE',
        BGCOLOR: '#000',
        EXCEPTIONS: 'exceptions',
        TIME: 'time',
        ELEVATION: 'elevation'
    },
    zooms: [1, 2],
    tileSize: 256,
    opacity: 1,
    zIndex: 10,
    visible: true
});

// $ExpectType void
testWms.setMap(map);
// $ExpectType void
testWms.setMap(null);

// $ExpectType Map | null | undefined
testWms.getMap();

// $ExpectType void
testWms.show();

// $ExpectType void
testWms.hide();

// $ExpectType void
testWms.setzIndex(10);

// $ExpectType number
testWms.getzIndex();

// $ExpectType void
testWms.setUrl('url');

// $ExpectType string
testWms.getUrl();

// $ExpectType void
testWms.setParams({
    VERSION: 'version',
    LAYERS: 'layers',
    STYLES: 'styles',
    FORMAT: 'format',
    TRANSPARENT: 'TRUE',
    BGCOLOR: '#000',
    EXCEPTIONS: 'exceptions',
    TIME: 'time',
    ELEVATION: 'elevation'
});

{
    const params = testWms.getParams();
    // $ExpectType string | undefined
    params.VERSION;
    // $ExpectType string | undefined
    params.LAYERS;
    // $ExpectType string | undefined
    params.STYLES;
    // $ExpectType string | undefined
    params.FORMAT;
    // $ExpectType "TRUE" | "FALSE" | undefined
    params.TRANSPARENT;
    // $ExpectType string | undefined
    params.BGCOLOR;
    // $ExpectType string | undefined
    params.EXCEPTIONS;
    // $ExpectType string | undefined
    params.TIME;
    // $ExpectType string | undefined
    params.ELEVATION;
}

/**
 * layer/wmts.ts
 */

// $ExpectType WMTS
new AMap.TileLayer.WMTS({
    url: 'url',
    params: {}
});
// $ExpectType WMTS
const testWmts = new AMap.TileLayer.WMTS({
    url: 'url',
    blend: true,
    tileSize: 256,
    zooms: [1, 2],
    opacity: 1,
    zIndex: 10,
    visible: true,
    params: {
        Version: 'version',
        Layer: 'layers',
        Style: 'style',
        Format: 'format'
    }
});

// $ExpectType void
testWmts.setMap(map);
// $ExpectType void
testWmts.setMap(null);

// $ExpectType Map | null | undefined
testWmts.getMap();

// $ExpectType void
testWmts.show();

// $ExpectType void
testWmts.hide();

// $ExpectType void
testWmts.setzIndex(10);

// $ExpectType number
testWmts.getzIndex();

// $ExpectType void
testWmts.setUrl('url');

// $ExpectType string
testWmts.getUrl();

// $ExpectType void
testWmts.setParams({
    Version: 'version',
    Layer: 'layers',
    Style: 'style',
    Format: 'format'
});

{
    const params = testWmts.getParams();
    // $ExpectType string | undefined
    params.Version;
    // $ExpectType string | undefined
    params.Layer;
    // $ExpectType string | undefined
    params.Style;
    // $ExpectType string | undefined
    params.Format;
}

/**
 * overlay/bezierCurve.ts
 */

interface BezierCurveExtraData {
    test: number;
}

const bezierCurvePath = [
    [1, 2, 3, 4],
    [1, 2, 3],
    [
        [1, 2, 3],
        [1, 2]
    ],
    [1, 2]
];

// $ExpectError
new AMap.BezierCurve();
// $ExpectError
new AMap.BezierCurve({});
// $ExpectType BezierCurve<BezierCurveExtraData>
const testBezierCurve = new AMap.BezierCurve<BezierCurveExtraData>({
    map,
    path: bezierCurvePath,
    strokeColor: '#FF0000',
    strokeOpacity: 0.6,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [1, 5],
    zIndex: 10,
    bubble: false,
    showDir: true,
    cursor: 'pointer',
    isOutline: true,
    outlineColor: '#00FF00',
    borderWeight: 2
});

// $ExpectType void
testBezierCurve.setPath(bezierCurvePath);

// $ExpectType void
testBezierCurve.setPath(bezierCurvePath);

// $ExpectType void
testBezierCurve.setOptions({});
testBezierCurve.setOptions({
    map,
    path: bezierCurvePath,
    strokeColor: '#FF0000',
    strokeOpacity: 0.6,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [1, 5],
    zIndex: 10,
    bubble: false,
    showDir: true,
    cursor: 'pointer',
    isOutline: true,
    outlineColor: '#00FF00',
    borderWeight: 2
});

{
    const options = testBezierCurve.getOptions();

    // $ExpectType number | undefined
    options.borderWeight;
    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType string | undefined
    options.dirColor;
    // $ExpectType string | undefined
    options.dirImg;
    // $ExpectType {} | BezierCurveExtraData | undefined
    options.extData;
    // $ExpectType boolean | undefined
    options.geodesic;
    // $ExpectType boolean | undefined
    options.isOutline;
    // $ExpectType "round" | "butt" | "square" | undefined
    options.lineCap;
    // $ExpectType "miter" | "round" | "bevel" | undefined
    options.lineJoin;
    // $ExpectType Map | undefined
    options.map;
    // $ExpectType string | undefined
    options.outlineColor;
    // $ExpectType (LngLat & { controlPoints: LngLat[]; })[] | undefined
    options.path;
    // $ExpectType boolean | undefined
    options.showDir;
    // $ExpectType string | undefined
    options.strokeColor;
    // $ExpectType number[] | undefined
    options.strokeDasharray;
    // $ExpectType number | undefined
    options.strokeOpacity;
    // $ExpectType "dashed" | "solid" | undefined
    options.strokeStyle;
    // $ExpectType number | undefined
    options.strokeWeight;
    // $ExpectType number | undefined
    options.zIndex;
}

// $ExpectType number
testBezierCurve.getLength();

// $ExpectType Bounds | null
testBezierCurve.getBounds();

// $ExpectType void
testBezierCurve.show();

// $ExpectType void
testBezierCurve.hide();

// $ExpectType void
testBezierCurve.setMap(null);
testBezierCurve.setMap(map);

// $ExpectType void
testBezierCurve.setExtData({ test: 1 });
// $ExpectError
testBezierCurve.setExtData({ test: '123' });

// $ExpectType {} | BezierCurveExtraData
testBezierCurve.getExtData();

testBezierCurve.on('click', (event: AMap.BezierCurve.EventMap<typeof testBezierCurve>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType BezierCurve<BezierCurveExtraData>
    event.target;
});

testBezierCurve.on('show', (event: AMap.BezierCurve.EventMap<typeof testBezierCurve>['show']) => {
    // $ExpectType "show"
    event.type;
    // $ExpectType BezierCurve<BezierCurveExtraData>
    event.target;
});

testBezierCurve.on('options', (event: AMap.BezierCurve.EventMap<typeof testBezierCurve>['options']) => {
    // $ExpectType "options"
    event.type;
    // $ExpectError
    event.target;
});

/**
 * overlay/circle.ts
 */

interface CircleExtraData {
    test: number;
}

// $ExpectType Circle<any>
new AMap.Circle();
new AMap.Circle({});
// $ExpectType Circle<CircleExtraData>
const testCircle = new AMap.Circle<CircleExtraData>({
    map,
    zIndex: 10,
    center: lnglat,
    bubble: true,
    cursor: 'pointer',
    radius: 1000,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#00FF00',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [2, 4]
});

// $ExpectType void
testCircle.setCenter(lnglat);
// $ExpectType void
testCircle.setCenter(lnglatTuple);

// $ExpectType LngLat | undefined
testCircle.getCenter();

// $ExpectType Bounds | null
testCircle.getBounds();

// $ExpectType void
testCircle.setRadius(100);

// $ExpectType number
testCircle.getRadius();

// $ExpectType void
testCircle.setOptions({});
testCircle.setOptions({
    map,
    zIndex: 10,
    center: lnglat,
    bubble: true,
    cursor: 'pointer',
    radius: 1000,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#00FF00',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [2, 4]
});

{
    const options = testCircle.getOptions();
    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType LngLat | undefined
    options.center;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType {} | CircleExtraData | undefined
    options.extData;
    // $ExpectType string | undefined
    options.fillColor;
    // $ExpectType number | undefined
    options.fillOpacity;
    // $ExpectType "miter" | "round" | "bevel" | undefined
    options.lineJoin;
    // $ExpectType Map | undefined
    options.map;
    // $ExpectType LngLat[] | undefined
    options.path;
    // $ExpectType number | undefined
    options.radius;
    // $ExpectType string | undefined
    options.strokeColor;
    // $ExpectType number[] | undefined
    options.strokeDasharray;
    // $ExpectType number | undefined
    options.strokeOpacity;
    // $ExpectType "dashed" | "solid" | undefined
    options.strokeStyle;
    // $ExpectType number | undefined
    options.strokeWeight;
    // $ExpectType string | undefined
    options.texture;
    // $ExpectType number | undefined
    options.zIndex;
}

// $ExpectType Bounds | null
testCircle.getBounds();

// $ExpectType void
testCircle.hide();

// $ExpectType void
testCircle.show();

// $ExpectType void
testCircle.setMap(null);
// $ExpectType void
testCircle.setMap(map);

// $ExpectType void
testCircle.setExtData({ test: 2 });
// $ExpectError
testCircle.setExtData({ test: '1' });

// $ExpectType {} | CircleExtraData
testCircle.getExtData();

// $ExpectType boolean
testCircle.contains(lnglat);
// $ExpectType boolean
testCircle.contains(lnglatTuple);

testCircle.on('click', (event: AMap.Circle.EventMap<typeof testCircle>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Circle<CircleExtraData>
    event.target;
});

testCircle.on('setCenter', (event: AMap.Circle.EventMap<typeof testCircle>['setCenter']) => {
    // $ExpectType "setCenter"
    event.type;
    // $ExpectError
    event.target;
});

testCircle.on('change', (event: AMap.Circle.EventMap<typeof testCircle>['change']) => {
    // $ExpectType "change"
    event.type;
    // $ExpectType Circle<CircleExtraData>
    event.target;
});

/**
 * overlay/contextMenu.ts
 */

interface ContextMenuExtraData {
    test: number;
}
// $ExpectType ContextMenu<any>
new AMap.ContextMenu();
// $ExpectType ContextMenu<any>
new AMap.ContextMenu({});
// $ExpectType ContextMenu<ContextMenuExtraData>
const testContextMenu = new AMap.ContextMenu<ContextMenuExtraData>({
    content: '<div>content</div>',
});

// $ExpectType void
testContextMenu.addItem('item', function() {
    // $ExpectType HTMLLIElement
    this;
});
// $ExpectType void
testContextMenu.addItem('item', () => { }, 1);

// $ExpectType void
testContextMenu.removeItem('item', () => {});

// $ExpectType void
testContextMenu.open(map, lnglatTuple);
// $ExpectType void
testContextMenu.open(map, lnglat);

// $ExpectType void
testContextMenu.close();

testContextMenu.on('items', (event: AMap.ContextMenu.EventMap<typeof testContextMenu>['items']) => {
    // $ExpectType "items"
    event.type;
});

testContextMenu.on('open', (event: AMap.ContextMenu.EventMap<typeof testContextMenu>['open']) => {
    // $ExpectType "open"
    event.type;
    // $ExpectType ContextMenu<ContextMenuExtraData>
    event.target;
});

/**
 * overlay/ellipse.ts
 */

interface EllipseExtraData {
    test: number;
}
// $ExpectType Ellipse<any>
new AMap.Ellipse();
// $ExpectType Ellipse<any>
new AMap.Ellipse({});
// $ExpectType Ellipse<EllipseExtraData>
const testEllipse = new AMap.Ellipse<EllipseExtraData>({
    map,
    zIndex: 10,
    center: lnglat,
    radius: [10000, 15000],
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

// $ExpectType LngLat | undefined
testEllipse.getCenter();

// $ExpectType void
testEllipse.setCenter(lnglat);
// $ExpectType void
testEllipse.setCenter(lnglatTuple);

// $ExpectType Bounds | null
testEllipse.getBounds();

// $ExpectType void
testEllipse.setOptions({
    map,
    zIndex: 10,
    center: lnglat,
    radius: [10000, 15000],
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

{
    const options = testEllipse.getOptions();

    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType LngLat | undefined
    options.center;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType {} | EllipseExtraData | undefined
    options.extData;
    // $ExpectType string | undefined
    options.fillColor;
    // $ExpectType number | undefined
    options.fillOpacity;
    // $ExpectType "miter" | "round" | "bevel" | undefined
    options.lineJoin;
    // $ExpectType Map | undefined
    options.map;
    // $ExpectType LngLat[] | undefined
    options.path;
    // $ExpectType [number, number] | undefined
    options.radius;
    // $ExpectType string | undefined
    options.strokeColor;
    // $ExpectType number[] | undefined
    options.strokeDasharray;
    // $ExpectType number | undefined
    options.strokeOpacity;
    // $ExpectType "dashed" | "solid" | undefined
    options.strokeStyle;
    // $ExpectType number | undefined
    options.strokeWeight;
    // $ExpectType string | undefined
    options.texture;
    // $ExpectType number | undefined
    options.zIndex;
}

// $ExpectType void
testEllipse.hide();

// $ExpectType void
testEllipse.show();

// $ExpectType void
testEllipse.setMap(null);
// $ExpectType void
testEllipse.setMap(map);

// $ExpectType void
testEllipse.setExtData({ test: 2 });
// $ExpectType {} | EllipseExtraData
testEllipse.getExtData();

// $ExpectType boolean
testEllipse.contains(lnglat);
// $ExpectType boolean
testEllipse.contains(lnglatTuple);

/**
 * overlay/geoJSON.ts
 */

interface GeoJSONExtraData {
    test: number;
}

const geoJSONObject: AMap.GeoJSON.GeoJSONObject[] = [
    {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'Point',
            coordinates: lnglatTuple
        }
    },
    {
        type: 'Feature',
        properties: { test: 1 },
        geometry: {
            type: 'LineString',
            coordinates: [lnglatTuple, lnglatTuple]
        }
    }
];

// $ExpectType GeoJSON<any>
new AMap.GeoJSON();
// $ExpectType GeoJSON<any>
new AMap.GeoJSON({});
// $ExpectType GeoJSON<GeoJSONExtraData>
const testGeoJSON = new AMap.GeoJSON<GeoJSONExtraData>({
    geoJSON: geoJSONObject,
    getMarker(obj, lnglat) {
        // $ExpectType GeoJSONObject
        obj;
        // $ExpectType LngLat
        lnglat;
        return marker;
    },
    getPolyline(obj, lnglats) {
        // $ExpectType GeoJSONObject
        obj;
        // $ExpectType LngLat[]
        lnglats;
        return testPolyline;
    },
    getPolygon(obj, lnglats) {
        // $ExpectType GeoJSONObject
        obj;
        // $ExpectType LngLat[]
        lnglats;
        return testPolygon;
    },
    coordsToLatLng(coord) {
        // $ExpectType LngLat
        coord;
        return coord;
    }
});

// $ExpectType void
testGeoJSON.importData(geoJSONObject);

// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.removeOverlay(marker);
// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.removeOverlay([marker]);

// $ExpectType boolean
testGeoJSON.hasOverlay(marker);
// $ExpectType boolean
testGeoJSON.hasOverlay(m => m === marker);

// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.addOverlay(marker);
// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.addOverlay([marker]);

// $ExpectType GeoJSONObject[]
testGeoJSON.toGeoJSON();

// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.setMap(null);
// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.setMap(map);

// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.hide();

// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.show();

testGeoJSON.on('click', (event: AMap.MapsEvent<'click', AMap.Overlay>) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Overlay<any>
    event.target;
});

/**
 * overlay/icon.ts
 */

// $ExpectType Icon
new AMap.Icon();
// $ExpectType Icon
new AMap.Icon({});
// $ExpectType Icon
new AMap.Icon({
    size,
    imageOffset: pixel,
    image: 'image uri',
    imageSize: size
});
// $ExpectType Icon
const testIcon = new AMap.Icon({
    size: [1, 2],
    imageOffset: pixel,
    image: 'image uri',
    imageSize: [1, 2]
});

// $ExpectType Size
testIcon.getImageSize();

// $ExpectType void
testIcon.setImageSize(size);
// $ExpectType void
testIcon.setImageSize([1, 2]);

/**
 * overlay/infoWindow.ts
 */

interface InfoWindowExtraData {
    test: number;
}

// $ExpectType InfoWindow<any>
new AMap.InfoWindow();
// $ExpectType InfoWindow<any>
new AMap.InfoWindow({});
// $ExpectType InfoWindow<InfoWindowExtraData>
const testInfoWindow = new AMap.InfoWindow<InfoWindowExtraData>({
    isCustom: false,
    autoMove: false,
    closeWhenClickMap: false,
    content: 'content',
    size: [100, 100],
    anchor: 'bottom-center',
    offset: new AMap.Pixel(10, 10),
    position: lnglat,
    showShadow: true
});

// $ExpectType void
testInfoWindow.open(map);
// $ExpectType void
testInfoWindow.open(map, lnglat);
// $ExpectType void
testInfoWindow.open(map, lnglatTuple);

// $ExpectType void
testInfoWindow.close();

// $ExpectType boolean
testInfoWindow.getIsOpen();

// $ExpectType void
testInfoWindow.setContent('content');
// $ExpectType void
testInfoWindow.setContent(div);

// $ExpectType string | HTMLElement | undefined
testInfoWindow.getContent();

// $ExpectType void
testInfoWindow.setPosition(lnglat);
// $ExpectType void
testInfoWindow.setPosition(lnglatTuple);

// $ExpectType LngLat | undefined
testInfoWindow.getPosition();

const testInfoWindowAnchor = testInfoWindow.getAnchor();
if (testInfoWindowAnchor !== undefined) {
    // $ExpectType Anchor
    testInfoWindowAnchor;
} else {
    // $ExpectType undefined
    testInfoWindowAnchor;
}

// $ExpectType void
testInfoWindow.setAnchor();
// $ExpectType void
testInfoWindow.setAnchor(testInfoWindowAnchor);

// $ExpectType Size | undefined
testInfoWindow.getSize();

testInfoWindow.on('change', (event: AMap.InfoWindow.EventMap<typeof testInfoWindow>['change']) => {
    // $ExpectType "change"
    event.type;
    // $ExpectType InfoWindow<InfoWindowExtraData>
    event.target;
});

testInfoWindow.on('close', (event: AMap.InfoWindow.EventMap<typeof testInfoWindow>['close']) => {
    // $ExpectType "close"
    event.type;
    // $ExpectType InfoWindow<InfoWindowExtraData>
    event.target;
});

testInfoWindow.on('open', (event: AMap.InfoWindow.EventMap<typeof testInfoWindow>['open']) => {
    // $ExpectType "open"
    event.type;
    // $ExpectType InfoWindow<InfoWindowExtraData>
    event.target;
});

/**
 * overlay/labelMarker.ts
 */

// $ExpectTYpe LabelMarker<any>;
new AMap.LabelMarker();
// $ExpectTYpe LabelMarker<any>;
new AMap.LabelMarker({});
// $ExpectTYpe LabelMarker<ExtraData>;
const testLabelMarker = new AMap.LabelMarker({
    title: "全聚德烤鸭",
    position: [116.467456, 39.994996],
    zooms: [10, 20],
    opacity: 1,
    rank: 10,
    zIndex: 10,
    icon: {
        type: 'image',
        image: 'https://a.amap.com/jsapi_demos/static/images/poi-marker.png',
        clipOrigin: [14, 92],
        clipSize: [50, 68],
        size: [25, 34],
        anchor: 'bottom-center',
        angel: 0,
        retina: true
    },
    text: {
        content: '全聚德烤鸭',
        direction: 'left',
        offset: [0, 0],
        style: {
            fontSize: 15,
            fontWeight: 'normal',
            fillColor: '#666',
            strokeColor: '#fff',
            strokeWidth: 1
        }
    }
});

// $ExpectType void
testLabelMarker.setPosition(lnglatTuple);

// $ExpectType [number, number] | [string, string]
testLabelMarker.getPosition();

// $ExpectType [number, number]
testLabelMarker.getZooms();

// $ExpectType void
testLabelMarker.setZooms([1, 1]);

// $ExpectType number
testLabelMarker.getOpacity();

// $ExpectType void
testLabelMarker.setOpacity(1);

// $ExpectType any
testLabelMarker.on('click', () => {});

// $ExpectType any
testLabelMarker.off('click', () => {});

/**
 * overlay/marker.ts
 */

interface MarkerExtraData {
    test: number;
}

// $ExpectType Marker<MarkerExtraData>
new AMap.Marker<MarkerExtraData>();
// $ExpectType Marker<any>
new AMap.Marker();
// $ExpectType Marker<any>
new AMap.Marker({});
// $ExpectType Marker<MarkerExtraData>
export const testMarker = new AMap.Marker<MarkerExtraData>({
    map,
    position: lnglat,
    anchor: 'bottom-center',
    offset: pixel,
    icon: 'iconUrl',
    content: 'htmlString',
    topWhenClick: true,
    raiseOnDrag: true,
    cursor: 'default',
    visible: true,
    zIndex: 10,
    angle: 10,
    autoRotation: true,
    animation: 'AMAP_ANIMATION_BOUNCE',
    shadow: icon,
    title: '123',
    clickable: true,
    shape: markerShape,
    label: {
        content: 'label',
        offset: pixel,
        direction: 'left'
    },
    extData: {
        test: 123
    }
});

// $ExpectType void
testMarker.markOnAMAP({
    name: '123',
    position: [1, 2]
});
// $ExpectType void
testMarker.markOnAMAP();
// $ExpectType void
testMarker.markOnAMAP({});
// $ExpectType void
testMarker.markOnAMAP({
    position: [1, 2],
    name: '123'
});

const testMarkerAnchor = testMarker.getAnchor();
if (testMarkerAnchor) {
    // $ExpectType Anchor
    testMarkerAnchor;
} else {
    // $ExpectType undefined
    testMarkerAnchor;
}

// $ExpectType void
testMarker.setAnchor(testMarkerAnchor);
// $ExpectType void
testMarker.setAnchor();

// $ExpectType Pixel
testMarker.getOffset();

// $ExpectType void
testMarker.setOffset(pixel);

// $ExpectType void
testMarker.setAnimation('AMAP_ANIMATION_BOUNCE');

// $ExpectType AnimationName
testMarker.getAnimation();

// $ExpectType void
testMarker.setClickable(true);

// $ExpectType boolean
testMarker.getClickable();

// $ExpectType LngLat | undefined
testMarker.getPosition();

// $ExpectType void
testMarker.setPosition(lnglat);

// $ExpectType void
testMarker.setAngle(0);

// $ExpectType void
testMarker.setLabel();
// $ExpectType void
testMarker.setLabel({});
// $ExpectType void
testMarker.setLabel({
    content: 'label content',
    offset: pixel,
    direction: 'top'
});

{
    const testMarkerLabel = testMarker.getLabel();
    if (testMarkerLabel !== undefined) {
        // $ExpectType Label
        testMarkerLabel;

        // $ExpectType string | undefined
        testMarkerLabel.content;

        // $ExpectType Pixel | undefined
        testMarkerLabel.offset;

        type TempLabelDirection = 'top' | 'right' | 'bottom' | 'left' | 'center' | undefined;
        const tempLabelDirection: TempLabelDirection = testMarkerLabel.direction;
    } else {
        // $ExpectType undefined
        testMarkerLabel;
    }
}

// $ExpectType number
testMarker.getAngle();

// $ExpectType void
testMarker.setzIndex(100);

// $ExpectType number
testMarker.getzIndex();

// $ExpectType void
testMarker.setIcon('icon uri');
// $ExpectType void
testMarker.setIcon(icon);

// $ExpectType string | Icon | undefined
testMarker.getIcon();

// $ExpectType void
testMarker.setDraggable(true);

// $ExpectType boolean
testMarker.getDraggable();

// $ExpectType void
testMarker.setCursor('default');

// $ExpectType void
testMarker.setContent('content');
// $ExpectType void
testMarker.setContent(domEle);

// $ExpectType string | HTMLElement
testMarker.getContent();

// $ExpectType void
testMarker.moveAlong([lnglat], 100);
// $ExpectError
testMarker.moveAlong([[1, 2]], 100);
// $ExpectType void
testMarker.moveAlong([lnglat], 100, t => t, false);

// $ExpectType void
testMarker.moveTo(lnglat, 100);
// $ExpectType void
testMarker.moveTo([1, 2], 100);
// $ExpectType void
testMarker.moveTo([1, 2], 100, t => t);

// $ExpectType void
testMarker.stopMove();

// $ExpectType boolean
testMarker.pauseMove();

// $ExpectType boolean
testMarker.resumeMove();

// $ExpectType void
testMarker.setMap(map);

// $ExpectType void
testMarker.setTitle('title');
// $ExpectError
testMarker.setTitle();

// $ExpectType string | undefined
testMarker.getTitle();

// $ExpectType void
testMarker.setTop(true);

// $ExpectType boolean
testMarker.getTop();

// $ExpectType void
testMarker.setShadow();
// $ExpectType void
testMarker.setShadow(icon);
// $ExpectType void
testMarker.setShadow('shadow url');

// $ExpectType string | Icon | undefined
testMarker.getShadow();

// $ExpectType void
testMarker.setShape();
// $ExpectType void
testMarker.setShape(markerShape);

// $ExpectType MarkerShape | undefined
testMarker.getShape();

testMarker.on('click', (event: AMap.Marker.EventMap<typeof testMarker>['click']) => {
    // $ExpectType {} | MarkerExtraData
    event.target.getExtData();
});

/**
 * overlay/markerShape.ts
 */

// $ExpectType MarkerShape
new AMap.MarkerShape({
    type: 'circle',
    coords: [1, 1, 1]
});
// $ExpectType MarkerShape
new AMap.MarkerShape({
    type: 'rect',
    coords: [1, 1, 1, 2]
});
// $ExpectType MarkerShape
new AMap.MarkerShape({
    type: 'poly',
    coords: [1, 2, 3, 4, 5]
});

// $ExpectError
new AMap.MarkerShape({
    type: 'circle',
    coords: [1, 1]
});
// $ExpectError
new AMap.MarkerShape({
    type: 'rect',
    coords: [1, 1, 1, 2, 2]
});

/**
 * overlay/overlay.ts
 */

interface OverlayExtraData {
    test: number;
}
declare const testOverlay: AMap.Overlay<OverlayExtraData>;

// $ExpectType void
testOverlay.show();

// $ExpectType void
testOverlay.hide();

// $ExpectType Map | null | undefined
testOverlay.getMap();

// $ExpectType void
testOverlay.setMap(map);
// $ExpectType void
testOverlay.setMap(null);

// $ExpectError
testOverlay.setExtData({ any: 123 });

// $ExpectError OverlayExtraData
testOverlay.getExtData();

/**
 * overlay/overlayGroup.ts
 */

// $ExpectType OverlayGroup<Overlay<any>, any>
const testOverlayGroup2 = new AMap.OverlayGroup();
// $ExpectType OverlayGroup<Marker<any>, any>
new AMap.OverlayGroup<AMap.Marker, any>(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
const testOverlayGroup = new AMap.OverlayGroup<AMap.Marker>([marker]);

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.addOverlay(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.addOverlay([marker]);
// $ExpectError
testOverlayGroup.addOverlay([testCircle]);

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.addOverlays(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.addOverlays([marker]);

// $ExpectType Marker<any>[]
testOverlayGroup.getOverlays();

// $ExpectType boolean
testOverlayGroup.hasOverlay(marker);
// $ExpectType boolean
testOverlayGroup.hasOverlay(o => o === marker);

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.removeOverlay(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.removeOverlay([marker]);

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.removeOverlays(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.removeOverlays([marker]);

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.clearOverlays();

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.eachOverlay(function(overlay, index, overlays) {
    // $ExpectType Marker<any>
    overlay;
    // $ExpectType number
    index;
    // $ExpectType Marker<any>[]
    overlays;
    // $ExpectType Marker<any>
    this;
});

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.setMap(null);
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.setMap(map);

// $ExpectType OverlayGroup<Overlay<any>, any>
testOverlayGroup2.setOptions({
    test: 1
});
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.setOptions({
    map,
    position: lnglat,
    offset: pixel,
    icon: 'iconUrl',
    content: 'htmlString',
    topWhenClick: true,
    raiseOnDrag: true,
    cursor: 'default',
    visible: true,
    zIndex: 10,
    angle: 10,
    autoRotation: true,
    animation: 'AMAP_ANIMATION_BOUNCE',
    shadow: icon,
    title: '123',
    clickable: true,
    shape: markerShape,
    extData: {
        test: 123
    }
});

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.show();

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.hide();

testOverlayGroup.on('click', (event: AMap.MapsEvent<'click', AMap.Overlay>) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Overlay<any>
    event.target;
});

/**
 * overlay/polygon.ts
 */

interface PolygonExtraData {
    test: number;
}

const polygonPath1 = [lnglatTuple, lnglatTuple, lnglatTuple, lnglatTuple, lnglatTuple];
const polygonPath2 = [lnglat, lnglat, lnglat, lnglat, lnglat];

// $ExpectType Polygon<any>
new AMap.Polygon();
// $ExpectType Polygon<any>
new AMap.Polygon({});
// $ExpectType Polygon<PolygonExtraData>
const testPolygon = new AMap.Polygon<PolygonExtraData>({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.3,
    strokeWeight: 5,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    draggable: true,
    extData: { test: 1 },
    strokeStyle: 'dashed',
    strokeDasharray: [2, 4],
    path: polygonPath1
});

// $ExpectType void
testPolygon.setPath(polygonPath1);
// $ExpectType void
testPolygon.setPath(polygonPath2);
// $ExpectType void
testPolygon.setPath([polygonPath1, polygonPath2]);

// $ExpectType LngLat[] | LngLat[][]
testPolygon.getPath();

// $ExpectType void
testPolygon.setOptions({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    draggable: true,
    extData: { test: 1 },
    strokeStyle: 'dashed',
    strokeDasharray: [4, 2],
    path: [polygonPath2, polygonPath1]
});

{
    const options = testPolygon.getOptions();
    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType {} | PolygonExtraData | undefined
    options.extData;
    // $ExpectType string | undefined
    options.fillColor;
    // $ExpectType number | undefined
    options.fillOpacity;
    // $ExpectType "miter" | "round" | "bevel" | undefined
    options.lineJoin;
    // $ExpectType Map | undefined
    options.map;
    // $ExpectType LngLat[] | LngLat[][] | undefined
    options.path;
    // $ExpectType string | undefined
    options.strokeColor;
    // $ExpectType number[] | undefined
    options.strokeDasharray;
    // $ExpectType number | undefined
    options.strokeOpacity;
    // $ExpectType "dashed" | "solid" | undefined
    options.strokeStyle;
    // $ExpectType number | undefined
    options.strokeWeight;
    // $ExpectType string | undefined
    options.texture;
    // $ExpectType number | undefined
    options.zIndex;
}

// $ExpectType Bounds | null
testPolygon.getBounds();

// $ExpectType number
testPolygon.getArea();

// $ExpectType void
testPolygon.setMap(null);
// $ExpectType void
testPolygon.setMap(map);

// $ExpectType void
testPolygon.setExtData({ test: 1 });

// $ExpectType {} | PolygonExtraData
testPolygon.getExtData();

// $ExpectType boolean
testPolygon.contains(lnglat);
// $ExpectType boolean
testPolygon.contains(lnglatTuple);

testPolygon.on('click', (event: AMap.Polygon.EventMap<typeof testPolygon>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Polygon<PolygonExtraData>
    event.target;
});

/**
 * overlay/polyline.ts
 */

interface PolylineExtraData {
    test: number;
}

// $ExpectType Polyline<any>
new AMap.Polyline();
// $ExpectType Polyline<any>
new AMap.Polyline({});
// $ExpectType Polyline<PolylineExtraData>
const testPolyline = new AMap.Polyline<PolylineExtraData>({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'default',
    geodesic: true,
    isOutline: true,
    borderWeight: 1,
    outlineColor: '#AA0000',
    path: [lnglat],
    strokeColor: '#0000AA',
    strokeOpacity: 0.5,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [20, 10, 20],
    lineJoin: 'bevel',
    lineCap: 'butt',
    draggable: true,
    extData: { test: 1 },
    showDir: true
});
// Polyline<PolylineExtraData>

// $ExpectType void
testPolyline.setPath([lnglat]);
// $ExpectType void
testPolyline.setPath([lnglatTuple]);

// $ExpectType void
testPolyline.setOptions({});
// $ExpectType void
testPolyline.setOptions({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'default',
    geodesic: true,
    isOutline: true,
    borderWeight: 1,
    outlineColor: '#AA0000',
    path: [lnglat, lnglat],
    strokeColor: '#0000AA',
    strokeOpacity: 0.5,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [20, 10, 20],
    lineJoin: 'bevel',
    lineCap: 'butt',
    draggable: true,
    extData: { test: 1 },
    showDir: true
});

{
    const options = testPolyline.getOptions();
    // $ExpectType number | undefined
    options.borderWeight;
    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType string | undefined
    options.dirColor;
    // $ExpectType string | undefined
    options.dirImg;
    // $ExpectType {} | PolylineExtraData | undefined
    options.extData;
    // $ExpectType boolean | undefined
    options.geodesic;
    // $ExpectType boolean | undefined
    options.isOutline;
    // $ExpectType "round" | "butt" | "square" | undefined
    options.lineCap;
    // $ExpectType "miter" | "round" | "bevel" | undefined
    options.lineJoin;
    // $ExpectType Map | undefined
    options.map;
    // $ExpectType string | undefined
    options.outlineColor;
    // $ExpectType LngLat[] | undefined
    options.path;
    // $ExpectType boolean | undefined
    options.showDir;
    // $ExpectType string | undefined
    options.strokeColor;
    // $ExpectType number[] | undefined
    options.strokeDasharray;
    // $ExpectType number | undefined
    options.strokeOpacity;
    // $ExpectType "dashed" | "solid" | undefined
    options.strokeStyle;
    // $ExpectType number | undefined
    options.strokeWeight;
    // $ExpectType number | undefined
    options.zIndex;
}

// $ExpectType number
testPolyline.getLength();

// $ExpectType Bounds | null
testPolyline.getBounds();

// $ExpectType void
testPolyline.hide();

// $ExpectType void
testPolyline.show();

// $ExpectType void
testPolyline.setMap(null);
// $ExpectType void
testPolyline.setMap(map);

// $ExpectType void
testPolyline.setExtData({ test: 1 });

// $ExpectType {} | PolylineExtraData
testPolyline.getExtData();

testPolyline.on('click', (event: AMap.Polyline.EventMap<typeof testPolyline>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Polyline<PolylineExtraData>
    event.target;
});

/**
 * overlay/rectangle.ts
 */

interface RectangleExtraData {
    test: number;
}

// $ExpectType Rectangle<any>
new AMap.Rectangle();
// $ExpectType Rectangle<any>
new AMap.Rectangle({});
// $ExpectType Rectangle<RectangleExtraData>
const testRectangle = new AMap.Rectangle<RectangleExtraData>({
    map,
    zIndex: 10,
    bounds,
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'solid',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

// $ExpectType Bounds | undefined
testRectangle.getBounds();

// $ExpectType void
testRectangle.setBounds(bounds);

// $ExpectType void
testRectangle.setOptions({});
// $ExpectType void
testRectangle.setOptions({
    map,
    zIndex: 10,
    bounds,
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'solid',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

{
    const options = testRectangle.getOptions();
    // $ExpectType Bounds | undefined
    options.bounds;
    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType {} | RectangleExtraData | undefined
    options.extData;
    // $ExpectType string | undefined
    options.fillColor;
    // $ExpectType number | undefined
    options.fillOpacity;
    // $ExpectType "miter" | "round" | "bevel" | undefined
    options.lineJoin;
    // $ExpectType Map | undefined
    options.map;
    // $ExpectType LngLat[] | undefined
    options.path;
    // $ExpectType string | undefined
    options.strokeColor;
    // $ExpectType number[] | undefined
    options.strokeDasharray;
    // $ExpectType number | undefined
    options.strokeOpacity;
    // $ExpectType "dashed" | "solid" | undefined
    options.strokeStyle;
    // $ExpectType number | undefined
    options.strokeWeight;
    // $ExpectType string | undefined
    options.texture;
    // $ExpectType number | undefined
    options.zIndex;
}

// $ExpectType void
testRectangle.hide();

// $ExpectType void
testRectangle.show();

// $ExpectType void
testRectangle.setExtData({test: 2});

// $ExpectType {} | RectangleExtraData
testRectangle.getExtData();

// $ExpectType boolean
testRectangle.contains(lnglat);
// $ExpectType boolean
testRectangle.contains(lnglatTuple);

testRectangle.on('click', (event: AMap.Rectangle.EventMap<typeof testRectangle>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Rectangle<RectangleExtraData>
    event.target;
});

testRectangle.on('setBounds', (event: AMap.Rectangle.EventMap<typeof testRectangle>['setBounds']) => {
    // $ExpectType "setBounds"
    event.type;
    // $ExpectError
    event.target;
});

/**
 * overlay/text.ts
 */

interface TextExtraData {
    test: number;
}

// $ExpectType Text<any>
new AMap.Text();
// $ExpectType Text<any>
new AMap.Text({});
// $ExpectType Text<TextExtraData>
const testText = new AMap.Text<TextExtraData>({
    text: 'content',
    textAlign: 'center',
    verticalAlign: 'top',
    map,
    position: lnglat,
    anchor: 'bottom-center',
    offset: pixel,
    topWhenClick: true,
    bubble: true,
    draggable: true,
    raiseOnDrag: true,
    cursor: 'default',
    visible: true,
    zIndex: 100,
    angle: 45,
    autoRotation: true,
    animation: 'AMAP_ANIMATION_BOUNCE',
    shadow: 'https://webapi.amap.com/theme/v1.3/markers/0.png',
    title: 'title',
    clickable: true,
    extData: { test: 1 }
});

const testTextAnchor = testText.getAnchor();
if (testTextAnchor) {
    // $ExpectType Anchor
    testTextAnchor;
} else {
    // $ExpectType undefined
    testTextAnchor;
}

// $ExpectType void
testText.setAnchor(testTextAnchor);
// $ExpectType void
testText.setAnchor();

// $ExpectType string
testText.getText();

// $ExpectType void
testText.setText('123');

// $ExpectType void
testText.setStyle({
    background: 'red',
    width: '200px'
});

// $ExpectType void
testText.markOnAMAP({
    name: '123',
    position: lnglatTuple
});

// $ExpectType Pixel
testText.getOffset();

// $ExpectType void
testText.setOffset(pixel);

// $ExpectType void
testText.setAnimation('AMAP_ANIMATION_BOUNCE');

// $ExpectType AnimationName
testText.getAnimation();

// $ExpectType void
testText.setClickable(true);

// $ExpectType boolean
testText.getClickable();

// $ExpectType LngLat | undefined
testText.getPosition();

// $ExpectType void
testText.setAngle(10);

// $ExpectType number
testText.getAngle();

// $ExpectType void
testText.setzIndex(1);

// $ExpectType number
testText.getzIndex();

// $ExpectType void
testText.setDraggable(true);

// $ExpectType boolean
testText.getDraggable();

// $ExpectType void
testText.hide();

// $ExpectType void
testText.show();

// $ExpectType void
testText.setCursor('default');

// $ExpectType void
testText.moveAlong([lnglat], 100);

// $ExpectType void
testText.moveAlong([lnglat], 100);
// $ExpectError
testText.moveAlong([[1, 2]], 100);
// $ExpectType void
testText.moveAlong([lnglat], 100, t => t, false);

// $ExpectType void
testText.moveTo(lnglat, 100);
// $ExpectType void
testText.moveTo([1, 2], 100);
// $ExpectType void
testText.moveTo([1, 2], 100, t => t);

// $ExpectType void
testText.stopMove();

// $ExpectType boolean
testText.pauseMove();

// $ExpectType boolean
testText.resumeMove();

// $ExpectType void
testText.setMap(map);

// $ExpectType void
testText.setTitle('title');
// $ExpectError
testText.setTitle();

// $ExpectType string | undefined
testText.getTitle();

// $ExpectType void
testText.setTop(true);

// $ExpectType boolean
testText.getTop();

// $ExpectType void
testText.setShadow();
// $ExpectType void
testText.setShadow(icon);
// $ExpectType void
testText.setShadow('shadow url');

// $ExpectType void
testText.setExtData({ test: 1 });

// $ExpectType {} | TextExtraData
testText.getExtData();

testText.on('click', (event: AMap.Text.EventMap<typeof testText>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Text<TextExtraData>
    event.target;
});

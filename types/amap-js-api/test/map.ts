import {
    lnglat,
    bounds,
    lnglatTuple,
    pixel
} from './preset';

declare const container: HTMLDivElement;
declare const tileLayer: AMap.TileLayer;

// declare var indoorMap: AMap.IndoorMap

// $ExpectType Map
new AMap.Map('map');
// $ExpectType Map
new AMap.Map(container);

// $ExpectType Map
new AMap.Map(container, {});

// $ExpectType Map
const map = new AMap.Map(container, {
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
map.getZoom();

// $ExpectType Layer[]
map.getLayers();

// $ExpectType LngLat
map.getCenter();

// $ExpectType HTMLElement | null
map.getContainer();

map.getCity(city => {
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
map.getBounds();

// $ExpectType number
map.getLabelzIndex();

// $ExpectType Lang
map.getLang();

// $ExpectType Size
map.getSize();

// $ExpectType number
map.getRotation();

// $ExpectType Status
const mapStatus = map.getStatus();
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
map.getDefaultCursor();

// $ExpectType number
map.getResolution();

// $ExpectType number
map.getScale();
// $ExpectType number
map.getScale(1);

// $ExpectType void
map.setZoom(1);

// $ExpectType void
map.setLabelzIndex(1);

// $ExpectType void
map.setLayers([tileLayer]);

// $ExpectType void
map.setCenter(lnglat);
// $ExpectType void
map.setCenter([1, 2]);

// $ExpectType void
map.setZoomAndCenter(13, lnglat);
// $ExpectType void
map.setZoomAndCenter(13, [1, 2]);

// $ExpectType void
map.setCity('city', (coord, zoom) => {
    // $ExpectType string
    coord[0];
    // $ExpectType string
    coord[1];
    // $ExpectType number
    zoom;
});

// $ExpectType Bounds
map.setBounds(bounds);

// $ExpectType void
map.setLimitBounds(bounds);

// $ExpectType void
map.clearLimitBounds();

// $ExpectType void
map.setLang('zh_cn');

// $ExpectType void
map.setRotation(1);

// $ExpectType void
map.setStatus({});
// $ExpectType void
map.setStatus({
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
map.setDefaultCursor('default');

// $ExpectType void
map.zoomIn();

// $ExpectType void
map.zoomOut();

// $ExpectType void
map.panTo([1, 2]);
// $ExpectType void
map.panTo(lnglat);

// $ExpectType void
map.panBy(1, 2);

// $ExpectType void
map.clearMap();

// $ExpectType Map
map.plugin('plugin name', () => { });
// $ExpectType Map
map.plugin(['plugin name'], () => { });

// $ExpectType void
map.clearInfoWindow();

// $ExpectType LngLat
map.pixelToLngLat(pixel);
// $ExpectType LngLat
map.pixelToLngLat(pixel, 1);

// $ExpectType Pixel
map.lnglatToPixel(lnglat);
// $ExpectType Pixel
map.lnglatToPixel(lnglat, 1);

// $ExpectType LngLat
map.containerToLngLat(pixel);

// $ExpectType Pixel
map.lngLatToContainer(lnglat);
// $ExpectType Pixel
map.lnglatTocontainer(lnglat);

// $ExpectType void
map.setMapStyle('');
// $ExpectType string
map.getMapStyle();

// $ExpectType void
map.setFeatures('all');
// $ExpectType void
map.setFeatures(['bg']);

const feature: 'all' | 'bg' | 'point' | 'road' | 'building' | AMap.Map.Feature[] = map.getFeatures();

// $ExpectType void
map.setDefaultLayer(tileLayer);

// $ExpectType void
map.setPitch(1);
// $ExpectType number
map.getPitch();

// $ExpectType ViewMode
map.getViewMode_();

// $ExpectType Pixel
map.lngLatToGeodeticCoord(lnglat);
// $ExpectType Pixel
map.lngLatToGeodeticCoord(lnglatTuple);

// $ExpectType LngLat
map.geodeticCoordToLngLat(pixel);

// $ExpectType void
map.destroy();

declare function dblClickHandler(this: AMap.Map, event: AMap.Map.EventMap['dblclick']): void;

// $ExpectType Map
map.on('click', (event: AMap.Map.EventMap['click']) => {
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
map.on('dblclick', dblClickHandler);
// $ExpectType Map
map.on('complete', (event: AMap.Map.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectError
    event.value;
});
// $ExpectType Map
map.on('hotspotclick', (event: AMap.Map.EventMap['hotspotclick']) => {
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
map.on('custom', (event: AMap.Event<'custom', { test: string }>) => {
    // $ExpectType "custom"
    event.type;
    // $ExpectType string
    event.test;
});

// $ExpectType Map
map.off('dblclick', dblClickHandler);
// $ExpectType Map
map.off('click', 'mv');

// $ExpectType Map
map.emit('click', {
    target: map,
    lnglat,
    pixel
});

map.emit('complete');
// $ExpectType Map
map.emit('hotspotclick', {
    lnglat,
    name: '123',
    id: '123',
    isIndoorPOI: true
});
// $ExpectType Map
map.emit('custom', {
    test: 1
});
// $ExpectType Map
map.emit('custom', undefined);

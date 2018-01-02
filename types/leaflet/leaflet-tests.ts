import * as L from 'leaflet';

const latLngLiteral: L.LatLngLiteral = {lat: 12, lng: 13};
const latLngTuple: L.LatLngTuple = [12, 13];

let latLng: L.LatLng;
latLng = L.latLng(12, 13);
latLng = L.latLng(12, 13, 0);
latLng = L.latLng(latLngLiteral);
latLng = L.latLng({lat: 12, lng: 13, alt: 0});
latLng = L.latLng(latLngTuple);
latLng = L.latLng([12, 13, 0]);

latLng = new L.LatLng(12, 13);
latLng = new L.LatLng(12, 13, 0);

const latLngBoundsLiteral: L.LatLngBoundsLiteral = [[12, 13], latLngTuple];

let latLngBounds: L.LatLngBounds;
latLngBounds = L.latLngBounds(latLng, latLng);
latLngBounds = L.latLngBounds(latLngLiteral, latLngLiteral);
latLngBounds = L.latLngBounds(latLngTuple, latLngTuple);
latLngBounds = L.latLngBounds(latLngBoundsLiteral);
latLngBounds = L.latLngBounds([latLngLiteral, latLngLiteral, latLngLiteral]);
latLngBounds = L.latLngBounds([latLng, latLng, latLng]);

latLngBounds = new L.LatLngBounds(latLng, latLng);
latLngBounds = new L.LatLngBounds(latLngLiteral, latLngLiteral);
latLngBounds = new L.LatLngBounds(latLngTuple, latLngTuple);

const pointTuple: L.PointTuple = [0, 0];

let point: L.Point;
point = L.point(12, 13);
point = L.point(12, 13, true);
point = L.point(pointTuple);
point = L.point({x: 12, y: 13});

point = new L.Point(12, 13);
point = new L.Point(12, 13, true);

let distance: number;
point.distanceTo(point);
point.distanceTo(pointTuple);

const transformation = new L.Transformation(1, 2, 3, 4);
point = transformation.transform(point);
point = transformation.transform(point, 2);
point = transformation.untransform(point);
point = transformation.untransform(point, 2);

const boundsLiteral: L.BoundsLiteral = [[1, 1], pointTuple];

let bounds: L.Bounds;
bounds = L.bounds(point, point);
bounds = L.bounds(pointTuple, pointTuple);
bounds = L.bounds([point, point]);
bounds = L.bounds(boundsLiteral);

bounds = new L.Bounds(point, point);
bounds = new L.Bounds(pointTuple, pointTuple);
bounds = new L.Bounds([point, point]);
bounds = new L.Bounds(boundsLiteral);

let points: L.Point[];
points = L.LineUtil.simplify([point, point], 1);

distance = L.LineUtil.pointToSegmentDistance(point, point, point);

point = L.LineUtil.closestPointOnSegment(point, point, point);

points = L.PolyUtil.clipPolygon(points, bounds);
points = L.PolyUtil.clipPolygon(points, bounds, true);

let mapOptions: L.MapOptions = {};
mapOptions = {
	preferCanvas: true,
	attributionControl: false,
	zoomControl: true,
	closePopupOnClick: false,
	zoomSnap: 1,
	zoomDelta: 1,
	trackResize: false,
	boxZoom: true,
	dragging: true,
	// CRS
	zoom: 12,
	minZoom: 10,
	maxZoom: 14,
	fadeAnimation: true,
	markerZoomAnimation: false,
	transform3DLimit: 123,
	zoomAnimation: false,
	zoomAnimationThreshold: 4,
	inertia: false,
	inertiaDeceleration: 2000,
	inertiaMaxSpeed: 1000,
	easeLinearity: 0.5,
	worldCopyJump: true,
	maxBoundsViscosity: 1.0,
	keyboard: false,
	keyboardPanDelta: 100,
	wheelDebounceTime: 30,
	wheelPxPerZoomLevel: 25,
	tap: false,
	tapTolerance: 10,
	bounceAtZoomLimits: false
};

mapOptions.doubleClickZoom = true;
mapOptions.doubleClickZoom = 'center';

mapOptions.center = latLng;
mapOptions.center = latLngLiteral;
mapOptions.center = latLngTuple;

mapOptions.layers = [];
mapOptions.layers = [L.tileLayer('')]; // add layers of other types

mapOptions.maxBounds = latLngBounds;
mapOptions.maxBounds = [];
mapOptions.maxBounds = latLngBoundsLiteral;

// mapOptions.renderer = ?

mapOptions.scrollWheelZoom = true;
mapOptions.scrollWheelZoom = 'center';

mapOptions.touchZoom = false;
mapOptions.touchZoom = 'center';

let layer: L.Layer;

const htmlElement = document.getElementById('foo');

const popupOptions: L.PopupOptions = {};

const tooltipOptions: L.TooltipOptions = {};

let zoomPanOptions: L.ZoomPanOptions = {};
zoomPanOptions = {
	animate: false,
	duration: 0.5,
	easeLinearity: 0.6,
	noMoveStart: true
};

const zoomOptions: L.ZoomOptions = {};

const panOptions: L.PanOptions = {};

const fitBoundsOptions: L.FitBoundsOptions = {};

let map = L.map('foo');
map = L.map('foo', mapOptions);
map = L.map(htmlElement);
map = L.map(htmlElement, mapOptions);

map = new L.Map('foo', mapOptions);
map = new L.Map(htmlElement);
map = new L.Map(htmlElement, mapOptions);

let doesItHaveLayer: boolean;
doesItHaveLayer = map.hasLayer(L.tileLayer(''));

// map.getRenderer

let html: HTMLElement;
html = map.createPane('foo');
html = map.createPane('foo', htmlElement);
html = map.getPane('foo');
html = map.getPane(htmlElement);
html = map.getContainer();

const panes = map.getPanes();
html = panes.mapPane;
html = panes.tilePane;
html = panes.overlayPane;
html = panes.shadowPane;
html = panes.markerPane;
html = panes.tooltipPane;
html = panes.popupPane;
html = panes['foo'];

let coordinates: L.LatLng;
coordinates = map.getCenter();

let zoom: number;
zoom = map.getZoom();
zoom = map.getMinZoom();
zoom = map.getMaxZoom();
zoom = map.getBoundsZoom(latLngBounds);
zoom = map.getBoundsZoom(latLngBounds, true);
zoom = map.getBoundsZoom(latLngBoundsLiteral);
zoom = map.getBoundsZoom(latLngBoundsLiteral, true);

let mapLatLngBounds: L.LatLngBounds;
mapLatLngBounds = map.getBounds();

let mapPoint: L.Point;
mapPoint = map.getSize();
mapPoint = map.getPixelOrigin();

let mapPixelBounds: L.Bounds;
mapPixelBounds = map.getPixelBounds();
mapPixelBounds = map.getPixelWorldBounds();
mapPixelBounds = map.getPixelWorldBounds(12);

let tileLayerOptions: L.TileLayerOptions = {};
tileLayerOptions = {
    minZoom: 0,
    maxZoom: 18,
    maxNativeZoom: 2,
    errorTileUrl: '',
    zoomOffset: 0,
    tms: true,
    zoomReverse: true,
    detectRetina: true,
    crossOrigin: false,
    opacity: 1,
    updateWhenIdle: true,
    updateWhenZooming: true,
    updateInterval: 500,
    attribution: '',
    zIndex: 1,
    noWrap: true,
    pane: '',
    className: '',
    keepBuffer: 1,
    foo: 'bar',
    bar: () => 'foo',
    abc: (data: any) => 'foobar'
};

tileLayerOptions.subdomains = 'a';
tileLayerOptions.subdomains = ['a', 'b'];

tileLayerOptions.tileSize = 256;
tileLayerOptions.tileSize = point;
// tileLayerOptions.tileSize = pointTuple; investigate if this is valid

tileLayerOptions.bounds = latLngBounds;
tileLayerOptions.bounds = latLngBoundsLiteral;

let tileLayer: L.TileLayer;
tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', tileLayerOptions);
tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}&{bar}&{abc}', {foo: 'bar', bar: (data: any) => 'foo', abc: () => ''});

tileLayer = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
tileLayer = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', tileLayerOptions);
tileLayer = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}&{bar}&{abc}', {foo: 'bar', bar: (data: any) => 'foo', abc: () => ''});

const eventHandler = () => {};
const domEvent: Event = {} as Event;
L.DomEvent
	.on(htmlElement, 'click', eventHandler)
	.addListener(htmlElement, 'click', eventHandler)
	.off(htmlElement, 'click', eventHandler)
	.removeListener(htmlElement, 'click', eventHandler)
	.on(htmlElement, {click: eventHandler})
	.addListener(htmlElement, {click: eventHandler})
	.off(htmlElement, {click: eventHandler}, eventHandler)
	.removeListener(htmlElement, {click: eventHandler}, eventHandler)
	.stopPropagation(domEvent)
	.disableScrollPropagation(htmlElement)
	.disableClickPropagation(htmlElement)
	.preventDefault(domEvent)
	.stop(domEvent);
point = L.DomEvent.getMousePosition(domEvent as MouseEvent);
point = L.DomEvent.getMousePosition(domEvent as MouseEvent, htmlElement);
const wheelDelta: number = L.DomEvent.getWheelDelta(domEvent);

map = map
	// addControl
	// removeControl
	.addLayer(tileLayer)
	.removeLayer(tileLayer) // use a different type of layer
	.eachLayer((currentLayer) => {
		layer = currentLayer;
	})
	.eachLayer((currentLayer) => {
		layer = currentLayer;
	}, {})
	.openPopup(L.popup())
	.openPopup('Hello World', latLng)
	.openPopup('Hello World', latLng, popupOptions)
	.openPopup('Hello World', latLngLiteral)
	.openPopup('Hello World', latLngLiteral, popupOptions)
	.openPopup('Hello World', latLngTuple)
	.openPopup('Hello World', latLngTuple, popupOptions)
	.openPopup(htmlElement, latLng)
	.openPopup(htmlElement, latLng, popupOptions)
	.openPopup(htmlElement, latLngLiteral)
	.openPopup(htmlElement, latLngLiteral, popupOptions)
	.openPopup(htmlElement, latLngTuple)
	.openPopup(htmlElement, latLngTuple, popupOptions)
	.closePopup()
	.closePopup(L.popup())
	.openTooltip(L.tooltip())
	.openTooltip('Hello Word', latLng)
	.openTooltip('Hello World', latLng, tooltipOptions)
	.openTooltip('Hello World', latLngLiteral)
	.openTooltip('Hello World', latLngLiteral, tooltipOptions)
	.openTooltip('Hello World', latLngTuple)
	.openTooltip('Hello World', latLngTuple, tooltipOptions)
	.openTooltip(htmlElement, latLng)
	.openTooltip(htmlElement, latLng, tooltipOptions)
	.openTooltip(htmlElement, latLngLiteral)
	.openTooltip(htmlElement, latLngLiteral, tooltipOptions)
	.openTooltip(htmlElement, latLngTuple)
	.openTooltip(htmlElement, latLngTuple, tooltipOptions)
	.closeTooltip()
	.closeTooltip(L.tooltip())
	.setView(latLng, 12)
	.setView(latLng, 12, zoomPanOptions)
	.setView(latLngLiteral, 12)
	.setView(latLngLiteral, 12, zoomPanOptions)
	.setView(latLngTuple, 12)
	.setView(latLngTuple, 12, zoomPanOptions)
	.setZoom(11)
	.setZoom(12, zoomPanOptions) // investigate if zoomPanOptions are really required
	.zoomIn()
	.zoomIn(1)
	.zoomIn(1, zoomOptions)
	.zoomOut()
	.zoomOut(1)
	.zoomOut(1, zoomOptions)
	.setZoomAround(latLng, 12, zoomOptions) // investigate if zoom options are really required
	.setZoomAround(latLngLiteral, 12, zoomOptions)
	.setZoomAround(latLngTuple, 12, zoomOptions)
	.setZoomAround(point, 12, zoomOptions)
	.setZoomAround(pointTuple, 11, zoomOptions)
	.fitBounds(latLngBounds)
	.fitBounds(latLngBounds, fitBoundsOptions) // investigate if fit bounds options are really required
	.fitBounds(latLngBoundsLiteral, fitBoundsOptions)
	.fitWorld()
	.fitWorld(fitBoundsOptions)
	.panTo(latLng)
	.panTo(latLng, panOptions)
	.panTo(latLngLiteral)
	.panTo(latLngLiteral, panOptions)
	.panTo(latLngTuple)
	.panTo(latLngTuple, panOptions)
	.panBy(point)
	.panBy(pointTuple)
	.setMaxBounds(latLngBounds)
	.setMaxBounds(latLngBoundsLiteral)
	.setMinZoom(5)
	.setMaxZoom(10)
	.panInsideBounds(latLngBounds)
	.panInsideBounds(latLngBounds, panOptions)
	.panInsideBounds(latLngBoundsLiteral)
	.panInsideBounds(latLngBoundsLiteral, panOptions)
	.invalidateSize(zoomPanOptions)
	.invalidateSize(false)
	.stop()
	.flyTo(latLng)
	.flyTo(latLng, 12)
	.flyTo(latLng, 12, zoomOptions)
	.flyTo(latLngLiteral)
	.flyTo(latLngLiteral, 12)
	.flyTo(latLngLiteral, 12, zoomPanOptions)
	.flyTo(latLngTuple)
	.flyTo(latLngTuple, 12)
	.flyTo(latLngTuple, 12, zoomPanOptions)
	.flyToBounds(latLngBounds)
	.flyToBounds(latLngBounds, fitBoundsOptions)
	.flyToBounds(latLngBoundsLiteral)
	.flyToBounds(latLngBoundsLiteral, fitBoundsOptions)
	// addHandler
	.remove()
	.whenReady(() => {})
	.whenReady(() => {}, {});

const elementToDrag = document.createElement('div');
const draggable = new L.Draggable(elementToDrag);
draggable.enable();
draggable.disable();
draggable.on('drag', () => {});

let twoCoords: [number, number] = [1, 2];
latLng = L.GeoJSON.coordsToLatLng(twoCoords);
twoCoords = L.GeoJSON.latLngToCoords(latLng) as [number, number];

let threeCoords: [number, number, number] = [1, 2, 3];
latLng = L.GeoJSON.coordsToLatLng(threeCoords);
threeCoords = L.GeoJSON.latLngToCoords(latLng) as [number, number, number];

let nestedTwoCoords = [ [12, 13], [13, 14], [14, 15] ];
const nestedLatLngs: L.LatLng[] = L.GeoJSON.coordsToLatLngs(nestedTwoCoords, 1);
nestedTwoCoords = L.GeoJSON.latLngsToCoords(nestedLatLngs, 1);

class MyMarker extends L.Marker {
	constructor() {
		super([12, 13]);
	}
}

class MyLayer extends L.Layer {
	constructor() {
		super();
	}
}

class MyIcon extends L.Icon {
	constructor() {
		super({iconUrl: 'icon.png'});
	}
}

class MyDivIcon extends L.DivIcon {
	constructor() {
		super();
	}
}

const divIcon = L.divIcon({html: ''});
let defaultIcon = new L.Icon.Default();
defaultIcon = new L.Icon.Default({imagePath: 'apath'});

const myControlClass = L.Control.extend({});
const myControl = new myControlClass();

L.Control.include({});
L.Control.mergeOptions({});
L.Control.addInitHook(() => {});

export class MyNewControl extends L.Control {
	constructor() {
		super({
			position: 'topleft'
		});
	}
}

L.marker([1, 2], {
	icon: L.icon({
		iconUrl: 'my-icon.png'
	})
}).bindPopup('<p>Hi</p>');

L.marker([1, 2], {
	icon: L.divIcon({
		className: 'my-icon-class'
	})
}).setIcon(L.icon({
	iconUrl: 'my-icon.png'
})).setIcon(L.divIcon({
	className: 'my-div-icon'
}));

const latLngs = [
  {lat: 0, lng: 0},
  {lat: 1, lng: 1}
];
const polygon = new L.Polygon(latLngs);
const polygonExclusion = new L.Polygon([latLngs, latLngs]);

L.polygon(latLngs).addTo(map);
L.polygon([latLngs, latLngs]).addTo(map);

L.Util.extend({});
L.Util.create({});
L.Util.bind(() => {}, {});
L.Util.stamp({});
L.Util.throttle(() => {}, 123, {});
L.Util.wrapNum(123, []);
L.Util.wrapNum(123, [], true);
L.Util.falseFn();
L.Util.formatNum(123);
L.Util.formatNum(123, 1);
L.Util.trim('word   ');
L.Util.splitWords('word word');
L.Util.setOptions({}, {});
L.Util.getParamString({});
L.Util.getParamString({}, '');
L.Util.getParamString({}, '', true);
L.Util.template('template', {});
L.Util.isArray({});
L.Util.indexOf([], {});
L.Util.requestAnimFrame(() => {});
L.Util.requestAnimFrame(() => {}, {});
L.Util.requestAnimFrame(() => {}, {}, true);
L.Util.cancelAnimFrame(1);
L.Util.emptyImageUrl;

interface MyProperties {
	testProperty: string;
}

(L.polygon(latLngs) as L.Polygon<MyProperties>).feature.properties.testProperty = "test";

(L.marker([1, 2], {
	icon: L.icon({
		iconUrl: 'my-icon.png'
	})
}) as L.Marker<MyProperties>).feature.properties.testProperty = "test";

let lg = L.layerGroup();
lg = L.layerGroup([new L.Layer(), new L.Layer()]);
lg = L.layerGroup([new L.Layer(), new L.Layer()], {
	pane: 'overlayPane',
	attribution: 'test'
});

lg = new L.LayerGroup();
lg = new L.LayerGroup([new L.Layer(), new L.Layer()]);
lg = new L.LayerGroup([new L.Layer(), new L.Layer()], {
	pane: 'overlayPane',
	attribution: 'test'
});

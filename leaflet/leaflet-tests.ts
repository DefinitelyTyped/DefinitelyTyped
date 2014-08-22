/// <reference path="leaflet.d.ts" />

// initialize the map on the "map" div with a given center and zoom

var div = document.getElementById('map');

var map : L.Map = L.map(div, {
    center: L.latLng([51.505, -0.09]),
	zoom: 13,
	minZoom: 3,
	maxZoom: 8,
	maxBounds: L.latLngBounds([L.latLng(-60, -60), L.latLng(60, 60)]),
	dragging: true,
	touchZoom: true,
	scrollWheelZoom: true,
	boxZoom: true,
	tap: true,

	tapTolerance: 30,
	trackResize: true,
	worldCopyJump: false,
	closePopupOnClick: true,
	bounceAtZoomLimits: true,

	keyboard: true,
	keyboardPanOffset: 80,
	keyboardZoomOffset: 1,

	inertia: true,
	inertiaDeceleration: 3000,
	inertiaMaxSpeed: 1500,
	inertiaThreshold: 32,

	zoomControl: true,
	attributionControl: true,

	fadeAnimation: true,
	zoomAnimation: true,
	zoomAnimationThreshold: 4,
	markerZoomAnimation: true

});

map.dragging.enable();
map.touchZoom.enable();
map.scrollWheelZoom.enable();
map.doubleClickZoom.enable();
map.boxZoom.enable();
map.tap.enable();

map.setView(new L.LatLng(42, 51));
map.setView(L.latLng(42, 51));

map.setView(L.latLng(42, 51), 12);
map.setView(L.latLng(42, 51), 12, {
	reset: true,
	pan: {
		animate: true,
		duration: 0.25,
		easeLinearity: 0.25,
		noMoveStart: false
	},
	zoom: {
		animate: true
	}
});

map.setZoom(50);
map.setZoom(50, {});

map.zoomIn();
map.zoomOut();

map.zoomIn(2);
map.zoomOut(2);

map.zoomIn(2, { animate: true });
map.zoomOut(2, { animate: true });

map.setZoomAround(L.latLng(42, 51), 8, { animate: false });

map.fitBounds(L.latLngBounds(L.latLng(10, 10), L.latLng(20, 20)));
map.fitBounds(L.latLngBounds(L.latLng(10, 10), L.latLng(20, 20)), {
	paddingTopLeft: L.point(20, 20),
	paddingBottomRight: L.point(20, 20),
	padding: L.point(0, 0),
	maxZoom: null
});

map.fitWorld();

map.fitWorld({
	animate: false
});

map.panTo(L.latLng(42, 42));
map.panTo(L.latLng(42, 42), {
	animate: true
});

map.invalidateSize(true);
map.invalidateSize({ reset: true });

map.setMaxBounds(L.latLngBounds(L.latLng(10, 10), L.latLng(20, 20)));

map.locate();
map.locate({
	watch: false,
	setView: false,
	maxZoom: 18,
	timeout: 10000,
	maximumAge: 0,
	enableHighAccuracy: false
});

map.stopLocate();

map.remove();

var center : L.LatLng = map.getCenter();
var zoom : number = map.getZoom();
var minZoom: number = map.getMinZoom();
var maxZoom: number = map.getMaxZoom();
var bounds: L.LatLngBounds = map.getBounds();
var boundsZoom: number = map.getBoundsZoom(bounds, true);
var size: L.Point = map.getSize();
var pixelBounds: L.Bounds = map.getPixelBounds();
var pixelOrigin: L.Point = map.getPixelOrigin();

var layer = L.tileLayer("http://{s}.example.net/{x}/{y}/{z}.png");

map.addLayer(layer);
map.addLayer(layer, false);

map.removeLayer(layer);
map.hasLayer(layer);

map.openPopup("canard", L.latLng(42, 51));

var popup = L.popup({
	autoPan: true
});

map.openPopup(popup);
map.closePopup(popup);
map.closePopup();

map.addControl(L.control.attribution({position: 'bottomright'}));
map.removeControl(L.control.attribution({ position: 'bottomright' }));

map.latLngToLayerPoint(map.layerPointToLatLng(L.point(0, 0)));
map.latLngToContainerPoint(map.containerPointToLatLng(L.point(0, 0)));
map.containerPointToLayerPoint(L.point(0, 0));
map.layerPointToContainerPoint(L.point(0, 0));

map.project(map.unproject(L.point(10, 20)));
map.project(map.unproject(L.point(10, 20), 12), 12);

var mouseEvent: L.LeafletMouseEvent;
map.mouseEventToContainerPoint(mouseEvent);
map.mouseEventToLayerPoint(mouseEvent);
map.mouseEventToLatLng(mouseEvent);

map.getContainer().classList.add('roger');
map.getPanes().mapPane.classList.add('roger');
map.getPanes().markerPane.classList.add('roger');
map.getPanes().objectsPane.classList.add('roger');
map.getPanes().overlayPane.classList.add('roger');
map.getPanes().popupPane.classList.add('roger');
map.getPanes().shadowPane.classList.add('roger');
map.getPanes().tilePane.classList.add('roger');

map.whenReady((m: L.Map) => {
	m.zoomOut();
});

map.on('click', () => {
	map.zoomOut();
});

map.off('dblclick', L.Util.falseFn);

map.once('contextmenu', (e: L.LeafletMouseEvent) => {
	map.openPopup('contextmenu', e.latlng);
});

var marker = L.marker(L.latLng(42, 51), {
	icon: L.icon({
		iconURl: 'roger.png',
		iconRetinaUrl: 'roger-retina.png',
		iconSize: L.point(40, 40),
		iconAnchor: L.point(20, 0),
		shadowUrl: 'roger-shadow.png',
		shadowRetinaUrl: 'roger-shadow-retina.png',
		shadowSize: L.point(44, 44),
		shadowAnchor: L.point(22, 0),
		popupAnchor: L.point(0, 0),
		className: 'roger-icon'
	}),
	clickable: true,
	draggable: false,
	keyboard: true,
	title: 'this is an icon',
	alt: '',
	zIndexOffset: 0,
	opacity: 1.0,
	riseOnHover: false,
	riseOffset: 250
});

marker.addTo(map);

marker.on('click', (e: L.LeafletMouseEvent) => {
	map.setView(e.latlng);
});

marker.once('mouseover', () => {
	marker.openPopup();
})

marker.setLatLng(marker.getLatLng());

marker.setIcon(L.icon({}));

marker.setZIndexOffset(30);
marker.setOpacity(0.8);

marker.bindPopup(popup);
marker.unbindPopup();
marker.bindPopup('hello', {
	closeOnClick: true
});

marker.openPopup();
marker.closePopup();
marker.togglePopup();
marker.togglePopup();
marker.setPopupContent('hello 3')
marker.getPopup().setContent('hello 2');
marker.update();

marker.toGeoJSON();

marker.dragging.enable();

popup = L.popup({
	maxWidth: 300,
	minWidth: 50,
	maxHeight: null,
	autoPan: true,
	keepInView: false,
	closeButton: true,
	offset: L.point(0, 6),
	autoPanPaddingTopLeft: null,
	autoPanPaddingBottomRight: L.point(20, 20),
	autoPanPadding: L.point(5, 5),
	zoomAnimation: true,
	closeOnClick: null,
	className: 'roger'
});

popup.setLatLng(L.latLng(12, 54)).setContent('this is nice popup').openOn(map);

popup.update();

var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {
	foo: 'bar',
	minZoom: 0,
	maxZoom: 18,
	maxNativeZoom: 17,
	tileSize: 256,
	subdomains: ['a','b','c'],
	errorTileUrl: '',
	attribution: '',
	tms: false,
	continuousWorld: false,
	noWrap: false,
	zoomOffset: 0,
	zoomReverse: false,
	opacity: 1.0,
	zIndex: null,
	unloadInvisibleTiles: false,
	updateWhenIdle: false,
	detectRetina: true,
	reuseTiles: true,
	bounds: null
});

tileLayer.on('loading', L.Util.falseFn)
	.off('loading', L.Util.falseFn)
	.once('tileload', L.Util.falseFn);

tileLayer.addTo(map);

tileLayer.bringToBack()
	.bringToFront()
	.setOpacity(0.7)
	.setZIndex(9)
	.redraw()
	.setUrl('http://perdu.com')
	.getContainer();

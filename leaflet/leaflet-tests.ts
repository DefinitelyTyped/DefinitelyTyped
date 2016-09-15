/// <reference path="leaflet.d.ts" />

import L = require('leaflet');

const latLngLiteral: L.LatLngLiteral = {lat: 12, lng: 13};
const latLngTuple: L.LatLngTuple = [12, 13];

let latLng: L.LatLng;
latLng = L.latLng(12, 13);
latLng = L.latLng(12, 13, 0);
latLng = L.latLng(latLngLiteral);
latLng = L.latLng({lat: 12, lng: 13, alt: 0});
latLng = L.latLng(latLngTuple);
latLng = L.latLng([12, 13, 0]);

const latLngBoundsLiteral: L.LatLngBoundsLiteral = [[12, 13], latLngTuple];

let latLngBounds: L.LatLngBounds;
latLngBounds = L.latLngBounds(latLng, latLng);
latLngBounds = L.latLngBounds(latLngLiteral, latLngLiteral);
latLngBounds = L.latLngBounds(latLngTuple, latLngTuple);

const pointTuple: L.PointTuple = [0, 0];

let point: L.Point;
point = L.point(12, 13);
point = L.point(12, 13, true);
point = L.point(pointTuple);
point = L.point({x: 12, y: 13});

const boundsLiteral: L.BoundsLiteral = [[1, 1], pointTuple];

let bounds: L.Bounds;
bounds = L.bounds(point, point);
bounds = L.bounds(pointTuple, pointTuple);
bounds = L.bounds([point, point]);
bounds = L.bounds(boundsLiteral);

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

let popupOptions: L.PopupOptions = {};

let tooltipOptions: L.TooltipOptions = {};

let zoomPanOptions: L.ZoomPanOptions = {};
zoomPanOptions = {
	animate: false,
	duration: 0.5,
	easeLinearity: 0.6,
	noMoveStart: true
};

let zoomOptions: L.ZoomOptions = {};

let panOptions: L.PanOptions = {};

let fitBoundsOptions: L.FitBoundsOptions = {};

let map = L.map('foo');
map = L.map('foo', mapOptions);
map = L.map(htmlElement);
map = L.map(htmlElement, mapOptions);

let doesItHaveLayer: boolean;
doesItHaveLayer = map.hasLayer(L.tileLayer(''));

// map.getRenderer

let html: HTMLElement;
html = map.createPane('foo');
html = map.createPane('foo', htmlElement)
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

map = map
	// addControl
	// removeControl
	.addLayer(L.tileLayer(''))
	.removeLayer(L.tileLayer('')) // use a different type of layer
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
	.setMaxBounds(bounds) // investigate if this really receives Bounds instead of LatLngBounds
	.setMaxBounds(boundsLiteral)
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

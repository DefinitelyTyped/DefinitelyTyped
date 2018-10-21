import * as L from 'leaflet';
import 'leaflet-canvas-marker';

const options = {};

// initializing
let canvasIconLayer: L.CanvasIconLayer;
canvasIconLayer = L.canvasIconLayer(options);
canvasIconLayer = canvasIconLayer.initialize(options);
canvasIconLayer = canvasIconLayer.setOptions(options);

let map = L.map('test');
map = map
    .addLayer(canvasIconLayer)
    .removeLayer(canvasIconLayer);

const latLng: L.LatLng = L.latLng(40.741895, -73.989308);

const marker: L.Marker = L.marker(latLng);
const markers: L.Marker[] = [marker];
const layer: L.Layer = marker;
const layers: L.Layer[] = markers;

const clickListener = () => {};
const hoverListener = () => {};

canvasIconLayer = canvasIconLayer
    // markers
    .addMarker(marker)
    .addMarkers(markers)
    .removeMarker(marker, true)
    // layers
    .addLayer(layer)
    .addLayers(layers)
    .removeLayer(layer)
    .clearLayers()
    // redraw
    .redraw()
    // listeners
    .addOnClickListener(clickListener)
    .addOnHoverListener(hoverListener);

let mapHasLayer: boolean;
mapHasLayer = map.hasLayer(canvasIconLayer);

// inheritance
const extendedCanvasIconLayer = L.CanvasIconLayer.extend({
    customFn() {}
});

const newExtenedCanvasIconLayer = new extendedCanvasIconLayer();
newExtenedCanvasIconLayer.customFn();

import * as L from 'leaflet';
import 'leaflet-editable';

class PolygonClass {}
class PolylineClass {}
class MarkerClass {}
class RectangleClass {}
class CircleClass {}
class EditToolsClass {}
class PolygonEditorClass {}
class PolylineEditorClass {}
class MarkerEditorClass {}
class RectangleEditorClass {}
class CircleEditorClass {}

const map: L.Map = L.map('div', {
    editable: true,
    editOptions: {
        zIndex: 1500,
        polygonClass: PolygonClass,
        polylineClass: PolylineClass,
        markerClass: MarkerClass,
        rectangleClass: RectangleClass,
        circleClass: CircleClass,
        drawingCSSClass: 'css-class',
        drawingCursor: 'pointer',
        editLayer: L.layerGroup(),
        featuresLayer: L.layerGroup(),
        polygonEditorClass: PolygonEditorClass,
        polylineEditorClass: PolylineEditorClass,
        markerEditorClass: MarkerEditorClass,
        rectangleEditorClass: RectangleEditorClass,
        circleEditorClass: CircleEditorClass,
        lineGuideOptions: { option: true },
        skipMiddleMarkers: true,
    },
    editToolsClass: EditToolsClass,
});

const line = L.polyline([
    [43.1292, 1.256],
    [43.1295, 1.259],
    [43.1291, 1.261],
]).addTo(map);
line.enableEdit();
line.on('dblclick', L.DomEvent.stop).on('dblclick', line.toggleEdit);

const multi = L.polygon([
    [
        [
            [43.1239, 1.244],
            [43.123, 1.253],
            [43.1252, 1.255],
            [43.125, 1.251],
            [43.1239, 1.244],
        ],
        [
            [43.124, 1.246],
            [43.1236, 1.248],
            [43.12475, 1.25],
        ],
        [
            [43.124, 1.251],
            [43.1236, 1.253],
            [43.12475, 1.254],
        ],
    ],
    [
        [
            [43.1269, 1.246],
            [43.126, 1.252],
            [43.1282, 1.255],
            [43.128, 1.245],
        ],
    ],
]).addTo(map);
multi.enableEdit();
multi.on('dblclick', L.DomEvent.stop).on('dblclick', multi.toggleEdit);
multi.bindPopup('hi!');

const poly = L.polygon([
    [
        [43.1239, 1.259],
        [43.123, 1.263],
        [43.1252, 1.265],
        [43.125, 1.261],
    ],
    [
        [43.124, 1.263],
        [43.1236, 1.261],
        [43.12475, 1.262],
    ],
]).addTo(map);
poly.enableEdit();
poly.on('dblclick', L.DomEvent.stop).on('dblclick', poly.toggleEdit);

const rectangle = L.rectangle([
    [43.1235, 1.255],
    [43.1215, 1.259],
]).addTo(map);
rectangle.enableEdit();
rectangle.on('dblclick', L.DomEvent.stop).on('dblclick', rectangle.toggleEdit);

const circle = L.circle([43.122, 1.25], { radius: 100 }).addTo(map);
circle.enableEdit();
circle.on('dblclick', L.DomEvent.stop).on('dblclick', circle.toggleEdit);

const newMarker = map.editTools.startMarker();
newMarker.enable();
newMarker.disable();
const newMarkerDrawing: boolean = newMarker.drawing();

const newPolyline = map.editTools.startPolyline();
newPolyline.enable();
newPolyline.disable();
const newPolylineDrawing: boolean = newPolyline.drawing();
newPolyline.continueForward([L.latLng(43.124, 1.263), L.latLng(43.1236, 1.261), L.latLng(43.12475, 1.262)]);
newPolyline.continueBackward([
    L.latLng(43.124, 1.263),
    L.latLng(43.1236, 1.261),
    L.latLng(43.12475, 1.262),
]);
newPolyline.splitShape([L.latLng(43.124, 1.263), L.latLng(43.1236, 1.261), L.latLng(43.12475, 1.262)], 2);

const newPolygon = map.editTools.startPolygon();
newPolygon.enable();
newPolygon.disable();
const newPolygonDrawing: boolean = newPolygon.drawing();
newPolygon.continueForward([L.latLng(43.124, 1.263), L.latLng(43.1236, 1.261), L.latLng(43.12475, 1.262)]);
newPolygon.continueBackward([
    L.latLng(43.124, 1.263),
    L.latLng(43.1236, 1.261),
    L.latLng(43.12475, 1.262),
]);
newPolygon.splitShape([L.latLng(43.124, 1.263), L.latLng(43.1236, 1.261), L.latLng(43.12475, 1.262)], 2);
newPolygon.newHole(L.latLng(0, 17));

const newRectangle = map.editTools.startRectangle();
newRectangle.enable();
newRectangle.disable();
const newRectangleDrawing: boolean = newRectangle.drawing();
newRectangle.splitShape([L.latLng(43.124, 1.263), L.latLng(43.1236, 1.261), L.latLng(43.12475, 1.262)], 2);

const newCircle = map.editTools.startCircle();
newCircle.enable();
newCircle.disable();
const newCircleDrawing: boolean = newCircle.drawing();

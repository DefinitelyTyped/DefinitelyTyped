/// <reference path="leaflet-editable.d.ts" />

var map: L.Map = L.map('div', {
    editable: true,
    editOptions: {
        drawingCSSClass: 'css-class',
        editLayer: L.layerGroup(),
        featuresLayer: L.layerGroup<L.Marker|L.Polyline|L.Polygon>(),
        lineGuideOptions: {},
        markerClass: MarkerClass,
        markerEditorClass: MarkerEditorClass,
        middleMarkerClass: MiddleMarkerClass,
        polygonClass: PolygonClass,
        polygonEditorClass: PolygonEditorClass,
        polylineClass: PolylineClass,
        polylineEditorClass: PolylineEditorClass,
        skipMiddleMarkers: true,
        vertexMarkerClass: VertexMarkerClass
    }
});

var currentPoly: L.Polygon|L.Polyline| L.Marker = map.editTools.currentPolygon;
map.editTools.stopDrawing();

var marker: L.Marker = map.editTools.startMarker(L.latLng(0, 0), { draggable: true });
marker.disable();
marker.enable();
marker.toggleEdit();
var enabled: boolean = marker.editEnabled();

var polyline: L.Polyline = map.editTools.startPolyline(L.latLng(0, 0), { noClip: true });
polyline.continueBackward();
polyline.continueForward();
polyline.disable();
polyline.enable();
enabled = polyline.editEnabled();
polyline.reset();
polyline.toggleEdit();

var polygon: L.Polygon = map.editTools.startPolygon(L.latLng(0, 0), { noClip: true });
polygon.continueBackward();
polygon.continueForward();
polygon.disable();
polygon.enable();
enabled = polygon.editEnabled();
polygon.newHole(L.latLng(0, 0));
polygon.reset();
polygon.toggleEdit();

class MarkerClass { }
class MarkerEditorClass { }
class MiddleMarkerClass { }
class PolygonClass { }
class PolygonEditorClass { }
class PolylineClass { }
class PolylineEditorClass { }
class VertexMarkerClass { }
import * as L from 'leaflet';
import * as geojson from 'geojson';

const map = new L.Map('#id');
const layer = new L.Layer();

const polygonOptions: L.PolylineOptions = {
    color: '#FFFFFF',
    weight: 2,
    opacity: 0.75,
    fillColor: '#000000'
};

const polylineOptions: L.PolylineOptions = {
    smoothFactor: 1,
    noClip: true,
    weight: 3
};

const freehandOptions: L.FreeHandShapesOptions = {
    polygon: polygonOptions,
    polyline: polylineOptions,
    simplify_tolerance: 0.01,
    merge_polygons: false,
    concave_polygons: undefined
};

const leafletMouseEvent: L.LeafletMouseEvent = {} as unknown as L.LeafletMouseEvent;

const simplePolygonLatLngs: L.LatLngExpression[] = [[37, -109.05], [41, -109.03], [41, -102.05], [37, -102.04]];
const polygon = new L.Polygon(simplePolygonLatLngs);
polygon.getGroup();
polygon.destroy();
polygon.onAdd(map);

const geo: geojson.Feature = polygon.toGeoJSON();
const latlngs = polygon.getLatLngs();

new L.FreeHandShapes();
const freehand = new L.FreeHandShapes(freehandOptions);
freehand.initialize(freehandOptions);
freehand.onAdd(map);
freehand.onRemove(map);
freehand.getEvents();
freehand.addLayer(layer);
freehand.addLayer(layer, true);
freehand.drawStartedEvents();
freehand.drawStartedEvents('on');
freehand.drawStartedEvents('off');
freehand.zoomMoveStart();
freehand.startDraw();
freehand.stopDraw();
freehand.mouseDown(leafletMouseEvent);
freehand.mouseMove(leafletMouseEvent);
freehand.mouseUpLeave();
freehand.polygonClick(polygon);
freehand.getPolygon(latlngs);
freehand.addPolygon(latlngs);
freehand.addPolygon(latlngs, true);
freehand.addPolygon(latlngs, true, false);
freehand.addPolygon(latlngs, true, false, false);
freehand.subtractPolygon(latlngs, false);
freehand.getSimplified(latlngs);
freehand.merge(latlngs);
freehand.subtract(polygon);
freehand.getLatLngsFromJSON(geo);
freehand.getCoordsFromLatLngs(latlngs);
freehand.resetTracer();
freehand.setMapPermissions();
freehand.setMapPermissions('enable');
freehand.setMapPermissions('disable');
freehand.setMode();
freehand.setMode('add');
freehand.setMode('subtract');
freehand.setMode('view');
freehand.setMode('delete');
freehand.setMapClass();
freehand.on('layeradd', () => {});

map.addLayer(freehand);

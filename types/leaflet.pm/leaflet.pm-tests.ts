import * as L from 'leaflet';
import 'leaflet-pm';

const toolbarOptions: L.PM.ToolbarOptions = {
    position: 'topleft',
    drawMarker: true,
    drawPolygon: true,
    drawPolyline: true,
    editPolygon: true,
    deleteLayer: true
};

const drawOptions: L.PM.DrawOptions = {
    templineStyle: {
        color: 'red'
    },
    hintlineStyle: {
        color: 'red',
        dashArray: '5, 5'
    }
};

const editOptions: L.PM.EditOptions = {
    draggable: true,
    snappable: true,
    snapDistance: 30
};

const pathOptions: L.PathOptions = {
    color: 'orange',
    fillColor: 'green',
    fillOpacity: 0.5
};

const map: L.Map = L.map('map-element');
map.pm.addControls(toolbarOptions);
map.pm.enableDraw('Poly', drawOptions);
map.pm.disableDraw('Poly');
map.pm.setPathOptions(pathOptions);
map.pm.toggleRemoval(true);
let enabled: boolean = map.pm.globalEditEnabled();
map.pm.toggleGlobalEditMode(editOptions);

const shapes: string[] = map.pm.Draw.getShapes();

const polygon: L.Polygon = L.polygon([ [ 1.0, 1.0], [ 2.0, 1.0], [ 1.0, 2.0] ]);
polygon.pm.enable(editOptions);
polygon.pm.disable();
polygon.pm.toggleEdit(editOptions);
enabled = polygon.pm.enabled();

const polyline: L.Polyline = L.polyline([ [ 1.0, 1.0], [ 2.0, 1.0], [ 1.0, 2.0] ]);
polyline.pm.enable(editOptions);
polyline.pm.disable();
polyline.pm.toggleEdit(editOptions);
enabled = polyline.pm.enabled();

const marker: L.Marker = L.marker([ 3.0, 3.0 ]);
marker.pm.enable(editOptions);
marker.pm.disable();
marker.pm.toggleEdit(editOptions);
enabled = marker.pm.enabled();

const layerGroup: L.LayerGroup = L.layerGroup([ polygon, polyline, marker ]);
layerGroup.pm.enable(editOptions);
layerGroup.pm.disable();
layerGroup.pm.toggleEdit(editOptions);
enabled = layerGroup.pm.enabled();
const layers: L.Layer[] = layerGroup.pm.findLayers();
const dragging: boolean = layerGroup.pm.dragging();
const options: L.PM.EditOptions = layerGroup.pm.getOptions();

var toolbarOptions: L.PM.ToolbarOptions = {
    position: 'topleft',
    drawMarker: true,
    drawPolygon: true,
    drawPolyline: true,
    editPolygon: true,
    deleteLayer: true
};

var drawOptions: L.PM.DrawOptions = {
    templineStyle: {
        color: 'red'
    },
    hintlineStyle: {
        color: 'red',
        dashArray: '5, 5'
    }
};

var editOptions: L.PM.EditOptions = {
    draggable: true,
    snappable: true,
    snapDistance: 30
};

var pathOptions: L.PathOptions = {
    color: 'orange',
    fillColor: 'green',
    fillOpacity: 0.5
};

var map: L.Map = L.map('map-element');
map.pm.addControls(toolbarOptions);
map.pm.enableDraw('Poly', drawOptions);
map.pm.disableDraw('Poly');
map.pm.setPathOptions(pathOptions);
map.pm.toggleRemoval(true);
var enabled: boolean = map.pm.globalEditEnabled();
map.pm.toggleGlobalEditMode(editOptions);

var shapes: string[] = map.pm.Draw.getShapes();

var polygon: L.Polygon = L.polygon([ [ 1.0, 1.0], [ 2.0, 1.0], [ 1.0, 2.0] ]);
polygon.pm.enable(editOptions);
polygon.pm.disable();
polygon.pm.toggleEdit(editOptions);
enabled = polygon.pm.enabled();

var polyline: L.Polyline = L.polyline([ [ 1.0, 1.0], [ 2.0, 1.0], [ 1.0, 2.0] ]);
polyline.pm.enable(editOptions);
polyline.pm.disable();
polyline.pm.toggleEdit(editOptions);
enabled = polyline.pm.enabled();

var marker: L.Marker = L.marker([ 3.0, 3.0 ]);
marker.pm.enable(editOptions);
marker.pm.disable();
marker.pm.toggleEdit(editOptions);
enabled = marker.pm.enabled();

var layerGroup: L.LayerGroup = L.layerGroup([ polygon, polyline, marker ]);
layerGroup.pm.enable(editOptions);
layerGroup.pm.disable();
layerGroup.pm.toggleEdit(editOptions);
enabled = layerGroup.pm.enabled();
var layers: L.Layer[] = layerGroup.pm.findLayers();
var dragging: boolean = layerGroup.pm.dragging();
var options: L.PM.EditOptions = layerGroup.pm.getOptions();

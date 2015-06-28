/// <reference path="openLayers.d.ts" />

// Attribution
var attribution: ol.Attribution = new ol.Attribution({
    html: "",
});

// View
var view: ol.View = new ol.View({
    center: [0, 0],
    zoom: 1,
});

// Tile layer
var tileLayer: ol.layer.Tile = new ol.layer.Tile({
    source: new ol.source.MapQuest({ layer: 'osm' })
});

// Map 
var map: ol.Map = new ol.Map({
    view: view,
    layers: [ tileLayer ],
    target: 'map'
});

// Animation
var bounce = ol.animation.bounce({
    resolution: map.getView().getResolution(),
    duration: 1000,
    start: 0,
});
var pam = ol.animation.pan({
    duration: 1000,
    start: 0,
    source: [0, 0]
});
var rotate = ol.animation.rotate({
    duration: 1000,
    start: 0,
    anchor: [0, 0],
    resolution: map.getView().getResolution()
});
var zoom = ol.animation.zoom({
    duration: 1000,
    start: 0,
    resolution: map.getView().getResolution()
});
map.beforeRender(zoom);
map.getView().setResolution(map.getView().getResolution() * 2);

// Geolocation
var geolocation: ol.Geolocation = new ol.Geolocation({
    // take the projection to use from the map's view
    projection: view.getProjection()
});
geolocation.on('change', function (evt) {
    window.console.log(geolocation.getPosition());
});

// Graticule
var graticule: ol.Graticule = new ol.Graticule();
var graticule: ol.Graticule = new ol.Graticule({
    map: map,
});
var graticuleMap: ol.Map = graticule.getMap();
var graticuleMeridians: Array<ol.geom.LineString> = graticule.getMeridians();
var graticuleParallels: Array<ol.geom.LineString> = graticule.getParallels();
graticule.setMap(graticuleMap);

// Device orientation
var deviceOrientation: ol.DeviceOrientation = new ol.DeviceOrientation({
    tracking: true,
});
deviceOrientation.on('change', function (evt) {
    window.console.log(deviceOrientation.getHeading());
});

// Overlay
var popup: ol.Overlay = new ol.Overlay({
    element: document.getElementById('popup')
});
popup.setPosition([10, 10]);
map.addOverlay(popup);
var popupElement: Element = popup.getElement();
var popupMap: ol.Map = popup.getMap();
var popupOffset: Array<number> = popup.getOffset();
var popupCoordinate: ol.Coordinate = popup.getPosition();
var popupPositioning: ol.OverlayPositioning = popup.getPositioning();
popup.setElement(popupElement);
popup.setMap(popupMap);
popup.setOffset(popupOffset);
popup.setPosition(popupCoordinate);
popup.setPositioning(popupPositioning);
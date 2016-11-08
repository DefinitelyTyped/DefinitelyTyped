/// <reference path="openlayers-3.14.2.d.ts" />

// Basic type variables for test functions
var anyValue: any;
var voidValue: void;
var numberValue: number;
var booleanValue: boolean;
var stringValue: string;
var stringArray: Array<string>;
var jsonValue: JSON;
var voidOrBooleanValue: void | boolean;
var domEventTarget: EventTarget;
var fn: Function;
var object: Object;

// Callback predefinitions for OpenLayers
var preRenderFunction: ol.PreRenderFunction;
var transformFunction: ol.TransformFunction;
var coordinateFormatType: ol.CoordinateFormatType;
var featureStyleFunction: ol.FeatureStyleFunction;
var featureLoader: ol.FeatureLoader;
var easingFunction: (t: number) => number;
var drawGeometryFunction: ol.interaction.DrawGeometryFunctionType;

// Type variables for OpenLayers
var attribution: ol.Attribution;
var boundingCoordinates: Array<ol.Coordinate>;
var circle: ol.geom.Circle;
var color: ol.Color;
var coordinate: ol.Coordinate;
var coordinatesArray: Array<ol.Coordinate>;
var coordinatesArrayDim2: Array<Array<ol.Coordinate>>;
var extent: ol.Extent;
var olEvent: ol.events.Event;
var eventKey: ol.events.Key;
var eventKeyArray: Array<ol.events.Key>;
var eventKeyMixed: ol.events.Key | Array<ol.events.Key>;
var eventTarget: ol.events.EventTarget;
var feature: ol.Feature;
var featureArray: Array<ol.Feature>;
var featureCollection: ol.Collection<ol.Feature>;
var featureFormat: ol.format.Feature;
var featureUrlFunction: ol.FeatureUrlFunction;
var graticule: ol.Graticule;
var geometriesArray: Array<ol.geom.Geometry>;
var geometry: ol.geom.Geometry;
var geometryCollection: ol.geom.GeometryCollection;
var geometryLayout: ol.geom.GeometryLayout;
var geometryType: ol.geom.GeometryType;
var linearRing: ol.geom.LinearRing;
var lineString: ol.geom.LineString;
var loadingStrategy: ol.LoadingStrategy;
var logoOptions: olx.LogoOptions;
var mapBrowserEvent: ol.MapBrowserEvent;
var multiLineString: ol.geom.MultiLineString;
var multiPoint: ol.geom.MultiPoint;
var multiPolygon: ol.geom.MultiPolygon;
var point: ol.geom.Point;
var polygon: ol.geom.Polygon;
var projection: ol.proj.Projection;
var projectionLike: ol.proj.ProjectionLike;
var simpleGeometry: ol.geom.SimpleGeometry;
var size: ol.Size;
var style: ol.style.Style;
var styleArray: Array<ol.style.Style>;
var styleFunction: ol.style.StyleFunction;
var tilegrid: ol.tilegrid.TileGrid;
var transformFn: ol.TransformFunction;
var vectorSource: ol.source.Vector;
var units: ol.proj.Units;

//
// ol.Attribution
//

var attribution: ol.Attribution = new ol.Attribution({
    html: stringValue,
});

//
// ol.color
//
color = ol.color.asArray(color);
color = ol.color.asArray(stringValue);
stringValue = ol.color.asString(color);
stringValue = ol.color.asString(stringValue);

//
// ol.extent
//
transformFunction = function (input: number[]) {
    var returnData: number[];
    return returnData;
};
transformFunction = function (input: number[], output: number[]) {
    var returnData: number[];
    return returnData;
};
transformFunction = function (input: number[], output: number[], dimension: number) {
    var returnData: number[];
    return returnData;
}
extent = ol.extent.applyTransform(extent, transformFunction);
ol.extent.applyTransform(extent, transformFunction, extent);
extent = ol.extent.boundingExtent(boundingCoordinates)
extent = ol.extent.buffer(extent, numberValue);
ol.extent.buffer(extent, numberValue, extent);
booleanValue = ol.extent.containsCoordinate(extent, coordinate);
booleanValue = ol.extent.containsExtent(extent, extent);
booleanValue = ol.extent.containsXY(extent, numberValue, numberValue);
extent = ol.extent.createEmpty();
booleanValue = ol.extent.equals(extent, extent);
extent = ol.extent.extend(extent, extent);
coordinate = ol.extent.getBottomLeft(extent);
coordinate = ol.extent.getBottomRight(extent);
coordinate = ol.extent.getCenter(extent);
numberValue = ol.extent.getHeight(extent);
extent = ol.extent.getIntersection(extent, extent);
ol.extent.getIntersection(extent, extent, extent);
size = ol.extent.getSize(extent);
coordinate = ol.extent.getTopLeft(extent);
coordinate = ol.extent.getTopRight(extent);
numberValue = ol.extent.getWidth(extent);
booleanValue = ol.extent.intersects(extent, extent);
booleanValue = ol.extent.isEmpty(extent);

//
// ol.featureloader
//
featureLoader = ol.featureloader.xhr(stringValue, featureFormat);

//
// ol.loadingstrategy
//
loadingStrategy = ol.loadingstrategy.all;
loadingStrategy = ol.loadingstrategy.bbox;
loadingStrategy = ol.loadingstrategy.tile(tilegrid);

//
//
// ol.geom.Circle
//
booleanValue = circle.intersectsExtent(extent);
circle = circle.transform(projectionLike, projectionLike);

//
//
// ol.geom.Geometry
//
var geometryResult: ol.geom.Geometry;
coordinate = geometryResult.getClosestPoint(coordinate);
geometryResult.getClosestPoint(coordinate, coordinate);
extent = geometryResult.getExtent();
geometryResult.getExtent(extent);
geometryResult.transform(projectionLike, projectionLike);

//
//
// ol.geom.GeometryCollection
//
geometryCollection = new ol.geom.GeometryCollection(geometriesArray)
geometryCollection = new ol.geom.GeometryCollection();
voidValue = geometryCollection.applyTransform(transformFn);
geometryCollection = geometryCollection.clone();
geometriesArray = geometryCollection.getGeometries();
geometryType = geometryCollection.getType();
booleanValue = geometryCollection.intersectsExtent(extent);
voidValue = geometryCollection.setGeometries(geometriesArray);

//
//
// ol.geom.LinearRing
//
linearRing = new ol.geom.LinearRing(coordinatesArray);
linearRing = new ol.geom.LinearRing(coordinatesArray, geometryLayout);
linearRing = linearRing.clone();
numberValue = linearRing.getArea();
coordinatesArray = linearRing.getCoordinates();
geometryType = linearRing.getType();
voidValue = linearRing.setCoordinates(coordinatesArray);
voidValue = linearRing.setCoordinates(coordinatesArray, geometryLayout);

//
//
// ol.geom.LineString
//
lineString = new ol.geom.LineString(coordinatesArray);
lineString = new ol.geom.LineString(coordinatesArray, geometryLayout);
voidValue = lineString.appendCoordinate(coordinate);
lineString = lineString.clone();
coordinate = lineString.getCoordinateAtM(numberValue);
coordinate = lineString.getCoordinateAtM(numberValue, booleanValue);
coordinatesArray = lineString.getCoordinates();
numberValue = lineString.getLength();
geometryType = lineString.getType();
booleanValue = lineString.intersectsExtent(extent);
voidValue = lineString.setCoordinates(coordinatesArray);
voidValue = lineString.setCoordinates(coordinatesArray, geometryLayout);

//
//
// ol.geom.MultiLineString
//
var lineStringsArray: Array<ol.geom.LineString>;

multiLineString = new ol.geom.MultiLineString(coordinatesArrayDim2);
multiLineString = new ol.geom.MultiLineString(coordinatesArrayDim2, geometryLayout);
voidValue = multiLineString.appendLineString(lineString);
multiLineString = multiLineString.clone();
coordinate = multiLineString.getCoordinateAtM(numberValue);
coordinate = multiLineString.getCoordinateAtM(numberValue, booleanValue);
coordinate = multiLineString.getCoordinateAtM(numberValue, booleanValue, booleanValue);
coordinatesArrayDim2 = multiLineString.getCoordinates();
lineString = multiLineString.getLineString(numberValue);
lineStringsArray = multiLineString.getLineStrings();
geometryType = multiLineString.getType();
booleanValue = multiLineString.intersectsExtent(extent);
voidValue = multiLineString.setCoordinates(coordinatesArrayDim2);
voidValue = multiLineString.setCoordinates(coordinatesArrayDim2, geometryLayout);

//
//
// ol.geom.MultiPoint
//
var pointsArray: Array<ol.geom.Point>;

multiPoint = new ol.geom.MultiPoint(coordinatesArray);
multiPoint = new ol.geom.MultiPoint(coordinatesArray, geometryLayout);
voidValue = multiPoint.appendPoint(point);
multiPoint = multiPoint.clone();
coordinatesArray = multiPoint.getCoordinates();
point = multiPoint.getPoint(numberValue);
pointsArray = multiPoint.getPoints();
geometryType = multiPoint.getType();
booleanValue = multiPoint.intersectsExtent(extent);
voidValue = multiPoint.setCoordinates(coordinatesArray);
voidValue = multiPoint.setCoordinates(coordinatesArray, geometryLayout);

//
//
// ol.geom.MultiPolygon
//
var coordinatesArrayDim3: Array<Array<Array<ol.Coordinate>>>;
var polygonsArray: Array<ol.geom.Polygon>;

multiPolygon = new ol.geom.MultiPolygon(coordinatesArrayDim3);
multiPolygon = new ol.geom.MultiPolygon(coordinatesArrayDim3, geometryLayout);
voidValue = multiPolygon.appendPolygon(polygon);
multiPolygon = multiPolygon.clone();
numberValue = multiPolygon.getArea();
coordinatesArrayDim3 = multiPolygon.getCoordinates();
coordinatesArrayDim3 = multiPolygon.getCoordinates(booleanValue);
multiPoint = multiPolygon.getInteriorPoints();
polygon = multiPolygon.getPolygon(numberValue);
polygonsArray = multiPolygon.getPolygons();
geometryType = multiPolygon.getType();
booleanValue = multiPolygon.intersectsExtent(extent);
voidValue = multiPolygon.setCoordinates(coordinatesArrayDim3);
voidValue = multiPolygon.setCoordinates(coordinatesArrayDim3, geometryLayout);

//
//
// ol.geom.Point
//
point = new ol.geom.Point(coordinate);
point = new ol.geom.Point(coordinate, geometryLayout);
point = point.clone();
coordinate = point.getCoordinates();
geometryType = point.getType();
booleanValue = point.intersectsExtent(extent);
voidValue = point.setCoordinates(coordinate);
voidValue = point.setCoordinates(coordinate, geometryLayout);

//
//
// ol.geom.Polygon
//
var localSphere: ol.Sphere;
var linearRingsArray: Array<ol.geom.LinearRing>;

polygon = new ol.geom.Polygon(coordinatesArrayDim2);
polygon = new ol.geom.Polygon(coordinatesArrayDim2, geometryLayout);
polygon = ol.geom.Polygon.circular(localSphere, coordinate, numberValue);
polygon = ol.geom.Polygon.circular(localSphere, coordinate, numberValue, numberValue);
polygon = ol.geom.Polygon.fromCircle(circle);
polygon = ol.geom.Polygon.fromCircle(circle, numberValue);
polygon = ol.geom.Polygon.fromCircle(circle, numberValue, numberValue);
polygon = ol.geom.Polygon.fromExtent(extent);
voidValue = polygon.appendLinearRing(linearRing);
polygon = polygon.clone();
numberValue = polygon.getArea();
coordinatesArrayDim2 = polygon.getCoordinates();
coordinatesArrayDim2 = polygon.getCoordinates(booleanValue);
point = polygon.getInteriorPoint();
linearRing = polygon.getLinearRing(numberValue);
numberValue = polygon.getLinearRingCount();
linearRingsArray = polygon.getLinearRings();
geometryType = polygon.getType();
booleanValue = polygon.intersectsExtent(extent);
voidValue = polygon.setCoordinates([[coordinate]]);
voidValue = polygon.setCoordinates([[coordinate]], geometryLayout);

//
//
// ol.geom.SimpleGeometry
//
simpleGeometry.applyTransform(transformFn);
coordinate = simpleGeometry.getFirstCoordinate();
coordinate = simpleGeometry.getLastCoordinate();
geometryLayout = simpleGeometry.getLayout();
voidValue = simpleGeometry.translate(numberValue, numberValue);

//
// ol.source
//
var featureCallback: (f: ol.Feature) => any;
vectorSource = new ol.source.Vector({
    attributions: [attribution],
    features: featureCollection,
    format: featureFormat,
    loader: featureLoader,
    logo: logoOptions,
    strategy: loadingStrategy,
    url: stringValue,
    useSpatialIndex: booleanValue,
    wrapX: booleanValue
});
vectorSource = new ol.source.Vector({
    features: featureArray
});
vectorSource = new ol.source.Vector({
    url: featureUrlFunction,
    loader: featureLoader
});
voidValue = vectorSource.addFeature(feature);
voidValue = vectorSource.addFeatures(featureArray);
voidValue = vectorSource.clear();
voidValue = vectorSource.clear(booleanValue);
anyValue = vectorSource.forEachFeature(featureCallback);
anyValue = vectorSource.forEachFeature(featureCallback, object);
anyValue = vectorSource.forEachFeatureInExtent(extent, featureCallback, object);
anyValue = vectorSource.forEachFeatureIntersectingExtent(extent, featureCallback, object);
feature = vectorSource.getClosestFeatureToCoordinate(coordinate);
extent = vectorSource.getExtent();
feature = vectorSource.getFeatureById(stringValue);
feature = vectorSource.getFeatureById(numberValue);
featureArray = vectorSource.getFeatures();
featureArray = vectorSource.getFeaturesAtCoordinate(coordinate);
featureCollection = vectorSource.getFeaturesCollection();
featureArray = vectorSource.getFeaturesInExtent(extent);
voidValue = vectorSource.removeFeature(feature);

//
// ol.Feature
//
feature = new ol.Feature();
feature = new ol.Feature(geometry);
feature = new ol.Feature({
    geometry: geometry,
    a: numberValue,
    b: stringValue,
    c: null,
    d: object
});
feature = feature.clone();
geometry = feature.getGeometry();
stringValue = feature.getGeometryName();
var featureGetId: string | number = feature.getId();
var featureGetStyle: ol.style.Style | Array<ol.style.Style> | ol.FeatureStyleFunction = feature.getStyle();
featureStyleFunction = feature.getStyleFunction();
voidValue = feature.setGeometry(geometry);
voidValue = feature.setGeometryName(stringValue);
voidValue = feature.setId(stringValue);
voidValue = feature.setId(numberValue);
voidValue = feature.setStyle(style);
voidValue = feature.setStyle(styleArray);
voidValue = feature.setStyle(featureStyleFunction);
voidValue = feature.setProperties(object);

//
// ol.View
//

var view: ol.View = new ol.View({
    center: [0, 0],
    zoom: numberValue,
});

//
// ol.layer.Tile
//
var tileLayer: ol.layer.Tile = new ol.layer.Tile({
    source: new ol.source.MapQuest({ layer: 'osm' })
});

//
// ol.Object
//
var olObject: ol.Object = new ol.Object({
    a: numberValue,
    b: stringValue,
    c: booleanValue,
    d: voidValue,
    e: object,
    f: fn
});
anyValue = olObject.get(stringValue);
stringArray = olObject.getKeys();
object = olObject.getProperties();
voidValue = olObject.set(stringValue, anyValue);
voidValue = olObject.set(stringValue, anyValue, booleanValue);
voidValue = olObject.setProperties(object, booleanValue);
voidValue = olObject.unset(stringValue, booleanValue);

//
// ol.Observable
//
ol.Observable.unByKey(eventKey);
var observable: ol.Observable = new ol.Observable();
voidValue = observable.changed();
voidOrBooleanValue = observable.dispatchEvent({type: stringValue});
voidOrBooleanValue = observable.dispatchEvent({type: stringValue, target: domEventTarget});
voidOrBooleanValue = observable.dispatchEvent({type: stringValue, target: eventTarget});
voidOrBooleanValue = observable.dispatchEvent({type: stringValue, a: numberValue, b: stringValue, c: booleanValue, d: null, e: {}});
voidOrBooleanValue = observable.dispatchEvent(olEvent);
voidOrBooleanValue = observable.dispatchEvent(stringValue);
numberValue = observable.getRevision();
eventKeyMixed = observable.on(stringValue, fn);
eventKeyMixed = observable.on([stringValue, stringValue], fn, {});
eventKeyMixed = observable.once(stringValue, fn);
eventKeyMixed = observable.once([stringValue, stringValue], fn, {});
voidValue = observable.un(stringValue, fn);
voidValue = observable.un([stringValue, stringValue], fn, {});
voidValue = observable.unByKey(eventKey);
voidValue = observable.unByKey(eventKeyArray);

//
// ol.proj
//
var getPointResolutionFn: (n: number, c: ol.Coordinate) => number;
projection = new ol.proj.Projection({
    code:stringValue,
});
stringValue = projection.getCode();
extent = projection.getExtent();
numberValue = projection.getMetersPerUnit();
numberValue = projection.getPointResolution(numberValue, coordinate);
units = projection.getUnits();
extent = projection.getWorldExtent();
booleanValue = projection.isGlobal();
voidValue = projection.setExtent(extent);
voidValue = projection.setGetPointResolution(getPointResolutionFn);
voidValue = projection.setGlobal(booleanValue);
voidValue = projection.setWorldExtent(extent);

//
// ol.Map
//

var map: ol.Map = new ol.Map({
    view: view,
    layers: [tileLayer],
    target: stringValue
});
voidValue = map.beforeRender(preRenderFunction);

//
// ol.source.ImageWMS
//
var imageWMS: ol.source.ImageWMS = new ol.source.ImageWMS({
    serverType: stringValue,
    url:stringValue
});

//
// ol.source.Source
//
const source = imageWMS as ol.source.Source;
projection = source.getProjection();

//
// ol.source.TileWMS
//
var tileWMS: ol.source.TileWMS = new ol.source.TileWMS({
    params: {},
    serverType: stringValue,
    url:stringValue
});

voidValue = tileWMS.updateParams(tileWMS.getParams());
stringValue = tileWMS.getGetFeatureInfoUrl([0, 0], 1, "EPSG:4326", {});

//
// ol.source.WMTS
//
var wmts: ol.source.WMTS = new ol.source.WMTS({
    tileGrid: new ol.tilegrid.WMTS({}),
    layer: "",
    style: "",
    matrixSet: "",
    wrapX: true
});

//
// ol.animation
//
var bounceOptions: olx.animation.BounceOptions;
bounceOptions.duration = numberValue;
bounceOptions.start = numberValue;
bounceOptions.resolution = numberValue;
bounceOptions.easing = easingFunction;
preRenderFunction = ol.animation.bounce(bounceOptions);

var panOptions: olx.animation.PanOptions;
panOptions.duration = numberValue;
panOptions.start = numberValue;
panOptions.source = coordinate;
panOptions.easing = easingFunction;
preRenderFunction = ol.animation.pan(panOptions);

var rotateOptions: olx.animation.RotateOptions;
rotateOptions.duration = numberValue;
rotateOptions.start = numberValue;
rotateOptions.anchor = coordinate;
rotateOptions.rotation = numberValue;
rotateOptions.easing = easingFunction;
preRenderFunction = ol.animation.rotate(rotateOptions);

var zoomOptions: olx.animation.ZoomOptions;
zoomOptions.duration = numberValue;
zoomOptions.start = numberValue;
zoomOptions.resolution = numberValue;
zoomOptions.easing = easingFunction;
preRenderFunction = ol.animation.zoom(zoomOptions);
voidValue = map.beforeRender(preRenderFunction);

//
// ol.coordinate
//
coordinate = ol.coordinate.add(coordinate, coordinate);
coordinateFormatType = ol.coordinate.createStringXY();
coordinateFormatType = ol.coordinate.createStringXY(numberValue);
stringValue = ol.coordinate.format(coordinate, stringValue);
stringValue = ol.coordinate.format(coordinate, stringValue, numberValue);
coordinate = ol.coordinate.rotate(coordinate, numberValue);
stringValue = ol.coordinate.toStringHDMS();
stringValue = ol.coordinate.toStringHDMS(coordinate);
stringValue = ol.coordinate.toStringXY();
stringValue = ol.coordinate.toStringXY(coordinate);
stringValue = ol.coordinate.toStringXY(coordinate, numberValue);

//
// ol.easing
//
easingFunction = ol.easing.easeIn;
easingFunction = ol.easing.easeOut;
easingFunction = ol.easing.inAndOut;
easingFunction = ol.easing.linear;
easingFunction = ol.easing.upAndDown;

//
// ol.Geolocation
//
var geolocation: ol.Geolocation = new ol.Geolocation({
    projection: projection
});
coordinate = geolocation.getPosition();

//
// ol.Graticule
//

graticule = new ol.Graticule();
graticule = new ol.Graticule({
    map: map,
});
var graticuleMap: ol.Map = graticule.getMap();
var graticuleMeridians: Array<ol.geom.LineString> = graticule.getMeridians();
var graticuleParallels: Array<ol.geom.LineString> = graticule.getParallels();
voidValue = graticule.setMap(graticuleMap);

//
// ol.DeviceOrientation
//

var deviceOrientation: ol.DeviceOrientation = new ol.DeviceOrientation({
    tracking: true,
});
numberValue = deviceOrientation.getHeading();

//
// ol.Overlay
//

var popup: ol.Overlay = new ol.Overlay({
    element: document.getElementById('popup')
});
voidValue = map.addOverlay(popup);
var popupElement: Element = popup.getElement();
var popupMap: ol.Map = popup.getMap();
var popupOffset: Array<number> = popup.getOffset();
coordinate = popup.getPosition();
var popupPositioning: ol.OverlayPositioning = popup.getPositioning();
voidValue = popup.setElement(popupElement);
voidValue = popup.setMap(popupMap);
voidValue = popup.setOffset(popupOffset);
voidValue = popup.setPosition(coordinate);
voidValue = popup.setPositioning(popupPositioning);


//
// ol.format.GeoJSON
//

var geojsonOptions: olx.format.GeoJSONOptions;
geojsonOptions.defaultDataProjection = "EPSG";
geojsonOptions.defaultDataProjection = projection;
geojsonOptions.geometryName = "geom";

var geojsonFormat: ol.format.GeoJSON;
geojsonFormat = new ol.format.GeoJSON();
geojsonFormat = new ol.format.GeoJSON(geojsonOptions);

// Test options
var readOptions: olx.format.ReadOptions;
readOptions.dataProjection = "EPSG";
readOptions.dataProjection = projection;
readOptions.featureProjection = "EPSG";
readOptions.featureProjection = projection;

var writeOptions: olx.format.WriteOptions;
writeOptions.dataProjection = "EPSG";
writeOptions.dataProjection = projection;
writeOptions.featureProjection = "EPSG";
writeOptions.featureProjection = projection;
writeOptions.rightHanded = false;

// Test functions
feature = geojsonFormat.readFeature("json");
feature = geojsonFormat.readFeature("json", readOptions);
featureArray = geojsonFormat.readFeatures("json");
featureArray = geojsonFormat.readFeatures("json", readOptions);
geometry = geojsonFormat.readGeometry("geometry");
geometry = geojsonFormat.readGeometry("geometry", readOptions);
stringValue = geojsonFormat.writeFeature(feature);
stringValue = geojsonFormat.writeFeature(feature, writeOptions);
stringValue = geojsonFormat.writeFeatures(featureArray);
stringValue = geojsonFormat.writeFeatures(featureArray, writeOptions);
stringValue = geojsonFormat.writeGeometry(geometry);
stringValue = geojsonFormat.writeGeometry(geometry, writeOptions);
jsonValue = geojsonFormat.writeFeatureObject(feature);
jsonValue = geojsonFormat.writeFeatureObject(feature, writeOptions);
jsonValue = geojsonFormat.writeFeaturesObject(featureArray);
jsonValue = geojsonFormat.writeFeaturesObject(featureArray, writeOptions);
jsonValue = geojsonFormat.writeGeometryObject(geometry);
jsonValue = geojsonFormat.writeGeometryObject(geometry, writeOptions);

//
// ol.interactions
//
var modify: ol.interaction.Modify = new ol.interaction.Modify({
    features: new ol.Collection<ol.Feature>(featureArray)
});

var draw: ol.interaction.Draw = new ol.interaction.Draw({
    type: "Point",
    clickTolerance: numberValue,
    features: new ol.Collection([]),
    source: vectorSource,
    snapTolerance: numberValue,
    maxPoints: numberValue,
    minPoints: numberValue,
    style: style,
    geometryFunction: drawGeometryFunction,
    geometryName: stringValue,
    condition: ol.events.condition.never,
    freehandCondition: ol.events.condition.never,
    wrapX: booleanValue
});
draw = new ol.interaction.Draw({
    type: "Point",
    style: styleArray
});
draw = new ol.interaction.Draw({
    type: "Point",
    style: styleFunction
});

var dragbox: ol.interaction.DragBox = new ol.interaction.DragBox({
    className: stringValue,
    condition: ol.events.condition.always,
    boxEndCondition: function (mapBrowserEvent: ol.MapBrowserEvent, startPixel: ol.Pixel, endPixel: ol.Pixel) {
        var width: number = endPixel[0] - startPixel[0];
        var height: number = endPixel[1] - startPixel[1];
        return booleanValue;
    }
});
polygon = dragbox.getGeometry();

var interaction: ol.interaction.Interaction = new ol.interaction.Interaction({
    handleEvent: function (e: ol.MapBrowserEvent) {
        return booleanValue;
    }
});
booleanValue = interaction.handleEvent(mapBrowserEvent);
booleanValue = interaction.getActive();
map = interaction.getMap();
voidValue = interaction.setActive(true);



const select: ol.interaction.Select = new ol.interaction.Select({
    layers: (layer: ol.layer.Layer) => true,
});

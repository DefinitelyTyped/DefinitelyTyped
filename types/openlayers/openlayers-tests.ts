// Basic type variables for test functions
let anyValue: any;
let voidValue: void;
let numberValue: number;
let booleanValue: boolean;
let stringValue: string;
let stringArray: Array<string>;
let jsonValue: JSON;
let voidOrBooleanValue: void | boolean;
let domEventTarget: EventTarget;
let fn: Function;
let object: Object;

// Callback predefinitions for OpenLayers
let preRenderFunction: ol.PreRenderFunction;
let transformFunction: ol.TransformFunction;
let coordinateFormatType: ol.CoordinateFormatType;
let featureStyleFunction: ol.FeatureStyleFunction;
let featureLoader: ol.FeatureLoader;
let easingFunction: (t: number) => number;
let drawGeometryFunction: ol.DrawGeometryFunctionType;
drawGeometryFunction([0, 0], new ol.geom.Point([0, 0]));
drawGeometryFunction([0, 0]);

// Type variables for OpenLayers
let attribution: ol.Attribution;
let boundingCoordinates: Array<ol.Coordinate>;
let circle: ol.geom.Circle;
let color: ol.Color;
let coordinate: ol.Coordinate;
let coordinatesArray: Array<ol.Coordinate>;
let coordinatesArrayDim2: Array<Array<ol.Coordinate>>;
let extent: ol.Extent;
let olEvent: ol.events.Event;
let eventKey: ol.EventsKey;
let eventKeyArray: Array<ol.EventsKey>;
let eventKeyMixed: ol.EventsKey | Array<ol.EventsKey>;
let eventTarget: ol.events.EventTarget;
let feature: ol.Feature;
let featureArray: Array<ol.Feature>;
let featureCollection: ol.Collection<ol.Feature>;
let featureFormat: ol.format.Feature;
let featureUrlFunction: ol.FeatureUrlFunction;
let graticule: ol.Graticule;
let geometriesArray: Array<ol.geom.Geometry>;
let geometry: ol.geom.Geometry;
let geometryCollection: ol.geom.GeometryCollection;
let geometryLayout: ol.geom.GeometryLayout;
let geometryType: ol.geom.GeometryType;
let linearRing: ol.geom.LinearRing;
let lineString: ol.geom.LineString;
let loadingStrategy: ol.LoadingStrategy;
let logoOptions: olx.LogoOptions;
let mapBrowserEvent: ol.MapBrowserEvent;
let multiLineString: ol.geom.MultiLineString;
let multiPoint: ol.geom.MultiPoint;
let multiPolygon: ol.geom.MultiPolygon;
let pixel: ol.Pixel;
let point: ol.geom.Point;
let polygon: ol.geom.Polygon;
let projection: ol.proj.Projection;
let projectionLike: ol.ProjectionLike;
let simpleGeometry: ol.geom.SimpleGeometry;
let size: ol.Size;
let style: ol.style.Style;
let styleArray: Array<ol.style.Style>;
let styleFunction: ol.StyleFunction;
let tilegrid: ol.tilegrid.TileGrid;
let transformFn: ol.TransformFunction;
let clusterSource: ol.source.Cluster;
let vectorSource: ol.source.Vector;
let units: ol.proj.Units;
let styleRegularShape: ol.style.RegularShape;

//
// ol.Attribution
//

attribution = new ol.Attribution({
    html: stringValue,
});

//
// ol.color
//
color = [255, 255, 255, 1.0];
color = ol.color.asArray(color);
color = ol.color.asArray(stringValue);
stringValue = ol.color.asString(color);
stringValue = ol.color.asString(stringValue);

//
// ol.extent
//
transformFunction = function (input: number[]) {
    let returnData: number[];
    return returnData;
};
transformFunction = function (input: number[], output: number[]) {
    let returnData: number[];
    return returnData;
};
transformFunction = function (input: number[], output: number[], dimension: number) {
    let returnData: number[];
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
circle = <ol.geom.Circle>circle.transform(projectionLike, projectionLike);

//
//
// ol.geom.Geometry
//
let geometryResult: ol.geom.Geometry;
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
let lineStringsArray: Array<ol.geom.LineString>;

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
let pointsArray: Array<ol.geom.Point>;

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
let coordinatesArrayDim3: Array<Array<Array<ol.Coordinate>>>;
let polygonsArray: Array<ol.geom.Polygon>;

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
let localSphere: ol.Sphere;
let linearRingsArray: Array<ol.geom.LinearRing>;

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
let featureCallback: (f: ol.Feature) => any;
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


clusterSource = new ol.source.Cluster({
    source: vectorSource
});

numberValue = clusterSource.getDistance();

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
let featureGetId: string | number = feature.getId();
let featureGetStyle: ol.style.Style | Array<ol.style.Style> | ol.FeatureStyleFunction | ol.StyleFunction = feature.getStyle();
featureStyleFunction = feature.getStyleFunction();
voidValue = feature.setGeometry(geometry);
voidValue = feature.setGeometryName(stringValue);
voidValue = feature.setId(stringValue);
voidValue = feature.setId(numberValue);
voidValue = feature.setStyle(style);
voidValue = feature.setStyle(styleArray);
voidValue = feature.setStyle(featureStyleFunction);
voidValue = feature.setStyle(styleFunction);
voidValue = feature.setProperties(object);

//
// ol.View
//

let view: ol.View;
view = new ol.View();
view = new ol.View({});
view = new ol.View({
    center: coordinate,
    constrainRotation: numberValue,
    enableRotation: booleanValue,
    extent: extent,
    maxResolution: numberValue,
    minResolution: numberValue,
    maxZoom: numberValue,
    minZoom: numberValue,
    projection: projectionLike,
    resolution: numberValue,
    resolutions: [numberValue, numberValue, numberValue, numberValue, numberValue],
    rotation: numberValue,
    zoom: numberValue,
    zoomFactor: numberValue,
});
view = new ol.View({
    constrainRotation: booleanValue,
});

voidValue = view.animate();
voidValue = view.animate({});
voidValue = view.animate({ zoom: view.getZoom() + 1 });
voidValue = view.animate({ zoom: 10 }, { center: [0, 0] });
voidValue = view.animate({
    center: coordinate,
    zoom: numberValue,
    resolution: numberValue,
    rotation: numberValue,
    anchor: coordinate,
    duration: numberValue,
    easing: easingFunction,
});
extent = view.calculateExtent();
extent = view.calculateExtent(size);
voidValue = view.cancelAnimations();
voidValue = view.centerOn(coordinate, size, pixel);
coordinate = view.constrainCenter();
coordinate = view.constrainCenter(coordinate);
numberValue = view.constrainResolution();
numberValue = view.constrainResolution(numberValue);
numberValue = view.constrainResolution(numberValue, numberValue);
numberValue = view.constrainResolution(numberValue, numberValue, numberValue);
numberValue = view.constrainRotation();
numberValue = view.constrainRotation(numberValue);
numberValue = view.constrainRotation(numberValue, numberValue);
voidValue = view.fit(simpleGeometry);
voidValue = view.fit(simpleGeometry, {});
voidValue = view.fit(extent);
voidValue = view.fit(extent, {});
voidValue = view.fit(extent, { callback: () => { } });
voidValue = view.fit(extent, { callback: (animationCompleted: boolean) => { } });
voidValue = view.fit(extent, {
    size: size,
    padding: [numberValue, numberValue, numberValue, numberValue],
    constrainResolution: booleanValue,
    nearest: booleanValue,
    minResolution: numberValue,
    maxZoom: numberValue,
    duration: numberValue,
    easing: easingFunction,
    callback: (animationCompleted: boolean) => { }
});
booleanValue = view.getAnimating();
coordinate = view.getCenter();
booleanValue = view.getInteracting();
numberValue = view.getMaxResolution();
numberValue = view.getMaxZoom();
numberValue = view.getMinResolution();
numberValue = view.getMinZoom();
projection = view.getProjection();
numberValue = view.getResolution();
numberValue = view.getResolutionForExtent(extent);
numberValue = view.getResolutionForExtent(extent, size);
numberValue = view.getResolutionForZoom(numberValue);
[numberValue, numberValue, numberValue, numberValue, numberValue] = view.getResolutions();
numberValue = view.getRotation();
numberValue = view.getZoom();
numberValue = view.getZoomForResolution(numberValue);
voidValue = view.rotate(numberValue);
voidValue = view.rotate(numberValue, coordinate);
voidValue = view.setCenter(coordinate);
voidValue = view.setMaxZoom(numberValue);
voidValue = view.setMinZoom(numberValue);
voidValue = view.setResolution();
voidValue = view.setResolution(numberValue);
voidValue = view.setRotation(numberValue);
voidValue = view.setZoom(numberValue);

//
// ol.layer.Base
//
let baseLayer: ol.layer.Base = new ol.layer.Base({
    zIndex: 1
});

//
// ol.layer.Group
//
let groupLayer: ol.layer.Group = new ol.layer.Group({
    zIndex: 2
});

//
// ol.layer.Heatmap
//
let heatmapLayer: ol.layer.Heatmap = new ol.layer.Heatmap({
    source: new ol.source.Vector(),
    weight: '',
    zIndex: 1
});

//
// ol.layer.Image
//
let imageLayer: ol.layer.Image = new ol.layer.Image({
    source: new ol.source.Image({
        projection: ''
    }),
    zIndex: 1
});

//
// ol.layer.Layer
//
let layerLayer: ol.layer.Layer = new ol.layer.Layer({
    zIndex: 2
});

//
// ol.layer.Tile
//
let tileLayer: ol.layer.Tile = new ol.layer.Tile({
    source: new ol.source.OSM(),
    zIndex: 0
});

//
// ol.layer.Vector
//
let vectorLayerRenderMode: olx.layer.VectorRenderType = 'image';
let vectorLayer: ol.layer.Vector = new ol.layer.Vector({
    renderMode: vectorLayerRenderMode,
    source: new ol.source.Vector(),
    zIndex: -1
});

//
// ol.layer.VectorTile
//
let vectorTileLayer: ol.layer.VectorTile = new ol.layer.VectorTile({
    renderOrder: () => 1,
    zIndex: 2
});


//
// ol.Object
//
let olObject: ol.Object = new ol.Object({
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
let observable: ol.Observable = new ol.Observable();
voidValue = observable.changed();
voidOrBooleanValue = observable.dispatchEvent({ type: stringValue });
voidOrBooleanValue = observable.dispatchEvent({ type: stringValue, target: domEventTarget });
voidOrBooleanValue = observable.dispatchEvent({ type: stringValue, target: eventTarget });
voidOrBooleanValue = observable.dispatchEvent({ type: stringValue, a: numberValue, b: stringValue, c: booleanValue, d: null, e: {} });
voidOrBooleanValue = observable.dispatchEvent(olEvent);
voidOrBooleanValue = observable.dispatchEvent(stringValue);
numberValue = observable.getRevision();
eventKeyMixed = observable.on(stringValue, fn);
eventKeyMixed = observable.on([stringValue, stringValue], fn, {});
eventKeyMixed = observable.once(stringValue, fn);
eventKeyMixed = observable.once([stringValue, stringValue], fn, {});
voidValue = observable.un(stringValue, fn);
voidValue = observable.un([stringValue, stringValue], fn, {});

//
// ol.proj
//
let getPointResolutionFn: (n: number, c: ol.Coordinate) => number;
projection = new ol.proj.Projection({
    code: stringValue,
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

let map: ol.Map = new ol.Map({
    view: view,
    layers: [tileLayer],
    target: stringValue,
    moveTolerance: numberValue
});

//
// ol.source.ImageWMS
//
let imageWMS: ol.source.ImageWMS = new ol.source.ImageWMS({
    params: {},
    projection: projection,
    serverType: stringValue,
    url: stringValue
});

//
// ol.source.Source
//
const source = imageWMS as ol.source.Source;
projection = source.getProjection();

//
// ol.source.TileWMS
//
let tileWMS: ol.source.TileWMS = new ol.source.TileWMS({
    params: {},
    projection: projection,
    serverType: stringValue,
    url: stringValue
});

//test without projection
tileWMS = new ol.source.TileWMS({
    params: {},
    serverType: stringValue,
    url: stringValue
});
voidValue = tileWMS.updateParams(tileWMS.getParams());
stringValue = tileWMS.getGetFeatureInfoUrl([0, 0], 1, "EPSG:4326", {});

//
// ol.source.WMTS
//
let wmts: ol.source.WMTS = new ol.source.WMTS({
    layer: "",
    projection: projection,
    matrixSet: "",
    style: "",
    tileGrid: new ol.tilegrid.WMTS({
        matrixIds: [],
        resolutions: [],
    }),
    wrapX: true,
});

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
stringValue = ol.coordinate.toStringHDMS(coordinate, numberValue);
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
let geolocation: ol.Geolocation = new ol.Geolocation({
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
let graticuleMap: ol.Map = graticule.getMap();
let graticuleMeridians: Array<ol.geom.LineString> = graticule.getMeridians();
let graticuleParallels: Array<ol.geom.LineString> = graticule.getParallels();
voidValue = graticule.setMap(graticuleMap);

//
// ol.DeviceOrientation
//

let deviceOrientation: ol.DeviceOrientation = new ol.DeviceOrientation({
    tracking: true,
});
numberValue = deviceOrientation.getHeading();

//
// ol.Overlay
//

let popup: ol.Overlay = new ol.Overlay({
    element: document.getElementById('popup')
});
voidValue = map.addOverlay(popup);
let popupElement: Element = popup.getElement();
let popupMap: ol.Map = popup.getMap();
let popupOffset: Array<number> = popup.getOffset();
coordinate = popup.getPosition();
let popupPositioning: ol.OverlayPositioning = popup.getPositioning();
voidValue = popup.setElement(popupElement);
voidValue = popup.setMap(popupMap);
voidValue = popup.setOffset(popupOffset);
voidValue = popup.setPosition(coordinate);
voidValue = popup.setPosition(undefined);
voidValue = popup.setPositioning(popupPositioning);


//
// ol.format.GeoJSON
//

let geojsonOptions: olx.format.GeoJSONOptions;
geojsonOptions.defaultDataProjection = "EPSG";
geojsonOptions.defaultDataProjection = projection;
geojsonOptions.geometryName = "geom";

let geojsonFormat: ol.format.GeoJSON;
geojsonFormat = new ol.format.GeoJSON();
geojsonFormat = new ol.format.GeoJSON(geojsonOptions);

// Test options
let readOptions: olx.format.ReadOptions;
readOptions.dataProjection = "EPSG";
readOptions.dataProjection = projection;
readOptions.featureProjection = "EPSG";
readOptions.featureProjection = projection;

let writeOptions: olx.format.WriteOptions;
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
// ol.format.filter
//

let bboxFilter: ol.format.filter.Bbox;
bboxFilter = new ol.format.filter.Bbox("geometry", extent);
bboxFilter = new ol.format.filter.Bbox("geometry", extent, "srs");
bboxFilter = ol.format.filter.bbox("geometry", extent);
bboxFilter = ol.format.filter.bbox("geometry", extent, "srs");

let equalToFilter: ol.format.filter.EqualTo;
equalToFilter = new ol.format.filter.EqualTo("property", "abc");
equalToFilter = new ol.format.filter.EqualTo("property", "abc", true);
equalToFilter = new ol.format.filter.EqualTo("property", 123);
equalToFilter = new ol.format.filter.EqualTo("property", 123, true);
equalToFilter = ol.format.filter.equalTo("property", "abc");
equalToFilter = ol.format.filter.equalTo("property", "abc", true);
equalToFilter = ol.format.filter.equalTo("property", 123);
equalToFilter = ol.format.filter.equalTo("property", 123, true);

let greaterThanFilter: ol.format.filter.GreaterThan;
greaterThanFilter = new ol.format.filter.GreaterThan("property", 123);
greaterThanFilter = ol.format.filter.greaterThan("property", 123);

let greaterThanEqualToFilter: ol.format.filter.GreaterThanOrEqualTo;
greaterThanEqualToFilter = new ol.format.filter.GreaterThanOrEqualTo("property", 123);
greaterThanEqualToFilter = ol.format.filter.greaterThanOrEqualTo("property", 123);

let lessThanFilter: ol.format.filter.LessThan;
lessThanFilter = new ol.format.filter.LessThan("property", 123);
lessThanFilter = ol.format.filter.lessThan("property", 123);

let lessThanEqualToFilter: ol.format.filter.LessThanOrEqualTo;
lessThanEqualToFilter = new ol.format.filter.LessThanOrEqualTo("property", 123);
lessThanEqualToFilter = ol.format.filter.lessThanOrEqualTo("property", 123);

let notEqualToFilter: ol.format.filter.NotEqualTo;
notEqualToFilter = new ol.format.filter.NotEqualTo("property", "abc");
notEqualToFilter = new ol.format.filter.NotEqualTo("property", "abc", true);
notEqualToFilter = new ol.format.filter.NotEqualTo("property", 123);
notEqualToFilter = new ol.format.filter.NotEqualTo("property", 123, true);
notEqualToFilter = ol.format.filter.notEqualTo("property", "abc");
notEqualToFilter = ol.format.filter.notEqualTo("property", "abc", true);
notEqualToFilter = ol.format.filter.notEqualTo("property", 123);
notEqualToFilter = ol.format.filter.notEqualTo("property", 123, true);

let duringFilter: ol.format.filter.During;
duringFilter = new ol.format.filter.During("property", "2017-01-01T12:00Z", "2017-01-01T14:00Z");
duringFilter = ol.format.filter.during("property", "2017-01-01T12:00Z", "2017-01-01T14:00Z");

let isBetweenFilter: ol.format.filter.IsBetween;
isBetweenFilter = new ol.format.filter.IsBetween("property", 1, 10);
isBetweenFilter = ol.format.filter.between("property", 1, 10);

let isLikeFilter: ol.format.filter.IsLike;
isLikeFilter = new ol.format.filter.IsLike("property", "pattern");
isLikeFilter = new ol.format.filter.IsLike("property", "pattern", "wildcard");
isLikeFilter = new ol.format.filter.IsLike("property", "pattern", "wildcard", "s");
isLikeFilter = new ol.format.filter.IsLike("property", "pattern", "wildcard", "s", "e");
isLikeFilter = new ol.format.filter.IsLike("property", "pattern", "wildcard", "s", "e", true);
isLikeFilter = ol.format.filter.like("property", "pattern");
isLikeFilter = ol.format.filter.like("property", "pattern", "wildcard");
isLikeFilter = ol.format.filter.like("property", "pattern", "wildcard", "s");
isLikeFilter = ol.format.filter.like("property", "pattern", "wildcard", "s", "e");
isLikeFilter = ol.format.filter.like("property", "pattern", "wildcard", "s", "e", true);

let isNullFilter: ol.format.filter.IsNull;
isNullFilter = new ol.format.filter.IsNull("property");
isNullFilter = ol.format.filter.isNull("property");

let andFilter: ol.format.filter.And;
andFilter = new ol.format.filter.And(isNullFilter, duringFilter);
andFilter = ol.format.filter.and(isNullFilter, duringFilter);

let orFilter: ol.format.filter.Or;
orFilter = new ol.format.filter.Or(isNullFilter, duringFilter);
orFilter = ol.format.filter.or(isNullFilter, duringFilter);

let notFilter: ol.format.filter.Not;
notFilter = new ol.format.filter.Not(isBetweenFilter);
notFilter = ol.format.filter.not(isBetweenFilter);

let intersectsFilter: ol.format.filter.Intersects;
intersectsFilter = new ol.format.filter.Intersects("geometry", geometry);
intersectsFilter = new ol.format.filter.Intersects("geometry", geometry, "srs");
intersectsFilter = ol.format.filter.intersects("geometry", geometry);
intersectsFilter = ol.format.filter.intersects("geometry", geometry, "srs");

let withinFilter: ol.format.filter.Within;
withinFilter = new ol.format.filter.Within("geometry", geometry);
withinFilter = new ol.format.filter.Within("geometry", geometry, "srs");
withinFilter = ol.format.filter.within("geometry", geometry);
withinFilter = ol.format.filter.within("geometry", geometry, "srs");

//
// ol.interactions
//
let modifyFeature: ol.interaction.Modify = new ol.interaction.Modify({
    insertVertexCondition: ol.events.condition.never,
    features: new ol.Collection<ol.Feature>(featureArray),
});
let modifySource: ol.interaction.Modify = new ol.interaction.Modify({
    insertVertexCondition: ol.events.condition.never,
    source: new ol.source.Vector({
        features: new ol.Collection<ol.Feature>(featureArray),
    }),
});

let draw: ol.interaction.Draw = new ol.interaction.Draw({
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
let styleFunctionAsStyle = function (feature: ol.Feature, resolution: number): ol.style.Style { return style; }
draw = new ol.interaction.Draw({
    type: "Point",
    style: styleFunctionAsStyle
});
ol.interaction.Draw.createBox();
ol.interaction.Draw.createRegularPolygon();
ol.interaction.Draw.createRegularPolygon(4);
ol.interaction.Draw.createRegularPolygon(4, 0);

ol.interaction.defaults({
    constrainResolution: booleanValue
});


let styleFunctionAsArray = function (feature: ol.Feature, resolution: number): ol.style.Style[] { return styleArray; }
draw = new ol.interaction.Draw({
    type: "Point",
    style: styleFunctionAsArray
});

let dragbox: ol.interaction.DragBox = new ol.interaction.DragBox({
    className: stringValue,
    minArea: 10,
    condition: ol.events.condition.always,
    boxEndCondition: function (mapBrowserEvent: ol.MapBrowserEvent, startPixel: ol.Pixel, endPixel: ol.Pixel) {
        let width: number = endPixel[0] - startPixel[0];
        let height: number = endPixel[1] - startPixel[1];
        return booleanValue;
    }
});
polygon = dragbox.getGeometry();

let interaction: ol.interaction.Interaction = new ol.interaction.Interaction({
    handleEvent: function (e: ol.MapBrowserEvent) {
        return booleanValue;
    }
});
booleanValue = interaction.getActive();
map = interaction.getMap();
voidValue = interaction.setActive(true);



const select: ol.interaction.Select = new ol.interaction.Select({
    layers: (layer: ol.layer.Layer) => true,
});

let pinchZoom: ol.interaction.PinchZoom = new ol.interaction.PinchZoom({
    constrainResolution: booleanValue,
    duration: numberValue
});

let mouseWheelZoom: ol.interaction.MouseWheelZoom = new ol.interaction.MouseWheelZoom({
    constrainResolution: booleanValue,
    duration: numberValue,
    timeout: numberValue,
    useAnchor: booleanValue
});
//
// ol.style.RegularShape
//

styleRegularShape = new ol.style.RegularShape({
    fill: new ol.style.Fill({ color: 'red' }),
    points: 4,
});

//
// ol.proj
//

let value = ol.proj.METERS_PER_UNIT['degrees'];

numberValue = ol.Sphere.getArea(geometry, {
    projection: projection,
    radius: numberValue,
});

numberValue = ol.Sphere.getLength(geometry, {
    projection: projection,
    radius: numberValue,
});

/**
 * preset.ts
 */

declare const map: AMap.Map;

/**
 * ranging-tool.ts
 */

const rangingOpt: AMap.RangingTool.Options = {};
const rangingTool = new AMap.RangingTool(map);

// $ExpectType RangingTool
new AMap.RangingTool(map);
// $ExpectType RangingTool
new AMap.RangingTool(map, rangingOpt);

// $ExpectType void
rangingTool.turnOn();
// $ExpectType void
rangingTool.turnOff(true);

rangingTool.on('addnode', (event: AMap.RangingTool.AddNodeEvent) => {
    // $ExpectType "addnode"
    event.type;
    // $ExpectType Marker<any>
    event.marker;
    // $ExpectType LngLat
    event.position;
});

rangingTool.on('removenode', (event: AMap.RangingTool.RemoveNodeEvent) => {
    // $ExpectType "removenode"
    event.type;
    // $ExpectType object
    event.target;
    // $ExpectType Polyline<any>
    event.polyline;
    // $ExpectType LngLat[]
    event.points;
    // $ExpectType number
    event.distance;
});

rangingTool.on('end', (event: AMap.RangingTool.EndEvent) => {
    // $ExpectType "end"
    event.type;
    // $ExpectType object
    event.target;
    // $ExpectType Polyline<any>
    event.polyline;
    // $ExpectType LngLat[]
    event.points;
    // $ExpectType number
    event.distance;
});

/**
 * mouse-tool.ts
 */

const mouseTool = new AMap.MouseTool(map);

// $ExpectType MouseTool
new AMap.MouseTool(map);

// $ExpectType void
mouseTool.marker();
// $ExpectType void
mouseTool.marker({
    icon: new AMap.Icon({
        image: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        size: new AMap.Size(19, 31),
        imageSize: new AMap.Size(19, 31),
    }),
    offset: new AMap.Pixel(-9, -31),
});
// $ExpectType void
mouseTool.circle();
// $ExpectType void
mouseTool.circle({
    strokeColor: '#F33',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: '#ee2200',
    fillOpacity: 0.35,
});
// $ExpectType void
mouseTool.rectangle();
// $ExpectType void
mouseTool.rectangle({
    fillColor: '#ee2200',
    fillOpacity: 0.35,
});
// $ExpectType void
mouseTool.polyline();
// $ExpectType void
mouseTool.polyline({
    isOutline: true,
    outlineColor: '#ee2200',
});
// $ExpectType void
mouseTool.polygon();
// $ExpectType void
mouseTool.polygon({
    fillColor: '#ee2200',
    fillOpacity: 0.35,
});
// $ExpectType void
mouseTool.measureArea();
// $ExpectType void
mouseTool.measureArea({
    fillColor: '#ee2200',
    fillOpacity: 0.35,
});
// $ExpectType void
mouseTool.rule();
// $ExpectType void
mouseTool.rule({
    isOutline: true,
    outlineColor: '#ee2200',
});
// $ExpectType void
mouseTool.rectZoomIn();
// $ExpectType void
mouseTool.rectZoomIn({
    fillColor: '#ee2200',
    fillOpacity: 0.35,
});
// $ExpectType void
mouseTool.rectZoomOut();
// $ExpectType void
mouseTool.rectZoomOut({
    fillColor: '#ee2200',
    fillOpacity: 0.35,
});
// $ExpectType void
mouseTool.close();

mouseTool.on('draw', (event: AMap.MouseTool.DrawEvent) => {
    // $ExpectType "draw"
    event.type;
});

/**
 * polygon-editor.ts
 */

const polygonOpt: AMap.PolygonEditor.Options = {};
const polygonEditor = new AMap.PolygonEditor(map, new AMap.Polygon(), polygonOpt);

// $ExpectType void
polygonEditor.open();
// $ExpectType void
polygonEditor.setTarget({}, new AMap.Polygon());
// $ExpectType Polygon<any>
polygonEditor.getTarget();
// $ExpectType void
polygonEditor.setAdsorbPolygons([]);
// $ExpectType void
polygonEditor.clearAdsorbPolygons();
// $ExpectType void
polygonEditor.addAdsorbPolygons([]);
// $ExpectType void
polygonEditor.removeAdsorbPolygons([]);
// $ExpectType void
polygonEditor.close();

polygonEditor.on('addnode', (event: AMap.PolygonEditor.EventMap['addnode']) => {
    // $ExpectType "addnode"
    event.type;
    // $ExpectType Polygon<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

polygonEditor.on('removenode', (event: AMap.PolygonEditor.EventMap['removenode']) => {
    // $ExpectType "removenode"
    event.type;
    // $ExpectType Polygon<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

polygonEditor.on('adjust', (event: AMap.PolygonEditor.EventMap['adjust']) => {
    // $ExpectType "adjust"
    event.type;
    // $ExpectType Polygon<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

polygonEditor.on('end', (event: AMap.PolygonEditor.EventMap['end']) => {
    // $ExpectType "end"
    event.type;
    // $ExpectType Polygon<any>
    event.target;
});

polygonEditor.on('add', (event: AMap.PolygonEditor.EventMap['add']) => {
    // $ExpectType "add"
    event.type;
    // $ExpectType Polygon<any>
    event.target;
});

/**
 * polyline-editor.ts
 */

const polylineEditorOpt: AMap.PolylineEditor.Options = {};
const polyline: AMap.Polyline = new AMap.Polyline();
const polylineEditor = new AMap.PolylineEditor(map);

// $ExpectType PolylineEditor
new AMap.PolylineEditor(map);
// $ExpectType PolylineEditor
new AMap.PolylineEditor(map, polyline, polylineEditorOpt);

// $ExpectType void
polylineEditor.open();
// $ExpectType void
polylineEditor.close();
// $ExpectType void
polylineEditor.setTarget(polyline);
// $ExpectType Polyline<any> | undefined
polylineEditor.getTarget();

polylineEditor.on('addnode', (event: AMap.PolylineEditor.EventMap['addnode']) => {
    // $ExpectType "addnode"
    event.type;
    // $ExpectType Polyline<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

polylineEditor.on('removenode', (event: AMap.PolylineEditor.EventMap['removenode']) => {
    // $ExpectType "removenode"
    event.type;
    // $ExpectType Polyline<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

polylineEditor.on('adjust', (event: AMap.PolylineEditor.EventMap['adjust']) => {
    // $ExpectType "adjust"
    event.type;
    // $ExpectType Polyline<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

polylineEditor.on('end', (event: AMap.PolylineEditor.EventMap['end']) => {
    // $ExpectType "end"
    event.type;
    // $ExpectType Polyline<any>
    event.target;
});

polylineEditor.on('add', (event: AMap.PolylineEditor.EventMap['add']) => {
    // $ExpectType "add"
    event.type;
    // $ExpectType Polyline<any>
    event.target;
});

/**
 * circle-editor.ts
 */

const circleEditorOpt: AMap.CircleEditor.Options = {};
const circle: AMap.Circle = new AMap.Circle();
const circleEditor = new AMap.CircleEditor(map);

// $ExpectType CircleEditor
new AMap.CircleEditor(map);
// $ExpectType CircleEditor
new AMap.CircleEditor(map, circle, circleEditorOpt);

// $ExpectType void
circleEditor.open();
// $ExpectType void
circleEditor.close();
// $ExpectType void
circleEditor.setTarget(circle);
// $ExpectType Circle<any> | undefined
circleEditor.getTarget();

circleEditor.on('addnode', (event: AMap.CircleEditor.EventMap['addnode']) => {
    // $ExpectType "addnode"
    event.type;
    // $ExpectType Circle<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

circleEditor.on('adjust', (event: AMap.CircleEditor.EventMap['adjust']) => {
    // $ExpectType "adjust"
    event.type;
    // $ExpectType Circle<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

circleEditor.on('move', (event: AMap.CircleEditor.EventMap['move']) => {
    // $ExpectType "move"
    event.type;
    // $ExpectType Circle<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

circleEditor.on('end', (event: AMap.CircleEditor.EventMap['end']) => {
    // $ExpectType "end"
    event.type;
    // $ExpectType Circle<any>
    event.target;
});

circleEditor.on('add', (event: AMap.CircleEditor.EventMap['add']) => {
    // $ExpectType "add"
    event.type;
    // $ExpectType Circle<any>
    event.target;
});

/**
 * bezier-curve-editor.ts
 * @see https://lbs.amap.com/api/jsapi-v2/documentation#beziercurveeditor
 */

const bezierCurveEditorOpt: AMap.BezierCurveEditor.Options = {};
const bezierCurve: AMap.BezierCurve = new AMap.BezierCurve({
    path: [],
});
const bezierCurveEditor = new AMap.BezierCurveEditor(map, bezierCurve);

// $ExpectType BezierCurveEditor
new AMap.BezierCurveEditor(map, bezierCurve);
// $ExpectType BezierCurveEditor
new AMap.BezierCurveEditor(map, bezierCurve, bezierCurveEditorOpt);

// $ExpectType void
bezierCurveEditor.open();
// $ExpectType void
bezierCurveEditor.close();
// $ExpectType void
bezierCurveEditor.setTarget({}, bezierCurve);
// $ExpectType BezierCurve<any> | undefined
bezierCurveEditor.getTarget();

bezierCurveEditor.on('addnode', (event: AMap.BezierCurveEditor.EventMap['addnode']) => {
    // $ExpectType "addnode"
    event.type;
    // $ExpectType BezierCurve<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

bezierCurveEditor.on('removenode', (event: AMap.BezierCurveEditor.EventMap['removenode']) => {
    // $ExpectType "removenode"
    event.type;
    // $ExpectType BezierCurve<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

bezierCurveEditor.on('adjust', (event: AMap.BezierCurveEditor.EventMap['adjust']) => {
    // $ExpectType "adjust"
    event.type;
    // $ExpectType BezierCurve<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

bezierCurveEditor.on('end', (event: AMap.BezierCurveEditor.EventMap['end']) => {
    // $ExpectType "end"
    event.type;
    // $ExpectType BezierCurve<any>
    event.target;
});

bezierCurveEditor.on('add', (event: AMap.BezierCurveEditor.EventMap['add']) => {
    // $ExpectType "add"
    event.type;
    // $ExpectType BezierCurve<any>
    event.target;
});


/**
 * ellipse-editor.ts
 * @see https://lbs.amap.com/api/jsapi-v2/documentation#ellipseeditor
 */

const ellipseEditorOpt: AMap.EllipseEditor.Options = {};
const ellipse: AMap.Ellipse = new AMap.Ellipse();
const ellipseEditor = new AMap.EllipseEditor(map, ellipse);

// $ExpectType EllipseEditor
new AMap.EllipseEditor(map, ellipse);
// $ExpectType EllipseEditor
new AMap.EllipseEditor(map, ellipse, ellipseEditorOpt);

// $ExpectType void
ellipseEditor.open();
// $ExpectType void
ellipseEditor.close();
// $ExpectType void
ellipseEditor.setTarget({}, ellipse);
// $ExpectType Ellipse<any> | undefined
ellipseEditor.getTarget();

ellipseEditor.on('addnode', (event: AMap.EllipseEditor.EventMap['addnode']) => {
    // $ExpectType "addnode"
    event.type;
    // $ExpectType Ellipse<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

ellipseEditor.on('adjust', (event: AMap.EllipseEditor.EventMap['adjust']) => {
    // $ExpectType "adjust"
    event.type;
    // $ExpectType Ellipse<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

ellipseEditor.on('move', (event: AMap.EllipseEditor.EventMap['move']) => {
    // $ExpectType "move"
    event.type;
    // $ExpectType Ellipse<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

ellipseEditor.on('end', (event: AMap.EllipseEditor.EventMap['end']) => {
    // $ExpectType "end"
    event.type;
    // $ExpectType Ellipse<any>
    event.target;
});

ellipseEditor.on('add', (event: AMap.EllipseEditor.EventMap['add']) => {
    // $ExpectType "add"
    event.type;
    // $ExpectType Ellipse<any>
    event.target;
});

/**
 * rectangle-editor.ts
 * @see https://lbs.amap.com/api/jsapi-v2/documentation#rectangleeditor
 */

const rectangleEditorOpt: AMap.RectangleEditor.Options = {};
const rectangle: AMap.Rectangle = new AMap.Rectangle();
const rectangleEditor = new AMap.RectangleEditor(map, rectangle);

// $ExpectType RectangleEditor
new AMap.RectangleEditor(map, rectangle);
// $ExpectType RectangleEditor
new AMap.RectangleEditor(map, rectangle, rectangleEditorOpt);

// $ExpectType void
rectangleEditor.open();
// $ExpectType void
rectangleEditor.close();
// $ExpectType void
rectangleEditor.setTarget({}, rectangle);
// $ExpectType Rectangle<any> | undefined
rectangleEditor.getTarget();

rectangleEditor.on('addnode', (event: AMap.RectangleEditor.EventMap['addnode']) => {
    // $ExpectType "addnode"
    event.type;
    // $ExpectType Rectangle<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

rectangleEditor.on('adjust', (event: AMap.RectangleEditor.EventMap['adjust']) => {
    // $ExpectType "adjust"
    event.type;
    // $ExpectType Rectangle<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

rectangleEditor.on('move', (event: AMap.RectangleEditor.EventMap['move']) => {
    // $ExpectType "move"
    event.type;
    // $ExpectType Rectangle<any>
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

rectangleEditor.on('end', (event: AMap.RectangleEditor.EventMap['end']) => {
    // $ExpectType "end"
    event.type;
    // $ExpectType Rectangle<any>
    event.target;
});

rectangleEditor.on('add', (event: AMap.RectangleEditor.EventMap['add']) => {
    // $ExpectType "add"
    event.type;
    // $ExpectType Rectangle<any>
    event.target;
});
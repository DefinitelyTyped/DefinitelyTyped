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
    // $ExpectType Marker
    event.marker;
    // $ExpectType LngLat
    event.position;
});

rangingTool.on('removenode', (event: AMap.RangingTool.RemoveNodeEvent) => {
    // $ExpectType "removenode"
    event.type;
    // $ExpectType object
    event.target;
    // $ExpectType Polyline
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
    // $ExpectType Polyline
    event.polyline;
    // $ExpectType LngLat[]
    event.points;
    // $ExpectType number
    event.distance;
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
// $ExpectType Polyline | undefined
polylineEditor.getTarget();

polylineEditor.on('addnode', (event: AMap.PolylineEditor.EventMap['addnode']) => {
    // $ExpectType "addnode"
    event.type;
    // $ExpectType Polyline
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

polylineEditor.on('removenode', (event: AMap.PolylineEditor.EventMap['removenode']) => {
    // $ExpectType "removenode"
    event.type;
    // $ExpectType Polyline
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

polylineEditor.on('adjust', (event: AMap.PolylineEditor.EventMap['adjust']) => {
    // $ExpectType "adjust"
    event.type;
    // $ExpectType Polyline
    event.target;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Pixel
    event.pixel;
});

polylineEditor.on('end', (event: AMap.PolylineEditor.EventMap['end']) => {
    // $ExpectType "end"
    event.type;
    // $ExpectType Polyline
    event.target;
});

polylineEditor.on('add', (event: AMap.PolylineEditor.EventMap['add']) => {
    // $ExpectType "add"
    event.type;
    // $ExpectType Polyline
    event.target;
});

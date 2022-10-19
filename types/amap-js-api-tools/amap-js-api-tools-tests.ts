/**
 * preset.ts
 */

declare const map: AMap.Map;

/**
 * ranging-tool.ts
 */

const rangingOpt: AMap.RangingTool.Options = {}
const rangingTool = new AMap.RangingTool(map);

// $ExpectType RangingTool
new AMap.RangingTool(map);
// $ExpectType RangingTool
new AMap.RangingTool(map, rangingOpt);


// $ExpectType void
rangingTool.turnOn();
// $ExpectType void
rangingTool.turnOff(true);

rangingTool.on("addnode", (event: AMap.RangingTool.AddNodeEvent) => {
    // $ExpectType "addnode"
    event.type;
    // $ExpectType Marker
    event.marker;
    // $ExpectType LngLat
    event.position;
})

rangingTool.on("removenode", (event: AMap.RangingTool.RemoveNodeEvent) => {
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
})

rangingTool.on("end", (event: AMap.RangingTool.EndEvent) => {
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
})

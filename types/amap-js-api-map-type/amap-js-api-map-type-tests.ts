declare const map: AMap.Map;

// $ExpectType MapType
new AMap.MapType();
// $ExpectType MapType
new AMap.MapType({});
// $ExpectType MapType
const mapType = new AMap.MapType({
    defaultType: 1,
    showTraffic: true,
    showRoad: true
});

// @ts-expect-error
new AMap.MapType({ defaultType: 2 });

// $ExpectType void
mapType.show();

// $ExpectType void
mapType.hide();

mapType.on('show', (event: AMap.MapType.EventMap['show']) => {
    // $ExpectType "show"
    event.type;
});
mapType.on('hide', (event: AMap.MapType.EventMap['hide']) => {
    // $ExpectType "hide"
    event.type;
});

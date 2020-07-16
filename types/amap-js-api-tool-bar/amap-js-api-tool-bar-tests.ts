declare const map: AMap.Map;
declare const pixel: AMap.Pixel;
declare const marker: AMap.Marker;
// $ExpectType ToolBar
new AMap.ToolBar();
// $ExpectType ToolBar
new AMap.ToolBar({});
// $ExpectType ToolBar
const toolBar = new AMap.ToolBar({
    offset: pixel,
    position: 'LT',
    ruler: true,
    noIpLocate: true,
    locate: true,
    liteStyle: false,
    direction: true,
    autoPosition: true,
    locationMarker: marker,
    useNative: false
});

map.addControl(toolBar);
map.removeControl(toolBar);

// $ExpectType Pixel
toolBar.getOffset();

// $ExpectType void
toolBar.setOffset(pixel);

// $ExpectType void
toolBar.hideRuler();

// $ExpectType void
toolBar.showRuler();

// $ExpectType void
toolBar.hideDirection();

// $ExpectType void
toolBar.showDirection();

// $ExpectType void
toolBar.hideLocation();

// $ExpectType void
toolBar.showLocation();

// $ExpectType void
toolBar.doLocation();

// $ExpectType LngLat | null | undefined
toolBar.getLocation();

// $ExpectType void
toolBar.hide();

// $ExpectType void
toolBar.show();

toolBar.on('show', (event: AMap.ToolBar.EventMap['show']) => {
    // $ExpectType "show"
    event.type;
});

toolBar.on('hide', (event: AMap.ToolBar.EventMap['hide']) => {
    // $ExpectType "hide"
    event.type;
});

toolBar.on('location', (event: AMap.ToolBar.EventMap['location']) => {
    // $ExpectType "location"
    event.type;
    // $ExpectType LngLat
    event.lnglat;
});

toolBar.on('zoomchanged', (event: AMap.ToolBar.EventMap['zoomchanged']) => {
    const type: 'zoomin' | 'zoomout' = event.type;
});

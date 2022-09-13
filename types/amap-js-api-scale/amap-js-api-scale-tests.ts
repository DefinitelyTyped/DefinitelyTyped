declare const map: AMap.Map;
declare const pixel: AMap.Pixel;

// $ExpectType Scale
new AMap.Scale();
// $ExpectType Scale
new AMap.Scale({});
// $ExpectType Scale
const scale = new AMap.Scale({
    position: 'LT',
    visible: true,
    offset: pixel
});

// $ExpectType Pixel
scale.offset;

// $ExpectType boolean
scale.visible;

// $ExpectType Position
scale.position;

// $ExpectType void
scale.show();

// $ExpectType void
scale.hide();

scale.on('show', (event: AMap.Scale.EventMap['show']) => {
    // $ExpectType "show"
    event.type;
});

scale.on('hide', (event: AMap.Scale.EventMap['hide']) => {
    // $ExpectType "hide"
    event.type;
});

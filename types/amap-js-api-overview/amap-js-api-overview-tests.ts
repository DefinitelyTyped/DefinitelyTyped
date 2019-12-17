declare const map: AMap.Map;

declare const tileLayer: AMap.TileLayer;

// $ExpectType OverView<TileLayer>
new AMap.OverView();
// $ExpectType OverView<TileLayer>
new AMap.OverView({});
// $ExpectType OverView<TileLayer>
const overview = new AMap.OverView({
    tileLayer,
    isOpen: true,
    visible: true
});

// $ExpectType void
overview.show();

// $ExpectType void
overview.hide();

// $ExpectType void
overview.open();

// $ExpectType void
overview.close();

// $ExpectType void
overview.setTileLayer(tileLayer);

// $ExpectType TileLayer
overview.getTileLayer();

overview.on('show', (event: AMap.OverView.EventMap['show']) => {
    // $ExpectType "show"
    event.type;
});

overview.on('hide', (event: AMap.OverView.EventMap['hide']) => {
    // $ExpectType "hide"
    event.type;
});

overview.on('open', (event: AMap.OverView.EventMap['open']) => {
    // $ExpectType "open"
    event.type;
});

overview.on('close', (event: AMap.OverView.EventMap['close']) => {
    // $ExpectType "close"
    event.type;
});

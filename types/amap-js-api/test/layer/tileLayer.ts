declare var map: AMap.Map;

// $ExpectType TileLayer
var tileLayer = new AMap.TileLayer();

// $ExpectType TileLayer
new AMap.TileLayer({});

// $ExpectType TileLayer
new AMap.TileLayer({
    map,
    tileSize: 256,
    tileUrl: '',
    errorUrl: '',
    getTileUrl: (x, y, z) => '',
    zIndex: 1,
    opacity: 0.1,
    zooms: [3, 18],
    detectRetina: true
});

// $ExpectType string[]
tileLayer.getTiles();

// $ExpectType void
tileLayer.reload();

// $ExpectType void
tileLayer.setTileUrl('');
// $ExpectType void
tileLayer.setTileUrl((x, y, level) => {
    // $ExpectType number
    x;
    // $ExpectType number
    y;
    // $ExpectType number
    level;
    return '';
});

// Traffic

// $ExpectType Traffic
let trafficLayer = new AMap.TileLayer.Traffic();
// $ExpectType Traffic
new AMap.TileLayer.Traffic({});
// $ExpectType Traffic
new AMap.TileLayer.Traffic({
    autoRefresh: true,
    interval: 180
});

// $ExpectType TileLayer
tileLayer.on('complete', () => { });

tileLayer.off('complete', () => { });

tileLayer.emit('complete');

trafficLayer.on('complete', () => { });

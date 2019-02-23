declare var layer: AMap.Layer;
declare var map: AMap.Map;

// $ExpectError
new AMap.Layer();

// $ExpectType HTMLDivElement | undefined
layer.getContainer();

// $ExpectType [number, number]
layer.getZooms();

// $ExpectType void
layer.setOpacity(1);

// $ExpectType number
layer.getOpacity();

// $ExpectType void
layer.show();

// $ExpectType void
layer.hide();

// $ExpectType void
layer.setMap();
// $ExpectType void
layer.setMap(map);

// $ExpectType void
layer.setzIndex(1);

// $ExpectType number
layer.getzIndex();

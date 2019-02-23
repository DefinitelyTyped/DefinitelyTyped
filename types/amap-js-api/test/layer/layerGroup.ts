declare var map: AMap.Map;
declare var tileLayer: AMap.TileLayer;
declare var massMarksLayer: AMap.MassMarks;
declare var layer: AMap.Layer;

// $ExpectError
new AMap.LayerGroup();

// $ExpectType LayerGroup<TileLayer>
new AMap.LayerGroup(tileLayer);
// $ExpectType LayerGroup<TileLayer>
new AMap.LayerGroup([tileLayer]);

declare var layerGruop: AMap.LayerGroup<AMap.TileLayer>;

// $ExpectType LayerGroup<TileLayer>
layerGruop.addLayer(tileLayer);
// $ExpectType LayerGroup<TileLayer>
layerGruop.addLayer([tileLayer]);
// $ExpectError
layerGruop.addLayer(massMarksLayer);

// $ExpectType TileLayer[]
layerGruop.getLayers();

// $ExpectType TileLayer | null
layerGruop.getLayer(function (item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType null
    this;

    return true;
});

layerGruop.hasLayer(function (item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType null
    this;

    return true;
});
layerGruop.hasLayer(tileLayer);

// $ExpectType LayerGroup<TileLayer>
layerGruop.removeLayer(tileLayer);
// $ExpectType LayerGroup<TileLayer>
layerGruop.removeLayer([tileLayer]);

// $ExpectType LayerGroup<TileLayer>
layerGruop.clearLayers();

layerGruop.eachLayer(function (item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType TileLayer
    this;
});
layerGruop.eachLayer(function (item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType number
    this.test;
}, { test: 1 });

// $ExpectType LayerGroup<TileLayer>
layerGruop.setMap(map);

// $ExpectType LayerGroup<TileLayer>
layerGruop.hide();

// $ExpectType LayerGroup<TileLayer>
layerGruop.show();

// $ExpectType LayerGroup<TileLayer>
layerGruop.reload();

// $ExpectType LayerGroup<TileLayer>
layerGruop.setOptions({});

// $ExpectType LayerGroup<TileLayer>
layerGruop.setOptions({
    tileSize: 256
});
// layerGruop.setOptions({
//     // $ExpectError
//     interval: 1
// });

declare var layerGroup2: AMap.LayerGroup;

layerGroup2.addLayer(tileLayer);

layerGroup2.addLayer(massMarksLayer);

layerGroup2.setOptions({
    test: 1
});

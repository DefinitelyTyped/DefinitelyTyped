// $ExpectType IndoorMap
new AMap.IndoorMap();
// $ExpectType IndoorMap
new AMap.IndoorMap({});
// $ExpectType IndoorMap
const indoorMap = new AMap.IndoorMap({
    zIndex: 1,
    opacity: 0.5,
    cursor: 'cursor',
    hideFloorBar: false,
    alaysShow: true
});

// $ExpectType void
indoorMap.showIndoorMap('indoorMapId');
// $ExpectType void
indoorMap.showIndoorMap('indoorMapId', (error, result) => {
    // $ExpectType Error | null
    error;
    // $ExpectType SearchResult
    result;
    // $ExpectType string
    result.id;
    // $ExpectType 0 | 1
    result.status;
    if (result.status === 0) {
        // $ExpectType Building
        const building = result.building;
        {
            // $ExpectType number
            building.floor;
            // $ExpectType FloorDetails
            const floorDetails = building.floor_details;
            {
                // $ExpectType number[]
                floorDetails.floor_indexs;
                // $ExpectType string[]
                floorDetails.floor_names;
                // $ExpectType string[]
                floorDetails.floor_nonas;
            }
            // $ExpectType string
            building.id;
            // $ExpectType LngLat
            building.lnglat;
            // $ExpectType string
            building.name;
        }
    } else {
        // $ExpectType Error
        result.error;
    }
});
// $ExpectType void
indoorMap.showIndoorMap('indoorMapId', 1);
// $ExpectType void
indoorMap.showIndoorMap('indoorMapId', 1, () => { });
// $ExpectType void
indoorMap.showIndoorMap('indoorMapId', 1, 'shopId');
// $ExpectType void
indoorMap.showIndoorMap('indoorMapId', 1, 'shopId', () => { });
// $ExpectType void
indoorMap.showIndoorMap('indoorMapId', 1, 'shopId', true);
// $ExpectType void
indoorMap.showIndoorMap('indoorMapId', 1, 'shopId', true, () => { });

let floor: undefined | false;
floor = indoorMap.showFloor(1);
floor = indoorMap.showFloor(1, true);

// $ExpectType void
indoorMap.showFloorBar();

// $ExpectType void
indoorMap.hideFloorBar();

// $ExpectType void
indoorMap.hideLabels();

// $ExpectType string | null
indoorMap.getSelectedBuildingId();

// $ExpectType Building | null
const building = indoorMap.getSelectedBuilding();
if (building) {
    // $ExpectType number
    building.floor;
    // $ExpectType FloorDetails
    building.floor_details;
    // $ExpectType string
    building.id;
    // $ExpectType LngLat
    building.lnglat;
    // $ExpectType string
    building.name;
}

indoorMap.on('complete', (event: AMap.IndoorMap.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
});

indoorMap.on('click', (event: AMap.IndoorMap.EventMap['click']) => {
    // $ExpectType string
    event.building_id;
    // $ExpectType number
    event.floor;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Shop
    event.shop;
    // $ExpectType "click"
    event.type;
});

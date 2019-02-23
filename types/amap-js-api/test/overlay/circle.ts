import {
    map,
    lnglat,
    lnglatTuple
} from '../preset';

interface ExtraData {
    test: number;
}

// $ExpectType Circle<any>
new AMap.Circle();
new AMap.Circle({});
// $ExpectType Circle<ExtraData>
const circle = new AMap.Circle<ExtraData>({
    map,
    zIndex: 10,
    center: lnglat,
    bubble: true,
    cursor: 'pointer',
    radius: 1000,
    strokeColor: '#FF0000',
    strokeOpcity: 0.8,
    strokeWeight: 3,
    fillColor: '#00FF00',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [2, 4]
});

// $ExpectType void
circle.setCenter(lnglat);
// $ExpectType void
circle.setCenter(lnglatTuple);

// $ExpectType LngLat | undefined
circle.getCenter();

// $ExpectType Bounds | null
circle.getBounds();

// $ExpectType void
circle.setRadius(100);

// $ExpectType number
circle.getRadius();

// $ExpectType void
circle.setOptions({});
circle.setOptions({
    map,
    zIndex: 10,
    center: lnglat,
    bubble: true,
    cursor: 'pointer',
    radius: 1000,
    strokeColor: '#FF0000',
    strokeOpcity: 0.8,
    strokeWeight: 3,
    fillColor: '#00FF00',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [2, 4]
});

const options = circle.getOptions();
// $ExpectType boolean | undefined
options.bubble;
// $ExpectType LngLat | undefined
options.center;
// $ExpectType boolean | undefined
options.clickable;
// $ExpectType {} | ExtraData | undefined
options.extData;
// $ExpectType string | undefined
options.fillColor;
// $ExpectType number | undefined
options.fillOpacity;
// $ExpectType "miter" | "round" | "bevel" | undefined
options.lineJoin;
// $ExpectType Map | undefined
options.map;
// $ExpectType LngLat[] | undefined
options.path;
// $ExpectType number | undefined
options.radius;
// $ExpectType string | undefined
options.strokeColor;
// $ExpectType number[] | undefined
options.strokeDasharray;
// $ExpectType number | undefined
options.strokeOpacity;
// $ExpectType "dashed" | "solid" | undefined
options.strokeStyle;
// $ExpectType number | undefined
options.strokeWeight;
// $ExpectType string | undefined
options.texture;
// $ExpectType number | undefined
options.zIndex;

// $ExpectType Bounds | null
circle.getBounds();

// $ExpectType void
circle.hide();

// $ExpectType void
circle.show();

// $ExpectType void
circle.setMap(null);
// $ExpectType void
circle.setMap(map);

// $ExpectType void
circle.setExtData({ test: 2 });
// $ExpectError
circle.setExtData({ test: '1' });

// $ExpectType {} | ExtraData
circle.getExtData();

// $ExpectType boolean
circle.contains(lnglat);
// $ExpectType boolean
circle.contains(lnglatTuple);

circle.on('click', (event: AMap.Circle.EventMap<typeof circle>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Circle<ExtraData>
    event.target;
});

circle.on('setCenter', (event: AMap.Circle.EventMap<typeof circle>['setCenter']) => {
    // $ExpectType "setCenter"
    event.type;
    // $ExpectError
    event.target;
});

circle.on('change', (event: AMap.Circle.EventMap<typeof circle>['change']) => {
    // $ExpectType "change"
    event.type;
    // $ExpectType Circle<ExtraData>
    event.target;
});

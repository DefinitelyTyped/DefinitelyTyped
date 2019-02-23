import {
    map,
    lnglat,
    bounds,
    lnglatTuple
} from '../preset';

interface ExtraData {
    test: number;
}

// $ExpectType Rectangle<any>
new AMap.Rectangle();
// $ExpectType Rectangle<any>
new AMap.Rectangle({});
// $ExpectType Rectangle<ExtraData>
const rectangle = new AMap.Rectangle<ExtraData>({
    map,
    zIndex: 10,
    bounds,
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'solid',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

// $ExpectType Bounds | undefined
rectangle.getBounds();

// $ExpectType void
rectangle.setBounds(bounds);

// $ExpectType void
rectangle.setOptions({});
// $ExpectType void
rectangle.setOptions({
    map,
    zIndex: 10,
    bounds,
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'solid',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

const options = rectangle.getOptions();
// $ExpectType Bounds | undefined
options.bounds;
// $ExpectType boolean | undefined
options.bubble;
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

// $ExpectType void
rectangle.hide();

// $ExpectType void
rectangle.show();

// $ExpectType void
rectangle.setExtData({test: 2});

// $ExpectType {} | ExtraData
rectangle.getExtData();

// $ExpectType boolean
rectangle.contains(lnglat);
// $ExpectType boolean
rectangle.contains(lnglatTuple);

rectangle.on('click', (event: AMap.Rectangle.EventMap<typeof rectangle>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Rectangle<ExtraData>
    event.target;
});

rectangle.on('setBounds', (event: AMap.Rectangle.EventMap<typeof rectangle>['setBounds']) => {
    // $ExpectType "setBounds"
    event.type;
    // $ExpectError
    event.target;
});

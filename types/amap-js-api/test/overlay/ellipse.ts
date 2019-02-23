import {
    map,
    lnglat,
    lnglatTuple
} from '../preset';

interface ExtraData {
    test: number;
}
// $ExpectType Ellipse<any>
new AMap.Ellipse();
// $ExpectType Ellipse<any>
new AMap.Ellipse({});
// $ExpectType Ellipse<ExtraData>
const ellipse = new AMap.Ellipse<ExtraData>({
    map,
    zIndex: 10,
    center: lnglat,
    radius: [10000, 15000],
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

// $ExpectType LngLat | undefined
ellipse.getCenter();

// $ExpectType void
ellipse.setCenter(lnglat);
// $ExpectType void
ellipse.setCenter(lnglatTuple);

// $ExpectType Bounds | null
ellipse.getBounds();

// $ExpectType void
ellipse.setOptions({
    map,
    zIndex: 10,
    center: lnglat,
    radius: [10000, 15000],
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

const options = ellipse.getOptions();

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
// $ExpectType [number, number] | undefined
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

// $ExpectType void
ellipse.hide();

// $ExpectType void
ellipse.show();

// $ExpectType void
ellipse.setMap(null);
// $ExpectType void
ellipse.setMap(map);

// $ExpectType void
ellipse.setExtData({test: 2});
// $ExpectType {} | ExtraData
ellipse.getExtData();

// $ExpectType boolean
ellipse.contains(lnglat);
// $ExpectType boolean
ellipse.contains(lnglatTuple);

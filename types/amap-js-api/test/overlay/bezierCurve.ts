import {
    map,
    lnglat
} from '../preset';

interface ExtraData {
    test: number;
}

const path = [
    [1, 2, 3, 4],
    [1, 2, 3],
    [
        [1, 2, 3],
        [1, 2]
    ],
    [1, 2]
];

// $ExpectError
new AMap.BezierCurve();
// $ExpectError
new AMap.BezierCurve({});
// $ExpectType BezierCurve<ExtraData>
const bezierCurve = new AMap.BezierCurve<ExtraData>({
    map,
    path,
    strokeColor: '#FF0000',
    strokeOpacity: 0.6,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [1, 5],
    zIndex: 10,
    bubble: false,
    showDir: true,
    cursor: 'pointer',
    isOutline: true,
    outlineColor: '#00FF00',
    borderWeight: 2
});

// $ExpectType void
bezierCurve.setPath(path);

// $ExpectType void
bezierCurve.setPath(path);

// $ExpectType void
bezierCurve.setOptions({});
bezierCurve.setOptions({
    map,
    path,
    strokeColor: '#FF0000',
    strokeOpacity: 0.6,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [1, 5],
    zIndex: 10,
    bubble: false,
    showDir: true,
    cursor: 'pointer',
    isOutline: true,
    outlineColor: '#00FF00',
    borderWeight: 2
});

const options = bezierCurve.getOptions();

// $ExpectType number | undefined
options.borderWeight;
// $ExpectType boolean | undefined
options.bubble;
// $ExpectType boolean | undefined
options.clickable;
// $ExpectType string | undefined
options.dirColor;
// $ExpectType string | undefined
options.dirImg;
// $ExpectType {} | ExtraData | undefined
options.extData;
// $ExpectType boolean | undefined
options.geodesic;
// $ExpectType boolean | undefined
options.isOutline;
// $ExpectType "round" | "butt" | "square" | undefined
options.lineCap;
// $ExpectType "miter" | "round" | "bevel" | undefined
options.lineJoin;
// $ExpectType Map | undefined
options.map;
// $ExpectType string | undefined
options.outlineColor;
// $ExpectType (LngLat & { controlPoints: LngLat[]; })[] | undefined
options.path;
// $ExpectType boolean | undefined
options.showDir;
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
// $ExpectType number | undefined
options.zIndex;

// $ExpectType number
bezierCurve.getLength();

// $ExpectType Bounds | null
bezierCurve.getBounds();

// $ExpectType void
bezierCurve.show();

// $ExpectType void
bezierCurve.hide();

// $ExpectType void
bezierCurve.setMap(null);
bezierCurve.setMap(map);

// $ExpectType void
bezierCurve.setExtData({ test: 1 });
// $ExpectError
bezierCurve.setExtData({ test: '123' });

// $ExpectType {} | ExtraData
bezierCurve.getExtData();

bezierCurve.on('click', (event: AMap.BezierCurve.EventMap<typeof bezierCurve>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType BezierCurve<ExtraData>
    event.target;
});

bezierCurve.on('show', (event: AMap.BezierCurve.EventMap<typeof bezierCurve>['show']) => {
    // $ExpectType "show"
    event.type;
    // $ExpectType BezierCurve<ExtraData>
    event.target;
});

bezierCurve.on('options', (event: AMap.BezierCurve.EventMap<typeof bezierCurve>['options']) => {
    // $ExpectType "options"
    event.type;
    // $ExpectError
    event.target;
});

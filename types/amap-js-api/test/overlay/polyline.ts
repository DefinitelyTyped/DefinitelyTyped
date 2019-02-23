import {
    map,
    lnglat,
    lnglatTuple
} from '../preset';

interface ExtraData {
    test: number;
}

// $ExpectType Polyline<any>
new AMap.Polyline();
// $ExpectType Polyline<any>
new AMap.Polyline({});
// $ExpectType Polyline<ExtraData>
const polyline = new AMap.Polyline<ExtraData>({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'default',
    geodesic: true,
    isOutline: true,
    borderWeight: 1,
    outlineColor: '#AA0000',
    path: [lnglat],
    strokeColor: '#0000AA',
    strokeOpacity: 0.5,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [20, 10, 20],
    lineJoin: 'bevel',
    lineCap: 'butt',
    draggable: true,
    extData: { test: 1 },
    showDir: true
});
// Polyline<ExtraData>

// $ExpectType void
polyline.setPath([lnglat]);
// $ExpectType void
polyline.setPath([lnglatTuple]);

// $ExpectType void
polyline.setOptions({});
// $ExpectType void
polyline.setOptions({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'default',
    geodesic: true,
    isOutline: true,
    borderWeight: 1,
    outlineColor: '#AA0000',
    path: [lnglat, lnglat],
    strokeColor: '#0000AA',
    strokeOpacity: 0.5,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [20, 10, 20],
    lineJoin: 'bevel',
    lineCap: 'butt',
    draggable: true,
    extData: { test: 1 },
    showDir: true
});

const options = polyline.getOptions();
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
// $ExpectType LngLat[] | undefined
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
polyline.getLength();

// $ExpectType Bounds | null
polyline.getBounds();

// $ExpectType void
polyline.hide();

// $ExpectType void
polyline.show();

// $ExpectType void
polyline.setMap(null);
// $ExpectType void
polyline.setMap(map);

// $ExpectType void
polyline.setExtData({test: 1});

// $ExpectType {} | ExtraData
polyline.getExtData();

polyline.on('click', (event: AMap.Polyline.EventMap<typeof polyline>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Polyline<ExtraData>
    event.target;
});

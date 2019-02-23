import {
    map,
    lnglat,
    lnglatTuple
} from '../preset';

interface ExtraData {
    test: number;
}

const path1 = [lnglatTuple, lnglatTuple, lnglatTuple, lnglatTuple, lnglatTuple];
const path2 = [lnglat, lnglat, lnglat, lnglat, lnglat];

// $ExpectType Polygon<any>
new AMap.Polygon();
// $ExpectType Polygon<any>
new AMap.Polygon({});
// $ExpectType Polygon<ExtraData>
const polygon = new AMap.Polygon<ExtraData>({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.3,
    strokeWeight: 5,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    draggable: true,
    extData: { test: 1 },
    strokeStyle: 'dashed',
    strokeDasharray: [2, 4],
    path: path1
});

// $ExpectType void
polygon.setPath(path1);
// $ExpectType void
polygon.setPath(path2);
// $ExpectType void
polygon.setPath([path1, path2]);

// $ExpectType LngLat[] | LngLat[][]
polygon.getPath();

// $ExpectType void
polygon.setOptions({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    draggable: true,
    extData: { test: 1 },
    strokeStyle: 'dashed',
    strokeDasharray: [4, 2],
    path: [path2, path1]
});

const options = polygon.getOptions();
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
// $ExpectType LngLat[] | LngLat[][] | undefined
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

// $ExpectType Bounds | null
polygon.getBounds();

// $ExpectType number
polygon.getArea();

// $ExpectType void
polygon.setMap(null);
// $ExpectType void
polygon.setMap(map);

// $ExpectType void
polygon.setExtData({ test: 1 });

// $ExpectType {} | ExtraData
polygon.getExtData();

// $ExpectType boolean
polygon.contains(lnglat);
// $ExpectType boolean
polygon.contains(lnglatTuple);

polygon.on('click', (event: AMap.Polygon.EventMap<typeof polygon>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Polygon<ExtraData>
    event.target;
});

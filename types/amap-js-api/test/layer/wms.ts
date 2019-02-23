import {
    map
} from '../preset';

// $ExpectType WMS
new AMap.TileLayer.WMS({
    url: 'url',
    params: {}
});
// $ExpectType WMS
const wms = new AMap.TileLayer.WMS({
    url: 'url',
    blend: true,
    params: {
        VERSION: 'version',
        LAYERS: 'layers',
        STYLES: 'styles',
        FORMAT: 'format',
        TRANSPARENT: 'TRUE',
        BGCOLOR: '#000',
        EXCEPTIONS: 'exceptions',
        TIME: 'time',
        ELEVATION: 'elevation'
    },
    zooms: [1, 2],
    tileSize: 256,
    opacity: 1,
    zIndex: 10,
    visible: true
});

// $ExpectType void
wms.setMap(map);
// $ExpectType void
wms.setMap(null);

// $ExpectType Map | null | undefined
wms.getMap();

// $ExpectType void
wms.show();

// $ExpectType void
wms.hide();

// $ExpectType void
wms.setzIndex(10);

// $ExpectType number
wms.getzIndex();

// $ExpectType void
wms.setUrl('url');

// $ExpectType string
wms.getUrl();

// $ExpectType void
wms.setParams({
    VERSION: 'version',
    LAYERS: 'layers',
    STYLES: 'styles',
    FORMAT: 'format',
    TRANSPARENT: 'TRUE',
    BGCOLOR: '#000',
    EXCEPTIONS: 'exceptions',
    TIME: 'time',
    ELEVATION: 'elevation'
});

const params = wms.getParams();
// $ExpectType string | undefined
params.VERSION;
// $ExpectType string | undefined
params.LAYERS;
// $ExpectType string | undefined
params.STYLES;
// $ExpectType string | undefined
params.FORMAT;
// $ExpectType "TRUE" | "FALSE" | undefined
params.TRANSPARENT;
// $ExpectType string | undefined
params.BGCOLOR;
// $ExpectType string | undefined
params.EXCEPTIONS;
// $ExpectType string | undefined
params.TIME;
// $ExpectType string | undefined
params.ELEVATION;

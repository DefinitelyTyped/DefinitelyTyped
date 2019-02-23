import {
    map
} from '../preset';

// $ExpectType WMTS
new AMap.TileLayer.WMTS({
    url: 'url',
    params: {}
});
// $ExpectType WMTS
const wmts = new AMap.TileLayer.WMTS({
    url: 'url',
    blend: true,
    tileSize: 256,
    zooms: [1, 2],
    opacity: 1,
    zIndex: 10,
    visible: true,
    params: {
        Version: 'version',
        Layer: 'layers',
        Style: 'style',
        Format: 'format'
    }
});

// $ExpectType void
wmts.setMap(map);
// $ExpectType void
wmts.setMap(null);

// $ExpectType Map | null | undefined
wmts.getMap();

// $ExpectType void
wmts.show();

// $ExpectType void
wmts.hide();

// $ExpectType void
wmts.setzIndex(10);

// $ExpectType number
wmts.getzIndex();

// $ExpectType void
wmts.setUrl('url');

// $ExpectType string
wmts.getUrl();

// $ExpectType void
wmts.setParams({
    Version: 'version',
    Layer: 'layers',
    Style: 'style',
    Format: 'format'
});

const params = wmts.getParams();
// $ExpectType string | undefined
params.Version;
// $ExpectType string | undefined
params.Layer;
// $ExpectType string | undefined
params.Style;
// $ExpectType string | undefined
params.Format;

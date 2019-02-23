import {
    map
} from '../preset';

const img = document.createElement('img');
const canvas = document.createElement('canvas');

// $ExpectType Flexible
new AMap.TileLayer.Flexible();
// $ExpectType Flexible
new AMap.TileLayer.Flexible({});
// $ExpectType Flexible
const flexible = new AMap.TileLayer.Flexible({
    createTile(x, y, z, success, fail) {
        // $ExpectType number
        x;
        // $ExpectType number
        y;
        // $ExpectType number
        z;
        // $ExpectType void
        success(img);
        // $ExpectType void
        success(canvas);
        // $ExpectType void
        fail();
    },
    cacheSize: 10,
    opacity: 1,
    visible: true,
    map,
    zIndex: 1,
    zooms: [1, 2]
});

// $ExpectType void
flexible.setMap(null);
// $ExpectType void
flexible.setMap(map);

// $ExpectType Map | null | undefined
flexible.getMap();

// $ExpectType void
flexible.show();

// $ExpectType void
flexible.hide();

// $ExpectType void
flexible.setzIndex(10);

// $ExpectType number
flexible.getzIndex();

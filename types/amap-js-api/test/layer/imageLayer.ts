import {
    map,
    bounds
} from '../preset';

// $ExpectType ImageLayer
new AMap.ImageLayer({
    map,
    bounds,
    visible: true,
    zooms: [1, 2],
    opacity: 1
});

// $ExpectType ImageLayer
new AMap.ImageLayer();
// $ExpectType ImageLayer
new AMap.ImageLayer({});
// $ExpectType ImageLayer
const imageLayer = new AMap.ImageLayer({
    bounds
});

// $ExpectType void
imageLayer.setMap(null);
// $ExpectType void
imageLayer.setMap(map);

// $ExpectType Map | null | undefined
imageLayer.getMap();

// $ExpectType void
imageLayer.show();

// $ExpectType void
imageLayer.hide();

// $ExpectType number
imageLayer.getzIndex();

// $ExpectType void
imageLayer.setzIndex(10);

// $ExpectType HTMLImageElement | null
imageLayer.getElement();

// $ExpectType void
imageLayer.setImageUrl('url');

// $ExpectType string | undefined
imageLayer.getImageUrl();

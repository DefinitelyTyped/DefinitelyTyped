import {
    map,
    bounds
} from '../preset';

// $ExpectType VideoLayer
new AMap.VideoLayer({
    map,
    bounds,
    visible: true,
    zooms: [1, 2],
    opacity: 1
});

// $ExpectType VideoLayer
new AMap.VideoLayer();
// $ExpectType VideoLayer
new AMap.VideoLayer({});
// $ExpectType VideoLayer
const videoLayer = new AMap.VideoLayer({
    bounds
});

// $ExpectType void
videoLayer.setMap(null);
// $ExpectType void
videoLayer.setMap(map);

// $ExpectType Map | null | undefined
videoLayer.getMap();

// $ExpectType void
videoLayer.show();

// $ExpectType void
videoLayer.hide();

// $ExpectType number
videoLayer.getzIndex();

// $ExpectType void
videoLayer.setzIndex(10);

// $ExpectType HTMLVideoElement | null
videoLayer.getElement();

// $ExpectType void
videoLayer.setVideoUrl('url');

// $ExpectType string | string[] | undefined
videoLayer.getVideoUrl();

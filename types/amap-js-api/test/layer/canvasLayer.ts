import {
    map,
    bounds
} from '../preset';

declare const canvas: HTMLCanvasElement;

// $ExpectType CanvasLayer
new AMap.CanvasLayer({
    map,
    bounds,
    visible: true,
    zooms: [1, 2],
    opacity: 1
});

// $ExpectType CanvasLayer
new AMap.CanvasLayer();
// $ExpectType CanvasLayer
new AMap.CanvasLayer({});
// $ExpectType CanvasLayer
const canvasLayer = new AMap.CanvasLayer({
    bounds
});

// $ExpectType void
canvasLayer.setMap(null);
// $ExpectType void
canvasLayer.setMap(map);

// $ExpectType Map | null | undefined
canvasLayer.getMap();

// $ExpectType void
canvasLayer.show();

// $ExpectType void
canvasLayer.hide();

// $ExpectType number
canvasLayer.getzIndex();

// $ExpectType void
canvasLayer.setzIndex(10);

// $ExpectType HTMLCanvasElement | null
canvasLayer.getElement();

// $ExpectType void
canvasLayer.setCanvas(canvas);

// $ExpectType HTMLCanvasElement | undefined
canvasLayer.getCanvas();

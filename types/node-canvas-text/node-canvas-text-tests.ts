import drawText from 'node-canvas-text';
import { Font } from 'opentype.js';

const obj = {};

drawText(obj as CanvasRenderingContext2D, "A string, but not too long", obj as Font);

drawText(obj as CanvasRenderingContext2D, "200", obj as Font, {
    x: 0,
    y: 0,
    width: 200,
    height: 100
});

drawText(obj as CanvasRenderingContext2D, "54490000052117", obj as Font, {
        x: 0,
        y: 0,
        width: 200,
        height: 100
    },
    {
        minSize: 5,
        maxSize: 200,
        hAlign: 'center',
        vAlign: 'center',
        fitMethod: 'box',
        drawRect: true
});

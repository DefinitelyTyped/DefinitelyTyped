import GIF = require('gif.js');

const gif = new GIF({
    workers: 2,
    quality: 10,
    dither: 'Atkinson',
});

// change GIF options
gif.setOption('dither', 'Atkinson');
// @ts-expect-error
gif.setOption('quality', 'Atkinson');
// @ts-expect-error
gif.setOptions();

// add an image element
declare const imageElement: HTMLImageElement;
gif.addFrame(imageElement); // $ExpectType void

// or a canvas element
declare const canvasElement: HTMLCanvasElement;
gif.addFrame(canvasElement, { delay: 200 }); // $ExpectType void

// or copy the pixels from a canvas context
declare const ctx: CanvasRenderingContext2D;
gif.addFrame(ctx, { copy: true }); // $ExpectType void

gif.on('finished', blob => {
    window.open(URL.createObjectURL(blob));
});

gif.render(); // $ExpectType void

// Check if gif is still being rendered
gif.running; // $ExpectType boolean

gif.abort(); // $ExpectType void

import GIF = require('gif.js');

const gif = new GIF({
    workers: 2,
    quality: 10,
});

// add an image element
declare const imageElement: HTMLImageElement;
gif.addFrame(imageElement);

// or a canvas element
declare const canvasElement: HTMLCanvasElement;
gif.addFrame(canvasElement, { delay: 200 });

// or copy the pixels from a canvas context
declare const ctx: CanvasRenderingContext2D;
gif.addFrame(ctx, { copy: true });

gif.on('finished', blob => {
    window.open(URL.createObjectURL(blob));
});

gif.render();

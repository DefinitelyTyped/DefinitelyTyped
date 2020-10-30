import GIFEncoder = require('gifencoder');
import fs = require('fs');

declare const pngFileStream: NodeJS.ReadableStream;

const encoder = new GIFEncoder(854, 480);

const stream = pngFileStream
    .pipe(encoder.createWriteStream({ repeat: -1, delay: 500, quality: 10 }))
    .pipe(fs.createWriteStream('myanimated.gif'));

stream.on('finish', () => {
    // Process generated GIF
});

// stream the results as they are available into myanimated.gif
encoder.createReadStream().pipe(fs.createWriteStream('myanimated.gif'));

encoder.start();
encoder.setRepeat(0); // 0 for repeat, -1 for no-repeat
encoder.setDelay(500); // frame delay in ms
encoder.setQuality(10); // image quality. 10 is default.

// use node-canvas
declare const canvas: HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

// red rectangle
ctx.fillStyle = '#ff0000';
ctx.fillRect(0, 0, 320, 240);
encoder.addFrame(ctx);

// green rectangle
ctx.fillStyle = '#00ff00';
ctx.fillRect(0, 0, 320, 240);
encoder.addFrame(ctx);

// blue rectangle
ctx.fillStyle = '#0000ff';
ctx.fillRect(0, 0, 320, 240);
encoder.addFrame(ctx);

encoder.finish();

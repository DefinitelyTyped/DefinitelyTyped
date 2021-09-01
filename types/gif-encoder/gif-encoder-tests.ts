import GIFEncoder = require('gif-encoder');
import fs = require('fs');

const gif = new GIFEncoder(1, 1, {
    highWaterMark: 128 * 1024
});

gif.on('writeHeader#start', () => {});
gif.on('writeHeader#stop', () => {});
gif.on('frame#start', () => {});
gif.on('frame#stop', () => {});
gif.on('finish#start', () => {});
gif.on('finish#stop', () => {});

gif.on('data', (data) => {
    // $ExpectType Buffer
    data;
});

gif.on('readable', () => {
    // $ExpectType Buffer | null
    gif.read();
});

gif.setDelay(1000);
gif.setFrameRate(1);
gif.setDispose(2);
gif.setRepeat(0);
gif.setTransparent(0x00FF00);
gif.setQuality(11);

// $ExpectType WriteStream
gif.pipe(fs.createWriteStream('./test.gif'));

gif.writeHeader();

gif.addFrame([0xFF, 0x00, 0x00, 0xFF]);
gif.addFrame([0x00, 0x00, 0xFF, 0xFF]);

gif.finish();

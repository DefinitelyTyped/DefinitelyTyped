import blurRGBA = require('glur');
import blurRGBAMono = require('glur/mono16');

const testRGBA = (src: Uint8Array) => {
    blurRGBA(src, 100, 100, 50); // $ExpectType void
};

const testMono16 = (src: Uint16Array) => {
    blurRGBAMono(src, 100, 100, 50); // $ExpectType void
};

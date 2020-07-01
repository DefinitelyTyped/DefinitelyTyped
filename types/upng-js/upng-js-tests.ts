import * as UPNG from 'upng-js';

declare const buffer: ArrayBuffer;

const image: UPNG.Image = UPNG.decode(buffer);
const rgba: ArrayBuffer[] = UPNG.toRGBA8(image);
const quantized: UPNG.QuantizeResult = UPNG.quantize(rgba[0], 256);

const png1: ArrayBuffer = UPNG.encode([buffer], 32, 32, 0);
const png2: ArrayBuffer = UPNG.encode([buffer, buffer], 32, 32, 0, [10, 10]);
const png3: ArrayBuffer = UPNG.encodeLL([buffer], 32, 32, 3, 1, 8);
const png4: ArrayBuffer = UPNG.encodeLL([buffer, buffer], 32, 32, 3, 1, 8, [10, 10]);

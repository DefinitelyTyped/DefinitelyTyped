import * as UPNG from 'upng-js';

declare const buff: ArrayBuffer;
const img = UPNG.decode(buff);
const rgba = UPNG.toRGBA8(img)[0];

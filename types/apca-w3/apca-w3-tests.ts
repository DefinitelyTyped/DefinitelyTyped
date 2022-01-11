import { APCAcontrast, sRGBtoY } from 'apca-w3';

const foreground = [240, 248, 255]; // $ExpectType [number]
const background = [255, 0, 0]; // $ExpectType [number]

APCAcontrast(sRGBtoY(foreground), sRGBtoY(background)); // $ExpectType number

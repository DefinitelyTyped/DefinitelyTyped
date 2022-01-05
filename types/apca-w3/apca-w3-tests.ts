import { APCAcontrast, colorParsley, sRGBtoY } from 'apca-w3';

const foreground = colorParsley('aliceblue'); // $ExpectType [number]
const background = colorParsley(0xff0000); // $ExpectType [number]

APCAcontrast(sRGBtoY(foreground), sRGBtoY(background)); // $ExpectType number

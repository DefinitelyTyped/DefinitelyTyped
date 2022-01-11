import { APCAcontrast, sRGBtoY } from 'apca-w3';

const foreground = sRGBtoY([240, 248, 255]); // $ExpectType number
const background = sRGBtoY([255, 0, 0]); // $ExpectType number

APCAcontrast(foreground, background); // $ExpectType string | number

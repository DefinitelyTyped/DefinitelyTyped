import * as color from 'color-convert';
import * as conv from 'color-convert/conversions';

const hsv: [number, number, number] = color.rgb.hsv([1, 2, 3]);
const hsv_raw: [number, number, number] = color.rgb.hsv.raw([1, 2, 3]);
const aaa: [number, number, number] = color.rgb.hsv([1, 2, 3]);

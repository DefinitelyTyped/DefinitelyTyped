import { HSL, HSV, RGB } from "../../types";

/**
 * @method HSVtoRGB
 *
 * convert hsv to rgb
 *
 * 		color.HSVtoRGB(0,0,1) === #FFFFF === { r : 255, g : 0, b : 0 }
 *
 * @param {Number} H  hue color number  (min : 0, max : 360)
 * @param {Number} S  Saturation number  (min : 0, max : 1)
 * @param {Number} V  Value number 		(min : 0, max : 1 )
 * @returns {Object}
 */
export function HSVtoRGB(argument: HSV): RGB;
export function HSVtoRGB(h: number, s: number, v: number): RGB;

export function HSVtoHSL(argument: HSV): HSL;
export function HSVtoHSL(h: number, s: number, v: number): HSL;

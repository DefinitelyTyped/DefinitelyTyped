import { CMYK, HSL, HSV, LAB, ParseableColor, RGB, XYZ, YCrCb } from "../../types";

/**
 * @method RGBtoHSV
 *
 * convert rgb to hsv
 *
 * 		color.RGBtoHSV(0, 0, 255) === { h : 240, s : 1, v : 1 } === '#FFFF00'
 *
 * @param {Number} R  red color value
 * @param {Number} G  green color value
 * @param {Number} B  blue color value
 * @return {Object}  hsv color code
 */
export function RGBtoHSV(argument: RGB): HSV;
export function RGBtoHSV(r: number, g: number, b: number): HSV;

export function RGBtoCMYK(argument: RGB): CMYK;
export function RGBtoCMYK(r: number, g: number, b: number): CMYK;

export function RGBtoHSL(argument: RGB): HSL;
export function RGBtoHSL(r: number, g: number, b: number): HSL;

export function c(argument: RGB): RGB;
export function c(r: number, g: number, b: number): RGB;

export function gray(gray: number): RGB;

export function RGBtoSimpleGray(argument: RGB): RGB;
export function RGBtoSimpleGray(r: number, g: number, b: number): RGB;

export function RGBtoGray(argument: RGB): RGB;
export function RGBtoGray(r: number, g: number, b: number): RGB;

export function brightness(r: number, g: number, b: number): number;

export function RGBtoYCrCb(argument: RGB): YCrCb;
export function RGBtoYCrCb(r: number, g: number, b: number): YCrCb;

export function RGBtoXYZ(argument: RGB): XYZ;
export function RGBtoXYZ(r: number, g: number, b: number): XYZ;

export function RGBtoLAB(argument: RGB): LAB;
export function RGBtoLAB(r: number, g: number, b: number): LAB;

import { Format, ParseableColor, ParseableGradient, RGBA, Scale } from "../../types";

/**
 * @deprecated
 *
 * instead of this,  use blend function
 *
 * @param {*} startColor
 * @param {*} endColor
 * @param {*} t
 */
export function interpolateRGB(startColor: RGBA, endColor: RGBA, t?: number, exportFormat?: Format): string;

export const scale: Scale;

export function blend(startColor: ParseableColor, endColor: ParseableColor, ratio?: number, format?: Format): string;

export function mix(startcolor: ParseableColor, endColor: ParseableColor, ratio?: number, format?: Format): string;

/**
 * @param {RGBA|String} c
 */
export function contrast(c: ParseableColor): number;

export function contrastColor(c: ParseableColor): "black" | "white";

export function gradient(colors: ParseableGradient, count?: number): string[];

export function scaleHSV(
    color: ParseableColor,
    target?: "h" | "s" | "v",
    count?: number,
    exportFormat?: Format,
    min?: number,
    max?: number,
    dist?: number,
): string[];

export function scaleH(
    color: ParseableColor,
    count?: number,
    exportFormat?: Format,
    min?: number,
    max?: number,
): string[];

export function scaleS(
    color: ParseableColor,
    count?: number,
    exportFormat?: Format,
    min?: number,
    max?: number,
): string[];

export function scaleV(
    color: ParseableColor,
    count?: number,
    exportFormat?: Format,
    min?: number,
    max?: number,
): string[];

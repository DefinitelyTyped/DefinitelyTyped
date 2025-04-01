import { ArrayOrRGBA, Format } from "../../types";

/**
 * @method format
 *
 * convert color to format string
 *
 *     // hex
 *     color.format({ r : 255, g : 255, b : 255, a: 1 }, 'hex')  // #FFFFFFFF
 *
 *     // rgb
 *     color.format({ r : 255, g : 255, b : 255 }, 'rgb') // rgba(255, 255, 255, 0.5);
 *
 *     // rgba
 *     color.format({ r : 255, g : 255, b : 255, a : 0.5 }, 'rgb') // rgba(255, 255, 255, 0.5);
 *
 * @param {Object} obj  obj has r, g, b and a attributes
 * @param {"hex"/"rgb"} type  format string type
 * @returns {*}
 */
export function format(obj: ArrayOrRGBA, type: Format, defaultColor?: string): string;

export function hex(obj: ArrayOrRGBA): string;

export function rgb(obj: ArrayOrRGBA, defaultColor?: string): string;

export function hsl(obj: ArrayOrRGBA): string;

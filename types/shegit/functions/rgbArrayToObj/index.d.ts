import { RgbObj } from "../../types";
import { Input } from "./types";
/**
 * #### RGB color array to object
 *
 * Converts RGB color [red, green, blue] as an array
 * to a format object {r: [red], g: [green], b: [blue]}.
 *
 * @since 1.0.1
 * @category Color
 * @param {Input} array RGB color array
 * @returns {RgbObj} RGB color object
 * @example
 *
 * rgbArrayToObj([1, 2, 3])
 * // => {r: 1, g: 2, b: 3}
 */
export function rgbArrayToObj(array?: Input): RgbObj;
export { Input };

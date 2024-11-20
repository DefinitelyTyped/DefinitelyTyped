import { ColorProp, ReturnColorType, To } from "./types";
/**
 * #### To color
 *
 * Convert a color of one type to another.
 *
 * @since 1.0.1
 * @category Color
 * @param {Color} color color in any representation
 * @param {To} to type of the return color
 * @returns {ReturnColorType<To>} the color in the selected "To" type
 * @example
 *
 * toColor([1, 2, 3], "object")
 * // => {r: 1, g: 2, b: 3, a: 1}
 */
export function toColor<T extends To>(color?: ColorProp, to?: T): ReturnColorType<T>;

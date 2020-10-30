/**
 * An array of numbers representing a size: [width, height].
 */
export type Size = [number, number];
/**
 * Returns a buffered size.
 */
export function buffer(size: Size, num: number, opt_size?: Size): Size;
/**
 * Determines if a size has a positive area.
 */
export function hasArea(size: Size): boolean;
/**
 * Returns a size scaled by a ratio. The result will be an array of integers.
 */
export function scale(size: Size, ratio: number, opt_size?: Size): Size;
/**
 * Returns an Size array for the passed in number (meaning: square) or
 * Size array.
 * (meaning: non-square),
 */
export function toSize(size: number | Size, opt_size?: Size): Size;

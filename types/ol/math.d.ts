/**
 * Return the hyperbolic cosine of a given number. The method will use the
 * native Math.cosh function if it is available, otherwise the hyperbolic
 * cosine will be calculated via the reference implementation of the Mozilla
 * developer network.
 */
export const cosh: (x: number) => number;
/**
 * Return the base 2 logarithm of a given number. The method will use the
 * native Math.log2 function if it is available, otherwise the base 2
 * logarithm will be calculated via the reference implementation of the
 * Mozilla developer network.
 */
export const log2: (x: number) => number;
/**
 * Rounds a number to the next bigger integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 */
export function ceil(n: number, decimals: number): number;
/**
 * Takes a number and clamps it to within the provided bounds.
 */
export function clamp(value: number, min: number, max: number): number;
/**
 * Rounds a number to the next smaller integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 */
export function floor(n: number, decimals: number): number;
/**
 * Calculates the linearly interpolated value of x between a and b.
 */
export function lerp(a: number, b: number, x: number): number;
/**
 * Returns the modulo of a / b, depending on the sign of b.
 */
export function modulo(a: number, b: number): number;
/**
 * Rounds a number to the nearest integer value considering only the given number
 * of decimal digits (with rounding on the final digit).
 */
export function round(n: number, decimals: number): number;
/**
 * Solves system of linear equations using Gaussian elimination method.
 */
export function solveLinearSystem(mat: number[][]): number[];
/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 */
export function squaredDistance(x1: number, y1: number, x2: number, y2: number): number;
/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 */
export function squaredSegmentDistance(x: number, y: number, x1: number, y1: number, x2: number, y2: number): number;
/**
 * Converts radians to to degrees.
 */
export function toDegrees(angleInRadians: number): number;
/**
 * Returns a number with a limited number of decimal digits.
 */
export function toFixed(n: number, decimals: number): number;
/**
 * Converts degrees to radians.
 */
export function toRadians(angleInDegrees: number): number;

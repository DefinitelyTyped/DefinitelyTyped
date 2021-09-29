/**
 * The log function returns the power to which the base value has to be raised to produce n.
 * @function
 * @param {number} n - Produce value.
 * @param {number} base - Base value.
 * @returns {number} -
 * @example
 * og.math.log(64, 2)
 * //returns 6
 */
export function log(n: number, base: number): number;
/**
 * Clamp the number.
 * @function
 * @param {number} number - Input number.
 * @param {number} min - Minimal edge.
 * @param {number} max - Maximal edge.
 * @returns {number} -
 * @example
 * og.math.clamp(12, 1, 5)
 * //returns 5
 */
export function clamp(number: number, min: number, max: number): number;
/**
 * Converts degrees value to radians.
 * @function
 * @param {number} degrees - Degree value.
 * @returns {number} -
 */
export function DEG2RAD(degrees: number): number;
/**
 * Converts radians value to degrees.
 * @function
 * @param {number} angle - Degree value.
 * @returns {number} -
 */
export function RAD2DEG(angle: number): number;
/**
 * Check the number is a power of two.
 * @function
 * @param {number} x - Input value.
 * @returns {boolean} -
 */
export function isPowerOfTwo(x: number): boolean;
/**
 * Returns next value that is power of two.
 * @function
 * @param {number} x - Input value.
 * @returns {number} -
 */
export function nextHighestPowerOfTwo(x: number): number;
/**
 * Returns random integer number within the bounds.
 * @function
 * @param {number} min - Minimal bound.
 * @param {number} max - Maximal bound.
 * @returns {number} -
 */
export function randomi(min?: number, max?: number): number;
/**
 * Returns random number within the bounds.
 * @function
 * @param {number} [min=0] - Minimal bound.
 * @param {number} [max=1] - Maximal bound.
 * @returns {number} -
 */
export function random(min?: number, max?: number): number;
/**
 * Converts degrees value to decimal.
 * @function
 * @param {number} d - Degrees.
 * @param {number} m - Minutes.
 * @param {number} s - Seconds.
 * @param {boolean} [p] - Positive flag. False - default.
 * @returns {number} -
 **/
export function degToDec(d: number, m: number, s: number, p?: boolean): number;
/**
 * The modulo operation that also works for negative dividends.
 * @function
 * @param {number} m - The dividend.
 * @param {number} n - The divisor.
 * @returns {number} The remainder.
 */
export function mod(m: number, n: number): number;
/**
 * Returns an angle in the range 0 <= angle <= 2Pi which is equivalent to the provided angle.
 * @function
 * @param {number} a - Angle in radians
 * @returns {number} -
 */
export function zeroTwoPI(a: number): number;
/**
 * Returns 0.0 if x is smaller then edge and otherwise 1.0.
 * @function
 * @param {number} edge -
 * @param {number} x - Value to edge.
 * @returns {number} -
 */
export function step(edge: number, x: number): number;
/**
 * The fract function returns the fractional part of x, i.e. x minus floor(x).
 * @function
 * @param {number} x - Input value.
 * @returns {number} -
 */
export function frac(x: number): number;
/**
 * Returns Math.log(x) / Math.log(2)
 * @function
 * @param {number} x - Input value.
 * @returns {number} -
 */
export function log2(x: number): number;
/**
 * Returns two power of n.
 * @function
 * @param {number} n - Power value.
 * @returns {number} -
 */
export function exp2(n: number): number;
/**
 * Returns two power of integer n.
 * @function
 * @param {number} n - Integer power value.
 * @returns {number} -
 */
export function pow2i(n: number): number;
/**
 * Returns a slice of linear interpolation t * (h1 - h0)
 * @param {number} t - A value that linearly interpolates between the h0 parameter and the h1 parameter.
 * @param {number} h1 - End value.
 * @param {number} h0 - Start value.
 * @returns {number} -
 */
export function slice(t: number, h1: number, h0: number): number;
/**
 * Performs a linear interpolation.
 * @function
 * @param {number} t - A value that linearly interpolates between the h0 parameter and the h1 parameter.
 * @param {number} h1 - End value.
 * @param {number} h0 - Start value.
 * @returns {number} -
 */
export function lerp(t: number, h1: number, h0: number): number;
export function cube(f: any): number;
export function square(f: any): number;
export function bezier1v(t: any, p0: any, p1: any, p2: any, p3: any): number;
/**
 * Performs a 3D bezier interpolation.
 * @function
 * @param {number} t - Interpolation value.
 * @param {og.Vec3} p0 - First control point.
 * @param {og.Vec3} p1 - Second control point.
 * @param {og.Vec3} p2 - Third control point.
 * @param {og.Vec3} p3 - Fourth control point.
 * @returns {og.Vec3} -
 */
export function bezier3v(t: number, p0: any, p1: any, p2: any, p3: any): any;
/**
 * Clamp angle value within 360.
 * @function
 * @param {number} x - Input angle.
 * @returns {number} -
 */
export function rev(x: number): number;
/**
 * Clamp longitude within: -180 to +180 degrees.
 * @function
 * @param {number} lon - Longitude.
 * @returns {number} -
 */
export function norm_lon(lon: number): number;
/**
 * Returns an angle in the range -Pi <= angle <= Pi which is equivalent to the provided angle.
 * @function
 * @param {number} a - Angle in radians.
 * @returns {number} -
 */
export function negativePItoPI(a: number): number;
/**
 * Solve using iteration method and a fixed number of steps.
 * @function
 * @param {equationCallback} f - Equation. Used in Euler's equation(see og.orbit) solving.
 * @param {number} x0 - First approximation.
 * @param {number} maxIter - Maximum iterations.
 * @returns {number} -
 */
export function solve_iteration_fixed(f: equationCallback, x0: number, maxIter: number): number;
/**
 * Solve using iteration; terminate when error is below err or the maximum
 * number of iterations is reached. Used in Euler's equation(see og.orbit) solving.
 * @function
 * @param {equationCallback} f - Equation.
 * @param {number} x0 - First approximation.
 * @param {number} err - Maximal accepted error value.
 * @param {number} maxIter - Maximum iterations.
 * @returns {number} -
 */
export function solve_iteration(f: equationCallback, x0: number, err: number, maxIter: number): number;
/** @const */
export const TWO_PI: number;
/** @const */
export const PI_TWO: number;
export const X: 0;
export const Y: 1;
export const Z: 2;
export const W: 3;
export const MAX_FLOAT: number;
/** @const */
export const LOG2: number;
/** @const */
export const MAX32: 2147483647;
/** @const */
export const MAX: 549755748352;
/** @const */
export const MIN: number;
/** @const */
export const RADIANS: number;
/** @const */
export const DEGREES: number;
/** @const */
export const DEGREES_DOUBLE: number;
/** @const */
export const RADIANS_HALF: number;
/** @const */
export const ARCSECONDS_TO_RADIANS: 0.00000484813681109536;
/** @const */
export const RADIANS_TO_HOURS: 3.819718634205488;
/** @const */
export const HOURS_TO_RADIANS: 0.26179938779914946;
/** @const */
export const HOURS_TO_DEGREES: 15;
/** @const */
export const DEGREES_TO_HOURS: number;
/** @const */
export const SQRT_HALF: number;
export const EPSILON1: 0.1;
export const EPSILON2: 0.01;
export const EPSILON3: 0.001;
export const EPSILON4: 0.0001;
export const EPSILON5: 0.00001;
export const EPSILON6: 0.000001;
export const EPSILON7: 1e-7;
export const EPSILON8: 1e-8;
export const EPSILON9: 1e-9;
export const EPSILON10: 1e-10;
export const EPSILON11: 1e-11;
export const EPSILON12: 1e-12;
export const EPSILON13: 1e-13;
export const EPSILON14: 1e-14;
export const EPSILON15: 1e-15;
export const EPSILON16: 1e-16;
export const EPSILON17: 1e-17;
export const EPSILON18: 1e-18;
export const EPSILON19: 1e-19;
export const EPSILON20: 1e-20;
/**
 * Equation function.
 */
export type equationCallback = (x: number) => any;

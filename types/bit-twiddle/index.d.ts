export const INT_BITS: number;
export const INT_MAX: number;
export const INT_MIN: number;

/**
 * Computes the sign of the integer.
 */
export function sign(value: number): number;

/**
 * Returns the absolute value of the integer.
 */
export function abs(value: number): number;

/**
 * Computes the minimum of integers x and y.
 */
export function min(x: number, y: number): number;

/**
 * Computes the maximum of integers x and y.
 */
export function max(x: number, y: number): number;

/**
 * Returns true if value is a power of 2, otherwise false.
 */
export function isPow2(value: number): boolean;

/**
 * Returns an integer approximation of the log-base 2 of value.
 */
export function log2(value: number): number;

/**
 * Returns an integer approximation of the log-base 10 of value.
 */
export function log10(value: number): number;

/**
 * Counts the number of bits set in value.
 */
export function popCount(value: number): number;

/**
 * Counts the number of trailing zeros.
 */
export function countTrailingZeros(value: number): number;

/**
 * Rounds value up to the next power of 2.
 */
export function nextPow2(value: number): number;

/**
 * Rounds value down to the previous power of 2.
 */
export function prevPow2(value: number): number;

/**
 * Computes the parity of the bits in value.
 */
export function parity(value: number): number;

/**
 * Reverses the bits of value.
 */
export function reverse(value: number): number;

/**
 * Interleaves a pair of 16 bit integers. Useful for fast quadtree style indexing.
 * @see http://en.wikipedia.org/wiki/Z-order_curve
 */
export function interleave2(x: number, y: number): number;

/**
 * Deinterleaves the bits of value, returns the nth part.
 * If both x and y are 16 bit.
 */
export function deinterleave2(x: number, y: number): number;

/**
 * Interleaves a triple of 10 bit integers. Useful for fast octree indexing.
 */
export function interleave3(x: number, y: number, z: number): number;

/**
 * Same deal as deinterleave2, only for triples instead of pairs.
 */
export function deinterleave3(x: number, y: number): number;

/**
 * Returns next combination ordered colexicographically.
 */
export function nextCombination(x: number): number;

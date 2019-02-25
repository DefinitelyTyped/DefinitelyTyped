// Type definitions for mumath 3.3
// Project: https://github.com/dfcreative/mumath
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

/**
 * Detects proper clamp min/max.
 */
export function clamp(value: number, left: number, right: number): number;

/**
 * Get closest value out of a set.
 */
export function closest(value: number, list: number[]): number;

/**
 * Check if one number is multiple of other
 * Same as a % b === 0, but with precision check.
 */
export function isMultiple(a: number, b: number, eps?: number): boolean;

/**
 * Return quadratic length of a vector.
 */
export function len(a: number, b: number): number;

/**
 * Return value interpolated between x and y.
 */
export function lerp(x: number, y: number, ratio: number): number;

/**
 * An enhanced mod-loop, like fmod — loops value within a frame.
 */
export function mod(value: number, max: number, min?: number): number;

/**
 * Get order of magnitude for a number.
 */
export function order(value: number): number;

/**
 * Get precision from float:
 */
export function precision(value: number): number;

/**
 * Rounds value to optional step.
 */
export function round(value: number, step?: number): number;

/**
 * Get first scale out of a list of basic scales, aligned to the power. E. g.
 * step(.37, [1, 2, 5]) → .5 step(456, [1, 2]) → 1000
 * Similar to closest, but takes all possible powers of scales.
 */
export function scale(value: number, list: number[]): number;

/**
 * Whether element is between left & right, including.
 */
export function within(value: number, left: number, right: number): number;

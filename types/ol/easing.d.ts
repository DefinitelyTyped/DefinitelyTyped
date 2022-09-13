/**
 * Start slow and speed up.
 */
export function easeIn(t: number): number;
/**
 * Start fast and slow down.
 */
export function easeOut(t: number): number;
/**
 * Start slow, speed up, and then slow down again.
 */
export function inAndOut(t: number): number;
/**
 * Maintain a constant speed over time.
 */
export function linear(t: number): number;
/**
 * Start slow, speed up, and at the very end slow down again.  This has the
 * same general behavior as {@link module:ol/easing~inAndOut}, but the final
 * slowdown is delayed.
 */
export function upAndDown(t: number): number;

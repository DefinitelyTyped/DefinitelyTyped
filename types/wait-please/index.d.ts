/**
 * Wait for `n` microtask ticks.
 * Uses `queueMicrotask` or `Promise.resolve` ~ same as `process.nextTick` under the hood.
 *
 * @example
 * import { tick } from 'wait-please'
 *
 * await tick(3)
 */
export function tick(n?: number): Promise<void>;

/**
 * Wait for `n` animation frames. Uses `requestAnimationFrame` under the hood.
 *
 * @example
 * import { frame } from 'wait-please'
 *
 * await frame(3)
 */
export function frame(n?: number): Promise<void>;

/**
 * Wait for `n` milliseconds. Uses `setTimeout` under the hood.
 *
 * @example
 * import { time } from 'wait-please'
 *
 * await time(150)
 */
export function time(n?: number): Promise<void>;

/**
 * Wait for `n` macrotasks in task queue. Uses `requestIdleCallback` or `setImmediate` under the hood.
 *
 * @example
 * import { idle } from 'wait-please'
 *
 * await idle()
 */
export function idle(n?: number): Promise<void>;

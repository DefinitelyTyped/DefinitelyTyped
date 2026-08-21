/**
 * Schedules a callback to be invoked in the next tick.
 *
 * Uses `process.nextTick` when available (Node.js), falls back to
 * `queueMicrotask` or `Promise.resolve().then()` in browsers.
 *
 * @param callback - The function to call in the next tick
 *
 * @example
 * ```javascript
 * const nextTick = require('queue-tick');
 *
 * nextTick(() => {
 *   console.log('Called in next tick');
 * });
 * ```
 */
declare function nextTick(callback: () => void): void;

export = nextTick;

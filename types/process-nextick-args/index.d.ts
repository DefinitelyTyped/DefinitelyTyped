/**
 * A polyfill for `process.nextTick` that always supports passing arguments,
 * even on older Node.js versions.
 *
 * On modern Node.js, re-exports the native `process` object.
 * On older versions, provides a compatible `nextTick` implementation.
 */
export function nextTick(fn: (...args: any[]) => void, ...args: any[]): void;

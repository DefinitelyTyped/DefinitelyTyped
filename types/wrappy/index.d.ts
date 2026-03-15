/**
 * Callback wrapping utility that preserves own properties on wrapped functions.
 *
 * Can be called in two ways:
 * - `wrappy(fn)` returns a new function that wraps callbacks
 * - `wrappy(fn, cb)` wraps the callback immediately
 */
declare function wrappy<F extends (...args: any[]) => any>(fn: F): F;
declare function wrappy<F extends (...args: any[]) => any>(fn: (...args: any[]) => F, cb: F): F;

export = wrappy;

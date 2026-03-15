/**
 * A fast, tiny `queueMicrotask` shim for modern engines.
 *
 * Uses the native `queueMicrotask` when available, otherwise falls back
 * to using a resolved Promise.
 *
 * @param cb - Callback function to queue as a microtask
 */
declare function queueMicrotask(cb: () => void): void;

export = queueMicrotask;

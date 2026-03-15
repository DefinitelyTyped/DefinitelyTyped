/**
 * Prevent zalgo by ensuring that a callback is always called asynchronously.
 *
 * Wraps a callback function so that if it would be called synchronously,
 * it is deferred to the next tick instead.
 *
 * @param cb - Callback function to make safe from zalgo
 * @returns A wrapped version of the callback that is always called asynchronously
 */
declare function dezalgo<T extends (...args: any[]) => any>(cb: T): T;

export = dezalgo;

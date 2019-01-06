// Type definitions for yoctodelay 1.1
// Project: https://github.com/sindresorhus/yoctodelay#readme
// Definitions by: Sean Marvi Oliver Genabe <https://github.com/seangenabe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Delay the promise and then resolve.
 * @param ms Milliseconds to delay the promise.
 */
declare function delay(ms: number): Promise<void>;

export = delay;

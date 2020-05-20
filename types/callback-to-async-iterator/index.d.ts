// Type definitions for callback-to-async-iterator 1.1
// Project: https://github.com/withspectrum/callback-to-async-iterator#readme
// Definitions by: Zachary Svoboda <https://github.com/zacnomore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

export interface AsyncifyOptions<T> {
    onClose: () => void | T;
    onError: () => Error;
    buffering: boolean;
}

export function callbackToAsyncIterator<T>(
    listener: (callback: (message: T) => void) => void,
    options?: AsyncifyOptions<T>,
): AsyncIterator<T>;

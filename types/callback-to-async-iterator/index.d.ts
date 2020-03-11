// Type definitions for callback-to-async-iterator 1.1
// Project: https://github.com/withspectrum/callback-to-async-iterator#readme
// Definitions by: Zachary Svoboda <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface AsyncifyOptions<T> {
    onClose: () => void | T;
    onError: () => Error;
    buffering: boolean;
}

export function callbackToAsyncIterator<T>(listener: (callback: () => T) => void, options?: AsyncifyOptions<T>): AsyncIterator<T>;

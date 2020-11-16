// Type definitions for callback-to-async-iterator 1.1
// Project: https://github.com/withspectrum/callback-to-async-iterator#readme
// Definitions by: Zachary Svoboda <https://github.com/zacnomore>
//                 Affan Shahid <https://github.com/affanshahid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

export interface AsyncifyOptions<T, R> {
    onClose?: (arg: R) => void | T;
    onError?: () => Error;
    buffering?: boolean;
}

export default function callbackToAsyncIterator<T, R = void>(
    listener: (callback: (message: T) => void) => Promise<R>,
    options?: AsyncifyOptions<T, R>,
): AsyncIterator<T>;

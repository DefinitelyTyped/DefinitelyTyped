// Type definitions for promise-nodeify 3.0
// Project: https://github.com/kevinoid/promise-nodeify
// Definitions by: jgeth <https://github.com/jgeth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace promiseNodeify;

declare const promiseNodeify: {
    <T>(
        promise: Promise<T>,
        callback: (error: Error | undefined, value: T | undefined) => any
    ): Promise<T> | undefined;

    delegated<T>(
        promise: Promise<T>,
        callback: (error: Error | undefined, value: T | undefined) => any
    ): Promise<T> | undefined;

    nodeifyThis<T>(
        callback: (error: Error | undefined, value: T | undefined) => any
    ): Promise<T> | undefined;
};

export = promiseNodeify;

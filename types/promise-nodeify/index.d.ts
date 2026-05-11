export as namespace promiseNodeify;

declare const promiseNodeify: {
    <T>(
        promise: Promise<T>,
        callback: (error: Error | undefined, value: T | undefined) => any,
    ): Promise<T> | undefined;

    delegated<T>(
        promise: Promise<T>,
        callback: (error: Error | undefined, value: T | undefined) => any,
    ): Promise<T> | undefined;

    nodeifyThis<T>(
        callback: (error: Error | undefined, value: T | undefined) => any,
    ): Promise<T> | undefined;
};

export = promiseNodeify;

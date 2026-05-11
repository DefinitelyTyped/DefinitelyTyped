declare const niceTry: {
    <T>(fn: () => T): T | undefined;
    (val?: any): undefined;

    promise<T>(fn: (() => PromiseLike<T>) | (() => T)): Promise<T | undefined>;
    promise(val?: any): Promise<undefined>;
};

export = niceTry;

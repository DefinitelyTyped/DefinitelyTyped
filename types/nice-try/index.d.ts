// Type definitions for nice-try 2.1
// Project: https://github.com/electerious/nice-try
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const niceTry: {
    <T>(fn: () => T): T | undefined;
    (val?: any): undefined;

    promise<T>(fn: (() => PromiseLike<T>) | (() => T)): Promise<T | undefined>;
    promise(val?: any): Promise<undefined>;
};

export = niceTry;

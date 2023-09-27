// Type definitions for make-async-function 1.0
// Project: https://github.com/ljharb/make-async-function#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type AsyncFunction = (...args: unknown[]) => Promise<unknown>;

interface MakeAsyncFunction {
    (): AsyncFunction | undefined;
    list: () => readonly AsyncFunction[];
}

declare const makeAsyncFunction: MakeAsyncFunction;

export = makeAsyncFunction;

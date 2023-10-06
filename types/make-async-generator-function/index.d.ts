// Type definitions for make-async-generator-function 1.0
// Project: https://github.com/ljharb/make-async-generator-function#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type AsyncGeneratorFunction<T = unknown, TReturn = any, TNext = unknown> = (...args: unknown[]) => AsyncGenerator<T, TReturn, TNext>;

declare function makeAsyncGeneratorFunction(): readonly AsyncGeneratorFunction[];

export = makeAsyncGeneratorFunction;

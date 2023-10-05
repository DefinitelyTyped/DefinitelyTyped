// Type definitions for make-generator-function 2.0
// Project: https://github.com/ljharb/make-generator-function#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type GeneratorFunction<T = unknown, TReturn = any, TNext = unknown> = (...args: unknown[]) => Generator<T, TReturn, TNext>;

declare function makeGeneratorFunction(): readonly GeneratorFunction[];

export = makeGeneratorFunction;

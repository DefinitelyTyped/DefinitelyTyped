// Type definitions for es-get-iterator 1.1
// Project: https://github.com/ljharb/es-get-iterator#readme
// Definitions by: Jason Kwok <https://github.com/JasonHK>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

interface Iterable<T, TReturn = unknown, TNext = undefined> {
    [Symbol.iterator](): Iterator<T, TReturn, TNext>;
}

type InferIterable<T> = T extends Iterable<infer TYield, infer TReturn, infer TNext>
    ? Iterator<TYield, TReturn, TNext>
    : unknown extends T
        ? Iterator<unknown> | undefined
        : undefined;

declare function getIterator<T>(iterable: T): InferIterable<T>;

export = getIterator;

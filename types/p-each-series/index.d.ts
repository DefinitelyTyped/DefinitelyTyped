// Type definitions for p-each-series 1.0
// Project: https://github.com/sindresorhus/p-each-series#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = pEachSeries;

declare function pEachSeries<T>(input: Iterable<PromiseLike<T> | T>, iterator: (element: T, index: number) => any): Promise<T[]>;

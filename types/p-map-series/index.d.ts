// Type definitions for p-map-series 1.0
// Project: https://github.com/sindresorhus/p-map-series#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = pMapSeries;

declare function pMapSeries<T, U = T>(input: Iterable<PromiseLike<T> | T>, mapper: (element: T, index: number) => PromiseLike<U> | U): Promise<U[]>;

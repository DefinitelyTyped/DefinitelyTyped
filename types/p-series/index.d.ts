// Type definitions for p-series 1.0
// Project: https://github.com/sindresorhus/p-series#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = pSeries;

declare function pSeries<T>(tasks: Iterable<() => Promise<T> | T>): Promise<T[]>;

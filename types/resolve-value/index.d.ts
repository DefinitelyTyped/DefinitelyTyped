// Type definitions for resolve-value 1.0
// Project: https://github.com/jonschlinkert/resolve-value#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

type DeepResolved<T> =
  T extends PromiseLike<infer R>
    ? DeepResolved<R>
    : T extends object
      ? {
        [K in keyof T]: DeepResolved<T[K]>
      }
      : T;

declare function resolveValue<T>(boolean: T): Promise<DeepResolved<T>>;

export = resolveValue;

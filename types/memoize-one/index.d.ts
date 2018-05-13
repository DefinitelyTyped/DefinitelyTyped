// Type definitions for memoize-one 3.1
// Project: https://github.com/alexreardon/memoize-one#readme
// Definitions by: Karol Majewski <https://github.com/karol-majewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = memoizeOne;

declare function memoizeOne<T extends (...args: any[]) => any>(resultFn: T, isEqual?: memoizeOne.EqualityFn): T;

declare namespace memoizeOne {
    type EqualityFn = (a: any, b: any) => boolean;
}

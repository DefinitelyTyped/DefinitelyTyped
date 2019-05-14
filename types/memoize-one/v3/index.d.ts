// Type definitions for memoize-one 3.1
// Project: https://github.com/alexreardon/memoize-one#readme
// Definitions by: Karol Majewski <https://github.com/karol-majewski>, Frank Li <https://github.com/franklixuefei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function memoizeOne<T extends (...args: any[]) => any>(resultFn: T, isEqual?: EqualityFn): T;
export type EqualityFn = (a: any, b: any) => boolean;

export default memoizeOne;

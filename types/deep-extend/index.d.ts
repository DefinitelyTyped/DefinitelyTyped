// Type definitions for deep-extend 0.4
// Project: https://github.com/unclechu/node-deep-extend
// Definitions by: rhysd <https://github.com/rhysd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Recursive object extending. */
declare function deepExtend<T extends object, U extends object>(target: T, source: U): T & U;
declare function deepExtend<T extends object, U extends object, V extends object>(
    target: T,
    source1: U,
    source2: V,
): T & U & V;
declare function deepExtend<T extends object, U extends object, V extends object, W extends object>(
    target: T,
    source1: U,
    source2: V,
    source3: W,
): T & U & V & W;
declare function deepExtend(target: object, ...sources: object[]): object;
declare namespace deepExtend {}
export = deepExtend;

// Type definitions for deepmerge 1.3
// Project: https://github.com/KyleAMathews/deepmerge
// Definitions by: marvinscharle <https://github.com/marvinscharle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = deepmerge;

declare function deepmerge<T>(x: T, y: T, options?: deepmerge.Options<T>): T;

declare namespace deepmerge {
    interface Options<T> {
        clone?: boolean;
        arrayMerge?(destination: T, source: T, options?: Options<T>): T;
    }

    function all<T>(objects: T[], options?: Options<T>): T;
}

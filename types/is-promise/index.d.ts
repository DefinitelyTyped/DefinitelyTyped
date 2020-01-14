// Type definitions for is-promise 2.1
// Project: https://github.com/then/is-promise
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isPromise;

declare function isPromise<T = any>(obj: any): obj is PromiseLike<T>;

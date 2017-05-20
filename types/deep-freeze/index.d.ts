// Type definitions for deep-freeze 0.1
// Project: https://github.com/substack/deep-freeze
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = deepFreeze;

declare function deepFreeze<T>(a: T[]): ReadonlyArray<DeepReadonly<T>>;
declare function deepFreeze<T extends Function>(f: T): T;
declare function deepFreeze<T>(o: T): DeepReadonly<T>;

declare type DeepReadonly<T> = Readonly<{ [P in keyof T]: Readonly<T[P]> }>;

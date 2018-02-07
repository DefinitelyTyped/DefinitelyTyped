// Type definitions for deep-freeze 0.1
// Project: https://github.com/substack/deep-freeze
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Aluan Haddad <https://github.com/aluanhaddad>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = deepFreeze;

declare function deepFreeze<T>(a: T[]): ReadonlyArray<deepFreeze.DeepReadonly<T>>;
declare function deepFreeze<T extends Function>(f: T): T;
declare function deepFreeze<T>(o: T): deepFreeze.DeepReadonly<T>;

declare namespace deepFreeze {
    type DeepReadonly<T> = {
        readonly [P in keyof T]: DeepReadonly<T[P]>
    };
}

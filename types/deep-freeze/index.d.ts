export = deepFreeze;

declare function deepFreeze<T>(a: T[]): ReadonlyArray<deepFreeze.DeepReadonly<T>>;
declare function deepFreeze<T extends Function>(f: T): T;
declare function deepFreeze<T>(o: T): deepFreeze.DeepReadonly<T>;

declare namespace deepFreeze {
    type DeepReadonly<T> = T extends (...args: any) => any ? T
        : { readonly [P in keyof T]: DeepReadonly<T[P]> };
}

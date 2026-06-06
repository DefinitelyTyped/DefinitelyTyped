export = iterateObject;

type ArrayEntries<T extends unknown[], N extends 1 | 2 | 3> = {
    [P in keyof T]: N extends 1 ? [value: T[P]]
        : N extends 2 ? [value: T[P], index: P]
        : N extends 3 ? [value: T[P], index: P, arr: T]
        : never;
}[number];

type KeyValueEntries<
    T extends Record<string, unknown>,
    N extends 1 | 2 | 3,
> = {
    [P in keyof T]: N extends 1 ? [value: T[P]]
        : N extends 2 ? [value: T[P], key: P]
        : N extends 3 ? [value: T[P], key: P, obj: T]
        : never;
}[keyof T];

declare function iterateObject<O extends unknown[]>(
    obj: O,
    fn: (...args: ArrayEntries<O, 3>) => void,
): void;
declare function iterateObject<O extends unknown[]>(
    obj: O,
    // tslint:disable-next-line:unified-signatures
    fn: (...args: ArrayEntries<O, 2>) => void,
): void;
declare function iterateObject<O extends unknown[]>(
    obj: O,
    // tslint:disable-next-line:unified-signatures
    fn: (...args: ArrayEntries<O, 1>) => void,
): void;
declare function iterateObject<O extends Record<string, unknown>>(
    obj: O,
    fn: (...args: KeyValueEntries<O, 3>) => void,
): void;
declare function iterateObject<O extends Record<string, unknown>>(
    obj: O,
    // tslint:disable-next-line:unified-signatures
    fn: (...args: KeyValueEntries<O, 2>) => void,
): void;
declare function iterateObject<O extends Record<string, unknown>>(
    obj: O,
    // tslint:disable-next-line:unified-signatures
    fn: (...args: KeyValueEntries<O, 1>) => void,
): void;

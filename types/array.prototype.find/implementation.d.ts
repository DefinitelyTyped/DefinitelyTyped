declare function find<T, S extends T>(
    this: T[],
    predicate: (value: T, index: number, obj: T[]) => value is S,
    thisArg?: any,
): S | undefined;
declare function find<T>(
    predicate: (this: T[], value: T, index: number, obj: T[]) => unknown,
    thisArg?: any,
): T | undefined;

export = find;

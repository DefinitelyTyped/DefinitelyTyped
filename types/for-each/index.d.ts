declare function forEach<T = unknown, This = undefined>(
    arr: T[],
    callback: (this: This, value: T, index: number, array: T[]) => void,
    thisArg?: This,
): void;
declare function forEach<T = unknown, This = undefined>(
    arr: ArrayLike<T>,
    callback: (this: This, value: T, index: number, array: ArrayLike<T>) => void,
    thisArg?: This,
): void;
declare function forEach<V = unknown, K extends PropertyKey = PropertyKey, This = undefined>(
    obj: Record<K, V>,
    callback: (this: This, value: V, key: K, obj: Record<K, V>) => void,
    thisArg?: This,
): void;
declare function forEach<This = undefined>(
    str: string,
    callback: (this: This, value: string, index: number, str: string) => void,
    thisArg: This,
): void;

export = forEach;

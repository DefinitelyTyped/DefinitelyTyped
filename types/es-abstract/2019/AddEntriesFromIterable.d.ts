declare function AddEntriesFromIterable<T, K, V>(
    target: T,
    iterable: Iterable<readonly [K, V]>,
    adder: (this: T, key: K, value: V) => void,
): T;
export = AddEntriesFromIterable;

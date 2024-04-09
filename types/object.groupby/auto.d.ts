interface ObjectConstructor {
    /**
     * Returns an object that groups the iterable of the iterable object into arrays, using the return value of the callback function as the key.
     * @param iterable An iterable object
     * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in `iterable`.
     */
    groupBy<T, K extends PropertyKey>(
        iterable: Iterable<T>,
        callbackfn: (value: T, index: number) => K,
    ): Record<K, T[]>;

    /**
     * Returns an object that groups the iterable of the iterable object into arrays, using the return value of the callback function as the key.
     * @param iterable An iterable object
     * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in `iterable`.
     */
    groupBy(
        iterable: Iterable<unknown>,
        callbackfn: (value: unknown, index: number) => PropertyKey,
    ): Record<PropertyKey, unknown[]>;
}

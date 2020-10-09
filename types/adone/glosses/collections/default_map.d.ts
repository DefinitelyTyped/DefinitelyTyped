declare namespace adone.collection {
    /**
     * Represents a Map that has a default values factory object or function.
     * Each get of non-existent key goes through the factory
     */
    class DefaultMap<K = string, V = any> extends Map<K, V> {
        constructor(factory: ((key: K) => V) | { [key: string]: V } | undefined, iterable: Iterable<[K, V]>);
        constructor(factory: ((key: K) => V) | { [key: string]: V });
        constructor();
    }
}

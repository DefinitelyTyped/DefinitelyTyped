declare namespace adone.collection {
    class RefcountedCache<T = any> extends MapCache<T> {
        ref(key: string): void;

        unref(key: string): void;

        references(key: string): number;
    }
}

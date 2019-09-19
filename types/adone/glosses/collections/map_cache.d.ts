declare namespace adone.collection {
    class MapCache<T = any> {
        has(key: string): boolean;

        get(key: string): T;

        set(key: string, value: T): void;

        delete(key: string): void;

        clear(): void;
    }
}

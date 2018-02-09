declare namespace adone.collection {
    class NSCache<T = any> {
        constructor(size: number, namespaces: string[]);

        resize(newSize: number): void;

        set(ns: string, key: string, value: T): void;

        get(ns: string, key: string): T;

        has(ns: string, key: string): boolean;

        delete(ns: string, key: string): void;

        clear(): void;
    }
}

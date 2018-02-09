declare namespace adone.collection {
    class Set<T = any> {
        constructor(key?: (x: T) => any);

        has(value: T): boolean;

        add(value: T): void;

        delete(value: T): void;

        get(value: T): T; // ???

        readonly size: number;

        only(): T;
    }
}

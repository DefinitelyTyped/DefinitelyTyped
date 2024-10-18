declare module "bintrees" {
    type Callback<T> = (item: T) => void;
    type Comparator<T> = (a: T, b: T) => number;

    class Iterator<T> {
        constructor(tree: TreeBase<T>);

        data(): T | null;

        next(): T | null;

        prev(): T | null;
    }

    class TreeBase<T> {
        size: number;

        clear(): void;

        find(data: T): T | null;

        findIter(data: T): Iterator<T> | null;

        lowerBound(item: T): Iterator<T>;

        upperBound(item: T): Iterator<T>;

        min(): T | null;

        max(): T | null;

        iterator(): Iterator<T>;

        each(cb: Callback<T>): void;

        reach(cb: Callback<T>): void;
    }

    export class RBTree<T> extends TreeBase<T> {
        constructor(comparator: Comparator<T>);

        insert(item: T): boolean;

        remove(item: T): boolean;
    }

    export class BinTree<T> extends TreeBase<T> {
        constructor(comparator: Comparator<T>);

        insert(item: T): boolean;

        remove(item: T): boolean;
    }
}

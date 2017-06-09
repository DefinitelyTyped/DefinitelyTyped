// Type definitions for bintrees 1.0.1
// Project: https://github.com/vadimg/js_bintrees
// Definitions by: Cayle Sharrock <https://github.com/CjS77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'bintrees' {

    type Callback = <T>(item: T) => void;
    type Comparator = <T>(a: T, b: T) => number;

    class Iterator<T> {
        constructor(tree: TreeBase<T>);

        data(): T;

        next(): T;

        prev(): T;
    }

    class TreeBase<T> {
        size: number;

        clear(): void;

        find(data: T): T;

        findIter(data: T): Iterator<T>;

        lowerBound(item: T): Iterator<T>;

        upperBound(item: T): Iterator<T>;

        min(): T;

        max(): T;

        iterator(): Iterator<T>;

        each(cb: Callback): void;

        reach(cb: Callback): void;
    }


    export class RBTree<T> extends TreeBase<T> {
        constructor(comparator: Comparator);

        insert(item: T): boolean;

        remove(item: T): boolean;
    }

    export class BinTree<T> extends TreeBase<T> {
        constructor(comparator: Comparator);

        insert(item: T): boolean;

        remove(item: T): boolean;
    }
}

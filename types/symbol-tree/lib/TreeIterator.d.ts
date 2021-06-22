import SymbolTree = require('./SymbolTree');

declare namespace TreeIterator {
    /**
     * The iteration function to use.
     *
     * - `1`: Iterate previous sibling nodes.
     * - `2`: Iterate next sibling nodes.
     * - `3`: Iterate ancestor nodes.
     * - `4`: Iterate all tree-inclusive preceding nodes.
     * - `5`: Iterate all tree-inclusive following nodes.
     */
    type IterateFunction = 1 | 2 | 3 | 4 | 5;

    interface TreeIteratorResult<T> {
        done: boolean;
        value: T;
    }
}

declare class TreeIterator<T extends object = any> implements IterableIterator<T> {
    constructor(tree: SymbolTree, root: T, firstResult: T, iterateFunction: TreeIterator.IterateFunction);

    next(): TreeIterator.TreeIteratorResult<T>;

    [Symbol.iterator](): this;

    /** Iterate previous sibling nodes. */
    static readonly PREV: 1;

    /** Iterate next sibling nodes. */
    static readonly NEXT: 2;

    /** Iterate ancestor nodes. */
    static readonly PARENT: 3;

    /** Iterate all tree-inclusive preceding nodes. */
    static readonly PRECEDING: 4;

    /** Iterate all tree-inclusive following nodes. */
    static readonly FOLLOWING: 5;
}

export = TreeIterator;

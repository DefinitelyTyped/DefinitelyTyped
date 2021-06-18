// Type definitions for functional-red-black-tree 1.0
// Project: https://github.com/mikolalysenko/functional-red-black-tree
// Definitions by: Campbell Wass <https://github.com/CamWass>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace createRBTree {
    /** Represents a functional red-black tree. */
    interface Tree<K, V> {
        /** Returns the root node of the tree. */
        root: Node<K, V>;

        /** A sorted array of all keys in the tree. */
        readonly keys: K[];

        /** An array of all values in the tree, sorted by key. */
        readonly values: V[];

        /** The number of items in the tree. */
        readonly length: number;

        /**
         * Creates a new tree with the new `key/value` pair inserted.
         *
         * @param key The key of the item to insert.
         * @param value The value of the item to insert.
         * @returns A new tree with `key` and `value` inserted.
         */
        insert: (key: K, value: V) => Tree<K, V>;

        /**
         * Walks a visitor function over the nodes of the tree in order.
         *
         * @param visitor The callback to be executed on each node. If a truthy
         * value is returned from the visitor, then iteration is stopped.
         * @param lo An optional start of the range to visit (inclusive).
         * @param hi An optional end of the range to visit (non-inclusive).
         * @returns The last value returned by the callback.
         */
        forEach: {
            <T>(visitor: (key: K, value: V) => T): T;
            // tslint:disable-next-line:unified-signatures
            <T>(visitor: (key: K, value: V) => T, lo: K, hi?: K): T;
        };

        /** An iterator pointing to the first element in the tree. */
        readonly begin: Iterator<K, V>;

        /** An iterator pointing to the last element in the tree. */
        readonly end: Iterator<K, V>;

        /**
         * Finds an iterator starting at the given element.
         *
         * @param position The index at which the iterator gets created.
         * @returns An iterator starting at `position`.
         */
        at: (idx: number) => Iterator<K, V>;

        /**
         * Finds the first item in the tree whose key is >= `key`.
         *
         * @param key The key to search for.
         * @returns An iterator at the given element.
         */
        ge: (key: K) => Iterator<K, V>;

        /**
         * Finds the first item in the tree whose key is > `key`.
         *
         * @param key The key to search for.
         * @returns An iterator at the given element.
         */
        gt: (key: K) => Iterator<K, V>;

        /**
         * Finds the last item in the tree whose key is < `key`.
         *
         * @param key The key to search for.
         * @returns An iterator at the given element.
         */
        lt: (key: K) => Iterator<K, V>;

        /**
         * Finds the last item in the tree whose key is <= `key`.
         *
         * @param key The key to search for.
         * @returns An iterator at the given element.
         */
        le: (key: K) => Iterator<K, V>;

        /**
         * @returns An iterator pointing to the first item in the tree with `key`, otherwise null.
         */
        find: (key: K) => Iterator<K, V>;

        /**
         * Removes the first item with `key` in the tree.
         *
         * @param key The key of the item to remove.
         * @returns A new tree with the given item removed, if it exists.
         */
        remove: (key: K) => Tree<K, V>;

        /**
         * Retrieves the value associated with `key`.
         *
         * @param key The key of the item to look up.
         * @returns The value of the first node associated with `key`.
         */
        get: (key: K) => V | void;
    }

    /** Iterates through the nodes in a red-black tree. */
    interface Iterator<K, V> {
        /** The tree associated with the iterator. */
        tree: Tree<K, V>;

        /** Checks if the iterator is valid. */
        readonly valid: boolean;

        /**
         * The value of the node at the iterator's current position, or null if the
         * iterator is invalid.
         */
        readonly node: Node<K, V> | null;

        /** Makes a copy of the iterator. */
        clone: () => Iterator<K, V>;

        /**
         * Removes the iterator's current item form the tree.
         *
         * @returns A new binary search tree with the item removed.
         */
        remove: () => Tree<K, V>;

        /** The key of the iterator's current item. */
        readonly key?: K;

        /** The value of the iterator's current item. */
        readonly value?: V;

        /** Returns the position of the iterator in the sequence. */
        readonly index: number;

        /** Advances the iterator to the next position. */
        next: () => void;

        /** If true, then the iterator is not at the end of the sequence. */
        readonly hasNext: boolean;

        /**
         * Updates the value of the iterator's current item.
         *
         * @returns A new binary search tree with the corresponding node updated.
         */
        update: (value: V) => Tree<K, V>;

        /** Moves the iterator backward one element. */
        prev: () => void;

        /** If true, then the iterator is not at the beginning of the sequence. */
        readonly hasPrev: boolean;
    }

    /** Represents a node in a red-black tree. */
    interface Node<K, V> {
        /** The key associated with the node. */
        key: K;

        /** The value associated with the node. */
        value: V;

        /** The left subtree of the node. */
        left: Tree<K, V>;

        /** The right subtree of the node. */
        right: Tree<K, V>;
    }
}

/**
 * Creates an empty red-black tree.
 *
 * @param compare Optional comparison function, same semantics as array.sort().
 * @returns An empty tree ordered by `compare`.
 */
// tslint:disable-next-line:no-unnecessary-generics
declare function createRBTree<K, V>(compare?: (key1: K, key2: K) => number): createRBTree.Tree<K, V>;
export = createRBTree;

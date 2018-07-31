declare namespace adone.collection {
    namespace I.RedBlackTree {
        interface Node<K, V> {
            /**
             * The key associated to the node
             */
            key: K;

            /**
             * The value associated to the node
             */
            value: V;

            /**
             * The left subtree of the node
             */
            left?: Node<K, V>;

            /**
             * The right subtree of the node
             */
            right?: Node<K, V>;
        }

        interface Iterator<K, V> {
            /**
             * Checks if the iterator is valid
             */
            readonly valid: boolean;

            /**
             * The value of the node at the iterator's current position, null if invalid
             */
            readonly node: Node<K, V> | null;

            /**
             * The key of the item referenced by the iterator, undefined if invalid
             */
            readonly key?: K;

            /**
             * The value of the item referenced by the iterator, undefined if invalid
             */
            readonly value?: V;

            /**
             * Returns the position of this iterator in the sequence
             */
            readonly index: number;

            /**
             * If true, then the iterator is not at the end of the sequence
             */
            readonly hasNext: boolean;

            /**
             * If true, then the iterator is not at the beginning of the sequence
             */
            readonly hasPrev: boolean;

            /**
             * The tree associated to the iterator
             */
            tree: RedBlackTree<K, V>;

            /**
             * Makes a copy of the iterator
             */
            clone(): Iterator<K, V>;

            /**
             * Removes the item at the position of the iterator and returns a new rb-tree
             */
            remove(): RedBlackTree<K, V>;

            /**
             * Advances the iterator to the next position
             */
            next(): void;

            /**
             * Updates the value of the node in the tree at this iterator and returns a new rb-tree
             */
            update(value: V): RedBlackTree<K, V>;

            /**
             * Moves the iterator backward one element
             */
            prev(): void;
        }
    }

    /**
     * Represents a fully persistent red-black tree
     */
    class RedBlackTree<K = any, V = any> {
        /**
         * The root node of the tree
         */
        root: I.RedBlackTree.Node<K, V>;

        constructor(compare?: (a: K, b: K) => number, root?: RedBlackTree<K, V>);

        /**
         * A sorted array of all the keys in the tree
         */
        readonly keys: K[];

        /**
         * An array of all the values in the tree
         */
        readonly values: V[];

        /**
         * The number of items in the tree
         */
        readonly length: number;

        /**
         * An iterator pointing to the first element in the tree
         */
        readonly begin: I.RedBlackTree.Iterator<K, V>;

        /**
         * An iterator pointing to the last element in the tree
         */
        readonly end: I.RedBlackTree.Iterator<K, V>;

        /**
         * Creates a new tree with the new pair inserted
         */
        insert(key: K, value: V): RedBlackTree<K, V>;

        /**
         * Walks a visitor function over the nodes of the tree in order
         *
         * @param visit A callback that gets executed on each node.
         *              If a truthy value is returned from the visitor, then iteration is stopped.
         * @param lo An optional start of the range to visit (inclusive)
         * @param hi An optional end of the range to visit (non-inclusive)
         */
        forEach<T>(visit: (key: K, value: V) => T, lo?: K, hi?: K): T;

        /**
         * Finds an iterator starting at the given element
         */
        at(idx: number): I.RedBlackTree.Iterator<K, V>;

        /**
         * Finds the first item in the tree whose key is >= key
         */
        ge(key: K): I.RedBlackTree.Iterator<K, V>;

        /**
         * Finds the first item in the tree whose key is > key
         */
        gt(key: K): I.RedBlackTree.Iterator<K, V>;

        /**
         * Finds the first item in the tree whose key is < key
         */
        lt(key: K): I.RedBlackTree.Iterator<K, V>;

        /**
         * Finds the first item in the tree whose key is <= key
         */
        le(key: K): I.RedBlackTree.Iterator<K, V>;

        /**
         * Returns an iterator pointing to the first item in the tree with key, otherwise null
         */
        find(key: K): I.RedBlackTree.Iterator<K, V> | null;

        /**
         * Removes the first item with key in the tree
         */
        remove(key: K): RedBlackTree<K, V>;

        /**
         * Retrieves the value associated to the given key
         */
        get(key: K): V | undefined;
    }
}

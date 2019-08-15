declare namespace adone.collection {
    namespace I.BinarySearchTree {
        interface ConstructorOptions<K, V, Tree> {
            /**
             * The parent tree
             */
            parent?: Tree;

            /**
             * Value to keep in this node
             */
            value?: V;

            /**
             * WHether the values must be unique, false by default.
             * If false you can store many values for same keys, otherwise only one
             */
            unique?: boolean;

            /**
             * Custom keys comparator, by default if a > b => -1, a < b -1, a === b => 0
             */
            compareKeys?(a: K, b: K): number;

            /**
             * Function that defines whether 2 values are the same, by default a === b
             */
            checkValueEquality?(a: V, b: V): boolean;
        }

        interface Query<K> {
            $lt?: K;
            $lte?: K;
            $gt?: K;
            $gte?: K;
        }
    }

    /**
     * Represents a binary search tree
     */
    class BinarySearchTree<K = any, V = any> {
        constructor(options?: I.BinarySearchTree.ConstructorOptions<K, V, BinarySearchTree<K, V>>);

        /**
         * Returns the max descendant tree
         */
        getMaxKeyDescendant(): BinarySearchTree<K, V>;

        /**
         * Returns the maximum key
         */
        getMaxKey(): K;

        /**
         * Returns the min descendant tree
         */
        getMinKeyDescendant(): BinarySearchTree<K, V>;

        /**
         * Returns the minumum key
         */
        getMinKey(): K;

        /**
         * Traverses the tree and calls the given function for each node
         */
        checkAllNodesFullfillCondition(test: (key: K, value: V) => void): void;

        /**
         * Checks whether the tree is a binary search tree
         */
        checkIsBST(): void;

        /**
         * Returns the of keys in the tree
         */
        getNumberOfKeys(): number;

        /**
         * Inserts a new key/value
         */
        insert(key: K, value: V): void;

        /**
         * Searches the given key in the tree
         */
        search(key: K): V[];

        /**
         * Returns all the values from the given key bounds
         */
        betweenBounds(query: I.BinarySearchTree.Query<K>): V[];

        /**
         * Deletes the given key/value from the tree
         */
        delete(key: K, value?: V): void;

        /**
         * Executed the given callback for each node from left to right
         */
        executeOnEveryNode(fn: (tree: BinarySearchTree<K, V>) => void): void;

        /**
         * Prints the tree
         */
        prettyPrint(printData?: boolean, spacing?: string): void;
    }
}

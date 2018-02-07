declare namespace adone.collection {
    /**
     * Represents an AVL tree, a self-balancing binary search tree
     */
    class AVLTree<K = any, V = any> {
        constructor(options?: I.BinarySearchTree.ConstructorOptions<K, V, AVLTree<K, V>>);

        /**
         * Checks whether the tree is an avl tree
         */
        checkIsAVLT(): void;

        /**
         * Inserts a new key/value
         */
        insert(key: K, value: V): void;

        /**
         * Deletes the given key/value from the tree
         */
        delete(key: K, value?: V): void;

        /**
         * Returns the of keys in the tree
         */
        getNumberOFKeys(): number;

        /**
         * Searches the given key in the tree
         */
        search(key: K): V[];

        /**
         * Returns all the values from the given key bounds
         */
        betweenBounds(query: I.BinarySearchTree.Query<K>): V[];

        /**
         * Executed the given callback for each node from left to right
         */
        executeOnEveryNode(fn: (tree: AVLTree<K, V>) => void): void;

        /**
         * Prints the tree
         */
        prettyPrint(printDate?: boolean, spacing?: string): void;
    }
}

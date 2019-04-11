declare namespace adone.collection {
    namespace I.LinkedList {
        /**
         * Represents the node of a linked list
         */
        interface Node<T> {
            /**
             * The next node
             */
            next?: Node<T>;

            /**
             * The previous node
             */
            prev?: Node<T>;

            /**
             * The value this node contains
             */
            value: T;
        }
    }

    /**
     * Represents a linked list
     */
    class LinkedList<T = any> {
        /**
         * The maximum length of the list
         */
        readonly maxLength: number;

        /**
         * Current length of the list
         */
        readonly length: number;

        /**
         * Whether the list is autoresizable
         */
        readonly autoresize: boolean;

        /**
         * @param maxLength Maximum length of the linked list
         */
        constructor(maxLength?: number);

        /**
         * Whether the list is full
         */
        readonly full: boolean;

        /**
         * Whether the list is empty
         */
        readonly empty: boolean;

        /**
         * Resizes the list
         */
        resize(newLength: number): this;

        /**
         * Adds a new node to the end
         *
         * @returns Added node
         */
        push(value: T): I.LinkedList.Node<T>;

        /**
         * Removes the last node, returns undefined if the list is empty
         */
        pop(): T | undefined;

        /**
         * Removes the first node, returns undefined if the list is empty
         */
        shift(): T | undefined;

        /**
         * Inserts a new node at the beginning of the list
         *
         * @returns Added node
         */
        unshift(value: T): I.LinkedList.Node<T>;

        /**
         * Moves the given node to the end of the list
         */
        pushNode(node: I.LinkedList.Node<T>): void;

        /**
         * Moved the given node to the beginning of the list
         */
        unshiftNode(node: I.LinkedList.Node<T>): void;

        /**
         * Removes the given node from the list
         */
        removeNode(node: I.LinkedList.Node<T>): void;

        /**
         * Clears the list
         *
         * @param strong Whether to reset all the node's values
         */
        clear(strong?: boolean): void;

        /**
         * Convers the list to an array
         */
        toArray(): T[];

        /**
         * The first element of the list
         */
        readonly front: T;

        /**
         * The last element of the list
         */
        readonly back: T;

        /**
         * Returns an iterator over the list elements
         */
        [Symbol.iterator](): IterableIterator<T>;

        /**
         * Returns the next node for the given node
         */
        nextNode(node: I.LinkedList.Node<T>): I.LinkedList.Node<T>;

        /**
         * Maps this linked list to a new one using the given function
         */
        map<R>(fn: (value: T, index: number) => R): LinkedList<R>;

        /**
         * Invokes the given callback for each value from the beginning to the end (much faster than for-of).
         * If the given function returns false it stops iterating.
         */
        forEach(callback: (value: T, index: number) => void | boolean): void;

        /**
         * Default length of a new created linked list
         */
        static DEFAULT_LENGTH: number;
    }
}

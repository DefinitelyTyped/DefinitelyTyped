declare function traverse<T>(obj: T): traverse.Traverse<T>;

declare namespace traverse {
    /**
     * Get the element at the array `path`.
     */
    function get(obj: any, path: string[]): any;

    /**
     * Return whether the element at the array `path` exists.
     */
    function has(obj: any, path: string[]): boolean;

    /**
     * Set the element at the array `path` to `value`.
     */
    function set(obj: any, path: string[], value: any): any;

    /**
     * Execute `fn` for each node in the object and return a new object with the results of the walk. To update nodes in the result use `this.update(value)`.
     */
    function map(obj: any, cb: (this: TraverseContext, v: any) => void): any;

    /**
     * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
     */
    function forEach(obj: any, cb: (this: TraverseContext, v: any) => void): any;

    /**
     * For each node in the object, perform a [left-fold](http://en.wikipedia.org/wiki/Fold_(higher-order_function)) with the return value of `fn(acc, node)`.
     *
     * If `init` isn't specified, `init` is set to the root object for the first step and the root element is skipped.
     */
    function reduce(obj: any, cb: (this: TraverseContext, acc: any, v: any) => void, init?: any): any;

    /**
     * Return an `Array` of every possible non-cyclic path in the object.
     * Paths are `Array`s of string keys.
     */
    function paths(obj: any): string[][];

    /**
     * Return an `Array` of every node in the object.
     */
    function nodes(obj: any): any[];

    /**
     * Create a deep clone of the object.
     */
    function clone<T>(obj: T): T;

    interface Traverse<T> {
        /**
         * Get the element at the array `path`.
         */
        get(path: string[]): any;

        /**
         * Return whether the element at the array `path` exists.
         */
        has(path: string[]): boolean;

        /**
         * Set the element at the array `path` to `value`.
         */
        set(path: string[], value: any): any;

        /**
         * Execute `fn` for each node in the object and return a new object with the results of the walk. To update nodes in the result use `this.update(value)`.
         */
        map(cb: (this: TraverseContext, v: any) => void): any;

        /**
         * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
         */
        forEach(cb: (this: TraverseContext, v: any) => void): any;

        /**
         * For each node in the object, perform a [left-fold](http://en.wikipedia.org/wiki/Fold_(higher-order_function)) with the return value of `fn(acc, node)`.
         *
         * If `init` isn't specified, `init` is set to the root object for the first step and the root element is skipped.
         */
        reduce(cb: (this: TraverseContext, acc: any, v: any) => void, init?: any): any;

        /**
         * Return an `Array` of every possible non-cyclic path in the object.
         * Paths are `Array`s of string keys.
         */
        paths(): string[][];

        /**
         * Return an `Array` of every node in the object.
         */
        nodes(): any[];

        /**
         * Create a deep clone of the object.
         */
        clone(): T;
    }

    interface TraverseContext {
        /**
         * The present node on the recursive walk
         */
        node: any;

        /**
         * An array of string keys from the root to the present node
         */
        path: string[];

        /**
         * The context of the node's parent.
         * This is `undefined` for the root node.
         */
        parent: TraverseContext | undefined;

        /**
         * The contexts of the node's parents.
         */
        parents: TraverseContext[];

        /**
         * The name of the key of the present node in its parent.
         * This is `undefined` for the root node.
         */
        key: string | undefined;

        /**
         * Whether the present node is the root node
         */
        isRoot: boolean;
        /**
         * Whether the present node is not the root node
         */
        notRoot: boolean;

        /**
         * Whether or not the present node is a leaf node (has no children)
         */
        isLeaf: boolean;
        /**
         * Whether or not the present node is not a leaf node (has children)
         */
        notLeaf: boolean;

        /**
         * Depth of the node within the traversal
         */
        level: number;

        /**
         * If the node equals one of its parents, the `circular` attribute is set to the context of that parent and the traversal progresses no deeper.
         */
        circular: TraverseContext | undefined;

        /**
         * Set a new value for the present node.
         *
         * All the elements in `value` will be recursively traversed unless `stopHere` is true (false by default).
         */
        update(value: any, stopHere?: boolean): void;

        /**
         * Remove the current element from the output. If the node is in an Array it will be spliced off. Otherwise it will be deleted from its parent.
         */
        remove(stopHere?: boolean): void;

        /**
         * Delete the current element from its parent in the output. Calls `delete` even on Arrays.
         */
        delete(stopHere?: boolean): void;

        /**
         * Object keys of the node.
         */
        keys: string[] | null;

        /**
         * Call this function before all of the children are traversed.
         * You can assign into `this.keys` here to traverse in a custom order.
         */
        before(callback: (this: TraverseContext, value: any) => void): void;

        /**
         * Call this function after all of the children are traversed.
         */
        after(callback: (this: TraverseContext, value: any) => void): void;

        /**
         * Call this function before each of the children are traversed.
         */
        pre(callback: (this: TraverseContext, child: any) => void): void;

        /**
         * Call this function after each of the children are traversed.
         */
        post(callback: (this: TraverseContext, child: any) => void): void;

        /**
         * Stops traversal entirely.
         */
        stop(): void;

        /**
         * Prevents traversing descendents of the current node.
         */
        block(): void;
    }
}

export = traverse;

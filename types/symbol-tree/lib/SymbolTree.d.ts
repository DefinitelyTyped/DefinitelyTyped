import TreeIterator = require('./TreeIterator');
import TreePosition = require('./TreePosition');

declare namespace SymbolTree {
    interface SiblingOptions<T extends object = any> {
        /**
         * Used to constrain the operation to a subtree.
         *
         * When `null`, the whole tree is walked to the real root.
         *
         * @default null
         */
        root?: T | null;

        /**
         * If set, ignore the children of `object`
         *
         * @default false
         */
        skipChildren?: boolean;
    }

    interface ToArrayOptions<T extends object = any> {
        /**
         * The array to initialize the operation with.
         *
         * @default
         * ```ts
         * new Array(0);
         * ```
         */
        array?: T[];

        /**
         * Function to test each object before it is added to the array.
         * Invoked with arguments (object).
         *
         * Should return `true` if an object is to be included.
         *
         * @param object
         */
        filter?(object: T): any;

        /** Value to use as `this` when executing `filter`. */
        thisArg?: any;
    }

    interface IteratorOptions {
        /**
         * Whether to iterate in reverse tree order.
         *
         * @default false
         */
        reverse?: boolean;
    }
}

declare class SymbolTree<T extends object = any> {
    static readonly TreePosition: typeof TreePosition;

    /**
     * @param [description='SymbolTree data'] Description used for the Symbol
     *
     *        **Default:** `'SymbolTree data'`
     */
    constructor(description?: string);

    /**
     * You can use this function to (optionally) initialize an object right after its creation,
     * to take advantage of V8's fast properties. Also useful if you would like to
     * freeze your object.
     *
     * * `O(1)`
     */
    initialize<O extends T | null | undefined>(object: O): O;

    /**
     * Returns `true` if the object has any children. Otherwise it returns `false`.
     *
     * * `O(1)`
     */
    hasChildren(object: T): boolean;

    /**
     * Returns the first child of the given object.
     *
     * * `O(1)`
     */
    firstChild(object: T): T | null;

    /**
     * Returns the last child of the given object.
     *
     * * `O(1)`
     */
    lastChild(object: T): T | null;

    /**
     * Returns the previous sibling of the given object.
     *
     * * `O(1)`
     */
    previousSibling(object: T): T | null;

    /**
     * Returns the next sibling of the given object.
     *
     * * `O(1)`
     */
    nextSibling(object: T): T | null;

    /**
     * Return the parent of the given object.
     *
     * * `O(1)`
     */
    parent(object: T): T | null;

    /**
     * Find the inclusive descendant that is last in tree order of the given object.
     *
     * * `O(n)` (worst case) where `n` is the depth of the subtree of `object`
     */
    lastInclusiveDescendant(object: T): T | null;

    /**
     * Find the preceding object (A) of the given object (B).
     * An object A is preceding an object B if A and B are in the same tree
     * and A comes before B in tree order.
     *
     * * `O(n)` (worst case)
     * * `O(1)` (amortized when walking the entire tree)
     */
    preceding(object: T, options?: SymbolTree.SiblingOptions<T>): T | null;

    /**
     * Find the following object (A) of the given object (B).
     * An object A is following an object B if A and B are in the same tree
     * and A comes after B in tree order.
     *
     * * `O(n)` (worst case) where `n` is the amount of objects in the entire tree
     * * `O(1)` (amortized when walking the entire tree)
     */
    following(object: T, options?: SymbolTree.SiblingOptions<T>): T | null;

    /**
     * Append all children of the given object to an array.
     *
     * * `O(n)` where `n` is the amount of children of the given `parent`
     */
    childrenToArray<THIS>(
        parent: T,
        options?: SymbolTree.ToArrayOptions<T> & {
            thisArg: THIS;
            filter(this: THIS, object: T): any;
        },
    ): T[];
    childrenToArray(parent: T, options?: SymbolTree.ToArrayOptions<T>): T[];

    /**
     * Append all inclusive ancestors of the given object to an array.
     *
     * * `O(n)` where `n` is the amount of ancestors of the given `object`
     */
    ancestorsToArray<THIS>(
        object: T,
        options?: SymbolTree.ToArrayOptions<T> & {
            thisArg: THIS;
            filter(this: THIS, object: T): any;
        },
    ): T[];
    ancestorsToArray(object: T, options?: SymbolTree.ToArrayOptions<T>): T[];

    /**
     * Append all descendants of the given object to an array (in tree order).
     *
     * * `O(n)` where `n` is the amount of objects in the sub-tree of the given `object`
     */
    treeToArray<THIS>(
        object: T,
        options?: SymbolTree.ToArrayOptions<T> & {
            thisArg: THIS;
            filter(this: THIS, object: T): any;
        },
    ): T[];
    treeToArray(object: T, options?: SymbolTree.ToArrayOptions<T>): T[];

    /**
     * Iterate over all children of the given object
     *
     * * `O(1)` for a single iteration
     *
     * @return An iterable iterator (ES6)
     */
    childrenIterator(parent: T, options?: SymbolTree.IteratorOptions): TreeIterator<T>;

    /**
     * Iterate over all the previous siblings of the given object. (in reverse tree order)
     *
     * * `O(1)` for a single iteration
     *
     * @return An iterable iterator (ES6)
     */
    previousSiblingsIterator(object: T): TreeIterator<T>;

    /**
     * Iterate over all the next siblings of the given object. (in tree order)
     *
     * * `O(1)` for a single iteration
     *
     * @return An iterable iterator (ES6)
     */
    nextSiblingsIterator(object: T): TreeIterator<T>;

    /**
     * Iterate over all inclusive ancestors of the given object
     *
     * * `O(1)` for a single iteration
     *
     * @return An iterable iterator (ES6)
     */
    ancestorsIterator(object: T): TreeIterator<T>;

    /**
     * Iterate over all descendants of the given object (in tree order).
     *
     * Where `n` is the amount of objects in the sub-tree of the given `root`:
     *
     * * `O(n)` (worst case for a single iteration)
     * * `O(n)` (amortized, when completing the iterator)
     *
     * @return An iterable iterator (ES6)
     */
    treeIterator(object: T, options?: SymbolTree.IteratorOptions): TreeIterator<T>;

    /**
     * Find the index of the given object (the number of preceding siblings).
     *
     * * `O(n)` where `n` is the amount of preceding siblings
     * * `O(1)` (amortized, if the tree is not modified)
     *
     * @return The number of preceding siblings, or -1 if the object has no parent
     */
    index(object: T): number;

    /**
     * Calculate the number of children.
     *
     * * `O(n)` where `n` is the amount of children
     * * `O(1)` (amortized, if the tree is not modified)
     */
    childrenCount(object: T): number;

    /**
     * Compare the position of an object relative to another object. A bit set is returned:
     *
     * <ul>
     *     <li>DISCONNECTED : 1</li>
     *     <li>PRECEDING : 2</li>
     *     <li>FOLLOWING : 4</li>
     *     <li>CONTAINS : 8</li>
     *     <li>CONTAINED_BY : 16</li>
     * </ul>
     *
     * The semantics are the same as compareDocumentPosition in DOM, with the exception that
     * DISCONNECTED never occurs with any other bit.
     *
     * where `n` and `m` are the amount of ancestors of `left` and `right`;
     * where `o` is the amount of children of the lowest common ancestor of `left` and `right`:
     *
     * * `O(n + m + o)` (worst case)
     * * `O(n + m)` (amortized, if the tree is not modified)
     */
    compareTreePosition(left: T, right: T): number;

    /**
     * Remove the object from this tree.
     * Has no effect if already removed.
     *
     * * `O(1)`
     */
    remove<U extends T>(object: U): U;

    /**
     * Insert the given object before the reference object.
     * `newObject` is now the previous sibling of `referenceObject`.
     *
     * * `O(1)`
     *
     * @throws {Error} If the newObject is already present in this SymbolTree
     */
    insertBefore<U extends T>(referenceObject: T, newObject: U): U;

    /**
     * Insert the given object after the reference object.
     * `newObject` is now the next sibling of `referenceObject`.
     *
     * * `O(1)`
     *
     * @throws {Error} If the newObject is already present in this SymbolTree
     */
    insertAfter<U extends T>(referenceObject: T, newObject: U): U;

    /**
     * Insert the given object as the first child of the given reference object.
     * `newObject` is now the first child of `referenceObject`.
     *
     * * `O(1)`
     *
     * @throws {Error} If the newObject is already present in this SymbolTree
     */
    prependChild<U extends T>(referenceObject: T, newObject: U): U;

    /**
     * Insert the given object as the last child of the given reference object.
     * `newObject` is now the last child of `referenceObject`.
     *
     * * `O(1)`
     *
     * @throws {Error} If the newObject is already present in this SymbolTree
     */
    appendChild<U extends T>(referenceObject: T, newObject: U): U;
}

export = SymbolTree;

declare module goog {
    function require(name: 'goog.structs.AvlTree'): typeof goog.structs.AvlTree;
    function require(name: 'goog.structs.AvlTree.Node'): typeof goog.structs.AvlTree.Node;
}

declare module goog.structs {

    /**
     * Constructs an AVL-Tree, which uses the specified comparator to order its
     * values. The values can be accessed efficiently in their sorted order since
     * the tree enforces a O(logn) maximum height.
     *
     * @param {Function=} opt_comparator Function used to order the tree's nodes.
     * @constructor
     * @implements {goog.structs.Collection<T>}
     * @final
     * @template T
     */
    class AvlTree<T> {
        constructor(opt_comparator?: Function);
        
        /**
         * Inserts a node into the tree with the specified value if the tree does
         * not already contain a node with the specified value. If the value is
         * inserted, the tree is balanced to enforce the AVL-Tree height property.
         *
         * @param {T} value Value to insert into the tree.
         * @return {boolean} Whether value was inserted into the tree.
         * @override
         */
        add(value: T): boolean;
        
        /**
         * Removes a node from the tree with the specified value if the tree contains a
         * node with this value. If a node is removed the tree is balanced to enforce
         * the AVL-Tree height property. The value of the removed node is returned.
         *
         * @param {T} value Value to find and remove from the tree.
         * @return {T} The value of the removed node or null if the value was not in
         *     the tree.
         * @override
         */
        remove(value: T): T;
        
        /**
         * Removes all nodes from the tree.
         */
        clear(): void;
        
        /**
         * Returns true if the tree contains a node with the specified value, false
         * otherwise.
         *
         * @param {T} value Value to find in the tree.
         * @return {boolean} Whether the tree contains a node with the specified value.
         * @override
         */
        contains(value: T): boolean;
        
        /**
         * Returns the index (in an in-order traversal) of the node in the tree with
         * the specified value. For example, the minimum value in the tree will
         * return an index of 0 and the maximum will return an index of n - 1 (where
         * n is the number of nodes in the tree).  If the value is not found then -1
         * is returned.
         *
         * @param {T} value Value in the tree whose in-order index is returned.
         * @return {!number} The in-order index of the given value in the
         *     tree or -1 if the value is not found.
         */
        indexOf(value: T): number;
        
        /**
         * Returns the number of values stored in the tree.
         *
         * @return {number} The number of values stored in the tree.
         * @override
         */
        getCount(): number;
        
        /**
         * Returns a k-th smallest value, based on the comparator, where 0 <= k <
         * this.getCount().
         * @param {number} k The number k.
         * @return {T} The k-th smallest value.
         */
        getKthValue(k: number): T;
        
        /**
         * Returns the value u, such that u is contained in the tree and u < v, for all
         * values v in the tree where v != u.
         *
         * @return {T} The minimum value contained in the tree.
         */
        getMinimum(): T;
        
        /**
         * Returns the value u, such that u is contained in the tree and u > v, for all
         * values v in the tree where v != u.
         *
         * @return {T} The maximum value contained in the tree.
         */
        getMaximum(): T;
        
        /**
         * Returns the height of the tree (the maximum depth). This height should
         * always be <= 1.4405*(Math.log(n+2)/Math.log(2))-1.3277, where n is the
         * number of nodes in the tree.
         *
         * @return {number} The height of the tree.
         */
        getHeight(): number;
        
        /**
         * Inserts the values stored in the tree into a new Array and returns the Array.
         *
         * @return {!Array<T>} An array containing all of the trees values in sorted
         *     order.
         */
        getValues(): Array<T>;
        
        /**
         * Performs an in-order traversal of the tree and calls {@code func} with each
         * traversed node, optionally starting from the smallest node with a value >= to
         * the specified start value. The traversal ends after traversing the tree's
         * maximum node or when {@code func} returns a value that evaluates to true.
         *
         * @param {Function} func Function to call on each traversed node.
         * @param {Object=} opt_startValue If specified, traversal will begin on the
         *    node with the smallest value >= opt_startValue.
         */
        inOrderTraverse(func: Function, opt_startValue?: Object): void;
        
        /**
         * Performs a reverse-order traversal of the tree and calls {@code func} with
         * each traversed node, optionally starting from the largest node with a value
         * <= to the specified start value. The traversal ends after traversing the
         * tree's minimum node or when func returns a value that evaluates to true.
         *
         * @param {function(T):?} func Function to call on each traversed node.
         * @param {Object=} opt_startValue If specified, traversal will begin on the
         *    node with the largest value <= opt_startValue.
         */
        reverseOrderTraverse(func: (arg0: T) => any, opt_startValue?: Object): void;
    }
}

declare module goog.structs.AvlTree {

    /**
     * Constructs an AVL-Tree node with the specified value. If no parent is
     * specified, the node's parent is assumed to be null. The node's height
     * defaults to 1 and its children default to null.
     *
     * @param {T} value Value to store in the node.
     * @param {goog.structs.AvlTree.Node<T>=} opt_parent Optional parent node.
     * @constructor
     * @final
     * @template T
     */
    class Node<T> {
        constructor(value: T, opt_parent?: goog.structs.AvlTree.Node<T>);
        
        /**
         * The node's left child. Null if the node does not have a left child.
         *
         * @type {?goog.structs.AvlTree.Node<T>}
         */
        left: goog.structs.AvlTree.Node<T>;
        
        /**
         * The node's right child. Null if the node does not have a right child.
         *
         * @type {?goog.structs.AvlTree.Node<T>}
         */
        right: goog.structs.AvlTree.Node<T>;
        
        /**
         * The height of the tree rooted at this node.
         *
         * @type {number}
         */
        height: number;
        
        /**
         * Returns true iff the specified node has a parent and is the right child of
         * its parent.
         *
         * @return {boolean} Whether the specified node has a parent and is the right
         *    child of its parent.
         */
        isRightChild(): boolean;
        
        /**
         * Returns true iff the specified node has a parent and is the left child of
         * its parent.
         *
         * @return {boolean} Whether the specified node has a parent and is the left
         *    child of its parent.
         */
        isLeftChild(): boolean;
    }
}

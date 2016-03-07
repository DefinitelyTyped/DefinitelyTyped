declare module goog {
    function require(name: 'goog.structs.TreeNode'): typeof goog.structs.TreeNode;
}

declare module goog.structs {

    /**
     * Generic tree node data structure with arbitrary number of child nodes.
     * It is possible to create a dynamic tree structure by overriding
     * {@link #getParent} and {@link #getChildren} in a subclass. All other getters
     * will automatically work.
     *
     * @param {KEY} key Key.
     * @param {VALUE} value Value.
     * @constructor
     * @extends {goog.structs.Node<KEY, VALUE>}
     * @template KEY, VALUE
     */
    class TreeNode<KEY, VALUE> extends goog.structs.Node<KEY, VALUE> {
        constructor(key: KEY, value: VALUE);
        
        /**
         * @return {!goog.structs.TreeNode} Clone of the tree node without its parent
         *     and child nodes. The key and the value are copied by reference.
         * @override
         */
        clone(): goog.structs.TreeNode<any, any>;
        
        /**
         * @return {!goog.structs.TreeNode} Clone of the subtree with this node as root.
         */
        deepClone(): goog.structs.TreeNode<any, any>;
        
        /**
         * @return {goog.structs.TreeNode<KEY, VALUE>} Parent node or null if it has no
         *     parent.
         */
        getParent(): goog.structs.TreeNode<KEY, VALUE>;
        
        /**
         * @return {boolean} Whether the node is a leaf node.
         */
        isLeaf(): boolean;
        
        /**
         * Tells if the node is the last child of its parent. This method helps how to
         * connect the tree nodes with lines: L shapes should be used before the last
         * children and |- shapes before the rest. Schematic tree visualization:
         *
         * <pre>
         * Node1
         * |-Node2
         * | L-Node3
         * |   |-Node4
         * |   L-Node5
         * L-Node6
         * </pre>
         *
         * @return {boolean} Whether the node has parent and is the last child of it.
         */
        isLastChild(): boolean;
        
        /**
         * @return {!Array<!goog.structs.TreeNode<KEY, VALUE>>} Immutable child nodes.
         */
        getChildren(): Array<goog.structs.TreeNode<KEY, VALUE>>;
        
        /**
         * Gets the child node of this node at the given index.
         * @param {number} index Child index.
         * @return {goog.structs.TreeNode<KEY, VALUE>} The node at the given index or
         *     null if not found.
         */
        getChildAt(index: number): goog.structs.TreeNode<KEY, VALUE>;
        
        /**
         * @return {number} The number of children.
         */
        getChildCount(): number;
        
        /**
         * @return {number} The number of ancestors of the node.
         */
        getDepth(): number;
        
        /**
         * @return {!Array<!goog.structs.TreeNode<KEY, VALUE>>} All ancestor nodes in
         *     bottom-up order.
         */
        getAncestors(): Array<goog.structs.TreeNode<KEY, VALUE>>;
        
        /**
         * @return {!goog.structs.TreeNode<KEY, VALUE>} The root of the tree structure,
         *     i.e. the farthest ancestor of the node or the node itself if it has no
         *     parents.
         */
        getRoot(): goog.structs.TreeNode<KEY, VALUE>;
        
        /**
         * Builds a nested array structure from the node keys in this node's subtree to
         * facilitate testing tree operations that change the hierarchy.
         * @return {!Array<KEY>} The structure of this node's descendants as nested
         *     array of node keys. The number of unclosed opening brackets up to a
         *     particular node is proportional to the indentation of that node in the
         *     graphical representation of the tree. Example:
         *     <pre>
         *       this
         *       |- child1
         *       |  L- grandchild
         *       L- child2
         *     </pre>
         *     is represented as ['child1', ['grandchild'], 'child2'].
         */
        getSubtreeKeys(): Array<KEY>;
        
        /**
         * Tells whether this node is the ancestor of the given node.
         * @param {!goog.structs.TreeNode<KEY, VALUE>} node A node.
         * @return {boolean} Whether this node is the ancestor of {@code node}.
         */
        contains(node: goog.structs.TreeNode<KEY, VALUE>): boolean;
        
        /**
         * Finds the deepest common ancestor of the given nodes. The concept of
         * ancestor is not strict in this case, it includes the node itself.
         * @param {...!goog.structs.TreeNode<KEY, VALUE>} var_args The nodes.
         * @return {goog.structs.TreeNode<KEY, VALUE>} The common ancestor of the nodes
         *     or null if they are from different trees.
         * @template KEY, VALUE
         */
        static findCommonAncestor<KEY, VALUE>(...var_args: goog.structs.TreeNode<KEY, VALUE>[]): goog.structs.TreeNode<KEY, VALUE>;
        
        /**
         * Returns a node whose key matches the given one in the hierarchy rooted at
         * this node. The hierarchy is searched using an in-order traversal.
         * @param {KEY} key The key to search for.
         * @return {goog.structs.TreeNode<KEY, VALUE>} The node with the given key, or
         *     null if no node with the given key exists in the hierarchy.
         */
        getNodeByKey(key: KEY): goog.structs.TreeNode<KEY, VALUE>;
        
        /**
         * Traverses all child nodes.
         * @param {function(this:THIS, !goog.structs.TreeNode<KEY, VALUE>, number,
         *     !Array<!goog.structs.TreeNode<KEY, VALUE>>)} f Callback function. It
         *     takes the node, its index and the array of all child nodes as arguments.
         * @param {THIS=} opt_this The object to be used as the value of {@code this}
         *     within {@code f}.
         * @template THIS
         */
        forEachChild<THIS>(f: (arg0: goog.structs.TreeNode<KEY, VALUE>, arg1: number, arg2: Array<goog.structs.TreeNode<KEY, VALUE>>) => any, opt_this?: THIS): void;
        
        /**
         * Traverses all child nodes recursively in preorder.
         * @param {function(this:THIS, !goog.structs.TreeNode<KEY, VALUE>)} f Callback
         *     function.  It takes the node as argument.
         * @param {THIS=} opt_this The object to be used as the value of {@code this}
         *     within {@code f}.
         * @template THIS
         */
        forEachDescendant<THIS>(f: (arg0: goog.structs.TreeNode<KEY, VALUE>) => any, opt_this?: THIS): void;
        
        /**
         * Traverses the subtree with the possibility to skip branches. Starts with
         * this node, and visits the descendant nodes depth-first, in preorder.
         * @param {function(this:THIS, !goog.structs.TreeNode<KEY, VALUE>):
         *     (boolean|undefined)} f Callback function. It takes the node as argument.
         *     The children of this node will be visited if the callback returns true or
         *     undefined, and will be skipped if the callback returns false.
         * @param {THIS=} opt_this The object to be used as the value of {@code this}
         *     within {@code f}.
         * @template THIS
         */
        traverse<THIS>(f: (arg0: goog.structs.TreeNode<KEY, VALUE>) => boolean|void, opt_this?: THIS): void;
        
        /**
         * Sets the parent node of this node. The callers must ensure that the parent
         * node and only that has this node among its children.
         * @param {goog.structs.TreeNode<KEY, VALUE>} parent The parent to set. If
         *     null, the node will be detached from the tree.
         * @protected
         */
        setParent(parent: goog.structs.TreeNode<KEY, VALUE>): void;
        
        /**
         * Appends a child node to this node.
         * @param {!goog.structs.TreeNode<KEY, VALUE>} child Orphan child node.
         */
        addChild(child: goog.structs.TreeNode<KEY, VALUE>): void;
        
        /**
         * Inserts a child node at the given index.
         * @param {!goog.structs.TreeNode<KEY, VALUE>} child Orphan child node.
         * @param {number} index The position to insert at.
         */
        addChildAt(child: goog.structs.TreeNode<KEY, VALUE>, index: number): void;
        
        /**
         * Replaces a child node at the given index.
         * @param {!goog.structs.TreeNode<KEY, VALUE>} newChild Child node to set. It
         *     must not have parent node.
         * @param {number} index Valid index of the old child to replace.
         * @return {!goog.structs.TreeNode<KEY, VALUE>} The original child node,
         *     detached from its parent.
         */
        replaceChildAt(newChild: goog.structs.TreeNode<KEY, VALUE>, index: number): goog.structs.TreeNode<KEY, VALUE>;
        
        /**
         * Replaces the given child node.
         * @param {!goog.structs.TreeNode<KEY, VALUE>} newChild New node to replace
         *     {@code oldChild}. It must not have parent node.
         * @param {!goog.structs.TreeNode<KEY, VALUE>} oldChild Existing child node to
         *     be replaced.
         * @return {!goog.structs.TreeNode<KEY, VALUE>} The replaced child node
         *     detached from its parent.
         */
        replaceChild(newChild: goog.structs.TreeNode<KEY, VALUE>, oldChild: goog.structs.TreeNode<KEY, VALUE>): goog.structs.TreeNode<KEY, VALUE>;
        
        /**
         * Removes the child node at the given index.
         * @param {number} index The position to remove from.
         * @return {goog.structs.TreeNode<KEY, VALUE>} The removed node if any.
         */
        removeChildAt(index: number): goog.structs.TreeNode<KEY, VALUE>;
        
        /**
         * Removes the given child node of this node.
         * @param {goog.structs.TreeNode<KEY, VALUE>} child The node to remove.
         * @return {goog.structs.TreeNode<KEY, VALUE>} The removed node if any.
         */
        removeChild(child: goog.structs.TreeNode<KEY, VALUE>): goog.structs.TreeNode<KEY, VALUE>;
        
        /**
         * Removes all child nodes of this node.
         */
        removeChildren(): void;
    }
}

declare module goog {
    function require(name: 'goog.editor.node'): typeof goog.editor.node;
}

declare module goog.editor.node {

    /**
     * Check if the node is in a standards mode document.
     * @param {Node} node The node to test.
     * @return {boolean} Whether the node is in a standards mode document.
     */
    function isStandardsMode(node: Node): boolean;

    /**
     * Get the right-most non-ignorable leaf node of the given node.
     * @param {Node} parent The parent ndoe.
     * @return {Node} The right-most non-ignorable leaf node.
     */
    function getRightMostLeaf(parent: Node): Node;

    /**
     * Get the left-most non-ignorable leaf node of the given node.
     * @param {Node} parent The parent ndoe.
     * @return {Node} The left-most non-ignorable leaf node.
     */
    function getLeftMostLeaf(parent: Node): Node;

    /**
     * Version of firstChild that skips nodes that are entirely
     * whitespace and comments.
     * @param {Node} parent The reference node.
     * @return {Node} The first child of sibling that is important according to
     *     goog.editor.node.isImportant, or null if no such node exists.
     */
    function getFirstChild(parent: Node): Node;

    /**
     * Version of lastChild that skips nodes that are entirely whitespace or
     * comments.  (Normally lastChild is a property of all DOM nodes that gives the
     * last of the nodes contained directly in the reference node.)
     * @param {Node} parent The reference node.
     * @return {Node} The last child of sibling that is important according to
     *     goog.editor.node.isImportant, or null if no such node exists.
     */
    function getLastChild(parent: Node): Node;

    /**
     * Version of previoussibling that skips nodes that are entirely
     * whitespace or comments.  (Normally previousSibling is a property
     * of all DOM nodes that gives the sibling node, the node that is
     * a child of the same parent, that occurs immediately before the
     * reference node.)
     * @param {Node} sibling The reference node.
     * @return {Node} The closest previous sibling to sibling that is
     *     important according to goog.editor.node.isImportant, or null if no such
     *     node exists.
     */
    function getPreviousSibling(sibling: Node): Node;

    /**
     * Version of nextSibling that skips nodes that are entirely whitespace or
     * comments.
     * @param {Node} sibling The reference node.
     * @return {Node} The closest next sibling to sibling that is important
     *     according to goog.editor.node.isImportant, or null if no
     *     such node exists.
     */
    function getNextSibling(sibling: Node): Node;

    /**
     * Determine if a node should be returned by the iterator functions.
     * @param {Node} node An object implementing the DOM1 Node interface.
     * @return {boolean} Whether the node is an element, or a text node that
     *     is not all whitespace.
     */
    function isImportant(node: Node): boolean;

    /**
     * Determine whether a node's text content is entirely whitespace.
     * @param {Node} textNode A node implementing the CharacterData interface (i.e.,
     *     a Text, Comment, or CDATASection node.
     * @return {boolean} Whether the text content of node is whitespace,
     *     otherwise false.
     */
    function isAllNonNbspWhiteSpace(textNode: Node): boolean;

    /**
     * Returns true if the node contains only whitespace and is not and does not
     * contain any images, iframes or embed tags.
     * @param {Node} node The node to check.
     * @param {boolean=} opt_prohibitSingleNbsp By default, this function treats a
     *     single nbsp as empty.  Set this to true to treat this case as non-empty.
     * @return {boolean} Whether the node contains only whitespace.
     */
    function isEmpty(node: Node, opt_prohibitSingleNbsp?: boolean): boolean;

    /**
     * Returns the length of the text in node if it is a text node, or the number
     * of children of the node, if it is an element. Useful for range-manipulation
     * code where you need to know the offset for the right side of the node.
     * @param {Node} node The node to get the length of.
     * @return {number} The length of the node.
     */
    function getLength(node: Node): number;

    /**
     * Search child nodes using a predicate function and return the first node that
     * satisfies the condition.
     * @param {Node} parent The parent node to search.
     * @param {function(Node):boolean} hasProperty A function that takes a child
     *    node as a parameter and returns true if it meets the criteria.
     * @return {?number} The index of the node found, or null if no node is found.
     */
    function findInChildren(parent: Node, hasProperty: (arg0: Node) => boolean): number;

    /**
     * Search ancestor nodes using a predicate function and returns the topmost
     * ancestor in the chain of consecutive ancestors that satisfies the condition.
     *
     * @param {Node} node The node whose ancestors have to be searched.
     * @param {function(Node): boolean} hasProperty A function that takes a parent
     *     node as a parameter and returns true if it meets the criteria.
     * @return {Node} The topmost ancestor or null if no ancestor satisfies the
     *     predicate function.
     */
    function findHighestMatchingAncestor(node: Node, hasProperty: (arg0: Node) => boolean): Node;

    /**
    * Checks if node is a block-level html element. The <tt>display</tt> css
     * property is ignored.
     * @param {Node} node The node to test.
     * @return {boolean} Whether the node is a block-level node.
     */
    function isBlockTag(node: Node): boolean;

    /**
     * Skips siblings of a node that are empty text nodes.
     * @param {Node} node A node. May be null.
     * @return {Node} The node or the first sibling of the node that is not an
     *     empty text node. May be null.
     */
    function skipEmptyTextNodes(node: Node): Node;

    /**
     * Checks if an element is a top-level editable container (meaning that
     * it itself is not editable, but all its child nodes are editable).
     * @param {Node} element The element to test.
     * @return {boolean} Whether the element is a top-level editable container.
     */
    function isEditableContainer(element: Node): boolean;

    /**
     * Checks if a node is inside an editable container.
     * @param {Node} node The node to test.
     * @return {boolean} Whether the node is in an editable container.
     */
    function isEditable(node: Node): boolean;

    /**
     * Finds the top-most DOM node inside an editable field that is an ancestor
     * (or self) of a given DOM node and meets the specified criteria.
     * @param {Node} node The DOM node where the search starts.
     * @param {function(Node) : boolean} criteria A function that takes a DOM node
     *     as a parameter and returns a boolean to indicate whether the node meets
     *     the criteria or not.
     * @return {Node} The DOM node if found, or null.
     */
    function findTopMostEditableAncestor(node: Node, criteria: (arg0: Node) => boolean): Node;

    /**
     * Splits off a subtree.
     * @param {!Node} currentNode The starting splitting point.
     * @param {Node=} opt_secondHalf The initial leftmost leaf the new subtree.
     *     If null, siblings after currentNode will be placed in the subtree, but
     *     no additional node will be.
     * @param {Node=} opt_root The top of the tree where splitting stops at.
     * @return {!Node} The new subtree.
     */
    function splitDomTreeAt(currentNode: Node, opt_secondHalf?: Node, opt_root?: Node): Node;

    /**
     * Appends all of oldNode's children to newNode. This removes all children from
     * oldNode and appends them to newNode. oldNode is left with no children.
     * @param {!Node} newNode Node to transfer children to.
     * @param {Node} oldNode Node to transfer children from.
     * @deprecated Use goog.dom.append directly instead.
     */
    function transferChildren(newNode: Node, oldNode: Node): void;

    /**
     * Replaces the innerHTML of a node.
     *
     * IE has serious problems if you try to set innerHTML of an editable node with
     * any selection. Early versions of IE tear up the old internal tree storage, to
     * help avoid ref-counting loops. But this sometimes leaves the selection object
     * in a bad state and leads to segfaults.
     *
     * Removing the nodes first prevents IE from tearing them up. This is not
     * strictly necessary in nodes that do not have the selection. You should always
     * use this function when setting innerHTML inside of a field.
     *
     * @param {Node} node A node.
     * @param {string} html The innerHTML to set on the node.
     */
    function replaceInnerHtml(node: Node, html: string): void;
}

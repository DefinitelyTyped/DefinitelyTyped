declare module goog {
    function require(name: 'goog.dom.TagWalkType'): typeof goog.dom.TagWalkType;
    function require(name: 'goog.dom.TagIterator'): typeof goog.dom.TagIterator;
}

declare module goog.dom {

    /**
     * There are three types of token:
     *  <ol>
     *    <li>{@code START_TAG} - The beginning of a tag.
     *    <li>{@code OTHER} - Any non-element node position.
     *    <li>{@code END_TAG} - The end of a tag.
     *  </ol>
     * Users of this enumeration can rely on {@code START_TAG + END_TAG = 0} and
     * that {@code OTHER = 0}.
     *
     * @enum {number}
     */
    type TagWalkType = number;
    var TagWalkType: {
        START_TAG: TagWalkType;
        OTHER: TagWalkType;
        END_TAG: TagWalkType;
    };

    /**
     * A DOM tree traversal iterator.
     *
     * Starting with the given node, the iterator walks the DOM in order, reporting
     * events for the start and end of Elements, and the presence of text nodes. For
     * example:
     *
     * <pre>
     * &lt;div&gt;1&lt;span&gt;2&lt;/span&gt;3&lt;/div&gt;
     * </pre>
     *
     * Will return the following nodes:
     *
     * <code>[div, 1, span, 2, span, 3, div]</code>
     *
     * With the following states:
     *
     * <code>[START, OTHER, START, OTHER, END, OTHER, END]</code>
     *
     * And the following depths
     *
     * <code>[1, 1, 2, 2, 1, 1, 0]</code>
     *
     * Imagining <code>|</code> represents iterator position, the traversal stops at
     * each of the following locations:
     *
     * <pre>
     * &lt;div&gt;|1|&lt;span&gt;|2|&lt;/span&gt;|3|&lt;/div&gt;|
     * </pre>
     *
     * The iterator can also be used in reverse mode, which will return the nodes
     * and states in the opposite order.  The depths will be slightly different
     * since, like in normal mode, the depth is computed *after* the given node.
     *
     * Lastly, it is possible to create an iterator that is unconstrained, meaning
     * that it will continue iterating until the end of the document instead of
     * until exiting the start node.
     *
     * @param {Node=} opt_node The start node.  If unspecified or null, defaults to
     *     an empty iterator.
     * @param {boolean=} opt_reversed Whether to traverse the tree in reverse.
     * @param {boolean=} opt_unconstrained Whether the iterator is not constrained
     *     to the starting node and its children.
     * @param {goog.dom.TagWalkType?=} opt_tagType The type of the position.
     *     Defaults to the start of the given node for forward iterators, and
     *     the end of the node for reverse iterators.
     * @param {number=} opt_depth The starting tree depth.
     * @constructor
     * @extends {goog.iter.Iterator<Node>}
     */
    class TagIterator extends goog.iter.Iterator<Node> {
        constructor(opt_node?: Node, opt_reversed?: boolean, opt_unconstrained?: boolean, opt_tagType?: goog.dom.TagWalkType, opt_depth?: number);
        
        /**
         * The node this position is located on.
         * @type {Node}
         */
        node: Node;
        
        /**
         * The type of this position.
         * @type {goog.dom.TagWalkType}
         */
        tagType: goog.dom.TagWalkType;
        
        /**
         * The tree depth of this position relative to where the iterator started.  The
         * depth is considered to be the tree depth just past the current node, so if an
         * iterator is at position <pre>
         *     <div>|</div>
         * </pre>
         * (i.e. the node is the div and the type is START_TAG) its depth will be 1.
         * @type {number}
         */
        depth: number;
        
        /**
         * Whether the node iterator is moving in reverse.
         * @type {boolean}
         */
        reversed: boolean;
        
        /**
         * Whether the iterator is constrained to the starting node and its children.
         * @type {boolean}
         */
        constrained: boolean;
        
        /**
         * Set the position of the iterator.  Overwrite the tree node and the position
         * type which can be one of the {@link goog.dom.TagWalkType} token types.
         * Only overwrites the tree depth when the parameter is specified.
         * @param {Node} node The node to set the position to.
         * @param {goog.dom.TagWalkType?=} opt_tagType The type of the position
         *     Defaults to the start of the given node.
         * @param {number=} opt_depth The tree depth.
         */
        setPosition(node: Node, opt_tagType?: goog.dom.TagWalkType, opt_depth?: number): void;
        
        /**
         * Replace this iterator's values with values from another. The two iterators
         * must be of the same type.
         * @param {goog.dom.TagIterator} other The iterator to copy.
         * @protected
         */
        copyFrom(other: goog.dom.TagIterator): void;
        
        /**
         * @return {!goog.dom.TagIterator} A copy of this iterator.
         */
        clone(): goog.dom.TagIterator;
        
        /**
         * Skip the current tag.
         */
        skipTag(): void;
        
        /**
         * Restart the current tag.
         */
        restartTag(): void;
        
        /**
         * Move to the next position in the DOM tree.
         * @return {Node} Returns the next node, or throws a goog.iter.StopIteration
         *     exception if the end of the iterator's range has been reached.
         * @override
         */
        next(): Node;
        
        /**
         * @return {boolean} Whether next has ever been called on this iterator.
         * @protected
         */
        isStarted(): boolean;
        
        /**
         * @return {boolean} Whether this iterator's position is a start tag position.
         */
        isStartTag(): boolean;
        
        /**
         * @return {boolean} Whether this iterator's position is an end tag position.
         */
        isEndTag(): boolean;
        
        /**
         * @return {boolean} Whether this iterator's position is not at an element node.
         */
        isNonElement(): boolean;
        
        /**
         * Test if two iterators are at the same position - i.e. if the node and tagType
         * is the same.  This will still return true if the two iterators are moving in
         * opposite directions or have different constraints.
         * @param {goog.dom.TagIterator} other The iterator to compare to.
         * @return {boolean} Whether the two iterators are at the same position.
         */
        equals(other: goog.dom.TagIterator): boolean;
        
        /**
         * Replace the current node with the list of nodes. Reset the iterator so that
         * it visits the first of the nodes next.
         * @param {...Object} var_args A list of nodes to replace the current node with.
         *     If the first argument is array-like, it will be used, otherwise all the
         *     arguments are assumed to be nodes.
         */
        splice(...var_args: Object[]): void;
    }
}

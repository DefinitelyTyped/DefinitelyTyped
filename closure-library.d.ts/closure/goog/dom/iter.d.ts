declare module goog {
    function require(name: 'goog.dom.iter.SiblingIterator'): typeof goog.dom.iter.SiblingIterator;
    function require(name: 'goog.dom.iter.ChildIterator'): typeof goog.dom.iter.ChildIterator;
    function require(name: 'goog.dom.iter.AncestorIterator'): typeof goog.dom.iter.AncestorIterator;
}

declare module goog.dom.iter {

    /**
     * Iterator over a Node's siblings.
     * @param {Node} node The node to start with.
     * @param {boolean=} opt_includeNode Whether to return the given node as the
     *     first return value from next.
     * @param {boolean=} opt_reverse Whether to traverse siblings in reverse
     *     document order.
     * @constructor
     * @extends {goog.iter.Iterator}
     */
    class SiblingIterator extends goog.iter.Iterator<any> {
        constructor(node: Node, opt_includeNode?: boolean, opt_reverse?: boolean);
    }

    /**
     * Iterator over an Element's children.
     * @param {Element} element The element to iterate over.
     * @param {boolean=} opt_reverse Optionally traverse children from last to
     *     first.
     * @param {number=} opt_startIndex Optional starting index.
     * @constructor
     * @extends {goog.dom.iter.SiblingIterator}
     * @final
     */
    class ChildIterator extends goog.dom.iter.SiblingIterator {
        constructor(element: Element, opt_reverse?: boolean, opt_startIndex?: number);
    }

    /**
     * Iterator over a Node's ancestors, stopping after the document body.
     * @param {Node} node The node to start with.
     * @param {boolean=} opt_includeNode Whether to return the given node as the
     *     first return value from next.
     * @constructor
     * @extends {goog.iter.Iterator}
     * @final
     */
    class AncestorIterator extends goog.iter.Iterator<any> {
        constructor(node: Node, opt_includeNode?: boolean);
    }
}

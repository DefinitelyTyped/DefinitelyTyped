declare module goog {
    function require(name: 'goog.dom.browserrange.AbstractRange'): typeof goog.dom.browserrange.AbstractRange;
}

declare module goog.dom.browserrange {

    /**
     * The constructor for abstract ranges.  Don't call this from subclasses.
     * @constructor
     */
    class AbstractRange {
        constructor();
        
        /**
         * @return {goog.dom.browserrange.AbstractRange} A clone of this range.
         */
        clone(): goog.dom.browserrange.AbstractRange;
        
        /**
         * Returns the browser native implementation of the range.  Please refrain from
         * using this function - if you find you need the range please add wrappers for
         * the functionality you need rather than just using the native range.
         * @return {Range|TextRange} The browser native range object.
         */
        getBrowserRange(): Range|TextRange;
        
        /**
         * Returns the deepest node in the tree that contains the entire range.
         * @return {Node} The deepest node that contains the entire range.
         */
        getContainer(): Node;
        
        /**
         * Returns the node the range starts in.
         * @return {Node} The element or text node the range starts in.
         */
        getStartNode(): Node;
        
        /**
         * Returns the offset into the node the range starts in.
         * @return {number} The offset into the node the range starts in.  For text
         *     nodes, this is an offset into the node value.  For elements, this is
         *     an offset into the childNodes array.
         */
        getStartOffset(): number;
        
        /**
         * @return {goog.math.Coordinate} The coordinate of the selection start node
         *     and offset.
         */
        getStartPosition(): goog.math.Coordinate;
        
        /**
         * Returns the node the range ends in.
         * @return {Node} The element or text node the range ends in.
         */
        getEndNode(): Node;
        
        /**
         * Returns the offset into the node the range ends in.
         * @return {number} The offset into the node the range ends in.  For text
         *     nodes, this is an offset into the node value.  For elements, this is
         *     an offset into the childNodes array.
         */
        getEndOffset(): number;
        
        /**
         * @return {goog.math.Coordinate} The coordinate of the selection end node
         *     and offset.
         */
        getEndPosition(): goog.math.Coordinate;
        
        /**
         * Compares one endpoint of this range with the endpoint of another browser
         * native range object.
         * @param {Range|TextRange} range The browser native range to compare against.
         * @param {goog.dom.RangeEndpoint} thisEndpoint The endpoint of this range
         *     to compare with.
         * @param {goog.dom.RangeEndpoint} otherEndpoint The endpoint of the other
         *     range to compare with.
         * @return {number} 0 if the endpoints are equal, negative if this range
         *     endpoint comes before the other range endpoint, and positive otherwise.
         */
        compareBrowserRangeEndpoints(range: Range|TextRange, thisEndpoint: goog.dom.RangeEndpoint, otherEndpoint: goog.dom.RangeEndpoint): number;
        
        /**
         * Tests if this range contains the given range.
         * @param {goog.dom.browserrange.AbstractRange} abstractRange The range to test.
         * @param {boolean=} opt_allowPartial If not set or false, the range must be
         *     entirely contained in the selection for this function to return true.
         * @return {boolean} Whether this range contains the given range.
         */
        containsRange(abstractRange: goog.dom.browserrange.AbstractRange, opt_allowPartial?: boolean): boolean;
        
        /**
         * Tests if this range contains the given node.
         * @param {Node} node The node to test.
         * @param {boolean=} opt_allowPartial If not set or false, the node must be
         *     entirely contained in the selection for this function to return true.
         * @return {boolean} Whether this range contains the given node.
         */
        containsNode(node: Node, opt_allowPartial?: boolean): boolean;
        
        /**
         * Tests if the selection is collapsed - i.e. is just a caret.
         * @return {boolean} Whether the range is collapsed.
         */
        isCollapsed(): boolean;
        
        /**
         * @return {string} The text content of the range.
         */
        getText(): string;
        
        /**
         * Returns the HTML fragment this range selects.  This is slow on all browsers.
         * @return {string} HTML fragment of the range, does not include context
         *     containing elements.
         */
        getHtmlFragment(): string;
        
        /**
         * Returns valid HTML for this range.  This is fast on IE, and semi-fast on
         * other browsers.
         * @return {string} Valid HTML of the range, including context containing
         *     elements.
         */
        getValidHtml(): string;
        
        /**
         * Returns a RangeIterator over the contents of the range.  Regardless of the
         * direction of the range, the iterator will move in document order.
         * @param {boolean=} opt_keys Unused for this iterator.
         * @return {!goog.dom.RangeIterator} An iterator over tags in the range.
         */
        __iterator__(opt_keys?: boolean): goog.dom.RangeIterator;
        
        /**
         * Set this range as the selection in its window.
         * @param {boolean=} opt_reverse Whether to select the range in reverse,
         *     if possible.
         */
        select(opt_reverse?: boolean): void;
        
        /**
         * Removes the contents of the range from the document.  As a side effect, the
         * selection will be collapsed.  The behavior of content removal is normalized
         * across browsers.  For instance, IE sometimes creates extra text nodes that
         * a W3C browser does not.  That behavior is corrected for.
         */
        removeContents(): void;
        
        /**
         * Surrounds the text range with the specified element (on Mozilla) or with a
         * clone of the specified element (on IE).  Returns a reference to the
         * surrounding element if the operation was successful; returns null if the
         * operation failed.
         * @param {Element} element The element with which the selection is to be
         *    surrounded.
         * @return {Element} The surrounding element (same as the argument on Mozilla,
         *    but not on IE), or null if unsuccessful.
         */
        surroundContents(element: Element): Element;
        
        /**
         * Inserts a node before (or after) the range.  The range may be disrupted
         * beyond recovery because of the way this splits nodes.
         * @param {Node} node The node to insert.
         * @param {boolean} before True to insert before, false to insert after.
         * @return {Node} The node added to the document.  This may be different
         *     than the node parameter because on IE we have to clone it.
         */
        insertNode(node: Node, before: boolean): Node;
        
        /**
         * Surrounds this range with the two given nodes.  The range may be disrupted
         * beyond recovery because of the way this splits nodes.
         * @param {Element} startNode The node to insert at the start.
         * @param {Element} endNode The node to insert at the end.
         */
        surroundWithNodes(startNode: Element, endNode: Element): void;
        
        /**
         * Collapses the range to one of its boundary points.
         * @param {boolean} toStart Whether to collapse to the start of the range.
         */
        collapse(toStart: boolean): void;
    }
}

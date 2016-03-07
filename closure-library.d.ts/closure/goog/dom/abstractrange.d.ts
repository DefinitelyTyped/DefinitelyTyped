declare module goog {
    function require(name: 'goog.dom.RangeType'): typeof goog.dom.RangeType;
    function require(name: 'goog.dom.AbstractRange'): typeof goog.dom.AbstractRange;
    function require(name: 'goog.dom.RangeIterator'): typeof goog.dom.RangeIterator;
}

declare module goog.dom {

    /**
     * Types of ranges.
     * @enum {string}
     */
    type RangeType = string;
    var RangeType: {
        TEXT: RangeType;
        CONTROL: RangeType;
        MULTI: RangeType;
    };

    /**
     * Creates a new selection with no properties.  Do not use this constructor -
     * use one of the goog.dom.Range.from* methods instead.
     * @constructor
     */
    class AbstractRange {
        constructor();
        
        /**
         * Gets the browser native selection object from the given window.
         * @param {Window} win The window to get the selection object from.
         * @return {Object} The browser native selection object, or null if it could
         *     not be retrieved.
         */
        static getBrowserSelectionForWindow(win: Window): Object;
        
        /**
         * Tests if the given Object is a controlRange.
         * @param {Object} range The range object to test.
         * @return {boolean} Whether the given Object is a controlRange.
         */
        static isNativeControlRange(range: Object): boolean;
        
        /**
         * @return {!goog.dom.AbstractRange} A clone of this range.
         */
        clone(): goog.dom.AbstractRange;
        
        /**
         * @return {goog.dom.RangeType} The type of range represented by this object.
         */
        getType(): goog.dom.RangeType;
        
        /**
         * @return {Range|TextRange} The native browser range object.
         */
        getBrowserRangeObject(): Range|TextRange;
        
        /**
         * Sets the native browser range object, overwriting any state this range was
         * storing.
         * @param {Range|TextRange} nativeRange The native browser range object.
         * @return {boolean} Whether the given range was accepted.  If not, the caller
         *     will need to call goog.dom.Range.createFromBrowserRange to create a new
         *     range object.
         */
        setBrowserRangeObject(nativeRange: Range|TextRange): boolean;
        
        /**
         * @return {number} The number of text ranges in this range.
         */
        getTextRangeCount(): number;
        
        /**
         * Get the i-th text range in this range.  The behavior is undefined if
         * i >= getTextRangeCount or i < 0.
         * @param {number} i The range number to retrieve.
         * @return {goog.dom.TextRange} The i-th text range.
         */
        getTextRange(i: number): goog.dom.TextRange;
        
        /**
         * Gets an array of all text ranges this range is comprised of.  For non-multi
         * ranges, returns a single element array containing this.
         * @return {!Array<goog.dom.TextRange>} Array of text ranges.
         */
        getTextRanges(): Array<goog.dom.TextRange>;
        
        /**
         * @return {Node} The deepest node that contains the entire range.
         */
        getContainer(): Node;
        
        /**
         * Returns the deepest element in the tree that contains the entire range.
         * @return {Element} The deepest element that contains the entire range.
         */
        getContainerElement(): Element;
        
        /**
         * @return {Node} The element or text node the range starts in.  For text
         *     ranges, the range comprises all text between the start and end position.
         *     For other types of range, start and end give bounds of the range but
         *     do not imply all nodes in those bounds are selected.
         */
        getStartNode(): Node;
        
        /**
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
         * @return {Node} The element or text node the range ends in.
         */
        getEndNode(): Node;
        
        /**
         * @return {number} The offset into the node the range ends in.  For text
         *     nodes, this is an offset into the node value.  For elements, this is
         *     an offset into the childNodes array.
         */
        getEndOffset(): number;
        
        /**
         * @return {goog.math.Coordinate} The coordinate of the selection end
         *     node and offset.
         */
        getEndPosition(): goog.math.Coordinate;
        
        /**
         * @return {Node} The element or text node the range is anchored at.
         */
        getAnchorNode(): Node;
        
        /**
         * @return {number} The offset into the node the range is anchored at.  For
         *     text nodes, this is an offset into the node value.  For elements, this
         *     is an offset into the childNodes array.
         */
        getAnchorOffset(): number;
        
        /**
         * @return {Node} The element or text node the range is focused at - i.e. where
         *     the cursor is.
         */
        getFocusNode(): Node;
        
        /**
         * @return {number} The offset into the node the range is focused at - i.e.
         *     where the cursor is.  For text nodes, this is an offset into the node
         *     value.  For elements, this is an offset into the childNodes array.
         */
        getFocusOffset(): number;
        
        /**
         * @return {boolean} Whether the selection is reversed.
         */
        isReversed(): boolean;
        
        /**
         * @return {!Document} The document this selection is a part of.
         */
        getDocument(): Document;
        
        /**
         * @return {!Window} The window this selection is a part of.
         */
        getWindow(): Window;
        
        /**
         * Tests if this range contains the given range.
         * @param {goog.dom.AbstractRange} range The range to test.
         * @param {boolean=} opt_allowPartial If true, the range can be partially
         *     contained in the selection, otherwise the range must be entirely
         *     contained.
         * @return {boolean} Whether this range contains the given range.
         */
        containsRange(range: goog.dom.AbstractRange, opt_allowPartial?: boolean): boolean;
        
        /**
         * Tests if this range contains the given node.
         * @param {Node} node The node to test for.
         * @param {boolean=} opt_allowPartial If not set or false, the node must be
         *     entirely contained in the selection for this function to return true.
         * @return {boolean} Whether this range contains the given node.
         */
        containsNode(node: Node, opt_allowPartial?: boolean): boolean;
        
        /**
         * Tests whether this range is valid (i.e. whether its endpoints are still in
         * the document).  A range becomes invalid when, after this object was created,
         * either one or both of its endpoints are removed from the document.  Use of
         * an invalid range can lead to runtime errors, particularly in IE.
         * @return {boolean} Whether the range is valid.
         */
        isRangeInDocument(): boolean;
        
        /**
         * @return {boolean} Whether the range is collapsed.
         */
        isCollapsed(): boolean;
        
        /**
         * @return {string} The text content of the range.
         */
        getText(): string;
        
        /**
         * Returns the HTML fragment this range selects.  This is slow on all browsers.
         * The HTML fragment may not be valid HTML, for instance if the user selects
         * from a to b inclusively in the following html:
         *
         * &gt;div&lt;a&gt;/div&lt;b
         *
         * This method will return
         *
         * a&lt;/div&gt;b
         *
         * If you need valid HTML, use {@link #getValidHtml} instead.
         *
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
         * Returns pastable HTML for this range.  This guarantees that any child items
         * that must have specific ancestors will have them, for instance all TDs will
         * be contained in a TR in a TBODY in a TABLE and all LIs will be contained in
         * a UL or OL as appropriate.  This is semi-fast on all browsers.
         * @return {string} Pastable HTML of the range, including context containing
         *     elements.
         */
        getPastableHtml(): string;
        
        /**
         * Returns a RangeIterator over the contents of the range.  Regardless of the
         * direction of the range, the iterator will move in document order.
         * @param {boolean=} opt_keys Unused for this iterator.
         * @return {!goog.dom.RangeIterator} An iterator over tags in the range.
         */
        __iterator__(opt_keys?: boolean): goog.dom.RangeIterator;
        
        /**
         * Sets this range as the selection in its window.
         */
        select(): void;
        
        /**
         * Removes the contents of the range from the document.
         */
        removeContents(): void;
        
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
         * Replaces the range contents with (possibly a copy of) the given node.  The
         * range may be disrupted beyond recovery because of the way this splits nodes.
         * @param {Node} node The node to insert.
         * @return {Node} The node added to the document.  This may be different
         *     than the node parameter because on IE we have to clone it.
         */
        replaceContentsWithNode(node: Node): Node;
        
        /**
         * Surrounds this range with the two given nodes.  The range may be disrupted
         * beyond recovery because of the way this splits nodes.
         * @param {Element} startNode The node to insert at the start.
         * @param {Element} endNode The node to insert at the end.
         */
        surroundWithNodes(startNode: Element, endNode: Element): void;
        
        /**
         * Saves the range so that if the start and end nodes are left alone, it can
         * be restored.
         * @return {!goog.dom.SavedRange} A range representation that can be restored
         *     as long as the endpoint nodes of the selection are not modified.
         */
        saveUsingDom(): goog.dom.SavedRange;
        
        /**
         * Saves the range using HTML carets. As long as the carets remained in the
         * HTML, the range can be restored...even when the HTML is copied across
         * documents.
         * @return {goog.dom.SavedCaretRange?} A range representation that can be
         *     restored as long as carets are not removed. Returns null if carets
         *     could not be created.
         */
        saveUsingCarets(): goog.dom.SavedCaretRange;
        
        /**
         * Collapses the range to one of its boundary points.
         * @param {boolean} toAnchor Whether to collapse to the anchor of the range.
         */
        collapse(toAnchor: boolean): void;
    }

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     * @param {Node} node The node to start traversal at.  When null, creates an
     *     empty iterator.
     * @param {boolean=} opt_reverse Whether to traverse nodes in reverse.
     * @constructor
     * @extends {goog.dom.TagIterator}
     */
    class RangeIterator extends goog.dom.TagIterator {
        constructor(node: Node, opt_reverse?: boolean);
        
        /**
         * @return {number} The offset into the current node, or -1 if the current node
         *     is not a text node.
         */
        getStartTextOffset(): number;
        
        /**
         * @return {number} The end offset into the current node, or -1 if the current
         *     node is not a text node.
         */
        getEndTextOffset(): number;
        
        /**
         * @return {Node} node The iterator's start node.
         */
        getStartNode(): Node;
        
        /**
         * @return {Node} The iterator's end node.
         */
        getEndNode(): Node;
        
        /**
         * @return {boolean} Whether a call to next will fail.
         */
        isLast(): boolean;
    }
}

declare module goog {
    function require(name: 'goog.editor.range'): typeof goog.editor.range;
    function require(name: 'goog.editor.range.Point'): typeof goog.editor.range.Point;
}

declare module goog.editor.range {

    /**
     * One endpoint of a range, represented as a Node and and offset.
     * @param {Node} node The node containing the point.
     * @param {number} offset The offset of the point into the node.
     * @constructor
     * @final
     */
    class Point {
        constructor(node: Node, offset: number);
        
        /**
         * Gets the point of this point's node in the DOM.
         * @return {!goog.editor.range.Point} The node's point.
         */
        getParentPoint(): goog.editor.range.Point;
        
        /**
         * Construct the deepest possible point in the DOM that's equivalent
         * to the given point, expressed as a node and an offset.
         * @param {Node} node The node containing the point.
         * @param {number} offset The offset of the point from the node.
         * @param {boolean=} opt_trendLeft Notice that a (node, offset) pair may be
         *     equivalent to more than one descendent (node, offset) pair in the DOM.
         *     By default, we trend rightward. If this parameter is true, then we
         *     trend leftward. The tendency to fall rightward by default is for
         *     consistency with other range APIs (like placeCursorNextTo).
         * @param {boolean=} opt_stopOnChildlessElement If true, and we encounter
         *     a Node which is an Element that cannot have children, we return a Point
         *     based on its parent rather than that Node itself.
         * @return {!goog.editor.range.Point} A new point.
         */
        static createDeepestPoint(node: Node, offset: number, opt_trendLeft?: boolean, opt_stopOnChildlessElement?: boolean): goog.editor.range.Point;
        
        /**
         * Construct a point at the very end of the given node.
         * @param {Node} node The node to create a point for.
         * @return {!goog.editor.range.Point} A new point.
         */
        static getPointAtEndOfNode(node: Node): goog.editor.range.Point;
    }

    /**
     * Saves the range using carets, but normalizes text nodes when carets
     * are removed.
     * @see goog.editor.range.saveUsingNormalizedCarets
     * @param {goog.dom.AbstractRange} range The range being saved.
     * @constructor
     * @extends {goog.dom.SavedCaretRange}
     * @private
     */
    interface NormalizedCaretRange_ extends goog.dom.SavedCaretRange {
        
        /**
         * Normalizes text nodes whenever carets are removed from the document.
         * @param {goog.dom.AbstractRange=} opt_range A range whose offsets have already
         *     been adjusted for caret removal; it will be adjusted and returned if it
         *     is also affected by post-removal operations, such as text node
         *     normalization.
         * @return {goog.dom.AbstractRange|undefined} The adjusted range, if opt_range
         *     was provided.
         * @override
         */
        removeCarets(opt_range?: goog.dom.AbstractRange): goog.dom.AbstractRange|void;
    }

    /**
     * Given a range and an element, create a narrower range that is limited to the
     * boundaries of the element. If the range starts (or ends) outside the
     * element, the narrowed range's start point (or end point) will be the
     * leftmost (or rightmost) leaf of the element.
     * @param {goog.dom.AbstractRange} range The range.
     * @param {Element} el The element to limit the range to.
     * @return {goog.dom.AbstractRange} A new narrowed range, or null if the
     *     element does not contain any part of the given range.
     */
    function narrow(range: goog.dom.AbstractRange, el: Element): goog.dom.AbstractRange;

    /**
     * Given a range, expand the range to include outer tags if the full contents of
     * those tags are entirely selected.  This essentially changes the dom position,
     * but not the visible position of the range.
     * Ex. <li>foo</li> if "foo" is selected, instead of returning start and end
     * nodes as the foo text node, return the li.
     * @param {goog.dom.AbstractRange} range The range.
     * @param {Node=} opt_stopNode Optional node to stop expanding past.
     * @return {!goog.dom.AbstractRange} The expanded range.
     */
    function expand(range: goog.dom.AbstractRange, opt_stopNode?: Node): goog.dom.AbstractRange;

    /**
     * Cause the window's selection to be the start of this node.
     * @param {Node} node The node to select the start of.
     */
    function selectNodeStart(node: Node): void;

    /**
     * Position the cursor immediately to the left or right of "node".
     * In Firefox, the selection parent is outside of "node", so the cursor can
     * effectively be moved to the end of a link node, without being considered
     * inside of it.
     * Note: This does not always work in WebKit. In particular, if you try to
     * place a cursor to the right of a link, typing still puts you in the link.
     * Bug: http://bugs.webkit.org/show_bug.cgi?id=17697
     * @param {Node} node The node to position the cursor relative to.
     * @param {boolean} toLeft True to place it to the left, false to the right.
     * @return {!goog.dom.AbstractRange} The newly selected range.
     */
    function placeCursorNextTo(node: Node, toLeft: boolean): goog.dom.AbstractRange;

    /**
     * Normalizes the node, preserving the selection of the document.
     *
     * May also normalize things outside the node, if it is more efficient to do so.
     *
     * @param {Node} node The node to normalize.
     */
    function selectionPreservingNormalize(node: Node): void;

    /**
     * Normalizes the given node.
     * @param {Node} node The node to normalize.
     */
    function normalizeNode(node: Node): void;

    /**
     * Normalizes the node, preserving a range of the document.
     *
     * May also normalize things outside the node, if it is more efficient to do so.
     *
     * @param {Node} node The node to normalize.
     * @param {goog.dom.AbstractRange?} range The range to normalize.
     * @return {goog.dom.AbstractRange?} The range, adjusted for normalization.
     */
    function rangePreservingNormalize(node: Node, range: goog.dom.AbstractRange): goog.dom.AbstractRange;

    /**
     * Get the deepest point in the DOM that's equivalent to the endpoint of the
     * given range.
     *
     * @param {goog.dom.AbstractRange} range A range.
     * @param {boolean} atStart True for the start point, false for the end point.
     * @return {!goog.editor.range.Point} The end point, expressed as a node
     *    and an offset.
     */
    function getDeepEndPoint(range: goog.dom.AbstractRange, atStart: boolean): goog.editor.range.Point;

    /**
     * Given a range in the current DOM, create a factory for a range that
     * represents the same selection in a normalized DOM. The factory function
     * should be invoked after the DOM is normalized.
     *
     * All browsers do a bad job preserving ranges across DOM normalization.
     * The issue is best described in this 5-year-old bug report:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=191864
     * For most applications, this isn't a problem. The browsers do a good job
     * handling un-normalized text, so there's usually no reason to normalize.
     *
     * The exception to this rule is the rich text editing commands
     * execCommand and queryCommandValue, which will fail often if there are
     * un-normalized text nodes.
     *
     * The factory function creates new ranges so that we can normalize the DOM
     * without problems. It must be created before any normalization happens,
     * and invoked after normalization happens.
     *
     * @param {goog.dom.AbstractRange} range The range to normalize. It may
     *    become invalid after body.normalize() is called.
     * @return {function(): goog.dom.AbstractRange} A factory for a normalized
     *    range. Should be called after body.normalize() is called.
     */
    function normalize(range: goog.dom.AbstractRange): () => goog.dom.AbstractRange;

    /**
     * Checks if a range is completely inside an editable region.
     * @param {goog.dom.AbstractRange} range The range to test.
     * @return {boolean} Whether the range is completely inside an editable region.
     */
    function isEditable(range: goog.dom.AbstractRange): boolean;

    /**
     * Returns whether the given range intersects with any instance of the given
     * tag.
     * @param {goog.dom.AbstractRange} range The range to check.
     * @param {goog.dom.TagName} tagName The name of the tag.
     * @return {boolean} Whether the given range intersects with any instance of
     *     the given tag.
     */
    function intersectsTag(range: goog.dom.AbstractRange, tagName: goog.dom.TagName): boolean;

    /**
     * Saves the range by inserting carets into the HTML.
     *
     * Unlike the regular saveUsingCarets, this SavedRange normalizes text nodes.
     * Browsers have other bugs where they don't handle split text nodes in
     * contentEditable regions right.
     *
     * @param {goog.dom.AbstractRange} range The abstract range object.
     * @return {!goog.dom.SavedCaretRange} A saved caret range that normalizes
     *     text nodes.
     */
    function saveUsingNormalizedCarets(range: goog.dom.AbstractRange): goog.dom.SavedCaretRange;
}

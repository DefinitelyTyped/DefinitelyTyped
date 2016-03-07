declare module goog {
    function require(name: 'goog.dom.pattern.callback'): typeof goog.dom.pattern.callback;
}

declare module goog.dom.pattern.callback {

    /**
     * Callback function for use in {@link goog.dom.pattern.Matcher.addPattern}
     * that removes the matched node from the tree.  Should be used in conjunciton
     * with a {@link goog.dom.pattern.StartTag} pattern.
     *
     * @param {Node} node The node matched by the pattern.
     * @param {goog.dom.TagIterator} position The position where the match
     *     finished.
     * @return {boolean} Returns true to indicate tree changes were made.
     */
    function removeNode(node: Node, position: goog.dom.TagIterator): boolean;

    /**
     * Callback function for use in {@link goog.dom.pattern.Matcher.addPattern}
     * that removes the matched node from the tree and replaces it with its
     * children.  Should be used in conjunction with a
     * {@link goog.dom.pattern.StartTag} pattern.
     *
     * @param {Element} node The node matched by the pattern.
     * @param {goog.dom.TagIterator} position The position where the match
     *     finished.
     * @return {boolean} Returns true to indicate tree changes were made.
     */
    function flattenElement(node: Element, position: goog.dom.TagIterator): boolean;
}

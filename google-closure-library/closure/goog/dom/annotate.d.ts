declare module goog {
    function require(name: 'goog.dom.annotate'): typeof goog.dom.annotate;
}

declare module goog.dom.annotate {

    /**
     * A function that takes:
     *   (1) the number of the term that is "hit",
     *   (2) the HTML (search term) to be annotated,
     * and returns the annotated term as an HTML.
     * @typedef {function(number, !goog.html.SafeHtml): !goog.html.SafeHtml}
     */
    type AnnotateFn = (arg0: number, arg1: goog.html.SafeHtml) => goog.html.SafeHtml;

    /**
     * Calls {@code annotateFn} for each occurrence of a search term in text nodes
     * under {@code node}. Returns the number of hits.
     *
     * @param {Node} node  A DOM node.
     * @param {Array<!Array<string|boolean>>} terms
     *   An array of [searchTerm, matchWholeWordOnly] tuples.
     *   The matchWholeWordOnly value is a per-term attribute because some terms
     *   may be CJK, while others are not. (For correctness, matchWholeWordOnly
     *   should always be false for CJK terms.).
     * @param {goog.dom.annotate.AnnotateFn} annotateFn
     * @param {*=} opt_ignoreCase  Whether to ignore the case of the query
     *   terms when looking for matches.
     * @param {Array<string>=} opt_classesToSkip  Nodes with one of these CSS class
     *   names (and its descendants) will be skipped.
     * @param {number=} opt_maxMs  Number of milliseconds after which this function,
     *   if still annotating, should stop and return.
     *
     * @return {boolean} Whether any terms were annotated.
     */
    function annotateTerms(node: Node, terms: Array<Array<string|boolean>>, annotateFn: goog.dom.annotate.AnnotateFn, opt_ignoreCase?: any, opt_classesToSkip?: Array<string>, opt_maxMs?: number): boolean;

    /**
     * Annotates occurrences of query terms in plain text. This process consists of
     * identifying all occurrences of all query terms, calling a provided function
     * to get the appropriate replacement HTML for each occurrence, and
     * HTML-escaping all the text.
     *
     * @param {string} text  The plain text to be searched.
     * @param {Array<Array<?>>} terms  An array of
     *   [{string} searchTerm, {boolean} matchWholeWordOnly] tuples.
     *   The matchWholeWordOnly value is a per-term attribute because some terms
     *   may be CJK, while others are not. (For correctness, matchWholeWordOnly
     *   should always be false for CJK terms.).
     * @param {goog.dom.annotate.AnnotateFn} annotateFn
     * @param {*=} opt_ignoreCase  Whether to ignore the case of the query
     *   terms when looking for matches.
     * @return {goog.html.SafeHtml} The HTML equivalent of {@code text} with terms
     *   annotated, or null if the text did not contain any of the terms.
     */
    function annotateText(text: string, terms: Array<Array<any>>, annotateFn: goog.dom.annotate.AnnotateFn, opt_ignoreCase?: any): goog.html.SafeHtml;
}

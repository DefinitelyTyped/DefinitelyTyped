declare module goog {
    function require(name: 'goog.dom.pattern.Sequence'): typeof goog.dom.pattern.Sequence;
}

declare module goog.dom.pattern {

    /**
     * Pattern object that matches a sequence of other patterns.
     *
     * @param {Array<goog.dom.pattern.AbstractPattern>} patterns Ordered array of
     *     patterns to match.
     * @param {boolean=} opt_ignoreWhitespace Optional flag to ignore text nodes
     *     consisting entirely of whitespace.  The default is to not ignore them.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     * @final
     */
    class Sequence extends goog.dom.pattern.AbstractPattern {
        constructor(patterns: Array<goog.dom.pattern.AbstractPattern>, opt_ignoreWhitespace?: boolean);
        
        /**
         * Ordered array of patterns to match.
         *
         * @type {Array<goog.dom.pattern.AbstractPattern>}
         */
        patterns: Array<goog.dom.pattern.AbstractPattern>;
        
        /**
         * Test whether the given token starts, continues, or finishes the sequence
         * of patterns given in the constructor.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} <code>MATCH</code> if the pattern
         *     matches, <code>MATCHING</code> if the pattern starts a match, and
         *     <code>NO_MATCH</code> if the pattern does not match.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }
}

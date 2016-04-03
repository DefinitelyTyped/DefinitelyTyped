declare module goog {
    function require(name: 'goog.dom.pattern.Text'): typeof goog.dom.pattern.Text;
}

declare module goog.dom.pattern {

    /**
     * Pattern object that matches text by exact matching or regular expressions.
     *
     * @param {string|RegExp} match String or regular expression to match against.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     * @final
     */
    class Text extends goog.dom.pattern.AbstractPattern {
        constructor(match: string|RegExp);
        
        /**
         * Test whether the given token is a text token which matches the string or
         * regular expression provided in the constructor.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} <code>MATCH</code> if the pattern
         *     matches, <code>NO_MATCH</code> otherwise.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }
}

declare module goog {
    function require(name: 'goog.dom.pattern.Repeat'): typeof goog.dom.pattern.Repeat;
}

declare module goog.dom.pattern {

    /**
     * Pattern object that matches a repetition of another pattern.
     * @param {goog.dom.pattern.AbstractPattern} pattern The pattern to
     *     repetitively match.
     * @param {number=} opt_minimum The minimum number of times to match.  Defaults
     *     to 0.
     * @param {number=} opt_maximum The maximum number of times to match.  Defaults
     *     to unlimited.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     * @final
     */
    class Repeat extends goog.dom.pattern.AbstractPattern {
        constructor(pattern: goog.dom.pattern.AbstractPattern, opt_minimum?: number, opt_maximum?: number);
        
        /**
         * Number of times the pattern has matched.
         *
         * @type {number}
         */
        count: number;
        
        /**
         * The matched nodes.
         *
         * @type {Array<Node>}
         */
        matches: Array<Node>;
        
        /**
         * Test whether the given token continues a repeated series of matches of the
         * pattern given in the constructor.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} <code>MATCH</code> if the pattern
         *     matches, <code>BACKTRACK_MATCH</code> if the pattern does not match
         *     but already had accumulated matches, <code>MATCHING</code> if the pattern
         *     starts a match, and <code>NO_MATCH</code> if the pattern does not match.
         * @suppress {missingProperties} See the broken line below.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }
}

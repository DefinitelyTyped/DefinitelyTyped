declare module goog {
    function require(name: 'goog.string.newlines'): typeof goog.string$.newlines;
    function require(name: 'goog.string.newlines.Line'): typeof goog.string$.newlines.Line;
}

declare module goog.string$.newlines {

    /**
     * Line metadata class that records the start/end indicies of lines
     * in a string.  Can be used to implement common newline use cases such as
     * splitLines() or determining line/column of an index in a string.
     * Also implements methods to get line contents.
     *
     * Indexes are expressed as string indicies into string.substring(), inclusive
     * at the start, exclusive at the end.
     *
     * Create an array of these with goog.string.newlines.getLines().
     * @param {string} string The original string.
     * @param {number} startLineIndex The index of the start of the line.
     * @param {number} endContentIndex The index of the end of the line, excluding
     *     newlines.
     * @param {number} endLineIndex The index of the end of the line, index
     *     newlines.
     * @constructor
     * @struct
     * @final
     */
    class Line {
        constructor(string: string, startLineIndex: number, endContentIndex: number, endLineIndex: number);
        
        /**
         * @return {string} The content of the line, excluding any newline characters.
         */
        getContent(): string;
        
        /**
         * @return {string} The full line, including any newline characters.
         */
        getFullLine(): string;
        
        /**
         * @return {string} The newline characters, if any ('\n', \r', '\r\n', '', etc).
         */
        getNewline(): string;
    }

    /**
     * Splits a string into lines, properly handling universal newlines.
     * @param {string} str String to split.
     * @param {boolean=} opt_keepNewlines Whether to keep the newlines in the
     *     resulting strings. Defaults to false.
     * @return {!Array<string>} String split into lines.
     */
    function splitLines(str: string, opt_keepNewlines?: boolean): Array<string>;

    /**
     * Splits a string into an array of line metadata.
     * @param {string} str String to split.
     * @return {!Array<!goog.string.newlines.Line>} Array of line metadata.
     */
    function getLines(str: string): Array<goog.string$.newlines.Line>;
}

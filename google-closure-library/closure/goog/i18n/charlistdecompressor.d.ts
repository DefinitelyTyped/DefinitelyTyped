declare module goog {
    function require(name: 'goog.i18n.CharListDecompressor'): typeof goog.i18n.CharListDecompressor;
}

declare module goog.i18n {

    /**
     * Class to decompress base88 compressed character list.
     * @constructor
     * @final
     */
    class CharListDecompressor {
        constructor();
        
        /**
         * Gets the list of characters specified in the given string by base 88 scheme.
         * @param {string} str The string encoding character list.
         * @return {!Array<string>} The list of characters specified by the given
         *     string in base 88 scheme.
         */
        toCharList(str: string): Array<string>;
    }
}

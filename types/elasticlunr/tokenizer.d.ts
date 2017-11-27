/*!
 * elasticlunr.tokenizer
 * Copyright (C) @YEAR Oliver Nightingale
 * Copyright (C) @YEAR Wei Song
 */


export interface Tokenizer {
    /**
     * A function for splitting a string into tokens.
     * Currently English is supported as default.
     * Uses `elasticlunr.tokenizer.seperator` to split strings, you could change
     * the value of this property to set how you want strings are split into tokens.
     * IMPORTANT: use elasticlunr.tokenizer.seperator carefully, if you are not familiar with
     * text process, then you'd better not change it.
     *
     * @module
     * @param {String} str The string that you want to tokenize.
     * @see elasticlunr.tokenizer.seperator
     * @return {Array}
     */
    (str?: string): string[];
    /**
     * The sperator used to split a string into tokens. Override this property to change the behaviour of
     * `elasticlunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
     *
     * @static
     * @see elasticlunr.tokenizer
     */
    seperator: RegExp;
    defaultSeperator: RegExp;
    /**
     * Set up customized string seperator
     *
     * @param {Object} sep The customized seperator that you want to use to tokenize a string.
     */
    setSeperator: (set: RegExp) => void;
    /**
     * Reset string seperator
     *
     */
    resetSeperator: () => void;
    
    getSeperator: () => RegExp;
}
/**
 * A function for splitting a string into tokens.
 * Currently English is supported as default.
 * Uses `elasticlunr.tokenizer.seperator` to split strings, you could change
 * the value of this property to set how you want strings are split into tokens.
 * IMPORTANT: use elasticlunr.tokenizer.seperator carefully, if you are not familiar with
 * text process, then you'd better not change it.
 *
 * @module
 * @param {String} str The string that you want to tokenize.
 * @see elasticlunr.tokenizer.seperator
 * @return {Array}
 */
export declare const tokenizer: Tokenizer;

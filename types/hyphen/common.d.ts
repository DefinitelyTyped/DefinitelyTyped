/**
 * Hyphenation patterns and exceptions for a language.
 */
export interface PatternDefinitions {
    /** List of hyphenation patterns. */
    patterns: string[];

    /** List of words with hyphenation points that don't fit the patterns. */
    exceptions: string[];
}

/**
 * Options for a hyphenation call.
 */
export interface HyphenationOptions {
    /** A boolean indicating, if the hyphenation function should output debug info to the console. Default is false. */
    debug?: boolean;

    /** The value of the hyphen character that is inserted into the text. Default is \u00AD. */
    hyphenChar?: string;
}

/**
 * Synchronous hyphenation function returning the hyphenated text immediately.
 */
export type HyphenationFunctionSync = (textToHyphenate: string, options?: Readonly<HyphenationOptions>) => string;

/**
 * Asynchronous hyphenation function returning a promise for the hyphenated text.
 */
export type HyphenationFunctionAsync = (
    textToHyphenate: string,
    options?: Readonly<HyphenationOptions>,
) => Promise<string>;

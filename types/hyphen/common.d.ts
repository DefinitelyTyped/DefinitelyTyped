/**
 * Hyphenation patterns and exceptions for a language.
 */
export interface PatternsDefinition {
    /** List of hyphenation patterns. */
    patterns: string[];

    /** List of words with hyphenation points that don't fit the patterns. */
    exceptions: string[];
}

/**
 * Options for a hyphenation call.
 */
export interface HyphenationOptions {
    /**
     * A boolean indicating, if the hyphenation function should output debug info to the console.
     * @default false
     */
    debug?: boolean;

    /**
     * The value of the hyphen character that is inserted into the text.
     * @default \u00AD
     */
    hyphenChar?: string;

    /**
     * The minimum length for a word to get hyphenated. Can't be less than 5.
     * @default 5
     */
    minWordLength?: number;
}

/**
 * Synchronous hyphenation function returning the hyphenated text immediately.
 * @param text The text to be hyphenated.
 * @param options Options for the hyphenation process.
 * @returns The hyphenated text.
 */
export type HyphenationFunctionSync = (text: string, options?: Readonly<HyphenationOptions>) => string;

/**
 * Asynchronous hyphenation function returning a promise for the hyphenated text.
 * @param text The text to be hyphenated.
 * @param options Options for the hyphenation process.
 * @returns A promise of the hyphenated text.
 */
export type HyphenationFunctionAsync = (text: string, options?: Readonly<HyphenationOptions>) => Promise<string>;

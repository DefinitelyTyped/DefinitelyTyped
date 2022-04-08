// Type definitions for hyphen 1.6
// Project: https://github.com/ytiurin/hyphen
// Definitions by: Krisztián Balla <https://github.com/krisztianb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace hyphen {
    /**
     * Hyphenation patterns and exceptions for a language.
     */
    interface PatternsDefinition {
        /** List of hyphenation patterns. */
        patterns: string[];

        /** List of words with hyphenation points that don't fit the patterns. */
        exceptions: string[];
    }

    /**
     * Options for the hyphenation factory function.
     */
    interface FactoryOptions {
        /**
         * If true the factory returns an asynchronous hyphenation function.
         * @default false
         */
        async?: boolean;

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
         * If true the hyphenation function is going to ignore HTML tags in the text.
         * @default false
         */
        html?: boolean;

        /**
         * The minimum length for a word to get hyphenated. Can't be less than 5.
         * @default 5
         */
        minWordLength?: number;
    }

    /**
     * Options for a hyphenation call.
     */
    interface HyphenationOptions {
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
         * The minimum length for a word to get hyphenated.
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
    type HyphenationFunctionSync = (text: string, options?: Readonly<HyphenationOptions>) => string;

    /**
     * Asynchronous hyphenation function returning a promise for the hyphenated text.
     * @param text The text to be hyphenated.
     * @param options Options for the hyphenation process.
     * @returns A promise of the hyphenated text.
     */
    type HyphenationFunctionAsync = (text: string, options?: Readonly<HyphenationOptions>) => Promise<string>;
}

/**
 * Creates a hyphenation function that can be used to hyphenate text.
 * @param patternsDefinition The hyphenation patterns definition for a language.
 * @param options Settings for the hyphenation function.
 * @returns Depending on the options a synchronous or asynchronous hyphenation function.
 */
declare function hyphen(
    patternsDefinition: Readonly<hyphen.PatternsDefinition>,
    options?: Readonly<hyphen.FactoryOptions>,
): hyphen.HyphenationFunctionAsync | hyphen.HyphenationFunctionSync;

export = hyphen;

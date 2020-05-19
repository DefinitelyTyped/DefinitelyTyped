// Type definitions for hyphen 1.6
// Project: https://github.com/ytiurin/hyphen
// Definitions by: Krisztián Balla <https://github.com/krisztianb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { HyphenationFunctionAsync, HyphenationFunctionSync, PatternsDefinition } from './common';

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
 * Creates a hyphenation function that can be used to hyphenate text.
 * @param patternsDefinition The hyphenation patterns definition for a language.
 * @param options Settings for the hyphenation function.
 * @returns Depending on the options a synchronous or asynchronous hyphenation function.
 */
declare function createHyphenator(
    patternsDefinition: Readonly<PatternsDefinition>,
    options?: Readonly<FactoryOptions>,
): HyphenationFunctionAsync | HyphenationFunctionSync;

export = createHyphenator;

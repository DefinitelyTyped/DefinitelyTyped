// Type definitions for hyphen 1.5
// Project: https://github.com/ytiurin/hyphen
// Definitions by: Krisztián Balla <https://github.com/krisztianb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { HyphenationFunctionAsync, HyphenationFunctionSync, PatternDefinitions } from './common';

/**
 * Options for the hyphenation factory function.
 */
interface FactoryOptions {
    /** If true the factory returns an asynchronous hyphenation function. Default is false. */
    async?: boolean;

    /** A boolean indicating, if the hyphenation function should output debug info to the console. Default is false. */
    debug?: boolean;

    /** The value of the hyphen character that is inserted into the text. Default is \u00AD. */
    hyphenChar?: string;

    /** If true the hyphenation function is going to ignore HTML tags in the text. Default is false. */
    html?: boolean;
}

/**
 * Creates a hyphenation function that can be used to hyphenate text.
 * @param patternsDefinition The hyphenation pattern definitions for a language.
 * @param options Settings for the hyphenation function.
 * @returns Depending on the options a synchronous or asynchronous hyphenation function.
 */
declare function createHyphenator(
    patternsDefinition: Readonly<PatternDefinitions>,
    options?: Readonly<FactoryOptions>,
): HyphenationFunctionAsync | HyphenationFunctionSync;

export = createHyphenator;

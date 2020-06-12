// Type definitions for hyphen 1.6
// Project: https://github.com/ytiurin/hyphen
// Definitions by: Krisztián Balla <https://github.com/krisztianb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { FactoryOptions, HyphenationFunctionAsync, HyphenationFunctionSync, PatternsDefinition } from './common';

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

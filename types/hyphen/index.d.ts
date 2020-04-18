// Type definitions for hyphen 1.5.1
// Project: https://github.com/ytiurin/hyphen
// Definitions by: Krisztián Balla <https://github.com/krisztianb>
import { HyphenationFunctionAsync, HyphenationFunctionSync, PatternDefinitions } from "./common";

interface FactoryOptions {
    async?: boolean;
    debug?: boolean;
    hyphenChar?: string;
    html?: boolean;
}

declare function createHyphenator(
    patternsDefinition: PatternDefinitions,
    options?: FactoryOptions
): HyphenationFunctionAsync | HyphenationFunctionSync;

export = createHyphenator;

// Type definitions for hyphen 1.5
// Project: https://github.com/ytiurin/hyphen
// Definitions by: Krisztián Balla <https://github.com/krisztianb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { HyphenationFunctionAsync, HyphenationFunctionSync, PatternDefinitions } from './common';

interface FactoryOptions {
    async?: boolean;
    debug?: boolean;
    hyphenChar?: string;
    html?: boolean;
}

declare function createHyphenator(
    patternsDefinition: Readonly<PatternDefinitions>,
    options?: Readonly<FactoryOptions>,
): HyphenationFunctionAsync | HyphenationFunctionSync;

export = createHyphenator;

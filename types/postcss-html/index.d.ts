// Type definitions for postcss-html 1.5
// Project: https://github.com/ota-meshi/postcss-html#readme
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { Parser, Stringifier, Syntax } from 'postcss';

declare namespace postcssHtml {
    interface Config {
        css?: Syntax | undefined;
        less?: Syntax | undefined;
        scss?: Syntax | undefined;
    }

    let parse: Parser;
    let stringify: Stringifier;
}

declare function postcssHtml(config?: postcssHtml.Config): Syntax;

export = postcssHtml;

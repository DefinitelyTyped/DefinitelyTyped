// Type definitions for postcss-safe-parser 4.0
// Project: https://github.com/postcss/postcss-safe-parser#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Parser } from 'postcss';

/**
 * A fault-tolerant CSS parser for PostCSS, which will find & fix syntax errors, capable of parsing any input.
 * It is useful for:
 * Parse legacy code with many hacks. For example, it can parse all examples from {@link http://browserhacks.com/|Browserhacks}.
 * Works with demo tools with live input like {@link http://simevidas.jsbin.com/gufoko/quiet|Autoprefixer demo}.
 */
declare namespace safeParser {
    type PostCssSafeParser = Parser;
}

declare const safeParser: safeParser.PostCssSafeParser;

export = safeParser;

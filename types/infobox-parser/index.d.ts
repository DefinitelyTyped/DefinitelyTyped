// Type definitions for infobox-parser 3.3
// Project: https://github.com/dijs/infobox-parser#readme
// Definitions by: Jeff Held <https://github.com/solkaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ParseOptions {
    simplifyDataValues?: boolean;
}

interface ParseResult {
    general: any;
    lists: any[];
    tables: any[];
}

declare function infobox_parser(
    source: string,
    options?: ParseOptions
): ParseResult;

export = infobox_parser;

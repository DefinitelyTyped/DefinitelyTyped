interface ParseOptions {
    simplifyDataValues?: boolean | undefined;
}

interface ParseResult {
    general: any;
    lists: any[];
    tables: any[];
}

declare function infobox_parser(
    source: string,
    options?: ParseOptions,
): ParseResult;

export = infobox_parser;

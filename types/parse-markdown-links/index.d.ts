// Type definitions for parse-markdown-links 1.0
// Project: https://github.com/ralphtheninja/parse-markdown-links
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Piggy backs on top of remarkable to get a list of parsed tokens corresponding to links.
 */
declare function parseMarkdownLinks(text: string): string[];

export = parseMarkdownLinks;

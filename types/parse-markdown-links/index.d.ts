/**
 * Piggy backs on top of remarkable to get a list of parsed tokens corresponding to links.
 */
declare function parseMarkdownLinks(text: string): string[];

export = parseMarkdownLinks;

// Type definitions for remove-markdown 0.1
// Project: https://github.com/stiang/remove-markdown
// Definitions by: Muhammad Ragib Hasin <https://github.com/RagibHasin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = RemoveMarkdown;

/**
 * Strip Markdown formatting from text
 * @param markdown Markdown text
 */
declare function RemoveMarkdown(markdown: string, options?: {
    stripListLeaders?: boolean
    gfm?: boolean
}): string;

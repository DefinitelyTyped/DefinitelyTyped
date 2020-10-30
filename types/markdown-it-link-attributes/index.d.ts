// Type definitions for markdown-it-link-attributes 3.0
// Project: https://github.com/crookedneighbor/markdown-it-link-attributes
// Definitions by: Katy Richard <https://github.com/cowpewter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import MarkdownIt = require('markdown-it');

declare namespace markdownItLinkAttributes {
    interface Config {
        attrs: {
            [key: string]: string;
        };
    }
}

declare function markdownItLinkAttributes(md: MarkdownIt, config: markdownItLinkAttributes.Config): void;

export = markdownItLinkAttributes;

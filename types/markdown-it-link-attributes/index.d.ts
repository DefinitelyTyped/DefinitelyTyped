// Type definitions for markdown-it-link-attributes 3.0
// Project: https://github.com/crookedneighbor/markdown-it-link-attributes
// Definitions by: Katy Richard <https://github.com/cowpewter>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PluginWithOptions } from "markdown-it";
import { RenderRule } from "markdown-it/lib/renderer";

declare namespace markdownItLinkAttributes {
    interface Config {
        attrs: Record<string, string>;
    }
}

/**
 * Link attributes plugin for markdown-it markdown parser
 */
declare const markdownItLinkAttributes: PluginWithOptions<
    markdownItLinkAttributes.Config | markdownItLinkAttributes.Config[]
> & {
    readonly defaultRender: RenderRule;
};

export = markdownItLinkAttributes;

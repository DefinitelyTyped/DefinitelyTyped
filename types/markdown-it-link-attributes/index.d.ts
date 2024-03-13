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
declare const markdownItLinkAttributes:
    & PluginWithOptions<
        markdownItLinkAttributes.Config | markdownItLinkAttributes.Config[]
    >
    & {
        readonly defaultRender: RenderRule;
    };

export = markdownItLinkAttributes;

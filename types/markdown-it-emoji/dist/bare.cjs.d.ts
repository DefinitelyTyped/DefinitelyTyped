import MarkdownIt = require("markdown-it");

declare namespace emoji_plugin {
    /**
     * @see https://github.com/markdown-it/markdown-it-emoji#init
     */
    interface Options {
        defs: Record<string, string>;
        shortcuts: Record<string, string | string[]>;
        enabled: string[];
    }
}

declare function emoji_plugin(md: MarkdownIt, options?: Partial<emoji_plugin.Options>): void;

export = emoji_plugin;

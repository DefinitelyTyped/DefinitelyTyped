// Type definitions for markdown-it-emoji 2.0
// Project: https://github.com/markdown-it/markdown-it-emoji
// Definitions by: Christopher Quadflieg <https://github.com/Shinigami92>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { PluginSimple, PluginWithOptions } from 'markdown-it/lib';

export as namespace markdownitEmoji;

declare namespace markdownitEmoji {
    interface Options {
        defs?: Record<string, string>;
        enabled?: string[];
        shortcuts?: Record<string, string | string[]>;
    }
}

declare const markdownitEmoji: PluginSimple | PluginWithOptions<markdownitEmoji.Options>;
export = markdownitEmoji;

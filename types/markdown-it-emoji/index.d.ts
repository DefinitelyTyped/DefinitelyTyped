// Type definitions for markdown-it-emoji 1.4
// Project: https://github.com/markdown-it/markdown-it-emoji
// Definitions by: Christopher Quadflieg <https://github.com/Shinigami92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PluginSimple, PluginWithOptions } from 'markdown-it';

declare namespace MarkdownItEmoji {
    interface Options {
        defs?: Record<string, string>;
        enabled?: string[];
        shortcuts?: Record<string, string | string[]>;
    }
}

declare const emoji: PluginSimple | PluginWithOptions<MarkdownItEmoji.Options>;

export = emoji;

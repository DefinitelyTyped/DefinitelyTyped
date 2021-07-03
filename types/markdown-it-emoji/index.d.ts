// Type definitions for markdown-it-emoji 2.0
// Project: https://github.com/markdown-it/markdown-it-emoji
// Definitions by: Christopher Quadflieg <https://github.com/Shinigami92>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { PluginSimple, PluginWithOptions } from "markdown-it/lib";

export as namespace markdownitEmoji;

declare namespace markdownitEmoji {
    interface Options {
        defs?: Record<string, string>;
        enabled?: string[];
        shortcuts?: Shortcuts;
    }

    type LiteralUnion<T extends U, U = string> = T | (U & { _?: never });

    type PartialRecord<K extends keyof any, T> = {
        [P in K]?: T | T[];
    };

    type Shortcuts = PartialRecord<Shortcut, string>;

    type Shortcut = LiteralUnion<
        | "angry"
        | "blush"
        | "broken_heart"
        | "confused"
        | "cry"
        | "frowning"
        | "heart"
        | "imp"
        | "innocent"
        | "joy"
        | "kissing"
        | "laughing"
        | "neutral_face"
        | "open_mouth"
        | "rage"
        | "smile"
        | "smiley"
        | "smiling_imp"
        | "sob"
        | "stuck_out_tongue"
        | "sunglasses"
        | "sweat_smile"
        | "sweat"
        | "unamused"
        | "wink"
    >;
}

declare const markdownitEmoji: PluginSimple | PluginWithOptions<markdownitEmoji.Options>;
export = markdownitEmoji;

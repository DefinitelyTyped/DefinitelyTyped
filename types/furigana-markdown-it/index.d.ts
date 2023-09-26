import { PluginSimple } from "markdown-it";

/**
 * A markdown-it plugin which adds furigana support.
 */
declare function furigana(options?: furigana.Options): PluginSimple;

declare namespace furigana {
    /**
     * Options can be provided during initialization of the plugin
     */
    interface Options {
        /**
         * fallback parentheses to use in contexts where <ruby> tags are unavailable.
         * By default the plugin uses 【】 for fallback,
         * so [漢字]{かんじ} becomes 漢字【かんじ】 on a rare browser without <ruby> support.
         *
         * This option takes a string with the opening bracket followed by the closing bracket.
         */
        fallbackParens?: string | undefined;

        /**
         * separators are characters that allow you to split furigana between individual kanji (read the usage section).
         * Any kind of space is a separator, as well as these characters: `.．。・|｜/／`.
         *
         * If you want additional characters to act as separators, provide them with this option.
         */
        extraSeparators?: string | undefined;

        /**
         * combinators are characters that allow you to indicate a kanji boundary
         * without actually splitting the furigana between these kanji (read the usage section).
         *
         * Default combinators are + and ＋.
         * If you need additional combinator characters, provide them with this option.
         */
        extraCombinators?: string | undefined;
    }
}

export = furigana;

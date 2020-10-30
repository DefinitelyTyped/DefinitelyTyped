// Type definitions for alex 9.0
// Project: https://alexjs.com
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { VFile } from 'vfile';

/**
 * finds gender favoring, polarizing, race related, religion inconsiderate, or other unequal phrasing in text.
 */
declare function alex(value: VFile | string, config?: alex.Config): VFile;

declare namespace alex {
    /**
     * This is either an array of words to ignore or custom Alex' config
     */
    type Config = AlexOptions | string[];

    interface AlexOptions {
        /** an array of rules (the default is []) */
        allow?: string[];
        /**
         * When provided, only the rules specified are reported.
         * @default []
         */
        deny?: string[];
        /**
         * When turned on (`true`), pairs such as `he` and `she` and `garbageman` or `garbagewoman` are seen as errors.
         * When turned off (`false`, the default), such pairs are okay
         */
        noBinary?: boolean;
        /**
         * the minimum rating (including) that you want to check for.
         * If you set it to 1 (maybe) then it will warn for level 1 and 2 (likely) profanities,
         * but not for level 0 (unlikely).
         */
        profanitySureness?: 0 | 1 | 2;
    }

    /** Check Markdown (ignoring syntax). */
    function markdown(value: VFile | string, config?: Config): VFile;

    /** Check HTML (ignoring syntax). */
    function html(value: VFile | string, config?: Config): VFile;

    /** Check plain text (as in, syntax is checked). */
    function text(value: VFile | string, config?: Config): VFile;

    /**
     * Check [MDX][] (ignoring syntax).
     *
     * Note: the syntax for [MDX@2][mdx-next], while currently in beta, is used in
     * alex
     */
    function mdx(value: VFile | string, config?: Config): VFile;
}

export as namespace alex;
export = alex;

// Type definitions for alex 8.1
// Project: https://alexjs.com
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import * as vfile from 'vfile';

/**
 * finds gender favoring, polarizing, race related, religion inconsiderate, or other unequal phrasing in text.
 */
declare function alex(value: vfile.VFile | string, config?: alex.Config): vfile.VFile;

declare namespace alex {
    /**
     * This is either an array of words to ignore or custom Alex' config
     */
    type Config = AlexOptions | string[];

    interface AlexOptions {
        /** an array of rules (the default is []) */
        allow?: string[];
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
    function markdown(value: vfile.VFile | string, config?: Config): vfile.VFile;

    /** Check HTML (ignoring syntax). */
    function html(value: vfile.VFile | string, config?: Config): vfile.VFile;

    /** Check plain text (as in, syntax is checked). */
    function text(value: vfile.VFile | string, config?: Config): vfile.VFile;
}

export as namespace alex;
export = alex;

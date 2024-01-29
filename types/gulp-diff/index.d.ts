/// <reference types="node" />

import stream = require("stream");

/**
 * Gulp task to diff files in the stream against a destination.
 * @param dest target directory to diff against, defaults to diff against original source file
 */
declare function gulp_diff(dest?: string): stream.Transform;

declare namespace gulp_diff {
    const diff: typeof gulp_diff;

    function reporter(opts?: ReporterOptions): stream.Transform;
    interface ReporterOptions {
        /**
         * do not show diff information, defaults to `false`
         */
        quiet?: boolean | undefined;
        /**
         * emit an error on finding diffs, defaults to `false`
         */
        fail?: boolean | undefined;
    }
}

export = gulp_diff;

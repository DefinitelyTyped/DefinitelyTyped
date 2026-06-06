/// <reference types="node" />

import { EventEmitter } from "events";
import * as fs from "fs";

declare function readdirGlob(root: string, options: readdirGlob.Options): readdirGlob.ReaddirGlob;

declare namespace readdirGlob {
    interface Options {
        /**
         * Glob pattern or Array of Glob patterns to match the found files with. A file has to match at least one of the provided patterns to be returned.
         */
        pattern?: string | string[];
        /**
         * Allow pattern to match filenames starting with a period, even if the pattern does not explicitly have a period in that spot.
         */
        dot?: boolean;
        /**
         * Disable `**` matching against multiple folder names.
         */
        noglobstar?: boolean;
        /**
         * Perform a basename-only match if the pattern does not contain any slash characters. That is, `*.js` would be treated as equivalent to `**\/*.js`, matching all js files in all directories.
         */
        matchBase?: boolean;
        /**
         * Perform a case-insensitive match. Note: on case-insensitive file systems, non-magic patterns will match by default, since `stat` and `readdir` will not raise errors.
         */
        nocase?: boolean;
        /**
         * Glob pattern or Array of Glob patterns to exclude matches. If a file or a folder matches at least one of the provided patterns, it's not returned.
         * It doesn't prevent files from folder content to be returned. Note: ignore patterns are always in dot:true mode.
         */
        ignore?: string | string[];
        /**
         * Glob pattern or Array of Glob patterns to exclude folders.
         * If a folder matches one of the provided patterns, it's not returned, and it's not explored: this prevents any of its children to be returned.
         * Note: skip patterns are always in dot:true mode.
         */
        skip?: string | string[];
        /**
         * Follow symlinked directories. Note that requires to stat _all_ results, and so reduces performance.
         */
        follow?: boolean;
        /**
         * Set to true to stat _all_ results. This reduces performance.
         */
        stat?: boolean;
        /**
         * Do not match directories, only files.
         */
        nodir?: boolean;
        /**
         * Add a `/` character to directory matches.
         */
        mark?: boolean;
        /**
         * When an unusual error is encountered when attempting to read a directory, a warning will be printed to stderr. Set the `silent` option to true to suppress these warnings.
         */
        silent?: boolean;
        /**
         * Absolute paths will be returned instead of relative paths.
         */
        absolute?: boolean;
    }

    interface Match {
        /**
         * relative path of the matched file
         */
        relative: string;
        /**
         * absolute path of the matched file
         */
        absolute: string;
        /**
         * stat of the matched file (only if stat:true option is used)
         */
        stat?: fs.Stats;
    }

    class ReaddirGlob extends EventEmitter {
        constructor(cwd: string, cb: (error: Error | null, matches?: readonly Match[]) => void);
        constructor(cwd: string, options: Options, cb: (error: Error | null, matches?: readonly Match[]) => void);
        /**
         * Every time a match is found, this is emitted with the specific thing that matched.
         */
        on(event: "match", callback: (match: Match) => void): this;
        /**
         * When the matching is finished, this is emitted with all the matches found.
         */
        on(event: "error", callback: (error: Error) => void): this;
        /**
         * Emitted when an unexpected error is encountered.
         */
        on(event: "end", callback: (matches: readonly Match[]) => void): this;
        /**
         * Temporarily stop the search
         */
        pause(): void;
        /**
         * Resume the search
         */
        resume(): void;
        /**
         * Stop the search forever
         */
        abort(): void;
        /**
         * The options object passed in.
         */
        options: Options;
        /**
         * Boolean which is set to true when calling `pause()`.
         */
        paused: boolean;
        /**
         * Boolean which is set to true when calling `abort()`. There is no way at this time to continue a glob search after aborting.
         */
        aborted: boolean;
    }
}

export = readdirGlob;

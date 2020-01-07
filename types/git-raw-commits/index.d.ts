// Type definitions for git-raw-commits 2.0
// Project: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/git-raw-commits#readme
// Definitions by: Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node" />

import * as Stream from "stream";

/**
 * Returns a readable stream. Stream is split to break on each commit.
 *
 * @param gitOpts
 * @param execOpts Options to pass to `git` `childProcess`.
 */
declare function gitRawCommits(gitOptions: gitRawCommits.GitOptions, execOptions?: gitRawCommits.ExecOptions): Stream.Readable;

declare namespace gitRawCommits {
    /**
     * Options to pass to `git` `childProcess`.
     */
    interface ExecOptions {
        /**
         * Current working directory to execute git in.
         */
        cwd?: string;
    }

    /**
     * Please check the available options at http://git-scm.com/docs/git-log.
     *
     * @remarks
     * Single dash arguments are not supported because of https://github.com/sindresorhus/dargs/blob/master/index.js#L5.
     *
     * @remarks
     * For `<revision range>` we can also use `<from>..<to>` pattern, and this
     * module has the following extra options for shortcut of this pattern:
     *
     * * `from`
     * * `to`
     *
     * This module also have the following additions:
     *
     * * `format`
     * * `debug`
     * * `path`
     */
    interface GitOptions {
        /**
         * @default
         * ''
         */
        from?: string;

        /**
         * @default
         * 'HEAD'
         */
        to?: string;

        /**
         * Please check http://git-scm.com/docs/git-log for format options.
         *
         * @default
         * '%B'
         */
        format?: string;

        /**
         * A function to get debug information.
         */
        debug?: (message: any) => void;

        /**
         * Filter commits to the path provided.
         */
        path?: string;

        [options: string]: any;
    }
}

export = gitRawCommits;

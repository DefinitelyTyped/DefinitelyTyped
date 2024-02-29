/// <reference types="node" />

import * as Stream from "stream";

/**
 * Returns a readable stream. Stream is split to break on each commit.
 *
 * @param gitOpts
 * @param execOpts Options to pass to `git` `childProcess`.
 */
declare function gitRawCommits(
    gitOptions: gitRawCommits.GitOptions,
    execOptions?: gitRawCommits.ExecOptions,
): Stream.Readable;

declare namespace gitRawCommits {
    /**
     * Options to pass to `git` `childProcess`.
     */
    interface ExecOptions {
        /**
         * Current working directory to execute git in.
         */
        cwd?: string | undefined;
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
        from?: string | undefined;

        /**
         * @default
         * 'HEAD'
         */
        to?: string | undefined;

        /**
         * Please check http://git-scm.com/docs/git-log for format options.
         *
         * @default
         * '%B'
         */
        format?: string | undefined;

        /**
         * A function to get debug information.
         */
        debug?: ((message: any) => void) | undefined;

        /**
         * Filter commits to the path provided.
         */
        path?: string | undefined;

        [options: string]: any;
    }
}

export = gitRawCommits;

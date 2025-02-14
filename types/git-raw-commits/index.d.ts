/// <reference types="node" />

import * as Stream from "stream";

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
export interface GitOptions {
    /**
     * Options to pass to `git` `childProcess`. Current working directory to run git.
     *
     * @default
     * process.cwd()
     */
    cwd?: string;

    /**
     * A function to get debug information.
     *
     * @default
     * false
     */
    debug?: boolean | ((message: any) => void);

    /**
     * Ignore commits that match provided string or RegExp.
     */
    ignore?: string | RegExp;

    /**
     * Only commits that are modifying this path.
     */
    path?: string | string[];

    /**
     * Starting commit reference or hash.
     *
     * @default
     * ''
     */
    from?: string;

    /**
     * Ending commit reference or hash.
     *
     * @default
     * 'HEAD'
     */
    to?: string;

    /**
     * Format of the commit.
     *
     * @default
     * '%B'
     */
    format?: string;

    [options: string]: any;
}

/**
 * Get raw commits from git-log.
 */
export function getRawCommits(options?: GitOptions): AsyncGenerator<string, void, unknown>;

/**
 * Get raw commits stream from git-log.
 */
export function getRawCommitsStream(options?: GitOptions): Stream.Readable;

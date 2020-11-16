// Type definitions for conventional-changelog 3.1
// Project: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog#readme
// Definitions by: Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="node" />

import * as Stream from "stream";

import {
    Context,
    GitRawCommitsOptions,
    ParserOptions,
    WriterOptions,
    Options as BaseOptions,
} from "conventional-changelog-core";
import { Context as WriterContext } from "conventional-changelog-writer";
import { Commit } from "conventional-commits-parser";

/**
 * Returns a readable stream.
 *
 * @param options
 * @param context
 * @param gitRawCommitsOpts
 * @param parserOpts
 * @param writerOpts
 */
// tslint:disable-next-line max-line-length
declare function conventionalChangelog<TCommit extends Commit = Commit, TContext extends WriterContext = Context>(options?: Options<TCommit, TContext>, context?: Partial<TContext>, gitRawCommitsOpts?: GitRawCommitsOptions, parserOpts?: ParserOptions, writerOpts?: WriterOptions<TCommit, TContext>): Stream.Readable;

declare namespace conventionalChangelog {
    /**
     * See the [conventional-changelog-core](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-core)
     * docs. The API is the same with the following changes or additions:
     */
    interface Options<TCommit extends Commit = Commit, TContext extends WriterContext = WriterContext> extends BaseOptions<TCommit, TContext> {
        /**
         * It's recommended to use a preset so you don't have to define everything
         * yourself. Presets are names of built-in `config`.
         *
         * A scoped preset package such as `@scope/conventional-changelog-custom-preset`
         * can be used by passing `@scope/custom-preset` to this option.
         *
         * @remarks
         * `options.config` will be overwritten by the values of preset. You should use
         * either `preset` or `config`, but not both.
         */
        preset?: string;
    }
}

type Options<TCommit extends Commit = Commit, TContext extends WriterContext = WriterContext> = conventionalChangelog.Options<TCommit, TContext>;

export = conventionalChangelog;

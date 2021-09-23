// Type definitions for conventional-changelog-core 4.2
// Project: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-core#readme
// Definitions by: Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="node" />

import * as Stream from "stream";

import {
    Context as BaseContext,
    Options as BaseWriterOptions,
} from "conventional-changelog-writer";
import {
    Commit,
    Options as BaseParserOptions,
} from "conventional-commits-parser";
import { Options as RecommendedBumpOptions } from "conventional-recommended-bump";
import { GitOptions as BaseGitRawCommitsOptions } from "git-raw-commits";

import { Package } from "normalize-package-data";

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
declare function conventionalChangelogCore<TCommit extends Commit = Commit, TContext extends BaseContext = Context>(options?: Options<TCommit, TContext>, context?: Partial<TContext>, gitRawCommitsOpts?: GitRawCommitsOptions, parserOpts?: ParserOptions, writerOpts?: WriterOptions<TCommit, TContext>): Stream.Readable;

declare namespace conventionalChangelogCore {
    interface Context extends BaseContext {
        /**
         * The hosting website. Eg: `'https://github.com'` or `'https://bitbucket.org'`.
         *
         * @defaults
         * Normalized host found in `package.json`.
         */
        host?: BaseContext["host"] | undefined;

        /**
         * Version number of the up-coming release. If `version` is found in the last
         * commit before generating logs, it will be overwritten.
         *
         * @defaults
         * Version found in `package.json`.
         */
        version?: BaseContext["version"] | undefined;

        /**
         * The owner of the repository. Eg: `'stevemao'`.
         *
         * @defaults
         * Extracted from normalized `package.json` `repository.url` field.
         */
        owner?: BaseContext["owner"] | undefined;

        /**
         * The repository name on `host`. Eg: `'conventional-changelog-writer'`.
         *
         * @defaults
         * Extracted from normalized `package.json` `repository.url` field.
         */
        repository?: BaseContext["repository"] | undefined;

        /**
         * The whole repository url. Eg: `'https://github.com/conventional-changelog/conventional-changelog-writer'`.
         * The should be used as a fallback when `context.repository` doesn't exist.
         *
         * @defaults
         * The whole normalized repository url in `package.json`.
         */
        repoUrl?: BaseContext["repoUrl"] | undefined;

        /**
         * @defaults
         * Previous semver tag or the first commit hash if no previous tag.
         */
        previousTag?: string | undefined;

        /**
         * @defaults
         * Current semver tag or `'v'` + version if no current tag.
         */
        currentTag?: string | undefined;

        /**
         * Should link to the page that compares current tag with previous tag?
         *
         * @defaults
         * `true` if `previousTag` and `currentTag` are truthy.
         */
        linkCompare?: boolean | undefined;
    }

    /**
     * Please check the available options at http://git-scm.com/docs/git-log.
     *
     * There are some defaults:
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
    interface GitRawCommitsOptions extends BaseGitRawCommitsOptions {
        /**
         * @default
         * '%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci'
         */
        format?: BaseGitRawCommitsOptions["format"] | undefined;

        /**
         * @defaults
         * Based on `options.releaseCount`.
         */
        from?: BaseGitRawCommitsOptions["from"] | undefined;

        /**
         * @defaults
         * `true` if `options.append` is truthy.
         */
        reverse?: boolean | undefined;

        /**
         * A function to get debug information.
         *
         * @default
         * options.debug
         */
        debug?: BaseGitRawCommitsOptions["debug"] | undefined;
    }

    type MergedContext<T extends BaseContext = BaseContext> = T & MergedContext.ExtraContext;

    namespace MergedContext {
        interface ExtraContext {
            /**
             * All git semver tags found in the repository. You can't overwrite this value.
             */
            readonly gitSemverTags?: ReadonlyArray<string> | undefined;

            /**
             * Your `package.json` data. You can't overwrite this value.
             */
            readonly packageData?: Readonly<Partial<Package>> | undefined;
        }
    }

    interface Options<TCommit extends Commit = Commit, TContext extends BaseContext = BaseContext> {
        /**
         * This should serve as default values for other arguments of
         * `conventionalChangelogCore` so you don't need to rewrite the same or similar
         * config across your projects. Any value in this could be overwritten. If this
         * is a promise (recommended if async), it should resolve with the config. If
         * this is a function, it expects a node style callback with the config object.
         * If this is an object, it is the config object. The config object should
         * include `context`, `gitRawCommitsOpts`, `parserOpts` and `writerOpts`.
         */
        config?: Options.Config<TCommit, TContext> | undefined;

        pkg?: Options.Pkg | undefined;

        /**
         * Should the log be appended to existing data.
         *
         * @default
         * false
         */
        append?: boolean | undefined;

        /**
         * How many releases of changelog you want to generate. It counts from the
         * upcoming release. Useful when you forgot to generate any previous changelog.
         * Set to `0` to regenerate all.
         *
         * @default
         * 1
         */
        releaseCount?: number | undefined;

        /**
         * If given, unstable tags (e.g. `x.x.x-alpha.1`, `x.x.x-rc.2`) will be skipped.
         */
        skipUnstable?: boolean | undefined;

        /**
         * A debug function. EG: `console.debug.bind(console)`.
         *
         * @default
         * function () {}
         */
        debug?: Options.Logger | undefined;

        /**
         * A warn function. EG: `grunt.verbose.writeln`.
         *
         * @default
         * options.debug
         */
        warn?: Options.Logger | undefined;

        /**
         * A transform function that applies after the parser and before the writer.
         *
         * This is the place to modify the parsed commits.
         */
        transform?: Options.Transform<TCommit> | undefined;

        /**
         * If this value is `true` and `context.version` equals last release then
         * `context.version` will be changed to `'Unreleased'`.
         *
         * @remarks
         * You may want to combine this option with `releaseCount` set to `0` to always
         * overwrite the whole CHANGELOG. `conventional-changelog` only outputs a
         * CHANGELOG but doesn't read any existing one.
         *
         * @defaults
         * `true` if a different version than last release is given. Otherwise `false`.
         */
        outputUnreleased?: boolean | undefined;

        /**
         * Specify a package in lerna-style monorepo that the CHANGELOG should be
         * generated for.
         *
         * Lerna tags releases in the format `foo-package@1.0.0` and assumes that
         * packages are stored in the directory structure `./packages/foo-package`.
         *
         * @default
         * null
         */
        lernaPackage?: string | null | undefined;

        /**
         * Specify a prefix for the git tag that will be taken into account during the
         * comparison. For instance if your version tag is prefixed by `version/`
         * instead of `v` you would specify `--tagPrefix=version/`.
         */
        tagPrefix?: string | undefined;
    }

    namespace Options {
        // tslint:disable-next-line max-line-length
        type Config<TCommit extends Commit = Commit, TContext extends BaseContext = BaseContext> = Promise<Config.Object<TCommit, TContext>> | Config.Function<TCommit, TContext> | Config.Object<TCommit, TContext>;

        namespace Config {
            type FunctionType<TCommit extends Commit = Commit, TContext extends BaseContext = BaseContext> = (callback: FunctionType.Callback<TCommit, TContext>) => void;

            namespace FunctionType {
                type Callback<TCommit extends Commit = Commit, TContext extends BaseContext = BaseContext> = (error: any, config: ObjectType<TCommit, TContext>) => void;
            }

            interface ObjectType<TCommit extends Commit = Commit, TContext extends BaseContext = BaseContext> {
                context?: Partial<TContext> | undefined;
                gitRawCommitsOpts?: GitRawCommitsOptions | undefined;
                parserOpts?: ParserOptions | undefined;
                recommendedBumpOpts?: RecommendedBumpOptions | undefined;
                writerOpts?: WriterOptions<TCommit, TContext> | undefined;
            }

            export {
                FunctionType as Function,
                ObjectType as Object,
            };
        }

        type Logger = (message?: any) => void;

        interface Pkg {
            /**
             * The location of your "package.json".
             */
            path?: string | undefined;

            /**
             * A function that takes `package.json` data as the argument and returns the
             * modified data. Note this is performed before normalizing package.json data.
             * Useful when you need to add a leading 'v' to your version or modify your
             * repository url, etc.
             *
             * @defaults
             * Pass through.
             */
            transform?: ((pkg: Record<string, any>) => Record<string, any>) | undefined;
        }

        interface Transform<T extends Commit = Commit> {
            /**
             * A transform function that applies after the parser and before the writer.
             *
             * This is the place to modify the parsed commits.
             *
             * @param commit The commit from conventional-commits-parser.
             * @param cb     Callback when you are done.
             */
            (this: Stream.Transform, commit: Commit, cb: Transform.Callback<T>): void;
        }

        namespace Transform {
            type Callback<T extends Commit = Commit> = (error: any, commit: T) => void;
        }
    }

    interface ParserOptions extends BaseParserOptions {
        /**
         * What warn function to use. For example, `console.warn.bind(console)` or
         * `grunt.log.writeln`. By default, it's a noop. If it is `true`, it will error
         * if commit cannot be parsed (strict).
         *
         * @default
         * options.warn
         */
        warn?: BaseParserOptions["warn"] | undefined;
    }

    interface WriterOptions<TCommit extends Commit = Commit, TContext extends BaseContext = BaseContext> extends BaseWriterOptions<TCommit, MergedContext<TContext>> {
        /**
         * Last chance to modify your context before generating a changelog.
         *
         * Finalize context is used for generating above context.
         *
         * @remarks
         * If you overwrite this value the above context defaults will be gone.
         */
        finalizeContext?: BaseWriterOptions<TCommit, MergedContext<TContext>>["finalizeContext"] | undefined;

        /**
         * A function to get debug information.
         *
         * @default
         * options.debug
         */
        debug?: BaseWriterOptions["debug"] | undefined;

        /**
         * The normal order means reverse chronological order. `reverse` order means
         * chronological order. Are the commits from upstream in the reverse order? You
         * should only worry about this when generating more than one blocks of logs
         * based on `generateOn`. If you find the last commit is in the wrong block
         * inverse this value.
         *
         * @default
         * options.append
         */
        reverse?: BaseWriterOptions["reverse"] | undefined;

        /**
         * If `true`, the stream will flush out the last bit of commits (could be empty)
         * to changelog.
         *
         * @default
         * options.outputUnreleased
         */
        doFlush?: BaseWriterOptions["doFlush"] | undefined;
    }
}

type Context = conventionalChangelogCore.Context;
type GitRawCommitsOptions = conventionalChangelogCore.GitRawCommitsOptions;
type Options<TCommit extends Commit = Commit, TContext extends BaseContext = BaseContext> = conventionalChangelogCore.Options<TCommit, TContext>;
type ParserOptions = conventionalChangelogCore.ParserOptions;
type WriterOptions<TCommit extends Commit = Commit, TContext extends BaseContext = BaseContext> = conventionalChangelogCore.WriterOptions<TCommit, TContext>;

export = conventionalChangelogCore;

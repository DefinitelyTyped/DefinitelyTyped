// Type definitions for conventional-changelog-writer 4.0
// Project: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-writer#readme
// Definitions by: Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="node" />

import * as Stream from "stream";

import { Commit } from "conventional-commits-parser";

/**
 * Returns a transform stream.
 *
 * @param context Variables that will be interpolated to the template. This
 *                object contains, but not limits to the following fields.
 * @param options
 */
// tslint:disable-next-line no-unnecessary-generics
declare function conventionalChangelogWriter<C extends Commit = Commit>(context?: conventionalChangelogWriter.Context, options?: conventionalChangelogWriter.Options<C>): Stream.Transform;

declare namespace conventionalChangelogWriter {
    interface CommitGroup<C extends Commit = Commit> {
        title: string | false;
        commits: Array<TransformedCommit<C>>;
    }

    interface Context {
        /**
         * Version number of the up-coming release. If `version` is found in the last
         * commit before generating logs, it will be overwritten.
         */
        version?: string;

        title?: string;

        /**
         * By default, this value is true if `version`'s patch is `0`.
         *
         * @default
         * semver.patch(context.version) !== 0
         */
        isPatch?: boolean;

        /**
         * The hosting website. Eg: `'https://github.com'` or `'https://bitbucket.org'`.
         */
        host?: string;

        /**
         * The owner of the repository. Eg: `'stevemao'`.
         */
        owner?: string;

        /**
         * The repository name on `host`. Eg: `'conventional-changelog-writer'`.
         */
        repository?: string;

        /**
         * The whole repository url. Eg: `'https://github.com/conventional-changelog/conventional-changelog-writer'`.
         * The should be used as a fallback when `context.repository` doesn't exist.
         */
        repoUrl?: string;

        /**
         * Should all references be linked?
         *
         * @default
         * (context.repository || context.repoUrl) && context.commit && context.issue
         */
        linkReferences?: boolean;

        /**
         * Commit keyword in the url if `context.linkReferences === true`.
         *
         * @default
         * 'commits'
         */
        commit?: string;

        /**
         * Issue or pull request keyword in the url if `context.linkReferences === true`.
         *
         * @default
         * 'issues'
         */
        issue?: string;

        /**
         * Default to formatted (`'yyyy-mm-dd'`) today's date. [dateformat](https://github.com/felixge/node-dateformat)
         * is used for formatting the date. If `version` is found in the last commit,
         * `committerDate` will overwrite this.
         *
         * @default
         * dateFormat(new Date(), 'yyyy-mm-dd', true)
         */
        date?: string;
    }

    interface NoteGroup {
        title: string | false;
        commits: Commit.Note[];
    }

    interface Options<C extends Commit = Commit> {
        /**
         * Replace with new values in each commit.
         *
         * If this is an object, the keys are paths to a nested object property. the
         * values can be a string (static) and a function (dynamic) with the old value
         * and path passed as arguments. This value is merged with your own transform
         * object.
         *
         * If this is a function, the commit chunk will be passed as the argument and
         * the returned value would be the new commit object. This is a handy function
         * if you can't provide a transform stream as an upstream of this one. If
         * returns a falsy value this commit is ignored.
         *
         * A `raw` object that is originally poured form upstream is attached to `commit`.
         */
        transform?: Options.Transform;

        /**
         * How to group the commits. EG: based on the same type. If this value is falsy,
         * commits are not grouped.
         *
         * @default
         * 'type'
         */
        groupBy?: string | false;

        /**
         * A compare function used to sort commit groups. If it's a string or array, it
         * sorts on the property(ies) by `localeCompare`. Will not sort if this is a
         * falsy value.
         *
         * The string can be a dot path to a nested object property.
         */
        commitGroupsSort?: Options.Sort<CommitGroup<C>>;

        /**
         * A compare function used to sort commits. If it's a string or array, it sorts
         * on the property(ies) by `localeCompare`. Will not sort if this is a falsy
         * value.
         *
         * The string can be a dot path to a nested object property.
         *
         * @default
         * 'header'
         */
        commitsSort?: Options.Sort<TransformedCommit<C>>;

        /**
         * A compare function used to sort note groups. If it's a string or array, it
         * sorts on the property(ies) by `localeCompare`. Will not sort if this is a
         * falsy value.
         *
         * The string can be a dot path to a nested object property.
         *
         * @default
         * 'title'
         */
        noteGroupsSort?: Options.Sort<NoteGroup>;

        /**
         * A compare function used to sort note groups. If it's a string or array, it
         * sorts on the property(ies) by `localeCompare`. Will not sort if this is a
         * falsy value.
         *
         * The string can be a dot path to a nested object property.
         *
         * @default
         * 'text'
         */
        notesSort?: Options.Sort<Commit.Note>;

        /**
         * When the upstream finishes pouring the commits it will generate a block of
         * logs if `doFlush` is `true`. However, you can generate more than one block
         * based on this criteria (usually a version) even if there are still commits
         * from the upstream.
         *
         * @remarks
         * It checks on the transformed commit chunk instead of the original one (you
         * can check on the original by access the `raw` object on the `commit`).
         * However, if the transformed commit is ignored it falls back to the original
         * commit.
         *
         * @remarks
         * If this value is a `string`, it checks the existence of the field. Set to
         * other type to disable it.
         *
         * @default
         * function (commit) {
         *   return semverValid(commit.version)
         * }
         */
        generateOn?: Options.GenerateOn;

        /**
         * Last chance to modify your context before generating a changelog.
         *
         * @default
         * function (context) {
         *   return context
         * }
         */
        finalizeContext?: Options.FinalizeContext;

        /**
         * A function to get debug information.
         *
         * @default
         * function () {}
         */
        debug?: (message?: any) => void;

        /**
         * The normal order means reverse chronological order. `reverse` order means
         * chronological order. Are the commits from upstream in the reverse order? You
         * should only worry about this when generating more than one blocks of logs
         * based on `generateOn`. If you find the last commit is in the wrong block
         * inverse this value.
         *
         * @default
         * false
         */
        reverse?: boolean;

        /**
         * If this value is `true`, instead of emitting strings of changelog, it emits
         * objects containing the details the block.
         *
         * @remarks
         * The downstream must be in object mode if this is `true`.
         *
         * @default
         * false
         */
        includeDetails?: boolean;

        /**
         * If `true`, reverted commits will be ignored.
         *
         * @default
         * true
         */
        ignoreReverted?: boolean;

        /**
         * If `true`, the stream will flush out the last bit of commits (could be empty)
         * to changelog.
         *
         * @default
         * true
         */
        doFlush?: boolean;

        /**
         * The main handlebars template.
         *
         * @remarks
         * Default template: [template.hbs](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-writer/templates/template.hbs)
         */
        mainTemplate?: string;

        /**
         * @remarks
         * Default template: [header.hbs](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-writer/templates/header.hbs)
         */
        headerPartial?: string;

        /**
         * @remarks
         * Default template: [commit.hbs](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-writer/templates/commit.hbs)
         */
        commitPartial?: string;

        /**
         * @remarks
         * Default template: [footer.hbs](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-writer/templates/footer.hbs)
         */
        footerPartial?: string;

        /**
         * Partials that used in the main template, if any. The key should be the
         * partial name and the value should be handlebars template strings. If you are
         * using handlebars template files, read files by yourself.
         */
        partials?: Record<string, string>;
    }

    namespace Options {
        interface FinalizeContext<C extends Commit = Commit> {
            /**
             * @param context   The generated context based on original input `context` and
             *                  `options`.
             * @param options   Normalized options.
             * @param commits   Filtered commits from your git metadata.
             * @param keyCommit The commit that triggers to generate the log.
             */
            (context: Context, options: Options, commits: Array<TransformedCommit<C>>, keyCommit: TransformedCommit<C>): Context;
        }

        type GenerateOn<C extends Commit = Commit> = GenerateOn.Function<C> | string | object;

        namespace GenerateOn {
            interface GenerateOnFunction<C extends Commit = Commit> {
                /**
                 * @param commit  Current commit.
                 * @param commits Current collected commits.
                 * @param context The generated context based on original input `context` and
                 *                `options`.
                 * @param options Normalized options.
                 */
                (commit: TransformedCommit<C>, commits: Array<TransformedCommit<C>>, context: Context, options: Options): boolean;
            }

            export {
                GenerateOnFunction as Function,
            };
        }

        type Sort<T = any> = Sort.Function | string | ReadonlyArray<string> | false;

        namespace Sort {
            type SortFunction<T = any> = (a: T, b: T) => number;

            export {
                SortFunction as Function,
            };
        }

        type Transform<C extends Commit = Commit> = Transform.Object | Transform.Function<C>;

        namespace Transform {
            type TransformFunction<C extends Commit = Commit> = (commit: C, context: Context) => C | false;

            type TransformObject = Record<string, object | TransformObject.Function>;

            namespace TransformObject {
                type TransformObjectFunction<T = any> = (value: T, path: string) => T;

                export {
                    TransformObjectFunction as Function,
                };
            }

            export {
                TransformFunction as Function,
                TransformObject as Object,
            };
        }
    }

    type TransformedCommit<C extends Commit = Commit> = Omit<C, "raw"> & { raw: C; };
}

type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; };

export = conventionalChangelogWriter;

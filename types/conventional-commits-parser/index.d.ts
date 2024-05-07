/// <reference types="node" />

import * as Stream from "stream";

/**
 * Returns an transform stream. If there is any malformed commits it will be
 * gracefully ignored (an empty data will be emitted so down stream can notice).
 *
 * @param options
 */
declare function conventionalCommitsParser(options?: conventionalCommitsParser.Options): Stream.Transform;

declare namespace conventionalCommitsParser {
    /**
     * The sync version. Useful when parsing a single commit. Returns the result.
     *
     * @param commit  A single commit to be parsed.
     * @param options Same as the `options` of `conventionalCommitsParser`.
     */
    function sync(commit: string, options?: Options): Commit;

    type Commit<Fields extends string | number | symbol = string | number | symbol> =
        & CommitBase
        & { [Field in Exclude<Fields, keyof CommitBase>]?: Commit.Field };

    namespace Commit {
        type Field = string | null;

        interface Note {
            title: string;
            text: string;
        }

        interface Reference {
            issue: string;

            /**
             * @default
             * null
             */
            action: Field;

            /**
             * @default
             * null
             */
            owner: Field;

            /**
             * @default
             * null
             */
            repository: Field;

            prefix: string;
            raw: string;
        }

        interface Revert {
            hash?: Field | undefined;
            header?: Field | undefined;
            [field: string]: Field | undefined;
        }
    }

    interface CommitBase {
        /**
         * @default
         * null
         */
        merge: Commit.Field;

        /**
         * @default
         * null
         */
        header: Commit.Field;

        /**
         * @default
         * null
         */
        body: Commit.Field;

        /**
         * @default
         * null
         */
        footer: Commit.Field;

        /**
         * @default
         * []
         */
        notes: Commit.Note[];

        /**
         * @default
         * []
         */
        references: Commit.Reference[];

        /**
         * @default
         * []
         */
        mentions: string[];

        /**
         * @default
         * null
         */
        revert: Commit.Revert | null;

        type?: Commit.Field | undefined;
        scope?: Commit.Field | undefined;
        subject?: Commit.Field | undefined;
    }

    interface Options {
        /**
         * Pattern to match merge headers. EG: branch merge, GitHub or GitLab like pull
         * requests headers. When a merge header is parsed, the next line is used for
         * conventional header parsing.
         *
         * For example, if we have a commit
         *
         * ```text
         * Merge pull request #1 from user/feature/feature-name
         *
         * feat(scope): broadcast $destroy event on scope destruction
         * ```
         *
         * We can parse it with these options and the default headerPattern:
         *
         * ```javascript
         * {
         *  mergePattern: /^Merge pull request #(\d+) from (.*)$/,
         *  mergeCorrespondence: ['id', 'source']
         * }
         * ```
         *
         * @default
         * null
         */
        mergePattern?: Options.Pattern | undefined;

        /**
         * Used to define what capturing group of `mergePattern`.
         *
         * If it's a `string` it will be converted to an `array` separated by a comma.
         *
         * @default
         * null
         */
        mergeCorrespondence?: Options.Correspondence | undefined;

        /**
         * Used to match header pattern.
         *
         * @default
         * /^(\w*)(?:\(([\w\$\.\-\* ]*)\))?\: (.*)$/
         */
        headerPattern?: Options.Pattern | undefined;

        /**
         * Used to define what capturing group of `headerPattern` captures what header
         * part. The order of the array should correspond to the order of
         * `headerPattern`'s capturing group. If the part is not captured it is `null`.
         * If it's a `string` it will be converted to an `array` separated by a comma.
         *
         * @default
         * ['type', 'scope', 'subject']
         */
        headerCorrespondence?: Options.Correspondence | undefined;

        /**
         * Keywords to reference an issue. This value is case __insensitive__. If it's a
         * `string` it will be converted to an `array` separated by a comma.
         *
         * Set it to `null` to reference an issue without any action.
         *
         * @default
         * ['close', 'closes', 'closed', 'fix', 'fixes', 'fixed', 'resolve', 'resolves', 'resolved']
         */
        referenceActions?: Options.Actions | undefined;

        /**
         * The prefixes of an issue. EG: In `gh-123` `gh-` is the prefix.
         *
         * @default
         * ['#']
         */
        issuePrefixes?: Options.Prefixes | undefined;

        /**
         * Used to define if `issuePrefixes` should be considered case sensitive.
         *
         * @default
         * false
         */
        issuePrefixesCaseSensitive?: boolean | undefined;

        /**
         * Keywords for important notes. This value is case __insensitive__. If it's a
         * `string` it will be converted to an `array` separated by a comma.
         *
         * @default
         * ['BREAKING CHANGE']
         */
        noteKeywords?: Options.Keywords | undefined;

        /**
         * Pattern to match other fields.
         *
         * @default
         * /^-(.*?)-$/
         */
        fieldPattern?: Options.Pattern | undefined;

        /**
         * Pattern to match what this commit reverts.
         *
         * @default
         * /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./
         */
        revertPattern?: Options.Pattern | undefined;

        /**
         * Used to define what capturing group of `revertPattern` captures what reverted
         * commit fields. The order of the array should correspond to the order of
         * `revertPattern`'s capturing group.
         *
         * For example, if we had commit
         *
         * ```
         * Revert "throw an error if a callback is passed"
         *
         * This reverts commit 9bb4d6c.
         * ```
         *
         * If configured correctly, the parsed result would be
         *
         * ```
         * {
         *  revert: {
         *    header: 'throw an error if a callback is passed',
         *    hash: '9bb4d6c'
         *  }
         * }
         * ```
         *
         * It implies that this commit reverts a commit with header `'throw an error if
         * a callback is passed'` and hash `'9bb4d6c'`.
         *
         * If it's a `string` it will be converted to an `array` separated by a comma.
         *
         * @default
         * ['header', 'hash']
         */
        revertCorrespondence?: Options.Correspondence | undefined;

        /**
         * What commentChar to use. By default it is `null`, so no comments are stripped.
         * Set to `#` if you pass the contents of `.git/COMMIT_EDITMSG` directly.
         *
         * If you have configured the git commentchar via git config `core.commentchar`
         * you'll want to pass what you have set there.
         *
         * @default
         * null
         */
        commentChar?: string | null | undefined;

        /**
         * Breaking changes header pattern.
         *
         * @default
         * undefined
         */
        breakingHeaderPattern?: RegExp | undefined;

        /**
         * What warn function to use. For example, `console.warn.bind(console)` or
         * `grunt.log.writeln`. By default, it's a noop. If it is `true`, it will error
         * if commit cannot be parsed (strict).
         *
         * @default
         * function () {}
         */
        warn?: ((message?: any) => void) | boolean | undefined;
    }

    namespace Options {
        type Actions = string[] | string | null;
        type Correspondence = string[] | string | null;
        type Keywords = string[] | string | null;
        type Pattern = RegExp | string | null;
        type Prefixes = string[] | string | null;
    }

    export { Commit, Options, sync };
}

export = conventionalCommitsParser;

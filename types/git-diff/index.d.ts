// Type definitions for git-dff 2.0
// Project: https://github.com/danday74/git-diff
// Definitions by: Sang Han <https://github.com/hantatsang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Compare and generate the git diff of two strings if they're different
 * @param str1 First string
 * @param str2 Second string
 * @param options Optional git-diff options
 */
declare function gitDiff(str1: string, str2: string, options?: gitDiff.GitDiffOptions): undefined | string;

declare namespace gitDiff {
    interface GitDiffOptions {
        /**
         * Add color to the git diff returned?
         * @default false
         */
        color?: boolean;
        /**
         * A space separated string of git diff flags from https://git-scm.com/docs/git-diff#_options
         * @default null
         */
        flags?: string | null;
        /**
         * Do not try and get a real git diff, just get me a fake? Faster but may not be 100% accurate
         * @default false
         */
        forceFake?: boolean;
        /**
         * Remove the ugly @@ -1,3 +1,3 @@ header?
         * @default false
         */
        noHeaders?: false;
        /**
         * Remember the options for next time?
         * @default false
         */
        save?: boolean;
        /**
         * Get a word diff instead of a line diff?
         * @default false
         */
        wordDiff?: boolean;
    }
}

export = gitDiff;

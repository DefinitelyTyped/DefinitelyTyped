// Type definitions for git-diff 2.0
// Project: https://github.com/danday74/git-diff#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Compare and generate the git diff of two strings if they're different
 * @param oldString Old string to diff
 * @param newString New string to diff
 * @param options Optional git-diff options
 */
declare function gitDiff(oldString: string, newString: string, options?: gitDiff.GitDiffOptions): undefined | string;

declare namespace gitDiff {
    interface GitDiffOptions {
        /**
         * Add color to the git diff returned?
         * @default false
         */
        color?: boolean | undefined;
        /**
         * A space separated string of git diff flags.
         *
         * This only applies to real git diffs and will not effect the output if it is fake.
         * @default null
         * @see @link https://git-scm.com/docs/git-diff#_options
         */
        flags?: string | null | undefined;
        /**
         * Do not try and get a real git diff, just get me a fake? Faster but may not be 100% accurate
         * @default false
         */
        forceFake?: boolean | undefined;
        /**
         * Remove the ugly @@ -1,3 +1,3 @@ header?
         * @default false
         */
        noHeaders?: boolean | undefined;
        /**
         * Remember the options for next time?
         * @default false
         */
        save?: boolean | undefined;
        /**
         * Get a word diff instead of a line diff?
         * @default false
         */
        wordDiff?: boolean | undefined;
    }
}

export = gitDiff;

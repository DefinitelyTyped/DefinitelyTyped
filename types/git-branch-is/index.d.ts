/**
 * Checks that the current branch of a git repository has a given name
 */
declare function gitBranchIs(
    branchNameOrTest: gitBranchIs.BranchNameOrTest,
    options: gitBranchIs.GitBranchIsOptions,
    callback?: gitBranchIs.Callback,
): void;
declare function gitBranchIs(
    branchNameOrTest: gitBranchIs.BranchNameOrTest,
    options?: gitBranchIs.GitBranchIsOptions,
): Promise<string>;
declare function gitBranchIs(branchNameOrTest: gitBranchIs.BranchNameOrTest, callback: gitBranchIs.Callback): void;

declare namespace gitBranchIs {
    /**
     * Gets the name of the current (i.e. checked out) branch of a git repository.
     *
     * @param options Options.
     * @param callback Callback function called
     * with the current branch name, empty string if not on a branch, or
     * <code>Error</code> if there was an error determining the branch name.
     * @returns If <code>callback</code> is not given, a
     * <code>Promise</code> with the current branch name, empty string if not on a
     * branch, or <code>Error</code> if there was an error determining the branch
     * name.
     */
    function getBranch(options: GitBranchIsOptions, callback: Callback): void;
    function getBranch(options: GitBranchIsOptions): Promise<string>;

    /**
     * test function to apply to the branch name
     */
    interface BranchNameTest {
        (branchName: string): boolean;
    }

    /**
     * Expected name of current branch
     * or a test function to apply to the branch name
     */
    type BranchNameOrTest = string | BranchNameTest;
    /**
     * function called with the return value of <code>branchNameOrTest</code> if it is a function,
     * or the result of identity checking <code>branchNameOrTest</code> to the
     * current branch name
     */
    interface Callback {
        (error: Error | null, result: string): void;
    }

    /**
     * Options for {@link gitBranchIs}.
     */
    interface GitBranchIsOptions {
        /**
         * Current working directory where the branch name is
         * tested
         * @default ''
         */
        cwd?: string | undefined;
        /**
         * Extra arguments to pass to git
         * @default []
         */
        gitArgs?: string[] | undefined;
        /**
         * Path to the repository (i.e.
         * <code>--git-dir=</code> option to <code>git</code>).
         * @default ''
         */
        gitDir?: string | undefined;
        /**
         * Git binary name or path to use (default:
         * <code>'git'</code>).
         * @default 'git'
         */
        gitPath?: string | undefined;
    }
}

export = gitBranchIs;

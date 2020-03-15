// Type definitions for git-branch-is 3.1
// Project: https://github.com/kevinoid/git-branch-is
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Checks that the current branch of a git repository has a given name
 */
declare function gitBranchIs(branchNameOrTest: BranchNameOrTest, options?: Options): Promise<boolean>;
declare function gitBranchIs(branchNameOrTest: BranchNameOrTest, callback: Callback): void;
declare function gitBranchIs(branchNameOrTest: BranchNameOrTest, options: Options, callback?: Callback): void;

/**
 * test function to apply to the branch name
 */
type BranchNameTest = (branchName: string) => boolean | Promise<boolean>;

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
type Callback = (error: Error | null, result?: boolean) => void;

/**
 * Options for {@link gitBranchIs}.
 */
interface Options {
    /**
     * Current working directory where the branch name is
     * tested
     */
    cwd?: string;
    /**
     * Extra arguments to pass to git
     */
    gitArgs?: string[];
    /**
     * Path to the repository (i.e.
     * <code>--git-dir=</code> option to <code>git</code>).
     */
    gitDir?: string;
    /**
     * Git binary name or path to use (default:
     * <code>'git'</code>).
     */
    gitPath?: string;
}

export = gitBranchIs;

// Type definitions for git-parse 1.0
// Project: https://github.com/wayfair/git-parse#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A utility which generates an array of javascript objects representing the current branch of a local git repository's commit history.
 * Returns a promise which resolves with a list of objects describing git commits on the current branch.
 */
export function gitToJs(repoPath: string, options?: GitToJsOptions): Promise<GitCommit[]>;

/**
 * Checks out a commit given its repo and hash.
 * @async
 */
export function checkoutCommit(pathToRepo: string, hash: string, options?: CheckoutCommmitOptions): Promise<void>;

/**
 * Pulls a repo given its path.
 * @async
 */
export function gitPull(pathToRepo: string): Promise<void>;

/**
 * Returns a git diff given a path to the repo, a commit,
 * an optional second commit, and an optional file.
 */
export function gitDiff(pathToRepo: string, commitHash1: string, commitHash2?: string, file?: string): Promise<string>;

// types

export interface FileModification {
    path: string;
    linesAdded?: number;
    linesDeleted?: number;
}

export interface FileRename {
    oldPath: string;
    newPath: string;
}

/**
 *  Object representing the current branch of a local git repository's commit history
 */
export interface GitCommit {
    hash: string;
    authorName: string;
    authorEmail: string;
    date: string;
    message: string;
    filesAdded: FileModification[];
    filesDeleted: FileModification[];
    filesModified: FileModification[];
    filesRenamed: FileRename[];
}

export interface GitToJsOptions {
    sinceCommit?: string;
}

export interface CheckoutCommmitOptions {
    force?: boolean;
}

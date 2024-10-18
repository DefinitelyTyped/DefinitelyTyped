/// <reference types="node" />

import { ExecException } from "node:child_process";

/**
 * Checks if the given `path` contains a git repository.
 *
 * @example
 * import * as git from 'git-state';
 *
 * git.isGit('/path/to/git/repo', (exists) => {
 *   console.log(exists); // => true
 * })
 */
export function isGit(path: string, cb: (isGit: boolean) => void): void;

/**
 * Checks if the given `path` contains a git repository, synchronously.
 *
 * @example
 * import * as git from 'git-state';
 *
 * console.log(git.isGitSync('/path/to/git/repo')); // => true
 */
export function isGitSync(path: string): boolean;

/**
 * Will check the state of the git repository at the given `path`.
 *
 * @example
 * import * as git from 'git-state';
 *
 * git.check('/path/to/git/repo', (err, result) => {
 *   if (err) throw err
 *   console.log(result) // => { branch: 'master',
 *                       //      ahead: 0,
 *                       //      dirty: 9,
 *                       //      untracked: 1,
 *                       //      stashes: 0 }
 * })
 */
export function check(path: string | URL, cb: (error: ExecException | null, result: CheckResult) => void): void;
export function check(
    path: string | URL,
    opts: Options | undefined,
    cb: (error: ExecException | null, result: CheckResult) => void,
): void;

/**
 * Will check the state of the git repository at the given `path`, synchronously.
 *
 * @example
 * import * as git from 'git-state';
 *
 * console.log(git.checkSync('/path/to/git/repo'));
 * // => { branch: 'master',
 * //      ahead: 0,
 * //      dirty: 9,
 * //      untracked: 1,
 * //      stashes: 0 }
 */
export function checkSync(path: string | URL, opts?: Options): CheckResult;

/**
 * Get the amount of untracked files in the git repository at the given `path`.
 *
 * @example
 * import * as git from 'git-state';
 *
 * git.untracked('/path/to/git/repo', (err, untracked) => {
 *   if (err) throw err
 *   console.log(untracked) // => 1
 * })
 */
export function untracked(path: string | URL, cb: (error: ExecException | null, untracked: number) => void): void;
export function untracked(
    path: string | URL,
    opts: Options | undefined,
    cb: (error: ExecException | null, untracked: number) => void,
): void;

/**
 * Get the amount of untracked files in the git repository at the given `path`, synchronously.
 *
 * @example
 * import * as git from 'git-state';
 *
 * console.log(git.untrackedSync('/path/to/git/repo')); // => 1
 */
export function untrackedSync(path: string | URL, opts?: Options): number;

/**
 * Get the amount of dirty files in the git repository at the given `path`.
 *
 * @example
 * import * as git from 'git-state';
 *
 * git.dirty('/path/to/git/repo', (err, dirty) => {
 *   if (err) throw err
 *   console.log(dirty) // => 9
 * })
 */
export function dirty(path: string | URL, cb: (error: ExecException | null, dirty: number) => void): void;
export function dirty(
    path: string | URL,
    opts: Options | undefined,
    cb: (error: ExecException | null, dirty: number) => void,
): void;

/**
 * Get the amount of dirty files in the git repository at the given `path`, synchronously.
 *
 * @example
 * import * as git from 'git-state';
 *
 * console.log(git.dirtySync('/path/to/git/repo')); // => 9
 */
export function dirtySync(path: string | URL, opts?: Options): number;

/**
 * Get the currently checked out branch in the git repository at the given
 * `path`.
 *
 * If the branch name cannot be found, a nullish value will be returned.
 *
 * @example
 * import * as git from 'git-state';
 *
 * git.branch('/path/to/git/repo', (err, branch) => {
 *   if (err) throw err
 *   console.log(branch) // => 'master'
 * })
 */
export function branch(path: string | URL, cb: (error: ExecException | null, branch: string | undefined) => void): void;
export function branch(
    path: string | URL,
    opts: Options | undefined,
    cb: (error: ExecException | null, branch: string | undefined) => void,
): void;

/**
 * Get the currently checked out branch in the git repository at the given
 * `path`, synchronously.
 *
 * If the branch name cannot be found, a nullish value will be returned.
 *
 * @example
 * import * as git from 'git-state';
 *
 * console.log(git.branchSync('/path/to/git/repo')); // => 'master'
 */
export function branchSync(path: string | URL, opts?: Options): string | null;

/**
 * Get the amount of commits the current branch in the git repository at
 * the given `path` is ahead of its remote.
 *
 * If the number cannot be determined, `NaN` will be returned instead.
 *
 * @example
 * import * as git from 'git-state';
 *
 * git.ahead('/path/to/git/repo', (err, ahead) => {
 *   if (err) throw err
 *   console.log(ahead) // => 0
 * })
 */
export function ahead(path: string | URL, cb: (error: ExecException | null, ahead: number) => void): void;
export function ahead(
    path: string | URL,
    opts: Options | undefined,
    cb: (error: ExecException | null, ahead: number) => void,
): void;

/**
 * Get the amount of commits the current branch in the git repository at
 * the given `path` is ahead of its remote, synchronously.
 *
 * If the number cannot be determined, `NaN` will be returned instead.
 *
 * @example
 * import * as git from 'git-state';
 *
 * console.log(git.aheadSync('/path/to/git/repo')); // => 0
 */
export function aheadSync(path: string | URL, opts?: Options): number;

/**
 * Get the short-hash (e.g. `7b0a3ab`) for the latest commit at `HEAD` in
 * the git repository at the given `path`.
 *
 * @example
 * import * as git from 'git-state';
 *
 * git.commit('/path/to/git/repo', (err, commitHash) => {
 *   if (err) throw err
 *   console.log(commitHash) // => '7b0a3ab'
 * })
 */
export function commit(path: string | URL, cb: (error: ExecException | null, commitHash: string) => void): void;
export function commit(
    path: string | URL,
    opts: Options | undefined,
    cb: (error: ExecException | null, commitHash: string) => void,
): void;

/**
 * Get the short-hash (e.g. `7b0a3ab`) for the latest commit at `HEAD` in
 * the git repository at the given `path`, synchronously.
 *
 * @example
 * import * as git from 'git-state';
 *
 * console.log(git.commitSync('/path/to/git/repo')); // => '7b0a3ab'
 */
export function commitSync(path: string | URL, opts?: Options): string;

/**
 * Get the amount of stashed changes in the git repository at the given
 * `path`.
 *
 * @example
 * import * as git from 'git-state';
 *
 * git.stashes('/path/to/git/repo', (err, stashes) => {
 *   if (err) throw err
 *   console.log(stashes) // => 0
 * })
 */
export function stashes(path: string | URL, cb: (error: ExecException | null, stashes: number) => void): void;
export function stashes(
    path: string | URL,
    opts: Options | undefined,
    cb: (error: ExecException | null, stashes: number) => void,
): void;

/**
 * Get the amount of stashed changes in the git repository at the given
 * `path`, synchronously.
 *
 * @example
 * import * as git from 'git-state';
 *
 * console.log(git.stashesSync('/path/to/git/repo')); // => 0
 */
export function stashesSync(path: string | URL, opts?: Options): number;

/**
 * Get the commit message of the latest commit.
 *
 * @example
 * import * as git from 'git-state';
 *
 * git.message('/path/to/git/repo', (err, message) => {
 *   if (err) throw err
 *   console.log(message) // => 'Release 1.0.0'
 * })
 */
export function message(path: string | URL, cb: (error: ExecException | null, message: string) => void): void;
export function message(
    path: string | URL,
    opts: Options | undefined,
    cb: (error: ExecException | null, message: string) => void,
): void;

/**
 * Get the commit message of the latest commit, synchronously.
 *
 * @example
 * import * as git from 'git-state';
 *
 * console.log(git.messageSync('/path/to/git/repo')); // => 'Release 1.0.0'
 */
export function messageSync(path: string | URL, opts?: Options): string;

export interface Options {
    /**
     * Largest amount of data (in bytes) allowed on stdout or
     * stderr - if exceeded child process is killed.
     *
     * @default 200*1024
     */
    maxBuffer?: number | undefined;
}

export interface CheckResult {
    /**
     * The currently checked out branch.
     */
    branch: string | null | undefined;
    /**
     * The amount of commits the current branch is ahead of the remote
     * (may be `NaN` if there for instance is no remote).
     */
    ahead: number;
    /**
     * The number of dirty files.
     */
    dirty: number;
    /**
     * The number of untracked files.
     */
    untracked: number;
    /**
     * The number of stored stashes.
     */
    stashes: number;
}

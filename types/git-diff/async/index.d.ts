import gitDiff = require("../index");

/**
 * Asynchronously compare and generate the git diff of two strings if
 * they're different
 * @param oldString Old string to diff
 * @param newString New string to diff
 * @param options Optional git-diff options
 */
declare function gitDiffAsync(
    oldString: string,
    newString: string,
    options?: gitDiff.GitDiffOptions,
): Promise<undefined | string>;

export = gitDiffAsync;

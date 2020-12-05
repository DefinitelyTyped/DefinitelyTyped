import gitDiff = require('../index');

/**
 * Asynchronously compare and generate the git diff of two strings if
 * they're different
 * @param str1 First string
 * @param str2 Second string
 * @param options Optional git-diff options
 */
declare function gitDiffAsync(
    str1: string,
    str2: string,
    options?: gitDiff.GitDiffOptions,
): Promise<undefined | string>;

export = gitDiffAsync;

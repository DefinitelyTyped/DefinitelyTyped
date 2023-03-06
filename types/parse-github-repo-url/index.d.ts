// Type definitions for parse-github-repo-url 1.4
// Project: https://github.com/repo-utils/parse-github-repo-url
// Definitions by: Christoph Thiede <https://github.com/LinqLover>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

/**
 * Parse all the stupid ways you could write a GitHub URL in your damn `package.json`.
 * @returns `version` could be `false`y, a semantic version, a commit, or a branch, etc.
 */
declare function parse(url: string): false | [user: string, repo: string, version?: string];

export = parse;

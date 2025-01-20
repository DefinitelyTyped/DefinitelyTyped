/**
 * Parse all the stupid ways you could write a GitHub URL in your damn `package.json`.
 * @returns `version` could be `false`y, a semantic version, a commit, or a branch, etc.
 */
declare function parse(url: string): false | [user: string, repo: string, version?: string];

export = parse;

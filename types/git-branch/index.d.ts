// Type definitions for git-branch 2.0
// Project: https://github.com/jonschlinkert/git-branch
// Definitions by: Ryan Clark <https://github.com/rynclark>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = GitBranch;

declare function GitBranch(cwd?: string): Promise<string>;
declare function GitBranch(cwd?: string, callback?: (err: null | string, name: string) => void): void;
declare function GitBranch(callback: (err: null | string, name: string) => void): void;

declare namespace GitBranch {
  function sync(cwd?: string): string;
}

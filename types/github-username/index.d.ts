// Type definitions for github-username 4.1
// Project: https://github.com/sindresorhus/github-username#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = githubUsername;

declare function githubUsername(email: string, token: string): Promise<string>;

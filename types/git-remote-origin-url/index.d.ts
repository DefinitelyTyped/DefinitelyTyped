// Type definitions for git-remote-origin-url 2.0
// Project: https://github.com/sindresorhus/git-remote-origin-url#readme
// Definitions by: Jay Anslow <https://github.com/janslow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function gitRemoteOriginUrl(cwd?: string): Promise<string>;

export = gitRemoteOriginUrl;

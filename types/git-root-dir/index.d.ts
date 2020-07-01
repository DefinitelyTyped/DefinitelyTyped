// Type definitions for git-root-dir 1.0
// Project: https://github.com/luftywiranda13/git-root-dir#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function gitRootDir(cwd?: string): Promise<string | null>;

export = gitRootDir;

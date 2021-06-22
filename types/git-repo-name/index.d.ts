// Type definitions for git-repo-name 1.0
// Project: https://github.com/jonschlinkert/git-repo-name
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = gitRepoName;

declare function gitRepoName(options?: string | gitRepoName.Options): Promise<string>;
declare function gitRepoName(callback: (err: Error | null, repoName: string) => void): void;
declare function gitRepoName(
    options: string | gitRepoName.Options,
    callback: (err: Error | null, repoName: string) => void
): void;

declare namespace gitRepoName {
    function promise(options?: string | Options): Promise<string>;
    function sync(options?: string | Options): string;

    interface Options {
        cwd?: string;
        path?: string;
    }
}

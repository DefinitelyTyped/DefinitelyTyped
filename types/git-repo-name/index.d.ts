export = gitRepoName;

declare function gitRepoName(options?: string | gitRepoName.Options): Promise<string>;
declare function gitRepoName(callback: (err: Error | null, repoName: string) => void): void;
declare function gitRepoName(
    options: string | gitRepoName.Options,
    callback: (err: Error | null, repoName: string) => void,
): void;

declare namespace gitRepoName {
    function promise(options?: string | Options): Promise<string>;
    function sync(options?: string | Options): string;

    interface Options {
        cwd?: string | undefined;
        path?: string | undefined;
    }
}

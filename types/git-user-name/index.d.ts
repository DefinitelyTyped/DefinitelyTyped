export = gitUserName;

declare function gitUserName(options?: gitUserName.Options): string | null;

declare namespace gitUserName {
    interface Options {
        cwd?: string | undefined;
        path?: string | undefined;
        gitconfig?: string | undefined;
    }
}

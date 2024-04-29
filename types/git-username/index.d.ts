export = gitUsername;

declare function gitUsername(cwd?: string, options?: gitUsername.OptionsWithoutCwd): string | null;
declare function gitUsername(options: gitUsername.Options): string | null;

declare namespace gitUsername {
    interface Options {
        strict?: boolean;
        cwd?: string;
    }

    type OptionsWithoutCwd = Omit<Options, "cwd">;
}

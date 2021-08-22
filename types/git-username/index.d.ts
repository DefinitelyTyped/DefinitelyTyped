// Type definitions for git-username 1.0
// Project: https://github.com/jonschlinkert/git-username
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = gitUsername;

declare function gitUsername(cwd?: string, options?: gitUsername.OptionsWithoutCwd): string | null;
declare function gitUsername(options: gitUsername.Options): string | null;

declare namespace gitUsername {
    interface Options {
        strict?: boolean;
        cwd?: string;
    }

    type OptionsWithoutCwd = Omit<Options, 'cwd'>;
}

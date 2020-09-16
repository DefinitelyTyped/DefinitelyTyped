// Type definitions for git-user-name 2.0
// Project: https://github.com/jonschlinkert/git-user-name
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = gitUserName;

declare function gitUserName(options?: gitUserName.Options): string | null;

declare namespace gitUserName {
    interface Options {
        cwd?: string;
        path?: string;
        gitconfig?: string;
    }
}

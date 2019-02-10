// Type definitions for git-username 1.0
// Project: https://github.com/jonschlinkert/git-username
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = gitUsername;

declare function gitUsername(options: gitUsername.StrictOptions): string;
declare function gitUsername(options?: string | gitUsername.BaseOptions): string | null;

declare namespace gitUsername {
    interface BaseOptions {
        cwd?: string;
        strict?: boolean;
    }

    interface StrictOptions extends BaseOptions {
        strict: true;
    }
}

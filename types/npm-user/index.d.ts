// Type definitions for npm-user 3.0
// Project: https://github.com/sindresorhus/npm-user#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = npmUser;

declare function npmUser(name: string): Promise<npmUser.UserData>;

declare namespace npmUser {
    interface UserData {
        name: string | null;
        avatar: string | null;
        email: string | null;
        github: string | null;
        twitter: string | null;
    }
}

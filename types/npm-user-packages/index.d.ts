// Type definitions for npm-user-packages 3.0
// Project: https://github.com/kevva/npm-user-packages#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = npmUserPackages;

/**
 * Get packages by a npm user.
 * @param username User to fetch packages from.
 */
declare function npmUserPackages(username: string): Promise<npmUserPackages.PackageData[]>;

declare namespace npmUserPackages {
    interface PackageData {
        author: {
            email?: string | undefined;
            name: string;
            url?: string | undefined;
            username?: string | undefined;
        };
        date: string;
        description: string;
        keywords: string[];
        links: {
            bugs?: string | undefined;
            homepage?: string | undefined;
            npm: string;
            repository?: string | undefined;
        };
        maintainers: Array<{
            email: string;
            username: string;
        }>;
        name: string;
        publisher: {
            email: string;
            username: string;
        };
        scope: string;
        version: string;
    }
}

// Type definitions for npm-keyword 5.0
// Project: https://github.com/sindresorhus/npm-keyword#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = npmKeyword;

/**
 * Get a list of npm packages with a certain keyword.
 *
 * @param keyword One or more keywords. Only matches packages that have *all* the given keywords. Example: `['string', 'camelcase']`
 * @returns A promise for a list of packages having the specified keyword in their package.json `keyword` property.
 */
declare function npmKeyword(
    keyword: string | string[],
    options?: npmKeyword.Options
): Promise<npmKeyword.PackageDescriptor[]>;

declare namespace npmKeyword {
    /**
     * @param keyword One or more keywords. Only matches packages that have *all* the given keywords. Example: `['string', 'camelcase']`
     * @returns A promise for a list of package names. Use this if you don't need the description as it's faster.
     */
    function names(keyword: string | string[], options?: Options): Promise<string[]>;

    /**
     * @param keyword One or more keywords. Only matches packages that have *all* the given keywords. Example: `['string', 'camelcase']`
     * @returns A promise for the count of packages.
     */
    function count(keyword: string | string[]): Promise<number>;

    interface Options {
        /**
         * Limits the amount of results.
         * @default 250
         */
        size?: number;
    }

    interface PackageDescriptor {
        name: string;
        description: string;
    }
}

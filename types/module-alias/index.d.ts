// Type definitions for module-alias 2.0
// Project: https://github.com/ilearnio/module-alias/
// Definitions by: Kevin Ramharak <https://github.com/KevinRamharak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/

export = init;

/**
 * Import aliases from package.json
 */
declare function init(options?: string | init.Options): void;

/**
 * Exported functoins
 */
declare namespace init {
    function isPathMatchesAlias(path: string, alias: string): boolean;

    /**
     * Register a custom modules directory
     */
    function addPath(path: string): void;

    /**
     * Register a single alias
     */
    function addAlias(alias: string, path: string): void;

    /**
     * Register mutliple aliases
     */
    function addAliases(aliases: { [alias: string]: string }): void;

    /**
     * Reset any changes maded (resets all registered aliases
     * and custom module directories)
     * The function is undocumented and for testing purposes only
     */
    function reset(): void;

    /**
     * module intialis options type
     */
    interface Options {
        base: string;
    }
}

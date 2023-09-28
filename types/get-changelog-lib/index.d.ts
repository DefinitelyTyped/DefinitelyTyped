// Type definitions for get-changelog-lib 2.1
// Project: https://github.com/Clement134/get-changelog/tree/master/packages/get-changelog-lib
// Definitions by: Clement134 <https://github.com/Clement134>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Configuration {
    /** mapping between custom repositories identifier and source path */
    customRepositories?: { [key: string]: string };
    /** explore files with txt extension */
    exploreTxtFiles?: boolean;
    /** explore additional branches (only master by default) */
    branches?: string[];
}
interface Cache {
    [key: string]: string;
}

declare class ChangelogFinder {
    constructor(configuration?: Configuration, cache?: Cache);
    /** get npm package changelog */
    getChangelog(moduleName: string, moduleVersion?: string): Promise<string>;
}

export = ChangelogFinder;

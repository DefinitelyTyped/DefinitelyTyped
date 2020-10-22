// Type definitions for npm-license-crawler 0.1
// Project: https://github.com/mwittig/npm-license-crawler
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface Licenses {
    [repository: string]: {
        licenses: string;
        licenseUrl: string;
        parents: string;
        repository: string;
    };
}

export interface CrawlerOptions {
    /** export the data as comma-separated values to the given file. The path will be created if it does not exist. */
    csv?: string;
    /** show only third-party licenses, i.e., only list the dependencies defined in package.json. */
    dependencies?: boolean;
    /** show only development dependencies */
    development?: boolean;
    /** path to a directory to be excluded (and its subdirectories) from the search. */
    exclude?: string | string[];
    /** export data as JSON to the given file. The path will be created if it does not exist. */
    json?: string;
    /** omit version numbers in result (e.g. "npm-license-crawler@0.1.5" becomes "npm-license-crawler") */
    omitVersion?: boolean;
    /** show only direct dependencies licenses, i.e., don't list dependencies of dependencies. */
    onlyDirectDependencies?: boolean;
    /** show only production dependencies */
    production?: boolean;
    /** output the relative file path for license files. */
    relativeLicensePath?: boolean;
    /** path to the directory the license search should start from. If omitted the current working directory is assumed. */
    start: string | string[];
    /** show only licenses that can't be determined or have been guessed. */
    unknown?: boolean;
}

export type Callback = (error: Error | null, licenses: Licenses) => void;

export function dumpLicenses(args: CrawlerOptions, callback: Callback): void;

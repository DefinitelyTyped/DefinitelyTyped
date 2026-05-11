export interface License {
    licenses: string;
    licenseUrl: string;
    parents: string;
    repository: string;
}

export interface Licenses {
    [repository: string]: License;
}

export interface CrawlerOptions {
    /** export the data as comma-separated values to the given file. The path will be created if it does not exist. */
    csv?: string | undefined;
    /** show only third-party licenses, i.e., only list the dependencies defined in package.json. */
    dependencies?: boolean | undefined;
    /** show only development dependencies */
    development?: boolean | undefined;
    /** path to a directory to be excluded (and its subdirectories) from the search. */
    exclude?: string | string[] | undefined;
    /** export data as JSON to the given file. The path will be created if it does not exist. */
    json?: string | undefined;
    /** omit version numbers in result (e.g. "npm-license-crawler@0.1.5" becomes "npm-license-crawler") */
    omitVersion?: boolean | undefined;
    /** show only direct dependencies licenses, i.e., don't list dependencies of dependencies. */
    onlyDirectDependencies?: boolean | undefined;
    /** show only production dependencies */
    production?: boolean | undefined;
    /** output the relative file path for license files. */
    relativeLicensePath?: boolean | undefined;
    /** path to the directory the license search should start from. If omitted the current working directory is assumed. */
    start: string | string[];
    /** show only licenses that can't be determined or have been guessed. */
    unknown?: boolean | undefined;
    /** don't show colors in the console output */
    noColor?: boolean | undefined;
}

export type Callback = (error: Error | null, licenses: Licenses) => void;

export function dumpLicenses(args: CrawlerOptions, callback: Callback): void;

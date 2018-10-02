// Type definitions for license-checker 15.0
// Project: https://github.com/davglass/license-checker
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>, Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Options struct for the init() function
 */
export interface InitOpts {
    /**
     * Path to start checking dependencies from
     */
    start: string;
    /**
     * Only show production dependencies
     */
    production?: boolean;
    /**
     * Only show development dependencies
     */
    development?: boolean;
    /**
     * Report guessed licenses as unknown licenses
     */
    unknown?: boolean;
    /**
     * Only list packages with unknown or guessed licenses
     */
    onlyunknown?: boolean;
    /**
     * to add a custom Format file in JSON
     */
    customPath?: string | ModuleInfo;
    /**
     * Exclude modules which licenses are in the comma-separated list from the output
     */
    exclude?: string[];
    /**
     * Output the location of the license files as relative paths
     */
    relativeLicensePath?: boolean;
    /**
     * Output a summary of the license usage
     */
    summary?: boolean;
    /**
     * Fail (exit with code 1) on the first occurrence of the licenses of the comma-separated list
     */
    failOn?: string[];
    /**
     * Use chalk to colorize the licenses member of each returned module info. Unknown licenses become red.
     */
    color?: boolean;
}

/**
 * Information about one dependency
 */
export interface ModuleInfo {
    /**
     * Module name
     */
    name?: string;
    /**
     * Module version
     */
    version?: string;
    /**
     * Module description
     */
    description?: string;
    /**
     * Repository URL
     */
    repository?: string;
    /**
     * Publisher name
     */
    publisher?: string;
    /**
     * Publisher e-mail
     */
    email?: string;
    /**
     * Publisher URL
     */
    url?: string;
    /**
     * Array of licenses
     */
    licenses?: string | string[];
    /**
     * Path to license file, if available
     */
    licenseFile?: string;
    /**
     * Contents of the license
     */
    licenseText?: string;
    /**
     * Whether the license is modified
     */
    licenseModified?: string;
}

export interface ModuleInfos {
    [packageName: string]: ModuleInfo;
}

/**
 * Run the license check
 * @param opts specifies the path to the module to check dependencies of
 */
export function init(
    opts: InitOpts,
    callback: (err: Error, ret: ModuleInfos) => void
): void;

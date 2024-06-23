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
    production?: boolean | undefined;
    /**
     * Only show development dependencies
     */
    development?: boolean | undefined;
    /**
     * Report guessed licenses as unknown licenses
     */
    unknown?: boolean | undefined;
    /**
     * Only list packages with unknown or guessed licenses
     */
    onlyunknown?: boolean | undefined;
    /**
     * Output in json format
     */
    json?: boolean | undefined;
    /**
     * Output in csv format
     */
    csv?: boolean | undefined;
    /**
     * Prefix column for component in csv format.
     */
    csvComponentPrefix?: string | undefined;
    /**
     * Write the data to a specific file.
     */
    out?: string | undefined;
    /**
     * To add a custom Format file in JSON
     */
    customPath?: string | ModuleInfo | undefined;
    /**
     * Exclude modules which licenses are in the comma-separated list from the output
     */
    exclude?: string[] | undefined;
    /**
     * Output the location of the license files as relative paths
     */
    relativeLicensePath?: boolean | undefined;
    /**
     * Output a summary of the license usage
     */
    summary?: boolean | undefined;
    /**
     * Fail (exit with code 1) on the first occurrence of the licenses of the semicolon-separated list
     */
    failOn?: string | undefined;
    /**
     * Fail (exit with code 1) on the first occurrence of the licenses not in the semicolon-separated list
     */
    onlyAllow?: string | undefined;
    /**
     * Restrict output to the packages (package@version) in the semicolon-separated list
     */
    packages?: string | undefined;
    /**
     * Restrict output to the packages (package@version) not in the semicolon-separated list
     */
    excludePackages?: string | undefined;
    /**
     * Restrict output to not include any package marked as private
     */
    excludePrivatePackages?: boolean | undefined;
    /**
     * Look for direct dependencies only
     */
    direct?: boolean | undefined;
    /**
     * Colorize output
     */
    color?: boolean | undefined;
    /**
     * Specify the columns for CSV format
     * or add the specified items for JSON format
     */
    customFormat?: Record<string, any> | undefined;
}

/**
 * Information about one dependency
 */
export interface ModuleInfo {
    /**
     * Module name
     */
    name?: string | undefined;
    /**
     * Module version
     */
    version?: string | undefined;
    /**
     * Module description
     */
    description?: string | undefined;
    /**
     * Repository URL
     */
    repository?: string | undefined;
    /**
     * Publisher name
     */
    publisher?: string | undefined;
    /**
     * Publisher e-mail
     */
    email?: string | undefined;
    /**
     * Publisher URL
     */
    url?: string | undefined;
    /**
     * Array of licenses
     */
    licenses?: string | string[] | undefined;
    /**
     * Path to license file, if available
     */
    licenseFile?: string | undefined;
    /**
     * Contents of the license
     */
    licenseText?: string | undefined;
    /**
     * Whether the license is modified
     */
    licenseModified?: string | undefined;
    /**
     * Private module
     */
    private?: boolean | undefined;
    /**
     * Path to module
     */
    path?: string | undefined;
    /**
     * Copyright statements
     */
    copyright?: string | undefined;
    /**
     * Path of NOTICE file
     */
    noticeFile?: string | undefined;
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
    callback: (err: Error, ret: ModuleInfos) => void,
): void;

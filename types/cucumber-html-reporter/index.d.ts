// Type definitions for Cucumber-HTML-Reporter 5.0
// Project: https://github.com/gkushang/cucumber-html-reporter
// Definitions by: Malav Shah <https://github.com/malavshah2110>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export interface Options {
    /**
     * Selects theme for Reporter.
     * @default default
     */
    theme: string;

    /**
     * Path of Cucumber JSON file.
     */
    jsonFile: string;

    /**
     * If more than one file, Path of JSON directory.
     */
    jsonDir?: string;

    /**
     * Path of HTML Output.
     */
    output: string;

    /**
     * Bootstrap theme value:
     * true: Reports total # of passed/failed scenarios as HEADER.
     * false: Reports total # of passed/failed features as HEADER.
     */
    reportSuiteAsScenarios: boolean;

    /**
     * Automatically launch HTML report at the end of test suite.
     */
    launchReport: boolean;

    /**
     * Reports any bad json files found during merging json files from directory.
     * true: Ignores any bad json files found and continue with remaining files to merge.
     * false: Default Option. Fail report generation if any bad json is found.
     */
    ignoreBadJsonFile?: boolean;

    /**
     * Custom Project Name.
     */
    name?: string;

    /**
     * Brand Title of Report E.g: Smoke Test Reports.
     * @default 'Cucumberjs Report'
     */
    brandTitle?: string;

    /**
     * The column Layout value.
     * 1 = One Column Layout (col-xx-12).
     * 2 = Two Columns Layout (col-xx-6).
     * @default 2;
     */
    columnLayout?: 1 | 2;

    /**
     * To store screenshots:
     * true: stores screens. It creates a directory 'screenshot' if does not exists.
     * false or undefined: does not store screenshots.
     * @default undefined;
     */
    storeScreenshots?: boolean;

    /**
     * Applicable if storeScreenshots = true.
     * Relative Path for directory where screenshots should be saved.
     */
    screenshotsDirectory?: string;

    /**
     * For no Inline Screenshots:
     * true: Applicable if storeScreenshots=true. Avoids inlining screenshots,
     * instead use relative path to screenshot.
     * false or undefined: Keeps screenshots inlined.
     * @default undefined;
     */
    noInlineScreenshots?: boolean;

    /**
     * Print more data to report, such as Browser info, app info.
     * @default undefined;
     */
    metadata?: {};
}

/**
 * Report Generator function.
 */
export function generate(options: Options): void;

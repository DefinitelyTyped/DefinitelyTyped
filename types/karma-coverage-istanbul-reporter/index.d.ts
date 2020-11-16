// Type definitions for karma-coverage-istanbul-reporter 2.1
// Project: https://github.com/mattlewis92/karma-coverage-istanbul-reporter#readme
// Definitions by: Dmitry Demensky <https://github.com/demensky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

export interface Threshold {
    /** @default 0 */
    readonly statements?: number;

    /** @default 0 */
    readonly lines?: number;

    /** @default 0 */
    readonly branches?: number;

    /** @default 0 */
    readonly functions?: number;
}

export interface ThresholdsEach extends Threshold {
    /** @default {} */
    readonly overrides?: { [key: string]: Threshold };
}

export interface ThresholdConfig {
    /**
     * Set to `true` to not fail the test command when thresholds are not met.
     * @default false
     */
    readonly emitWarning?: boolean;

    /** Thresholds for all files. */
    readonly global?: Threshold;

    /** Thresholds per file. */
    readonly each?: ThresholdsEach;
}

/** @see {@link https://github.com/mattlewis92/karma-coverage-istanbul-reporter#configuration} */
export interface CoverageIstanbulReporter {
    /** Reports can be any that are listed {@link https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib here}. */
    readonly reports?: string[];

    /**
     * Base output directory.
     * If you include `%browser%` in the path it will be replaced with the karma browser name.
     */
    readonly dir?: string;

    /** Combines coverage information from multiple browsers into one report rather than outputting a report for each browser */
    readonly combineBrowserReports?: boolean;

    /** if using webpack and pre-loaders, work around webpack breaking the source path. */
    readonly fixWebpackSourcePaths?: boolean;

    /** Omit files with no statements, no functions and no branches from the report. */
    readonly skipFilesWithNoCoverage?: boolean;

    // TODO: Add istanbul-api
    /** Most reporters accept additional config options. You can pass these through the `report-config` option. */
    readonly 'report-config'?: any;

    /**
     * Enforce percentage thresholds.
     * Anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode.
     */
    readonly thresholds?: ThresholdConfig;

    /** Output config used by istanbul for debugging. */
    readonly verbose?: boolean;

    // TODO: Add istanbul-api
    /** `instrumentation` is used to configure Istanbul API package. */
    readonly instrumentation?: any;
}

declare module 'karma' {
    interface ConfigOptions {
        /** {@link https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39 Any of these options are valid}. */
        readonly coverageIstanbulReporter?: CoverageIstanbulReporter;
    }
}

// Type definitions for webpack-bugsnag-plugins 1.4
// Project: https://github.com/bugsnag/webpack-bugsnag-plugins#readme
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as webpack from "webpack";

export interface SourceMapUploaderOptions {
    /**
     * Your Bugsnag API key
     */
    apiKey: string;

    /**
     * The path to your bundled assets (as the browser will see them).
     * This option must either be provided here, or as `output.publicPath` in
     * your Webpack config.
     *
     * @default output.publicPath
     */
    publicPath?: string;

    /**
     * The version of the application you are building
     */
    appVersion?: string;

    /**
     * Whether you want to overwrite previously uploaded sourcemaps
     */
    overwrite?: boolean;

    /**
     * Post the build payload to a URL other than the default
     *
     * @default https://upload.bugsnag.com
     */
    endpoint?: string;

    /**
     * A list of bundle file extensions which shouldn't be uploaded
     *
     * @default ['.css']
     */
    ignoredBundleExtensions?: string[];
}

export class BugsnagSourceMapUploaderPlugin extends webpack.Plugin {
    constructor(options: SourceMapUploaderOptions);
}

export interface BuildReporterBuild {
    /**
     * Your Bugsnag API key
     */
    apiKey: string;

    /**
     * The version of the application you are building (this should match the
     * `appVersion` configured in your notifier)
     */
    appVersion: string;

    /**
     * 'production', 'staging' etc. (leave blank if this build can be released to
     * different releaseStages)
     */
    releaseStage?: string;

    /**
     * An object describing the source control of the build (if not specified,
     * the module will attempt to detect source control information from .git, .
     * hg and the nearest package.json)
     */
    sourceControl?: {
        /**
         *  The source control provider.
         */
        provider:
            | "github"
            | "github-enterprise"
            | "gitlab"
            | "gitlab-onpremise"
            | "bitbucket"
            | "bitbucket-server";

        /**
         * A URL (git/ssh/https) pointing to the repository, or webpage representing
         * the repository
         */
        repository: string;

        /**
         * The unique identifier for the commit (e.g. git SHA)
         */
        revision: string;
    };

    /**
     * The name of the person/machine that created this build (defaults to the
     * result of the `whoami` command)
     */
    builderName?: string;

    /**
     * Automatically associate this build with any new error events and sessions
     * that are received for the releaseStage until a subsequent build
     * notification is received. If this is set to true and no `releaseStage`
     * is provided the build will be applied to 'production'. You should only use
     * this option if you aren’t able to set an `appVersion` in your notifier.
     */
    autoAssignRelease?: boolean;
}

export interface BuildReporterOptions {
    /**
     * The minimum severity of log to output
     *
     * @default warn
     */
    logLevel?: "debug" | "info" | "warn" | "error";

    /**
     * Provide a different logger object
     */
    logger?: {
        debug?: any;
        info?: any;
        warn?: any;
        error?: any;
    };

    /**
     * The path to search for source control info
     *
     * @default process.cwd()
     */
    path?: string;

    /**
     * Post the build payload to a specified URL
     *
     * @default https://build.bugsnag.com
     */
    endpoint?: string;
}

export class BugsnagBuildReporterPlugin extends webpack.Plugin {
    constructor(build: BuildReporterBuild, options?: BuildReporterOptions);
}

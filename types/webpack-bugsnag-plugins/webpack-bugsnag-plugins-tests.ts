import {
    BugsnagSourceMapUploaderPlugin,
    BugsnagBuildReporterPlugin
} from "webpack-bugsnag-plugins";

/**
 * Missing or invalid options
 */

// @ts-expect-error
new BugsnagSourceMapUploaderPlugin();

// @ts-expect-error
new BugsnagBuildReporterPlugin();

// @ts-expect-error
new BugsnagSourceMapUploaderPlugin({});

// @ts-expect-error
new BugsnagBuildReporterPlugin({});

// @ts-expect-error
new BugsnagBuildReporterPlugin({
    apiKey: "123456789"
});

/**
 * Minimal valid options
 */

// $ExpectType BugsnagSourceMapUploaderPlugin
new BugsnagSourceMapUploaderPlugin({
    apiKey: "123456789"
});

// $ExpectType BugsnagBuildReporterPlugin
new BugsnagBuildReporterPlugin({
    apiKey: "123456789",
    appVersion: "1.2.3"
});

// $ExpectType BugsnagBuildReporterPlugin
new BugsnagBuildReporterPlugin({
    apiKey: "123456789",
    appVersion: "1.2.3",
    metadata: {
        foo: "bar"
    }
});

/**
 * All possible options
 */

// $ExpectType BugsnagSourceMapUploaderPlugin
new BugsnagSourceMapUploaderPlugin({
    apiKey: "123456789",
    publicPath: "*/dist",
    appVersion: "1.2.3",
    overwrite: true,
    endpoint: "https://upload.bugsnag.com",
    ignoredBundleExtensions: [".css"]
});

// $ExpectType BugsnagBuildReporterPlugin
new BugsnagBuildReporterPlugin(
    {
        apiKey: "123456789",
        appVersion: "1.2.3",
        releaseStage: "staging",
        sourceControl: {
            provider: "github",
            repository: "https://github.com/bugsnag/webpack-bugsnag-plugins",
            revision: "123456789"
        },
        builderName: "whoami",
        autoAssignRelease: false,
        metadata: {
            foo: "bar"
        }
    },
    {
        logLevel: "debug",
        logger: {
            debug: () => null,
            info: () => null,
            warn: () => null,
            error: () => null
        },
        path: process.cwd(),
        endpoint: "https://build.bugsnag.com"
    }
);

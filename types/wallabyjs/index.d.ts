import { TransformOptions as BabelCompilerOptions } from "@babel/core";
import { Options as CSCompilerOptions } from "coffeescript";
import { Application, Express } from "express";
import { CompilerOptions as TSCompilerOptions } from "typescript";

/**
 * Typings for a Wallaby config file.
 *
 * @see {@link https://wallabyjs.com/docs}
 */
declare module "wallabyjs" {
    /**
     * Wallaby configuration settings.
     *
     * Specify the type arg `T` if you need to configure your test framework
     * within {@link IWallabyConfig.bootstrap}.
     *
     * @template T - Test framework instance
     * @see {@link https://wallabyjs.com/docs/config/overview.html} for details.
     */
    export interface IWallabyConfig<T = any> {
        /**
         * File patterns as keys and compiler functions as values.
         */
        compilers?: IWallabyCompilers | undefined;

        /**
         * If `true`, Wallaby will write debug messages to its console.
         */
        debug?: boolean | undefined;

        /**
         * Specify a different test runner or change the runner settings.
         */
        env?: IWallabyEnvironment | undefined;

        /**
         * Specifies an array of source files or file name patterns to copy to
         * the local cache.
         *
         * @see {@link https://wallabyjs.com/docs/config/files.html} for details
         */
        files: Array<string | IWallabyFilePattern>;

        /**
         * Function that runs for every batch of file changes after all
         * compilers and preprocessors.
         *
         * @see {@link https://wallabyjs.com/docs/config/postprocessor.html} for
         * details
         */
        postprocessor?: IWallabyProcessors | undefined;

        /**
         * Function that runs for every batch of file changes after all compilers.
         *
         * @see {@link https://wallabyjs.com/docs/config/preprocessors.html} for details
         */
        preprocessors?: IWallabyProcessors | undefined;

        /**
         * Specifies the name and version of the testing framework you are using
         * for your tests.
         */
        testFramework?: string | undefined;

        /**
         * Specifies an array of test files or test file name patterns to copy
         * to the local cache.
         *
         * @see {@link https://wallabyjs.com/docs/config/files.html} for details
         */
        tests: Array<string | IWallabyFilePattern>;

        /**
         * Degree of parallelism used to run your tests and controls the way
         * Wallaby re-uses workers.
         *
         * @see {@link https://wallabyjs.com/docs/config/workers.html} for
         * details
         */
        workers?: IWallabyWorkers | undefined;

        /**
         * Bootstrap function
         *
         * Alias of {@link bootstrap}
         *
         * @see {@link https://wallabyjs.com/docs/config/bootstrap.html} for details
         */
        setup?: IWallabySetup<T>;

        /**
         * Bootstrap function
         *
         * Alias of {@link setup}
         *
         * @see {@link https://wallabyjs.com/docs/config/bootstrap.html} for details
         */
        bootstrap?: IWallabySetup<T>;

        /**
         * Teardown function
         *
         * Node.js only
         *
         * @see {@link https://wallabyjs.com/docs/config/bootstrap.html} for details
         */
        teardown?: IWallabyTeardown<T>;

        /**
         * How long to wait (in milliseconds) for the {@link teardown} function to complete.
         *
         * Node.js only
         *
         * @see {@link https://wallabyjs.com/docs/config/bootstrap.html} for details
         */
        globalSetupTeardownTimeout?: number;

        /**
         * Inject custom middleware into the Wallaby web server.
         *
         * @see {@link https://wallabyjs.com/docs/config/middleware.html} for details
         */
        middleware?: ((app: Application, express: Express) => void) | undefined;

        /**
         * Files matching this path or glob pattern will be excluded from code
         * coverage calculation.
         *
         * @see {@link https://wallabyjs.com/docs/config/coverage.html} for
         * details
         */
        filesWithNoCoverageCalculated?: string[] | undefined;

        /**
         * Override how Wallaby interprets inline comments.
         *
         * @see {@link https://wallabyjs.com/docs/config/coverage.html} for details
         */
        hints?: IWallabyHints | undefined;

        /**
         * Configure Wallaby's "Smart Start" mode.
         *
         * - `open`: Start running tests when the file is opened
         * - `edit`: Start running tests after the file has been edited
         * - `always`: Start running tests immediately on start
         * - `never`: Never automatically run tests
         *
         * @defaultValue `'open'`
         * @see {@link https://wallabyjs.com/docs/config/smart-start.html} for details
         */
        startMode?: "open" | "edit" | "always" | "never" | undefined;

        /**
         * Glob pattern that determines which test files {@link startMode} applies to.
         *
         * @see {@link https://wallabyjs.com/docs/config/smart-start.html} for details
         */
        pattern?: string | undefined;

        /**
         * Controls autodetection of files and tests
         *
         * If an array, the order in which frameworks are tried
         */

        autoDetect?: boolean | ReadonlyArray<"angular" | "jest" | "vitest"> | undefined;

        /**
         * How much time Wallaby should wait before running tests
         */
        delays?: IWallabyDelays | undefined;

        /**
         * Alias for {@link debug}
         */
        trace?: boolean | undefined;

        /**
         * If `true`, preserve comments in instrumented code
         */
        preserveComments?: boolean | undefined;

        /**
         * If `true`, usage of {@link console.error} will report a test as failed
         */
        reportConsoleErrorAsError?: boolean | undefined;

        /**
         * Maximum count console messages each test can print
         *
         * @defaultValue `100`
         */
        maxConsoleMessagesPerTest?: number | undefined;

        /**
         * How long a test can take before it's considered "slow" (in ms)
         *
         * @defaultValue `75`
         */
        slowTestThreshold?: number | undefined;

        /**
         * Whether to run Wallaby as you type (`automatic`) or only upon file
         * save (`onsave`).
         *
         * @defaultValue `'automatic'`
         */
        runMode?: "onsave" | "automatic" | undefined;

        /**
         * Percentage of coverage a file must have _not_ to be considered as
         * having "low coverage"
         *
         * @defaultValue `80`
         */
        lowCoverageThreshold?: number | undefined;

        /**
         * Project name
         *
         * Affects Wallaby web app only
         */
        name?: string | undefined;

        /**
         * If `false`, do not reporter unhandled `Promise` rejections as errors.
         *
         * Node.js only
         *
         * @defaultValue `true`
         */
        reportUnhandledPromises?: boolean | undefined;

        /**
         * Run _all_ tests in files affected by the most recent file change.
         *
         * @defaultValue `false`
         */
        runAllTestsInAffectedTestFile?: boolean | undefined;

        /**
         * Run _all_ tests regardless of whether Wallaby thinks they are
         * affected by the most recent file change.
         *
         * @defaultValue `false`
         */
        runAllTestsWhenNoAffectedTests?: boolean | undefined;

        /**
         * If `true`, only reload the files a test file directly depends on.
         *
         * @defaultValue `false`
         */
        ignoreFileLoadingDependencyTracking?: boolean | undefined;

        /**
         * Maximum length of a single log entry
         *
         * @defaultValue `16384`
         */
        maxLogEntrySize?: number | undefined;

        /**
         * Limit the number of trace steps during a debug session
         *
         * @defaultValue `999999`
         */
        maxTraceSteps?: number | undefined;

        /**
         * Take a screenshot of the last test run by Wallaby
         *
         * Chrome/PhantomJS only
         *
         * @defaultValue `false`
         */
        screenshot?: number | undefined;

        /**
         * If `true`, any stack traces printed by `console.log` will be remapped
         * to their original sources
         */
        mapConsoleMessagesStackTrace?: boolean | undefined;

        /**
         * If `true`, automatically resolve getters in value & output explorers
         */
        resolveGetters?: boolean | undefined;

        /**
         * If `false`, do not capture `console.log()` output
         */
        captureConsoleLog?: boolean | undefined;

        /**
         * Configure logged value limits
         */
        logLimits?: IWallabyLogLimits | undefined;

        /**
         * If `true`, Wallaby will not rewrite absolute filepaths so that they
         * appear within the project root
         *
         * @defaultValue `false`
         */
        preservePaths?: boolean | undefined;
    }

    /**
     * Log limits for Wallaby's value & output explorers.
     */
    export interface IWallabyLogLimits {
        /**
         * Limits for inline values
         */
        inline?: IWallabyLogLimitsConfig | undefined;

        /**
         * Limits for non-inline values
         */
        values?: IWallabyLogLimitsValues | undefined;
    }

    /**
     * Log limit configuration
     */
    export interface IWallabyLogLimitsConfig {
        /**
         * Depth at which to log values
         */
        depth?: number | undefined;
        /**
         * Maximum number of elements to log
         */
        elements?: number | undefined;
        /**
         * Maximum length of a string to log
         */
        stringLength?: number | undefined;
    }

    /**
     * Log limits for non-inline values
     */
    export interface IWallabyLogLimitsValues {
        /**
         * Default log limits
         */
        default?: IWallabyLogLimitsConfig | undefined;

        /**
         * Log limits for auto-expanding values
         */
        autoExpand?: IWallabyLogLimitsConfig | undefined;
    }

    /**
     * Delay config
     */
    export interface IWallabyDelays {
        /**
         * Number of milliseconds to wait before letting Wallaby run
         */
        run?: number | undefined;
    }

    /**
     * Override how Wallaby interprets inline comments.
     *
     * @see {@link https://wallabyjs.com/docs/config/coverage.html} for details
     */
    export interface IWallabyHints {
        /**
         * String or `RegExp` to match a comment which will tell Wallaby to ignore coverage on a file
         */
        ignoreCoverageForFile?: string | RegExp | undefined;

        /**
         * String or `RegExp` to match a comment which will tell Wallaby to ignore coverage on a line
         */
        ignoreCoverage?: string | RegExp | undefined;
    }

    /**
     * Bootstrap function to run at Wallaby start
     *
     * @template T - Test framework instance
     * @see {@link https://wallabyjs.com/docs/config/bootstrap.html} for details
     */
    export type IWallabySetup<T = any> = (wallaby: IWallabyTestRunnerContext<T>) => void | Promise<void>;

    /**
     * Teardown function to run after Wallaby has completed
     *
     * @template T - Test framework instance
     * @see {@link https://wallabyjs.com/docs/config/bootstrap.html} for details
     */

    export type IWallabyTeardown<T = any> = (wallaby: IWallabyTestRunnerContext<T>) => void | Promise<void>;

    /**
     * Wallaby compiler configuration
     *
     * @see {@link https://wallabyjs.com/docs/config/compilers.html} for details.
     */
    export type IWallabyCompilers = Record<string, IWallabyCompiler>;

    /**
     * Wallaby's built-in compilers.
     *
     * @see {@link https://wallabyjs.com/docs/config/compilers.html} for details.
     */
    export interface IWallabyBuiltInCompilers {
        /**
         * Built-in Babel compiler options
         *
         * @see {@link https://babeljs.io/} for details.
         */
        babel: (options?: BabelCompilerOptions) => IWallabyCompiler;

        /**
         * Built-in CoffeeScript compiler options
         *
         * @see {@link https://coffeescript.org/} for details.
         */
        coffeeScript: (options?: CSCompilerOptions) => IWallabyCompiler;

        /**
         * Built-in TypeScript compiler options
         *
         * @see {@link https://www.typescriptlang.org/} for details.
         */
        typeScript: (options?: TSCompilerOptions) => IWallabyCompiler;
    }

    /**
     * Wallaby compiler result entity.
     *
     * @see {@link https://wallabyjs.com/docs/config/compilers.html} for details.
     */
    export interface IWallabyCompilerResult {
        /**
         * Source map.
         */
        map: string;
        /**
         * Code transformed to JavaScript.
         */
        code: string;
        /**
         * All converable ranges of the original file.
         */
        ranges: number[][];
    }

    /**
     * Wallaby processors
     *
     * @see {@link https://wallabyjs.com/docs/config/preprocessors.html}
     * @see {@link https://wallabyjs.com/docs/config/postprocessors.html}
     */
    export type IWallabyProcessors = Record<string, IWallabyProcessor>;

    /**
     * A pre- or post-processor function
     *
     * @see {@link https://wallabyjs.com/docs/config/preprocessors.html}
     * @see {@link https://wallabyjs.com/docs/config/postprocessors.html}
     */
    export type IWallabyProcessor = (file: IWallabyFile) => void;

    /**
     * A compiler result
     *
     * @see {@link https://wallabyjs.com/docs/config/compilers.html}
     */
    export type IWallabyCompiler = (file: IWallabyFile) => IWallabyCompilerResult;

    /**
     * Wallaby file object passed to pre-/post-processors and compilers.
     */
    export interface IWallabyFile {
        /**
         * The current content of the file.
         */
        content?: string | undefined;

        /**
         * The current path to the file.
         */
        path?: string | undefined;
        /**
         * Rename or move the file to `newPath`.
         *
         * @param newPath - The new path to the file.
         */
        rename(newPath: string): void;

        /**
         * Change the file extension.
         * @param newExt - The new extension for the file.
         */
        changeExt(newExt: string): void;
    }

    /**
     * Wallaby file pattern.
     *
     * @see {@link https://wallabyjs.com/docs/config/files.html} for details.
     */
    export interface IWallabyFilePattern {
        /**
         * File name or glob pattern.
         */
        pattern: string;

        /**
         * Determines if file is ignored by Wallaby.
         *
         * @defaultValue `false`
         */
        ignore?: boolean | undefined;

        /**
         * Determines if file is instrumented.
         *
         * @defaultValue `true`
         */
        instrument?: boolean | undefined;

        /**
         * Determines if file is loaded to sandbox HTML via script tag.
         *
         * @defaultValue `true`
         */
        load?: boolean | undefined;
    }

    /**
     * Wallaby environment configuration.
     *
     * @see {@link https://wallabyjs.com/docs/config/runner.html} for details.
     */
    export interface IWallabyEnvironment {
        /**
         * Set parameters on environment.
         */
        params?: IWallabyEnvironmentParameters | undefined;

        /**
         * Test runner executable (e.g., `node`, `phantomjs`, `electron`) or path to it
         */
        runner?: string | undefined;

        /**
         * To use Node.js, set `node`; `browser` for others
         *
         * @defaultValue `'browser'`
         */
        type?: "node" | "browser";

        /**
         * For headless browser viewport size
         *
         * @defaultValue `{width: 800, height: 600}`
         */
        viewportSize?: IWallabyEnvironmentViewportSize | undefined;

        /**
         * Report 404 server hits as errors to the Wallaby console
         */
        report404AsError?: boolean | undefined;

        /**
         * If {@link type} is `browser`, specifies the browser to use
         *
         * @defaultValue `'chrome'`
         */
        kind?: "chrome" | "electron" | "phantomjs";
    }

    /**
     * Wallaby environment parameters.
     *
     * @see {@link https://wallabyjs.com/docs/config/runner.html} for details.
     */
    export interface IWallabyEnvironmentParameters {
        /**
         * Semicolon-separated spawed runner process env variables.
         */
        env?: string | undefined;
        /**
         * Space-separated spawed runner process flags.
         */
        runner?: string | undefined;
    }

    /**
     * Wallaby viewport settings for headless browsers & Electron.
     */
    export interface IWallabyEnvironmentViewportSize {
        /**
         * Width in pixels for the viewport size in PhantomJs/Electron.
         */
        width?: number | undefined;
        /**
         * Height in pixels for the viewport size in PhantomJs/Electron.
         */
        height?: number | undefined;
    }

    /**
     * Wallaby worker configuration.
     *
     * recycle - Specifies the degree of parallelism used to run your tests and
     *                                  controls the way wallaby re-uses workers.
     *
     * @see {@link https://wallabyjs.com/docs/config/workers.html} for details.
     */
    export interface IWallabyWorkers {
        recycle?: boolean | undefined;
    }

    /**
     * Wallaby object passed into config.
     *
     * @see {@link https://wallabyjs.com/docs/config/overview.html} for details.
     */
    export interface IWallaby {
        /**
         * String property which returns the project local folder.
         */
        localProjectDir: string;
        /**
         * String property which returns the project cache folder.
         */
        projectCacheDir: string;
        /**
         * Property which allows you to access the built-in TypeScript, CoffeeScript and Babel compilers.
         */
        compilers: IWallabyBuiltInCompilers;
        /**
         * Property which allows you to set the default values for file object properties.
         */
        defaults?: any;
    }

    /**
     * The `wallaby` object as passed to {@link bootstrap} and {@link teardown}.
     *
     * @template T - Test framework instance
     */
    export interface IWallabyTestRunnerContext<T = any> extends IWallaby {
        testFramework: T;

        tests: string[];

        workerId?: number;

        sessionId?: string;
    }
}

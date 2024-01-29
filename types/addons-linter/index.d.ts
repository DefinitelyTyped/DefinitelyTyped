export interface Options {
    config: {
        /**
         * This mimics the first command line argument from yargs, which should be the directory to the extension.
         */
        _: string[];

        /**
         * The log-level to generate.
         */
        logLevel: "fatal" | "error" | "warn" | "info" | "debug" | "trace";

        /**
         * Treat warnings as errors.
         */
        warningsAsErrors?: boolean | undefined;

        /**
         * The type of output to generate.
         */
        output?: "json" | "text" | "none" | undefined;

        /**
         * Output only metadata as JSON.
         */
        metadata?: boolean | undefined;

        /**
         * Prettify JSON output.
         */
        pretty?: boolean | undefined;

        /**
         * Show stacktraces when errors are thrown.
         */
        stack?: boolean | undefined;

        /**
         * Disable colorful shell output.
         */
        boring?: boolean | undefined;

        /**
         * Treat the input file (or directory) as a privileged extension.
         */
        privileged?: boolean | undefined;

        /**
         * Disable messages related to hosting on addons.mozilla.org.
         */
        selfHosted?: boolean | undefined;

        /**
         * Enable MV3 background service worker support.
         */
        enableBackgroundServiceWorker?: boolean | undefined;

        /**
         * Set a custom minimum allowed value for the manifest_version property
         */
        minManifestVersion?: number | undefined;

        /**
         * Set a custom maximum allowed value for the manifest_version property
         */
        maxManifestVersion?: number | undefined;

        /**
         * Disable list of comma separated eslint rules.
         */
        disableLinterRules?: string | undefined;

        /**
         * Disable the auto-close feature when linting XPI files.
         */
        disableXpiAutoclose?: boolean | undefined;

        /**
         * Exclude files
         */
        shouldScanFile?: ((fileOrDirName: string, isDir: boolean) => boolean) | undefined;

        /**
         * Scan a selected file.
         */
        scanFile?: string[] | undefined;
    };

    /**
     * This prevent the linter to exit the nodejs application.
     */
    runAsBinary?: boolean | undefined;
}

export interface LinterResults {
    count: number;

    summary: {
        errors: number;
        notices: number;
        warnings: number;
    };

    metadata: Record<string, unknown>;

    scanFile?: string[] | undefined;

    errors: Array<{
        _type: "error";
        code: string;
        message: string;
        description: string;
        file: string;
    }>;

    notices: Array<{
        _type: "notice";
        code: string;
        message: string;
        description: string;
        file: string;
    }>;

    warnings: Array<{
        _type: "warning";
        code: string;
        message: string;
        description: string;
        file: string;
    }>;
}

export interface Linter {
    run: () => Promise<LinterResults>;
}

// Since the Linter class and the isRunFromCLI() function are undocumented and seem to be for internal use only,
// the type is only defined for the createInstance() function.

export function createInstance(options: Options): Linter;

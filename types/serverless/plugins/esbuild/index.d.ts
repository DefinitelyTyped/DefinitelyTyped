export interface EsBuildConfigFileOption {
    /** Path to the esbuild config file relative to the `serverless.yml` file */
    configFile?: string;
}

export interface EsBuildOptions {
    /** The node modules that should not be bundled */
    external?: string[];

    /** These are node modules that should not be bundled but also not included in the package.json */
    exclude?: string[];

    /** The packages config, this can be set to override the behavior of external */
    packages?: string;

    /**
     * The concurrency to use for building functions. By default it will be set to the number of functions to build.
     * Meaning that all functions will be built concurrently.
     */
    buildConcurrency?: number;

    /** Whether to bundle or not. Default is true */
    bundle?: boolean;

    /** Whether to minify or not. Default is false */
    minify?: boolean;

    /** If set to a boolean, true, then framework uses external sourcemaps and enables it on functions by default. */
    sourcemap?: boolean | {
        type?: string;
        setNodeOptions?: boolean;
    };

    // Other options to pass to esbuild
    [key: string]: unknown;
}

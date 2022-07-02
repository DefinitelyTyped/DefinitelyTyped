export interface WebpackConfigOptions {
    context?: string | undefined;
    entry?: string | ReadonlyArray<string> | undefined;
    filename?: string | undefined;
    modulename?: string | undefined;
    minify?: boolean | undefined;
    test?: boolean | undefined;
    options?: object | undefined;
    vars?: object | undefined;
    alias?: { [key: string]: string } | undefined;
    libraryTarget?: string | undefined;
    web?: boolean | undefined;
    debug?: boolean | undefined;
    env?: string | undefined;
    path?: string | undefined;
    sourcemaps?: boolean | undefined;
    cache?: boolean | undefined;
    analyze?: boolean | undefined;
    dynamic?: boolean | undefined;
    babelConfig?: string | undefined;
}

// tslint:disable-next-line:no-empty-interface
export interface WebpackConfig {}

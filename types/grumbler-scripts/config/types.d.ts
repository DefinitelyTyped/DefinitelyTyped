export interface WebpackConfigOptions {
    context?: string;
    entry?: string | ReadonlyArray<string>;
    filename?: string;
    modulename?: string;
    minify?: boolean;
    test?: boolean;
    options?: object;
    vars?: object;
    alias?: { [key: string]: string };
    libraryTarget?: string;
    web?: boolean;
    debug?: boolean;
    env?: string;
    path?: string;
    sourcemaps?: boolean;
    cache?: boolean;
    analyze?: boolean;
    dynamic?: boolean;
    babelConfig?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface WebpackConfig {}

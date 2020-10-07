// Type definitions for grumbler-scripts 3.0
// Project: https://github.com/krakenjs/grumbler-scripts
// Definitions by: German Ruiz <https://github.com/gruiz90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'grumbler-scripts/config/webpack.config' {
    function getCurrentVersion(pkg: { version: string }): string;
    function getNextVersion(pkg: { version: string }, level?: string): string;
    function getWebpackConfig(options?: WebpackConfigOptions): object;

    interface WebpackConfigOptions {
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
}

declare module 'grumbler-scripts/config/karma.conf' {
    function getKarmaConfig(karma: object, cfg?: object): object;
    export default function karma(karma: object): object;
}

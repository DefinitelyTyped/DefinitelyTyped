import { Plugin } from "rollup";

declare namespace RollupPluginsNodeGlobals {
    interface Options {
        // Every files will be parsed by default, but you can specify which files to include or exclude
        include?: Array<string | RegExp> | string | RegExp | null | undefined;
        exclude?: Array<string | RegExp> | string | RegExp | null | undefined;

        // Enable sourcemaps support
        sourceMap?: boolean | undefined;

        // Plugin's options
        process?: boolean | undefined;
        global?: boolean | undefined;
        buffer?: boolean | undefined;
        dirname?: boolean | undefined;
        filename?: boolean | undefined;
        baseDir?: string | undefined;
    }
}

declare function RollupPluginsNodeGlobals(options?: RollupPluginsNodeGlobals.Options): Plugin;

export = RollupPluginsNodeGlobals;

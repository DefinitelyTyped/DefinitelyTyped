// Type definitions for copy-webpack-plugin 8.0
// Project: https://github.com/webpack-contrib/copy-webpack-plugin
// Definitions by: flying-sheep <https://github.com/flying-sheep>
//                 avin-kavish  <https://github.com/avin-kavish>
//                 Piotr Błażejewicz  <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7
/// <reference types="node" />
import { Compiler } from "webpack";

/**
 * Copy files and directories with webpack
 */
declare class CopyPlugin {
    constructor(options?: CopyPlugin.CopyPluginOptions);
    /**
     * Apply the plugin
     */
    apply(compiler: Compiler): void;
}

declare namespace CopyPlugin {
    interface ObjectPattern {
        /**
         * File source path or glob
         * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#from}
         * @default undefined
         */
        from: string;

        /**
         * Path or webpack file-loader patterns. defaults:
         * output root if `from` is file or dir.
         * resolved glob path if `from` is glob.
         * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#to}
         * @default compiler.options.output
         */
        to?:
            | string
            | (({
                  context,
                  absoluteFilename,
              }: {
                  context: Exclude<ObjectPattern["context"], undefined>;
                  absoluteFilename: string;
              }) => string);

        /**
         * A path that determines how to interpret the `from` path.
         * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#context}
         * @default options.context | compiler.options.context
         */
        context?: string;

        /**
         * Allows to configure the glob pattern matching library used by the plugin.
         * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#globoptions}
         */
        globOptions?: object;

        /**
         * Allows to filter copied assets.
         */
        filter?: (resourcePath: string) => boolean;

        /**
         * How to interpret `to`. default: undefined
         * `file` - if 'to' has extension or 'from' is file.
         * `dir` - if 'from' is directory, 'to' has no extension or ends in '/'.
         * `template` - if 'to' contains a template pattern.
         * @default undefined
         */
        toType?: "file" | "dir" | "template";

        /**
         * Overwrites files already in `compilation.assets` (usually added by other plugins.
         * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#force}
         * @default false
         */
        force?: boolean;

        /**
         * Allows you to specify the copy priority.
         * @default 0
         */
        priority?: number;

        /**
         * Function that modifies file contents before writing to webpack. (default: `(content, path) => content`)
         * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#transform}
         * @default undefined
         */
        transform?: (content: Buffer, absoluteFrom: string) => string | Buffer | Promise<string | Buffer>;

        /**
         * Doesn't generate an error on missing file(s);
         * @default false
         */
        noErrorOnMissing?: boolean;

        /**
         * Allows to add assets info
         */
        info?: Record<string, unknown> | ((file: string) => Record<string, unknown>);
    }

    type StringPattern = string;

    interface Options {
        /**
         * Limits the number of simultaneous requests to fs
         * @default 100
         */
        concurrency?: number;
    }

    interface CopyPluginOptions {
        patterns: ReadonlyArray<StringPattern | ObjectPattern>;
        options?: Options;
    }
}

export = CopyPlugin;

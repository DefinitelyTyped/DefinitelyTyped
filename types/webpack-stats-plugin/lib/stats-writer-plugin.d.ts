import { Plugin, Stats } from 'webpack';
import webpack = require('webpack');

/**
 * Stats writer module.
 */
declare namespace StatsWriterPlugin {
    /**
     * transform function
     */
    interface TransformFunc {
        (
            data: {
                [key: string]: any;
            },
            options?: TransformOptions,
        ): string | Promise<string>;
    }

    interface TransformOptions {
        /** Current compiler instance */
        compiler: webpack.compilation.Compilation;
    }

    interface Options {
        /**
         * output file name
         * @default 'stats.json'
         */
        filename?: string;
        /**
         * fields of stats obj to keep
         * @default ['assetsByChunkName']
         */
        fields?: null | string[];
        /**
         * stats config object or string preset
         * @default {}
         */
        stats?: { [key: string]: any } | string;
        /**
         * transform stats obj
         * @default JSON.stringify()
         */
        transform?: TransformFunc;
    }
}
declare class StatsWriterPlugin extends Plugin {
    constructor(opts?: StatsWriterPlugin.Options);

    emitStats(curCompiler: webpack.compilation.Compilation, callback: StatsWriterPlugin.TransformFunc): Promise<void>;
    emitStats(curCompiler: webpack.compilation.Compilation): Promise<string>;
}

export = StatsWriterPlugin;

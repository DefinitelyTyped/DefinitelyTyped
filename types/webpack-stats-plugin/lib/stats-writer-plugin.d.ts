import { Compilation, Compiler, WebpackPluginInstance } from 'webpack';

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
        compiler: Compilation;
    }

    interface Options {
        /**
         * output file name
         * @default 'stats.json'
         */
        filename?: string | undefined;
        /**
         * fields of stats obj to keep
         * @default ['assetsByChunkName']
         */
        fields?: null | string[] | undefined;
        /**
         * stats config object or string preset
         * @default {}
         */
        stats?: { [key: string]: any } | string | undefined;
        /**
         * transform stats obj
         * @default JSON.stringify()
         */
        transform?: TransformFunc | undefined;
    }
}
declare class StatsWriterPlugin implements WebpackPluginInstance {
    constructor(opts?: StatsWriterPlugin.Options);

    /**
     * The run point of the plugin, required method.
     */
    apply: (compiler: Compiler) => void;

    emitStats(curCompiler: Compilation, callback: StatsWriterPlugin.TransformFunc): Promise<void>;
    emitStats(curCompiler: Compilation): Promise<string>;
}

export = StatsWriterPlugin;

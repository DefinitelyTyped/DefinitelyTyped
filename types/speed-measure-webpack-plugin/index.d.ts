// Type definitions for speed-measure-webpack-plugin 1.3
// Project: https://github.com/stephencookdev/speed-measure-webpack-plugin#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Configuration } from 'webpack';

/**
 * See how fast (or not) your plugins and loaders are, so you can optimise your builds
 */
declare class SpeedMeasurePlugin {
    constructor(options?: SpeedMeasurePlugin.Options);

    wrap(config: Configuration): Configuration;
}

declare namespace SpeedMeasurePlugin {
    type OutputFormat =
        /** produces a JSON blob */
        | 'json'
        /** produces a human readable output */
        | 'human'
        /** produces a more verbose version of the human readable output */
        | 'humanVerbose'
        /** output the response */
        | ((json: any) => string);

    type OutputTarget =
        /** specifies the path to a file to output to */
        | string
        /** calls the function with the output as the first parameter */
        | ((output: string, ...rest: any[]) => void);

    /**
     * Pass these into the constructor, as an object:
     */
    interface Options {
        /**
         * If truthy, this plugin does nothing at all.
         * @default false
         */
        disable?: boolean;
        /**
         * Determines in what format this plugin prints its measurements
         * @default 'human'
         */
        outputFormat?: OutputFormat;
        outputTarget?: OutputTarget;
        /**
         * By default, SMP derives plugin names through plugin.constructor.name.
         * For some plugins this doesn't work (or you may want to override this default).
         * This option takes an object of pluginName: PluginConstructor
         */
        pluginNames?: {
            [key: string]: object;
        };
        /**
         * By default, SMP measures loaders in groups.
         * If truthy, this plugin will give per-loader timing information.
         * This flag is experimental. Some loaders will have inaccurate results:
         * loaders using separate processes (e.g. thread-loader)
         * loaders emitting file output (e.g. file-loader)
         * We will find solutions to these issues before removing the (experimental) flag on this option.
         * @default false
         */
        granularLoaderData?: boolean;
    }
}

export = SpeedMeasurePlugin;

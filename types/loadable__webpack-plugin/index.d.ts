// Type definitions for @loadable/webpack-plugin 5.7
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as webpack from 'webpack';

interface PluginOptions {
    /**
     * The stats filename.
     *
     * @default loadable-stats.json
     */
    filename?: string;

    /**
     * Always write stats file to disk.
     *
     * @default false
     */
    writeToDisk?: boolean | { filename: string };

    /**
     * @default true
     */
    outputAsset?: boolean;
}

declare class LoadablePlugin extends webpack.Plugin {
    constructor(options?: PluginOptions);
}

export default LoadablePlugin;

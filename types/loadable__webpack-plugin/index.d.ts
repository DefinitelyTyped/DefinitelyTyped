import * as webpack from "webpack";

interface PluginOptions {
    /**
     * The stats filename.
     *
     * @default loadable-stats.json
     */
    filename?: string | undefined;

    /**
     * Always write stats file to disk.
     *
     * @default false
     */
    writeToDisk?: boolean | { filename: string } | undefined;

    /**
     * @default true
     */
    outputAsset?: boolean | undefined;
}

declare class LoadablePlugin extends webpack.Plugin {
    constructor(options?: PluginOptions);
}

export default LoadablePlugin;

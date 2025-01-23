import * as webpack from "webpack";

declare namespace LoadablePlugin {
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
        writeToDisk?:
            | boolean
            | {
                /** Write assets to disk at given `filename` location */
                filename: string;
            }
            | undefined;

        /**
         * Always write stats file to the `output.path` directory.
         *
         * @default true
         */
        outputAsset?: boolean | undefined;
    }
}

declare class LoadablePlugin extends webpack.Plugin {
    constructor(options?: LoadablePlugin.PluginOptions);
}

export = LoadablePlugin;

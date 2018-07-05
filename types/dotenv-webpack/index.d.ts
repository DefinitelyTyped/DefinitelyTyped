// Type definitions for dotenv-webpack 1.5
// Project: https://github.com/mrsteele/dotenv-webpack
// Definitions by: Karol Majewski <https://github.com/karol-majewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import * as webpack from 'webpack';

declare class DotenvWebpackPlugin extends webpack.Plugin {
  constructor(options?: DotenvWebpackPlugin.Options);
}

declare namespace DotenvWebpackPlugin {
  interface Options {
    /**
     * The path to your environment variables. Default: `'./.env'`.
     */
    path?: string;

    /**
     * If `false` ignore safe-mode, if `true` load `'./.env.example'`, if a `string` load that file as the sample. Default: `false`.
     */
    safe?: boolean;

    /**
     * Set to `true` if you would rather load all system variables as well (useful for CI purposes). Default: `false`.
     */
    systemvars?: boolean;

    /**
     * If `true`, all warnings will be surpressed. Default: `false`.
     */
    silent?: boolean;
  }
}

export = DotenvWebpackPlugin;

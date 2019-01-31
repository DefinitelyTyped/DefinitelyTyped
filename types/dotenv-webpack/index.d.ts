// Type definitions for dotenv-webpack 1.7
// Project: https://github.com/mrsteele/dotenv-webpack
// Definitions by: Karol Majewski <https://github.com/karol-majewski>
//                 Dave Cardwell <https://github.com/davecardwell>
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
    safe?: boolean | string;

    /**
     * Set to `true` if you would rather load all system variables as well (useful for CI purposes). Default: `false`.
     */
    systemvars?: boolean;

    /**
     * If `true`, all warnings will be surpressed. Default: `false`.
     */
    silent?: boolean;

    /**
     * Allows your variables to be "expanded" for reusability within your .env file. Default: `false`.
     */
    expand?: boolean;

    /**
     * Adds support for dotenv-defaults. If set to `true`, uses `./.env.defaults`. If a `string`, uses that location for a defaults file.
     * Read more at https://www.npmjs.com/package/dotenv-defaults. Default: `false`.
     */
    defaults?: boolean | string;
  }
}

export = DotenvWebpackPlugin;

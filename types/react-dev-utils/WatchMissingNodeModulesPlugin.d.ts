import webpack = require('webpack');

/**
 * This Webpack plugin ensures `npm install <library>` forces a project rebuild.
 */
declare class WatchMissingNodeModulesPlugin extends webpack.Plugin {
    constructor(nodeModulesPath: string);
}

export = WatchMissingNodeModulesPlugin;

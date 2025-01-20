import webpack = require("webpack");

/**
 * This Webpack plugin ensures that relative imports from app's source
 * directories don't reach outside of it.
 */
declare class ModuleScopePlugin extends webpack.Plugin {
    constructor(appSrc: string | readonly string[], allowedFiles?: readonly string[]);
}

export = ModuleScopePlugin;

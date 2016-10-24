// Type definitions for webpack-stream v3.2.0
// Project: https://github.com/shama/webpack-stream
// Definitions by: Ian Clanton-Thuon <https://github.com/iclanton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="./../webpack/webpack.d.ts" />
///<reference path="./../node/node.d.ts" />

declare module "webpack-stream" {
  import webpack = require("webpack");

  interface WebpackStreamStatic {
    /**
     * Run webpack with the default configuration.
     */
    (): NodeJS.ReadWriteStream;

    /**
     * Run webpack with the specified configuration.
     *
     * @param {config} Webpack configuration
     */
    (config: webpack.Configuration): NodeJS.ReadWriteStream;

    /**
     * Run webpack with the specified configuration and webpack instance
     *
     * @param {config} Webpack configuration
     * @param {webpack} A webpack object
     */
    (config: webpack.Configuration, webpack: webpack.Webpack): NodeJS.ReadWriteStream;

    /**
     * Run webpack with the specified configuration and webpack instance
     *
     * @param {config} Webpack configuration
     * @param {webpack} A webpack object
     * @param {callback} A callback with the webpack stats and error objects.
     */
    (config: webpack.Configuration,
     webpack: webpack.Webpack,
     callback?: (err: Error, stats: webpack.compiler.Stats) => void): NodeJS.ReadWriteStream;
  }

  var webpackStream: WebpackStreamStatic;

  export = webpackStream;
}

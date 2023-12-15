/// <reference types="node" />

import * as webpack from "webpack";

export = webpackStream;

/**
 * Run webpack with the specified configuration and webpack instance
 *
 * @param config - Webpack configuration
 * @param wp - A webpack object
 * @param callback - A callback with the webpack stats and error objects.
 */
declare function webpackStream(
    config?: webpack.Configuration,
    wp?: typeof webpack,
    callback?: webpack.Compiler.Handler,
): NodeJS.ReadWriteStream;

declare namespace webpackStream {
}

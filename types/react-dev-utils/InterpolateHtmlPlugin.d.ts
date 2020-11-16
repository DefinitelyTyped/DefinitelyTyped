import webpack = require('webpack');
import HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * This Webpack plugin lets us interpolate custom variables into `index.html`.
 */
declare class InterpolateHtmlPlugin extends webpack.Plugin {
    constructor(htmlWebpackPlugin: typeof HtmlWebpackPlugin, replacements: { [key: string]: string });
}

export = InterpolateHtmlPlugin;

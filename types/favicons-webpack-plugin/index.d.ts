// Type definitions for favicons-webpack-plugin 1.0
// Project: https://github.com/jantimon/favicons-webpack-plugin
// Definitions by: Paweł Meller <https://github.com/pmeller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';
import { Configuration as FaviconsConfiguration } from 'favicons';
import HtmlWebpackPlugin = require('html-webpack-plugin');

export = FaviconsWebpackPlugin;

declare class FaviconsWebpackPlugin extends Plugin {
    constructor(options?: string | FaviconsWebpackPlugin.Options);
}

declare namespace FaviconsWebpackPlugin {
    type Mode = 'webapp' | 'light';

    interface Options {
        logo: string;
        mode?: Mode;
        devMode?: Mode;
        cache?: boolean;
        publicPath?: string;
        outputPath?: string;
        prefix?: string;
        inject?: boolean | ((htmlPlugin: HtmlWebpackPlugin & { options: HtmlWebpackPlugin.Options }) => boolean);
        favicons?: Partial<FaviconsConfiguration>;
    }
}

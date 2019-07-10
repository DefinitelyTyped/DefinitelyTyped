// Type definitions for optimize-css-assets-webpack-plugin 1.3
// Project: http://github.com/nmfr/optimize-css-assets-webpack-plugin
// Definitions by: Armando Meziat <https://github.com/odnamrataizem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

export = OptimizeCssAssetsPlugin;

declare namespace OptimizeCssAssetsPlugin {
	interface Options {
		assetNameRegExp?: RegExp;
		cssProcessor?: any;
		cssProcessorOptions?: any;
		canPrint?: boolean;
	}
}

declare class OptimizeCssAssetsPlugin extends Plugin {
	constructor(options?: OptimizeCssAssetsPlugin.Options);
}

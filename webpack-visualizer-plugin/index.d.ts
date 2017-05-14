// Type definitions for webpack-visualizer-plugin 0.1
// Project: https://github.com/chrisbateman/webpack-visualizer#readme
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, Webpack } from 'webpack';

export = VisualizerPlugin;

declare class VisualizerPlugin implements Plugin {
	constructor(options?: VisualizerPlugin.Options);
	apply(thisArg: Webpack, ...args: any[]): void;
}

declare namespace VisualizerPlugin {
	export interface Options {
		filename?: string;
	}
}

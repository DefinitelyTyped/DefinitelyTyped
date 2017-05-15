// Type definitions for webpack-notifier 1.5
// Project: https://github.com/Turbo87/webpack-notifier#readme
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'webpack';

export = WebpackNotifierPlugin;

declare class WebpackNotifierPlugin extends Plugin {
	constructor(options?: WebpackNotifierPlugin.Options);
}

declare namespace WebpackNotifierPlugin {
	interface Options {
		alwaysNotify?: boolean;
		contentImage?: string;
		excludeWarnings?: boolean;
		skipFirstNotification?: boolean;
		title?: string;
	}

	/** @deprecated use Options */
	type Config = Options;
}

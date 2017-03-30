import { Plugin } from 'webpack';
import * as WebpackNotifierPlugin from 'webpack-notifier';

const optionsArray: WebpackNotifierPlugin.Options[] = [
	{
		title: 'Webpack',
		contentImage: 'logo.png',
		excludeWarnings: true,
		alwaysNotify: true,
		skipFirstNotification: true,
	},
];

const plugins: Plugin[] = optionsArray.map(options => new WebpackNotifierPlugin(options));

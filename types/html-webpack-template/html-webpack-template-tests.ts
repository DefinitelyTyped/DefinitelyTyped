import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as template from 'html-webpack-template';

const optionsArray: template.Options[] = [
	{
		/** Required */
		inject: false,
		template,
		// template: 'node_modules/html-webpack-template/index.ejs',

		/** Optional */
		appMountId: 'app',
		appMountIds: [
			'root0',
			'root1',
		],
		baseHref: 'http://example.com/awesome',
		devServer: 'http://localhost:3001',
		googleAnalytics: {
			trackingId: 'UA-XXXX-XX',
			pageViewOnLoad: true,
		},
		links: [
			'https://fonts.googleapis.com/css?family=Roboto',
			{
				href: '/apple-touch-icon.png',
				rel: 'apple-touch-icon',
				sizes: '180x180',
			},
			{
				href: '/favicon-32x32.png',
				rel: 'icon',
				sizes: '32x32',
				type: 'image/png',
			},
		],
		meta: [
			{
				description: 'A better default template for html-webpack-plugin.',
			},
		],
		mobile: true,
		inlineManifestWebpackName: 'webpackManifest',
		scripts: [
			'http://example.com/somescript.js',
			{
				src: '/myModule.js',
				type: 'module',
			},
		],
		window: {
			env: {
				apiHost: 'http://myapi.com/api/v1',
			},
		},

		/**
		 * And any other config options from html-webpack-plugin:
		 * https://github.com/ampedandwired/html-webpack-plugin#configuration
		 */
		title: 'My App',
	},
];

const plugins: HtmlWebpackPlugin[] = optionsArray.map(options => new HtmlWebpackPlugin(options));

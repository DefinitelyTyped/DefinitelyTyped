import HtmlWebpackPlugin = require('html-webpack-plugin');
import { Compiler, compilation } from 'webpack';

new HtmlWebpackPlugin();

const optionsArray: HtmlWebpackPlugin.Options[] = [
	{
		title: 'test',
	},
	{
		minify: {
			caseSensitive: true,
		},
	},
	{
		chunksSortMode: function compare(a, b) {
			return 1;
		},
	},
	{
		arbitrary: 'data',
	},
	{
		chunksSortMode: 'manual',
	},
	// All default params
	{
		template: 'default_index.ejs',
		templateParameters: (compilation, assets, options) => {
			return {
				compilation,
				webpack: compilation.getStats().toJson(),
				// TODO: compilation.options not defined on @types/webpack
				webpackConfig: {},
				htmlWebpackPlugin: {
					files: assets,
					options
				}
			};
		},
		filename: 'index.html',
		hash: false,
		inject: true,
		compile: true,
		favicon: false,
		minify: false,
		cache: true,
		showErrors: true,
		chunks: 'all',
		excludeChunks: [],
		chunksSortMode: 'auto',
		meta: {},
		title: 'Webpack App',
		xhtml: false
	},
	// Config from 'appcache' example
	{
		filename: 'index.html',
		template: 'template.html',
		minify: {
		  removeComments: true,
		  collapseWhitespace: true
		}
	},
	// Config from 'custom-template' example
	{
		template: 'template.html'
	},
	// Config from 'favicon' example
	{
		title: 'HtmlWebpackPlugin example',
		favicon: 'favicon.ico',
		filename: 'favicon.html'
	},
	// Config from 'inline' example
	{
		inject: false,
		cache: false,
		template: 'template.jade',
		filename: 'index.html',
		favicon: 'favicon.ico',
		title: 'Jade demo'
	},
	// Config from 'sort-manually' example
	{
		inject: true,
		filename: 'first-file.html',
		template: 'template.html',
		chunksSortMode: 'manual',
		chunks: ['a', 'b', 'c']
	},
	// Config from 'template-parameters' example
	{
		templateParameters: {
		  foo: 'bar'
		},
		template: 'index.ejs'
	}
];

const plugins: HtmlWebpackPlugin[] = optionsArray.map(options => new HtmlWebpackPlugin(options));

// Webpack plugin `apply` function
function apply(compiler: Compiler) {
	compiler.hooks.compilation.tap('SomeWebpackPlugin', (compilation: compilation.Compilation) => {
		(<HtmlWebpackPlugin.Hooks> compilation.hooks).htmlWebpackPluginAfterHtmlProcessing.tap(
			'MyPlugin',
			(data) => {
				data.html += 'The Magic Footer';
				return data;
			}
		);
	});
}

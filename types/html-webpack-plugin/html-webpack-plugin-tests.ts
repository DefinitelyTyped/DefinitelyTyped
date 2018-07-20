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

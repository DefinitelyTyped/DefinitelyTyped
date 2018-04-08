import HtmlWebpackPlugin = require('html-webpack-plugin');

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

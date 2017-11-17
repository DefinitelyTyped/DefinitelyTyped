import BabelWebpackPlugin = require('babel-webpack-plugin');

new BabelWebpackPlugin();
new BabelWebpackPlugin({});
new BabelWebpackPlugin({
	test: /\.js$/,
	presets: ['es2015'],
	sourceMaps: false,
	compact: false
});

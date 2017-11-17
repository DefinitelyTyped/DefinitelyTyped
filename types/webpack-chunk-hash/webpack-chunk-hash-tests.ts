import webpack = require('webpack');
import WebpackChunkHashPlugin = require('webpack-chunk-hash');

const a: webpack.Configuration = {
	entry: 'test.js',
	plugins: [
		new WebpackChunkHashPlugin()
	]
};
const b: webpack.Configuration = {
	entry: 'test.js',
	plugins: [
		new WebpackChunkHashPlugin({algorithm: 'sha-256', digest: 'latin1', additionalHashContent: () => 'test'})
	]
};

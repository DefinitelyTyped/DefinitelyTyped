import CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = [
	'path',
	'glob/**/*.js',
];

new CleanWebpackPlugin(paths);
new CleanWebpackPlugin(paths, 'root-directory');
new CleanWebpackPlugin(paths, {});
new CleanWebpackPlugin(paths, {
	root: 'root-directory',
	verbose: true,
	dry: true,
	watch: true,
	exclude: ['a, b'],
});

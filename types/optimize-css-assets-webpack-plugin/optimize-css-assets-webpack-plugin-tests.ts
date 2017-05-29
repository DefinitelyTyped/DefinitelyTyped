import * as OptimizeCssAssets from 'optimize-css-assets-webpack-plugin';

const ocap: OptimizeCssAssets = new OptimizeCssAssets({
	assetNameRegExp: /\.min\.css$/,
	canPrint: true
});

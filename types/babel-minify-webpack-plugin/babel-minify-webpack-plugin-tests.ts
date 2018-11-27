import * as BabelMinifyWebpackPlugin from "babel-minify-webpack-plugin";

const babelMinifyWebpackPlugin: BabelMinifyWebpackPlugin = new BabelMinifyWebpackPlugin({
    test: /\.js$/,
    exclude: /\.js$/,
    include: /\.js$/,
    comments: false,
    sourceMaps: 'both',
    parserOpts: {
    },
    babel: {
    },
    minifyPreset: {
    }
});

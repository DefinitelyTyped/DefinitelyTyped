import webpack = require("webpack");
import StylelintWebpackPlugin = require("stylelint-webpack-plugin");

const compiler = webpack({
    plugins: [
        new StylelintWebpackPlugin(),
    ],
});

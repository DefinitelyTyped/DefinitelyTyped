import HtmlWebpackPlugin = require("html-webpack-plugin");
import { Configuration } from "webpack";

const a: Configuration = {
    plugins: [
        new HtmlWebpackPlugin()
    ]
};

const b: Configuration = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "test"
        })
    ]
};

const minify: HtmlWebpackPlugin.MinifyConfig = {
    caseSensitive: true
};

new HtmlWebpackPlugin({
    minify
});

new HtmlWebpackPlugin({
    chunksSortMode: function compare(a, b) {
        return 1;
    }
});

new HtmlWebpackPlugin({
  arbitrary: "data"
});

///<reference path="html-webpack-plugin.d.ts" />

import {Configuration} from "webpack";
import HtmlWebpackPlugin = require("html-webpack-plugin");

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

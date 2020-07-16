import webpack = require("webpack");
import WriteFileWebpackPlugin from "write-file-webpack-plugin";

export const plugins: webpack.Plugin[] = [
    new WriteFileWebpackPlugin(),
    new WriteFileWebpackPlugin({}),
    new WriteFileWebpackPlugin({
        atomicReplace: false,
        exitOnErrors: false,
        test: /\.css$/,
        useHashIndex: false,
        log: false,
        force: true,
    }),
];

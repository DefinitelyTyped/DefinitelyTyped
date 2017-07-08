import { optimize, Configuration, Plugin } from 'webpack'

import * as ExtractTextPlugin from 'extract-text-webpack-plugin'


let configuration: Configuration


configuration = {
    // The standard entry point and output config
    entry: {
        posts: "./posts",
        post: "./post",
        about: "./about"
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        rules: [
            // Extract css files
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                })
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"],
                })
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};

configuration = {
    // ...
    plugins: [
        new ExtractTextPlugin({
            filename: "style.css",
            allChunks: true,
        })
    ]
};

configuration = {
    // ...
    plugins: [
        new optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
        }),
        new ExtractTextPlugin("[name].css")
    ]
};

configuration = {
    // ...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
};

// multiple extract instances
let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
let extractLESS = new ExtractTextPlugin('stylesheets/[name].less');

configuration = {
    // ...
    module: {
        rules: [
            { test: /\.scss$/i, use: extractCSS.extract(['css','sass']) },
            { test: /\.less$/i, use: extractLESS.extract(['css','less']) },
        ]
    },
    plugins: [
        extractCSS,
        extractLESS,
    ],
};

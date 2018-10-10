import webpack = require('webpack');
import ExtractTextPlugin = require('extract-text-webpack-plugin');

let configuration: webpack.Configuration;

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
const extractCSS: ExtractTextPlugin = new ExtractTextPlugin('stylesheets/[name].css');
const extractLESS: ExtractTextPlugin = new ExtractTextPlugin('stylesheets/[name].less');

configuration = {
    // ...
    module: {
        rules: [
            { test: /\.scss$/i, use: extractCSS.extract(['css', 'sass']) },
            { test: /\.less$/i, use: extractLESS.extract(['css', 'less']) },
        ]
    },
    plugins: [
        extractCSS,
        extractLESS,
    ],
};

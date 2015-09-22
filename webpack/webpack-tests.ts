/// <reference path="webpack.d.ts" />

import webpack from 'webpack';
//import webpack = require('webpack');

var configuration: webpack.Configuration;
var loader: webpack.Loader;
var plugin: webpack.Plugin;

//
// https://webpack.github.io/docs/using-loaders.html
//

configuration = {
    module: {
        loaders: [
            { test: /\.jade$/, loader: "jade" },
            // => "jade" loader is used for ".jade" files

            { test: /\.css$/, loader: "style!css" },
            // => "style" and "css" loader is used for ".css" files
            // Alternative syntax:
            { test: /\.css$/, loaders: ["style", "css"] },
        ]
    }
};

loader = { test: /\.png$/, loader: "url-loader?mimetype=image/png" };

loader = {
    test: /\.png$/,
    loader: "url-loader",
    query: { mimetype: "image/png" }
};

//
// https://webpack.github.io/docs/using-plugins.html
//

configuration = {
    plugins: [
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ], ["normal", "loader"])
    ]
};


/// <reference path="webpack.d.ts" />

import webpack from 'webpack';
//import webpack = require('webpack');

var configuration: webpack.Configuration;
var loader: webpack.Loader;
var plugin: webpack.Plugin;
declare var __dirname: string;

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

//
// http://webpack.github.io/docs/tutorials/getting-started/
//

configuration = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

//
// https://webpack.github.io/docs/code-splitting.html
//

configuration = {
    entry: {
        app: "./app.js",
        vendor: ["jquery", "underscore"],
    },
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};

configuration =  {
    entry: { a: "./a", b: "./b" },
    output: { filename: "[name].js" },
    plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ]
};

//
// https://webpack.github.io/docs/stylesheets.html
//

configuration = {
    // ...
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

class ExtractTextPlugin implements webpack.Plugin {
    static extract(...loaders: string[]): string { return null; }
    constructor(...args: any[]) {}
}

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
        loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
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
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
};

configuration = {
    // ...
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
        new ExtractTextPlugin("[name].css")
    ]
};

//
// https://webpack.github.io/docs/optimization.html
//

configuration = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3"
    },
    output: {
        filename: "[name].entry.chunk.js"
    }
};

let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
configuration = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3"
    },
    output: {
        filename: "[name].entry.chunk.js"
    },
    plugins: [
        new CommonsChunkPlugin("commons.chunk.js")
    ]
};

configuration = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3",
        ap1: "./admin/page1",
        ap2: "./admin/page2"
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
        new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])
    ]
};
// <script>s required:
// page1.html: commons.js, p1.js
// page2.html: commons.js, p2.js
// page3.html: p3.js
// admin-page1.html: commons.js, admin-commons.js, ap1.js
// admin-page2.html: commons.js, admin-commons.js, ap2.js

configuration = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        commons: "./entry-for-the-commons-chunk"
    },
    plugins: [
        new CommonsChunkPlugin("commons", "commons.js")
    ]
};

//
// https://webpack.github.io/docs/long-term-caching.html
//

configuration = {
    output: {
        path: path.join(__dirname, "assets", "[hash]"),
        publicPath: "assets/[hash]/",
        filename: "output.[hash].bundle.js",
        chunkFilename: "[id].[hash].bundle.js"
    }
};

configuration = { output: { chunkFilename: "[chunkhash].bundle.js" } };

declare var require: any;
declare var path: any;
configuration = {
    plugins: [
        function() {
            this.plugin("done", function(stats: any) {
                require("fs").writeFileSync(
                    path.join(__dirname, "...", "stats.json"),
                    JSON.stringify(stats.toJson()));
            });
        }
    ]
};


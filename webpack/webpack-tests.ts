/// <reference path="webpack.d.ts" />

import * as webpack from 'webpack';

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

//
// https://webpack.github.io/docs/configuration.html
//

configuration = {
    entry: [
        "./entry1",
        "./entry2"
    ]
};

configuration = {
    devtool: "#inline-source-map"
};

loader = {
    test: /\.jsx$/,
    include: [
        path.resolve(__dirname, "app/src"),
        path.resolve(__dirname, "app/test")
    ],
    exclude: [
        path.resolve(__dirname, "node_modules")
    ],
    loader: "babel-loader"
};

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

//
// https://webpack.github.io/docs/list-of-plugins.html
//

var plugin: webpack.Plugin;
var resourceRegExp: any;
var newResource: any;
var contextRegExp: any;
var newContentResource: any;
var newContentRecursive: any;
var newContentRegExp: any;
var requestRegExp: any;
var options: any;
var definitions: any;
var paths: any;
var preferEntry = true;
var context: any;
var request: any;
var types: any;
var banner: any;
var plugins: webpack.Plugin[];

plugin = new webpack.NormalModuleReplacementPlugin(resourceRegExp, newResource);
plugin = new webpack.ContextReplacementPlugin(
    resourceRegExp,
    newContentResource,
    newContentRecursive,
    newContentRegExp);
plugin = new webpack.ContextReplacementPlugin(
    resourceRegExp,
    newContentResource,
    newContentRecursive);
plugin = new webpack.ContextReplacementPlugin(
    resourceRegExp,
    newContentResource);
plugin = new webpack.ContextReplacementPlugin(resourceRegExp);
plugin = new webpack.IgnorePlugin(requestRegExp);
plugin = new webpack.IgnorePlugin(requestRegExp, contextRegExp);

plugin = new webpack.PrefetchPlugin(context, request);
plugin = new webpack.PrefetchPlugin(request);
plugin = new webpack.ResolverPlugin(plugins, types);
plugin = new webpack.ResolverPlugin(plugins);
plugin = new webpack.ResolverPlugin([
    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
], ["normal", "loader"]);
plugin = new webpack.ResolverPlugin([
    new webpack.ResolverPlugin.FileAppendPlugin(['/dist/compiled-moduled.js'])
]);
plugin = new webpack.BannerPlugin(banner, options);
plugin = new webpack.optimize.DedupePlugin();
plugin = new webpack.optimize.LimitChunkCountPlugin(options);
plugin = new webpack.optimize.MinChunkSizePlugin(options);
plugin = new webpack.optimize.OccurenceOrderPlugin(preferEntry);
plugin = new webpack.optimize.UglifyJsPlugin(options);
plugin = new webpack.optimize.UglifyJsPlugin();
plugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});
plugin = new webpack.optimize.UglifyJsPlugin({
    mangle: {
        except: ['$super', '$', 'exports', 'require']
    }
});
plugin = new webpack.optimize.CommonsChunkPlugin(options);
plugin = new CommonsChunkPlugin({
    name: "commons",
    // (the commons chunk name)

    filename: "commons.js",
    // (the filename of the commons chunk)

    // minChunks: 3,
    // (Modules must be shared between 3 entries)

    // chunks: ["pageA", "pageB"],
    // (Only use these entries)
});
plugin = new CommonsChunkPlugin({
    // names: ["app", "subPageA"]
    // (choose the chunks, or omit for all chunks)

    children: true,
    // (select all children of chosen chunks)

    // minChunks: 3,
    // (3 children must share the module before it's moved)
});
plugin = new CommonsChunkPlugin({
    // names: ["app", "subPageA"]
    // (choose the chunks, or omit for all chunks)

    children: true,
    // (use all children of the chunk)

    async: true,
    // (create an async commons chunk)

    // minChunks: 3,
    // (3 children must share the module before it's separated)
});
plugin = new webpack.optimize.AggressiveMergingPlugin(options);
plugin = new webpack.dependencies.LabeledModulesPlugin();
plugin = new webpack.DefinePlugin(definitions);
plugin = new webpack.DefinePlugin({
    VERSION: JSON.stringify("5fa3b9"),
    BROWSER_SUPPORTS_HTML5: true,
    TWO: "1+1",
    "typeof window": JSON.stringify("object")
});
plugin = new webpack.ProvidePlugin(definitions);
plugin = new webpack.ProvidePlugin({
    $: "jquery"
});
plugin = new webpack.SourceMapDevToolPlugin({
    //// asset matching
    //test: string | RegExp | Array,
    //include: string | RegExp | Array,
    //exclude: string | RegExp | Array,
    //
    //// file and reference
    //filename: string,
    //append: bool | string,
    //
    //// sources naming
    //moduleFilenameTemplate: string,
    //fallbackModuleFilenameTemplate: string,
    //
    //// quality/performance
    //module: bool,
    //columns: bool,
    //lineToLine: bool | object
});
plugin = new webpack.HotModuleReplacementPlugin();
plugin = new webpack.ExtendedAPIPlugin();
plugin = new webpack.NoErrorsPlugin();
plugin = new webpack.WatchIgnorePlugin(paths);


import webpack = require('webpack');
import WebpackDevServer = require('webpack-dev-server');
import { Application } from 'express';
const compiler = webpack({});
const multipleCompiler = webpack([]);

// basic example
let server = new WebpackDevServer(compiler, {
    publicPath: "/assets/"
});
server.listen(8080);

// Configuration can be used as a type
const config: WebpackDevServer.Configuration = {
    // webpack-dev-server options
    inline: true,
    // Toggle between the dev-server's two different modes --- inline (default, recommended for HMR) or iframe.

    contentBase: "/path/to/directory",
    // or: contentBase: "http://localhost/",

    public: 'public-host.ru',
    // Public host for server

    disableHostCheck: true,
    // Disable public host check, use it carefully

    hot: true,
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: false,

    // Set this if you want to enable gzip compression for assets
    compress: true,

    // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
    // Use "**" to proxy all paths to the specified server.
    // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
    // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
    proxy: {
        "**": "http://localhost:9090"
    },

    setup: (app: Application) => {
        // Here you can access the Express app object and add your own custom middleware to it.
        // For example, to define custom handlers for some paths:
        app.get('/some/path', (req, res) => {
            res.json({ custom: 'response' });
        });
    },

    // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
    staticOptions: {
    },

    // webpack-dev-middleware options
    quiet: false,
    noInfo: false,
    lazy: true,
    filename: "bundle.js",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    // It's a required option.
    publicPath: "/assets/",
    headers: { "X-Custom-Header": "yes" }
};

// API example
server = new WebpackDevServer(compiler, config);
server.listen(8080, "localhost", () => { });

// HTTPS example
server = new WebpackDevServer(compiler, {
    publicPath: "/assets/",
    https: true
});

server.listen(8080, "localhost", () => { });

server.close();

const webpackConfig: webpack.Configuration = {
    context: __dirname,

    mode: 'development',

    target: 'node',

    devServer: config
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, {
    publicPath: "/assets/",
    https: true
});

WebpackDevServer.addDevServerEntrypoints(
    [webpackConfig],
    {
        publicPath: "/assets/",
        https: true
    },
    {
        address: () => ({ port: 80 })
    }
);

// multiple compilers
server = new WebpackDevServer(multipleCompiler, config);

import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';

const compiler = webpack({});

let webpackDevMiddlewareInstance = webpackDevMiddleware(compiler);

webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
	noInfo: false,
	quiet: false,
	lazy: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: true,
	},
	publicPath: '/assets/',
	index: 'index.html',
	headers: {
		'X-Custom-Header': 'yes'
	},
	stats: {
		colors: true,
	},
	reporter: null,
	serverSideRender: false,
});

const app = express();
app.use([webpackDevMiddlewareInstance]);

webpackDevMiddlewareInstance.close();
webpackDevMiddlewareInstance.invalidate();
webpackDevMiddlewareInstance.waitUntilValid(() => {
	console.log('Package is in a valid state');
});

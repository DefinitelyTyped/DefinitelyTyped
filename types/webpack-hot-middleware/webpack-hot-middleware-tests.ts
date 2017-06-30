import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackHotMiddleware from 'webpack-hot-middleware';

const compiler = webpack({});

let webpackHotMiddlewareInstance = webpackHotMiddleware(compiler);

webpackHotMiddlewareInstance = webpackHotMiddleware(compiler, {
	log: console.log.bind(console),
	path: '/__what',
	heartbeat: 2000,
});

const app = express();
app.use(webpackHotMiddlewareInstance);

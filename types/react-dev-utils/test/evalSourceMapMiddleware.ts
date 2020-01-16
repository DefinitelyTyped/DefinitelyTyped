import express = require('express');
import webpack = require('webpack');
import WebpackDevServer = require('webpack-dev-server');
import evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');

const compiler = webpack({});
const server = new WebpackDevServer(compiler);
const app = express();
app.use(evalSourceMapMiddleware(server));
app.listen(8080);

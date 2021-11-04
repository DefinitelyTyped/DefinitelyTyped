import express = require('express');
import WebpackDevServer = require('webpack-dev-server');

/*
 * Middleware responsible for retrieving a generated source
 * Receives a webpack internal url: "webpack-internal:///<module-id>"
 * Returns a generated source: "<source-text><sourceMappingURL><sourceURL>"
 */
declare function createEvalSourceMapMiddleware(server: WebpackDevServer): express.Handler;

export = createEvalSourceMapMiddleware;

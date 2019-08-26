import express = require('express');
import pino = require('pino');
import expressPinoLogger = require('express-pino-logger');

const server = express();

// no options

let middleware = expressPinoLogger();
server.use(middleware);

// pino own options

const pinoOptions: pino.LoggerOptions = {};
middleware = expressPinoLogger(pinoOptions);
server.use(middleware);

// options with existing logger

const logger = pino();
const optionsWithLogger = { logger };
middleware = expressPinoLogger(optionsWithLogger);
server.use(middleware);

server.use((req, res, next) => {
    req.log.info('');
    next();
});

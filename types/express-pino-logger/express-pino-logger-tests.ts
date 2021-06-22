import express = require('express');
import pino = require('pino');
import expressPinoLogger = require('express-pino-logger');

const server = express();

// no arguments

let middleware = expressPinoLogger();
server.use(middleware);

// pino options only

const pinoOptions: pino.LoggerOptions = {};
middleware = expressPinoLogger(pinoOptions);
server.use(middleware);

// pino destination only

const pinoDestination: pino.DestinationStream = pino.destination('/log/path');
middleware = expressPinoLogger(pinoDestination);
server.use(middleware);

// pino options and destination

const pinoOpts: pino.LoggerOptions = {};
const pinoDest: pino.DestinationStream = pino.destination('/log/path');
middleware = expressPinoLogger(pinoOpts, pinoDest);
server.use(middleware);

// existing logger

const logger = pino();
const optionsWithLogger: expressPinoLogger.Options = { logger };
middleware = expressPinoLogger(optionsWithLogger);
server.use(middleware);

server.use((req, res, next) => {
    req.log.info('');
    next();
});

// additional options
const optionsWithGenReqId: expressPinoLogger.Options = {
    logger,
    genReqId: (req) => 'foo',
};
middleware = expressPinoLogger(optionsWithGenReqId);
server.use(middleware);

server.use((req, res, next) => {
    req.log.info('%s', req.id);
    next();
});

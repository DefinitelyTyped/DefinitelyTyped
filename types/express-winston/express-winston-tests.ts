import expressWinston = require('express-winston');
import * as winston from 'winston';
import express = require('express');

const app = express();

// Logger with all options
app.use(expressWinston.logger({
  baseMeta: { foo: 'foo', nested: { bar: 'baz' } },
  bodyBlacklist: ['foo'],
  bodyWhitelist: ['bar'],
  colorize: true,
  dynamicMeta: (req, res, err) => ({ foo: 'bar' }),
  expressFormat: true,
  ignoreRoute: (req, res) => true,
  ignoredRoutes: ['foo'],
  level: (req, res) => 'level',
  meta: true,
  metaField: 'metaField',
  msg: 'msg',
  requestFilter: (req, prop) => true,
  requestWhitelist: ['foo', 'bar'],
  skip: (req, res) => false,
  statusLevels: ({ error: 'error', success: 'success', warn: 'warn' }),
  transports: [
    new winston.transports.Console({})
  ]
}));

// Logger with minimum options (transport)
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({})
  ],
}));

const logger = winston.createLogger();

// Logger with minimum options (winstonInstance)
app.use(expressWinston.logger({
  winstonInstance: logger,
}));

// Error Logger with all options
app.use(expressWinston.errorLogger({
  baseMeta: { foo: 'foo', nested: { bar: 'baz' } },
  dynamicMeta: (req, res, err) => ({ foo: 'bar' }),
  level: (req, res) => 'level',
  metaField: 'metaField',
  msg: 'msg',
  requestFilter: (req, prop) => true,
  requestWhitelist: ['foo', 'bar'],
  transports: [
    new winston.transports.Console({})
  ]
}));

// Error Logger with min options (transports)
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({})
  ],
}));

// Error Logger with min options (winstonInstance)
app.use(expressWinston.errorLogger({
  winstonInstance: logger,
}));

expressWinston.bodyBlacklist.push('potato');
expressWinston.bodyWhitelist.push('apple');
expressWinston.defaultRequestFilter = (req: express.Request, prop: string) => true;
expressWinston.defaultResponseFilter = (res: express.Response, prop: string) => true;
expressWinston.defaultSkip = () => true;
expressWinston.ignoredRoutes.push('/ignored');
expressWinston.responseWhitelist.push('body');

const router = express.Router();

router.post('/user/register', (req, res, next) => {
  const expressWinstonReq = req as expressWinston.ExpressWinstonRequest;
  expressWinstonReq._routeWhitelists.body = ['username', 'email', 'age'];
  expressWinstonReq._routeWhitelists.req = ['userId'];
  expressWinstonReq._routeWhitelists.res = ['_headers'];
});

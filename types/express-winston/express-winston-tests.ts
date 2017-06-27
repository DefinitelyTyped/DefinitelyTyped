import expressWinston = require('express-winston');
import * as winston from 'winston';
import * as express from 'express';

const app = express();

// Logger with all options
app.use(expressWinston.logger({
  baseMeta: { foo: 'foo' },
  bodyBlacklist: [ 'foo' ],
  bodyWhitelist: [ 'bar' ],
  colorize: true,
  dynamicMeta: (req, res, err) => ({ foo: 'bar' }),
  expressFormat: true,
  ignoreRoute: (req, res) => true,
  ignoredRoutes: [ 'foo' ],
  level: 'level',
  metaField: 'metaField',
  msg: 'msg',
  requestFilter: (req, prop) => true,
  requestWhitelist: [ 'foo', 'bar' ],
  skip: (req, res) => false,
  statusLevels: ({ error: 'error', success: 'success', warn: 'warn' }),
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

// Logger with minimum options (transport)
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ],
}));

// Logger with minimum options (winstonInstance)
app.use(expressWinston.logger({
  winstonInstance: winston,
}));

// Error Logger with all options
app.use(expressWinston.errorLogger({
  baseMeta: { foo: 'foo' },
  dynamicMeta: (req, res, err) => ({ foo: 'bar' }),
  level: 'level',
  metaField: 'metaField',
  msg: 'msg',
  requestFilter: (req, prop) => true,
  requestWhitelist: [ 'foo', 'bar' ],
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

// Error Logger with min options (transports)
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ],
}));

// Error Logger with min options (winstonInstance)
app.use(expressWinston.errorLogger({
  winstonInstance: winston,
}));

expressWinston.bodyBlacklist.push('potato');
expressWinston.bodyWhitelist.push('apple');
expressWinston.defaultRequestFilter = (req: express.Request, prop: string) => true;
expressWinston.defaultResponseFilter = (res: express.Response, prop: string) => true;
expressWinston.defaultSkip = () => true;
expressWinston.ignoredRoutes.push('/ignored');
expressWinston.responseWhitelist.push('body');

const router = express.Router();

router.post('/user/register', (req: expressWinston.ExpressWinstonRequest, res, next) => {
    req._routeWhitelists.body = [ 'username', 'email', 'age' ];
    req._routeWhitelists.req = [ 'userId' ];
    req._routeWhitelists.res = [ '_headers' ];
})

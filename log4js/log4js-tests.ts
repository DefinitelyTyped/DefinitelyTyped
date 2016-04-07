/// <reference path="./log4js.d.ts" />
/// <reference path="../express/express.d.ts" />

import log4js = require('log4js');

log4js.addAppender(log4js.appenders.file('logs/cheese.log'), 'cheese');

var logger = log4js.getLogger('cheese');
logger.setLevel('ERROR');

if (logger.isLevelEnabled(log4js.levels.DEBUG))
  logger.info('DEBUG is enabled');
if (logger.isTraceEnabled())
  logger.info('TRACE is enabled');
if (logger.isDebugEnabled())
  logger.info('DEBUG is enabled');
if (logger.isInfoEnabled())
  logger.info('INFO is enabled');
if (logger.isWarnEnabled())
  logger.info('WARN is enabled');
if (logger.isErrorEnabled())
  logger.info('ERROR is enabled');
if (logger.isFatalEnabled())
  logger.info('FATAL is enabled');

logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');

var cb = () => {};
log4js.shutdown(cb);

log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/cheese.log', category: 'cheese' }
  ]
});

var defaultLogger = log4js.getDefaultLogger();
defaultLogger.debug('Got cheese.');


import express = require('express');
var app = express();
app.configure(() => {
  app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO, format: ':method :url' }));
});
app.get('/', function(req, res) {
  res.send('hello world');
});
app.listen(5000);

log4js.configure({
  "appenders": [
    {
      "type": "console",
      "layout": {
        "type": "pattern",
        "pattern": "%d %p %c - %m"
      }
    }
  ],
  "levels": {
    "[all]": "INFO",
    "category1": "ERROR",
    "category2": "DEBUG"
  }
});

log4js.configure('file.json', { reloadSecs: 300 });

/// <reference path="winston.d.ts" />

import winston = require('winston');

var str: string;
var bool: boolean;
var num: number;
var metadata: any;
var obj: any = {};

winston.level = 'debug';

var queryOptions: winston.QueryOptions;
var transportOptions: winston.TransportOptions;
var loggerOptions: winston.LoggerOptions = {
  transports: [new (winston.Transport)()],
  rewriters: [new (winston.Transport)()],
  exceptionHandlers: [new (winston.Transport)()],
  handleExceptions: false
};

var options: any;
var value: any;
var transport: winston.TransportInstance;
var logger: winston.LoggerInstance;
var profiler: winston.ProfileHandler;

var writeableStream: NodeJS.WritableStream;
var readableStream: NodeJS.ReadableStream;


var transportStatic: winston.TransportStatic = winston.Transport;


var transportInstance: winston.TransportInstance = new (winston.Transport)(transportOptions);
transportInstance = new (winston.Transport)();

var containerInstance: winston.ContainerInstance = new (winston.Container)(loggerOptions);
winston.loggers.options.transports = [
  new (winston.Transport)()
];
winston.loggers.add('category1', {
  console: {
    level: 'silly',
    colorize: 'true',
    label: 'category one'
  },
  file: {
    filename: '/path/to/some/file'
  },
  transports: [
    new (winston.Transport)()
  ]
});
logger = winston.loggers.get('category1');

bool = containerInstance.has(str);
logger = containerInstance.get(str, loggerOptions);
containerInstance.close(str);

transport = winston.transports.Console;
transport = winston.transports.DailyRotateFile;
transport = winston.transports.File;
transport = winston.transports.Http;
transport = winston.transports.Loggly;
transport = winston.transports.Memory
transport = winston.transports.Webhook;

value = transport.formatQuery({});
queryOptions = transport.normalizeQuery(queryOptions);
value = transport.formatResults([], {});
transport.logException(str, metadata, () => { });

winston.exitOnError = bool;


winston.log(str, str);
winston.log(str, str, metadata);
winston.log(str, str, metadata, metadata, metadata);
winston.silly(str);
winston.silly(str, metadata);
winston.silly(str, metadata, metadata, metadata);
winston.debug(str);
winston.debug(str, metadata);
winston.debug(str, metadata, metadata, metadata);
winston.verbose(str);
winston.verbose(str, metadata);
winston.verbose(str, metadata, metadata, metadata);
winston.info(str);
winston.info(str, metadata);
winston.info(str, metadata, metadata, metadata);
winston.warn(str);
winston.warn(str, metadata);
winston.warn(str, metadata, metadata, metadata);
winston.error(str);
winston.error(str, metadata);
winston.error(str, metadata, metadata, metadata);

winston.query(queryOptions, (err: Error, results: any): void => {

});
winston.query((err: Error, results: any): void => {

});

logger = winston.add(transport, transportOptions);
logger = winston.remove(transport);
logger = winston.add(transport, {filename: 'path/to/file.log'});

winston.clear();
logger = winston.profile(str, str, metadata, (err: Error, level: string, msg: string, meta: any):void => {

});
logger = winston.profile(str);
profiler = winston.startTimer();
winston.setLevels({});
logger = winston.cli();

winston.handleExceptions(transport);
winston.unhandleExceptions(transport);

readableStream = winston.stream(options);

readableStream.on('log', function (log:any):void {
  console.log(log);
});



logger = logger.extend(obj);
logger.log(str, str);
logger.log(str, str, metadata);
logger.log(str, str, metadata, metadata, metadata);
logger.debug(str);
logger.debug(str, metadata);
logger.debug(str, metadata, metadata, metadata);
logger.info(str);
logger.info(str, metadata);
logger.info(str, metadata, metadata, metadata);
logger.warn(str);
logger.warn(str, metadata);
logger.warn(str, metadata, metadata, metadata);
logger.error(str);
logger.error(str, metadata);
logger.error(str, metadata, metadata, metadata);

logger.query(queryOptions, (err: Error, results: any): void => {

});
logger.query((err: Error, results: any): void => {

});

readableStream = winston.stream(options);
logger.close();
logger.handleExceptions(transport);
logger.unhandleExceptions(transport);
logger = logger.add(transport, transportOptions, bool);
logger = logger.add(transport);
logger = logger.add(transport, {filename: 'path/to/file.log'});

logger.clear();
logger = logger.remove(transport);
profiler = logger.startTimer();
logger = logger.profile(str, str, metadata, (err: Error, level: string, msg: string, meta: any):void => {

});
value = logger.setLevels(value);
logger = logger.cli();


logger = profiler.done(str);
logger = profiler.logger;
profiler.start = new Date();

let testRewriter : winston.MetadataRewriter;
testRewriter = function(level: string, msg: string, meta: any) {
    return meta;
};

logger.rewriters.push(testRewriter);
/**
 * New Logger instances with transports tests:
 */

var logger: winston.LoggerInstance = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: str,
      silent: bool,
      json: bool,
      colorize: bool,
      timestamp: bool,
      showLevel: bool,
      label: str,
      logstash: bool,
      debugStdout: bool,
      depth: num,
    }),
    new (winston.transports.DailyRotateFile)({
      level: str,
      silent: bool,
      json: bool,
      colorize: bool,
      maxsize: num,
      maxFiles: num,
      maxRetries: num,
      prettyPrint: bool,
      timestamp: bool,
      filename: str,
      dirname: str,
      datePattern: str,
      eol: str,
      stream: writeableStream,
    }),
    new (winston.transports.File)({
      level: str,
      silent: bool,
      json: bool,
      colorize: bool,
      prettyPrint: bool,
      timestamp: bool,
      showLevel: bool,
      logstash: bool,
      rotationFormat: bool,
      depth: num,
      zippedArchive: bool,
      eol: str,
      tailable: bool,
      maxRetries: num,
      filename: str,
      maxsize: num,
      maxFiles: num,
      stream: writeableStream,
    }),
    new (winston.transports.Http)({
      level: str,
      host: str,
      port: num,
      path: str,
      auth: { username: str, password: str },
      ssl: bool,
    }),
    new (winston.transports.Loggly)({
      level: str,
      subdomain: str,
      auth: {},
      inputName: str,
      json: bool,
    }),
    new (winston.transports.Memory)({
      level: str,
      json: bool,
      colorize: bool,
      showLevel: bool,
      depth: num,
      timestamp: bool,
      label: str,
    }),
    new (winston.transports.Webhook)({
      level: str,
      name: str,
      host: str,
      port: num,
      method: str,
      path: str,
      auth: { username: str, password: str },
      ssl: {ca: {}},
    }),
  ]
});

/* Reconfigure logger */
logger.configure({ level: 'silly' });

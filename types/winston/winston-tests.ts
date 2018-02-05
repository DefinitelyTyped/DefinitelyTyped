import winston = require('winston');

declare const str: string;
let bool: boolean;
declare const num: number;
declare const metadata: any;
const obj: any = {};
declare const stamp: boolean | (() => string | boolean);

winston.level = 'debug';

let queryOptions: winston.QueryOptions;
declare const transportOptions: winston.TransportOptions;
const loggerOptions: winston.LoggerOptions = {
  transports: [new (winston.Transport)()],
  rewriters: [
    (level: string, msg: string, meta: any): any => {
      return meta;
    }
  ],
  exceptionHandlers: [new (winston.Transport)()],
  handleExceptions: false
};

declare const options: any;
let value: any;
let transport: winston.TransportInstance;
let logger: winston.LoggerInstance;
let profiler: winston.ProfileHandler;

declare const writeableStream: NodeJS.WritableStream;
let readableStream: NodeJS.ReadableStream;

const transportStatic: winston.TransportStatic = winston.Transport;

let transportInstance: winston.TransportInstance = new (winston.Transport)(transportOptions);
transportInstance = new (winston.Transport)();

const containerInstance: winston.ContainerInstance = new (winston.Container)(loggerOptions);
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
transport = winston.transports.Memory;
transport = winston.transports.Webhook;

value = transport.formatQuery({});
queryOptions = transport.normalizeQuery(queryOptions);
value = transport.formatResults([], {});
transport.logException(str, metadata, () => { });

winston.exitOnError = bool;

winston.log(str, str);
winston.log(str, str, metadata);
winston.log(str, str, metadata, metadata, metadata);
winston.silly(str, str);
winston.silly(str, str, metadata);
winston.silly(str, str, metadata, metadata, metadata);
winston.debug(str);
winston.debug(str, metadata);
winston.debug(str, metadata, metadata, metadata);
winston.verbose(str, str);
winston.verbose(str, str, metadata);
winston.verbose(str, str, metadata, metadata, metadata);
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
logger = winston.profile(str, str, metadata, (err: Error, level: string, msg: string, meta: any): void => {
});
logger = winston.profile(str);
profiler = winston.startTimer();
winston.setLevels({});
logger = winston.cli();

winston.handleExceptions(transport);
winston.unhandleExceptions(transport);

readableStream = winston.stream(options);

readableStream.on('log', (log: any): void => {
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
logger = logger.profile(str, str, metadata, (err: Error, level: string, msg: string, meta: any): void => {
});
value = logger.setLevels(value);
logger = logger.cli();

logger = profiler.done(str);
logger = profiler.logger;
profiler.start = new Date();

const testRewriter: winston.MetadataRewriter = (level: string, msg: string, meta: any): any => {
    return meta;
};

logger.rewriters.push(testRewriter);
/**
 * New Logger instances with transports tests:
 */

logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: str,
      silent: bool,
      json: bool,
      colorize: bool,
      timestamp: stamp,
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
      timestamp: stamp,
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
      timestamp: stamp,
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
      timestamp: stamp,
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

/* Remove transport by name */
logger = logger.remove('nooo');

/* Reconfigure logger */
logger.configure({ level: 'silly' });

winston.default.warn("Don't export reserved words in JavaScript!");

winston.default.setLevels(winston.config.syslog.levels);
winston.addColors(winston.config.syslog.colors);
winston.default.emerg('syslog!');

winston.config.addColors(winston.config.syslog.colors);
winston.config.colorize(winston.config.syslog.levels['info'], "Hello world!");

// module augment for custom level log
// https://github.com/winstonjs/winston#using-custom-logging-levels
// https://github.com/Microsoft/TypeScript/issues/7545
declare module 'winston' {
  interface LoggerInstance {
    yay: LeveledLogMethod;
  }
}
const customLevelLogger = new winston.Logger({
  levels: {yay: 0, haha: 1, hoho: 2},
  transports: [
    new (winston.transports.Console)()
  ]
});
customLevelLogger.yay('yay!');

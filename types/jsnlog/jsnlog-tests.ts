// ----------------------------------------------------------
// JL

const offLevel: number = JL.getOffLevel();
const traceLevel: number = JL.getTraceLevel();
const debugLevel: number = JL.getDebugLevel();
const infoLevel: number = JL.getInfoLevel();
const warnLevel: number = JL.getWarnLevel();
const errorLevel: number = JL.getErrorLevel();
const fatalLevel: number = JL.getFatalLevel();
const allLevel: number = JL.getAllLevel();

JL.setOptions({
		enabled: true,
		maxMessages: 5,
		defaultAjaxUrl: '/jsnlog.logger',
		clientIP: '0.0.0.0',
		requestId: 'a reuest id',
		defaultBeforeSend: null,
		serialize: (obj) => JSON.stringify(obj)
});

// ----------------------------------------------------------
// Exception

const e = new JL.Exception("i is too small!");

// ----------------------------------------------------------
// Ajax Appender

const ajaxAppender1: JL.JSNLogAjaxAppender = JL.createAjaxAppender('ajaxAppender');

ajaxAppender1.setOptions({
		level: 5000,
		ipRegex: 'a regex',
		userAgentRegex: 'a user agent string',
		disallow: 'regex matching suppressed messages',
		sendWithBufferLevel: 5000,
		storeInBufferLevel: 2000,
		bufferSize: 10,
		batchSize: 2,
		url: '/jsnlog.logger',
		beforeSend: null
});

// ----------------------------------------------------------
// Console Appender

const consoleAppender1: JL.JSNLogConsoleAppender = JL.createConsoleAppender('consoleAppender');

consoleAppender1.setOptions({
		level: 5000,
		ipRegex: 'a regex',
		userAgentRegex: 'a user agent string',
		disallow: 'regex matching suppressed messages',
		sendWithBufferLevel: 5000,
		storeInBufferLevel: 2000,
		bufferSize: 10,
		batchSize: 2
});

// ----------------------------------------------------------
// Loggers

const logger1: JL.JSNLogLogger = JL('mylogger');

const exception = {};

logger1.trace('log message').debug({ x: 1, y: 2});
logger1.info(() => 5);
logger1.warn('log message');
logger1.error('log message');
logger1.fatal('log message');
logger1.fatalException('log message', exception);
logger1.log(4000, 'log message', exception);

logger1.setOptions({
		level: 5000,
		ipRegex: 'a regex',
		userAgentRegex: 'a user agent string',
		disallow: 'regex matching suppressed messages',
		appenders: [ ajaxAppender1, consoleAppender1 ],
		onceOnly: [ 'regex1', 'regex2' ]
});

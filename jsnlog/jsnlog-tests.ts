/// <reference path="jsnlog.d.ts" />

// ----------------------------------------------------------
// JL

var traceLevel: number = JL.getTraceLevel();
var debugLevel: number = JL.getDebugLevel();
var infoLevel: number = JL.getInfoLevel();
var warnLevel: number = JL.getWarnLevel();
var errorLevel: number = JL.getErrorLevel();
var fatalLevel: number = JL.getFatalLevel();

JL.setOptions({
		enabled: true,
		maxMessages: 5,
		defaultAjaxUrl: '/jsnlog.logger',
		clientIP: '0.0.0.0',
		requestId: 'a reuest id',
		defaultBeforeSend: null
});

// ----------------------------------------------------------
// Ajax Appender

var ajaxAppender1: JSNLog.JSNLogAjaxAppender = JL.createAjaxAppender('ajaxAppender');

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

var consoleAppender1: JSNLog.JSNLogConsoleAppender = JL.createConsoleAppender('consoleAppender');

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

var logger1: JSNLog.JSNLogLogger = JL('mylogger');

var exception = {};

logger1.trace('log message').debug({ x: 1, y: 2});
logger1.info(function() { return 5; });
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


import yogLog = require('yog-log');
import express = require('express');

const log = yogLog.getLogger({});

log.log('debug', 'test');

log.notice('test');
log.debug('test');
log.fatal('test');
log.fatal('test');
log.trace('test');
log.warning('test');

const cookie_value = log.getCookie('test');
const getLogFile = log.getLogFile(0);
const log_format = log.getLogFormat('ACCESS');

const logid = log.getLogID({} as express.Request, 'test');
const intlevel = log.getLogLevelInt('ACCESS');
const prfix = log.getLogPrefix();
const log_str = log.getLogString('test');
const param = log.getParams('test');
const md5_tag = log.md5('test', 123);

log.parseCustomLog({ test : 1});

const formater = log.parseFormat('test');

log.parseStackInfo(new Error());

log.setParams('test', 'some');

log.writeLog(0, { escape_msg : false, filename_suffix : '123', errno : 0 }, 'test');

const middleware = yogLog({});

const app = express();
app.get('/', middleware);

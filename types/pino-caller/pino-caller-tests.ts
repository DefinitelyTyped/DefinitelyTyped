import pino = require('pino');
import pinoCaller = require('pino-caller');

const log = pino();
const callerLog = pinoCaller(log);

callerLog.info('hello');
callerLog.error('error!');

pinoCaller(log, { relativeTo: 'pwd' }).error('error!');

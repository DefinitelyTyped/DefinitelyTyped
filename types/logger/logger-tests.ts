import { Logger, createLogger } from 'logger';

const logToSTDOUT = createLogger(); // $ExpectType Logger
logToSTDOUT.format('debug', 'date', 'message'); // $ExpectType string
logToSTDOUT.setLevel('fatal'); // $ExpectType number | false
logToSTDOUT.log('info', 'text1', 'text2', 'text3'); // $ExpectType string | false
logToSTDOUT.fatal('fatal', 'text1', 'text2', 'text3', 'text4', 'text5'); // $ExpectType string | false
logToSTDOUT.error('error', 'text1', 'text2', 'text3', 'text4'); // $ExpectType string | false
logToSTDOUT.warn('warn', 'text1', 'text2', 'text3'); // $ExpectType string | false
logToSTDOUT.info('info', 'text1', 'text2'); // $ExpectType string | false
logToSTDOUT.debug('debug', 'text1'); // $ExpectType string | false

createLogger('test.log'); // $ExpectType Logger

new Logger(); // $ExpectType Logger
new Logger('test.log'); // $ExpectType Logger

Logger.levels[0]; // $ExpectType "fatal"
Logger.levels[1]; // $ExpectType "error"
Logger.levels[2]; // $ExpectType "warn"
Logger.levels[3]; // $ExpectType "info"
Logger.levels[4]; // $ExpectType "debug"

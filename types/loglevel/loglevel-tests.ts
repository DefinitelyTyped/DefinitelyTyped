import * as moduleLog from 'loglevel'

moduleLog.trace('Trace message');
moduleLog.debug('Debug message');
moduleLog.info('Info message');
moduleLog.warn('Warn message');
moduleLog.error('Error message');
moduleLog.debug(['Hello', 'world', 42]);

moduleLog.setLevel(0);
moduleLog.setLevel(0, false);

moduleLog.setLevel('error');
moduleLog.setLevel('ERROR');
moduleLog.setLevel('error', false);
moduleLog.setLevel('ERROR', false);

moduleLog.setLevel(moduleLog.levels.WARN);
moduleLog.setLevel(moduleLog.levels.WARN, false);

moduleLog.enableAll(false);
moduleLog.enableAll();
moduleLog.disableAll(true);
moduleLog.disableAll();

let logLevel = moduleLog.getLevel();

let testLogger = moduleLog.getLogger('TestLogger');

testLogger.setLevel(logLevel);
testLogger.warn('logging test');

let logging = moduleLog.noConflict();

logging.error("still pretty easy");

// TODO: only works in a global environment
// moduleLog.methodFactory = (methodName: string, level: number, loggerName :string) => {
//   return function(...messages: any[]) {
//   };
// };

// ----------- global tests ----------

log.trace("Trace message");
log.debug("Debug message");
log.info("Info message");
log.warn("Warn message");
log.error("Error message");
log.debug(["Hello", "world", 42]);

log.setLevel(0);
log.setLevel(0, false);

log.setLevel("error");
log.setLevel("error", false);

log.setLevel(log.levels.WARN);
log.setLevel(log.levels.WARN, false);

log.enableAll(false);
log.enableAll();
log.disableAll(true);
log.disableAll();

logLevel = log.getLevel();

testLogger = log.getLogger("TestLogger");

testLogger.setLevel(logLevel);
testLogger.warn("logging test");

logging = log.noConflict();

logging.error("still pretty easy");

log.methodFactory = function(methodName: string, level: LogLevel, loggerName :string) {
    return function(...messages: any[]) {
    };
};

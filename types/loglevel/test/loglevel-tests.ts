import * as moduleLog from 'loglevel';

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

moduleLog.setDefaultLevel(0);
moduleLog.setDefaultLevel('error');
moduleLog.setDefaultLevel('ERROR');
moduleLog.setDefaultLevel(moduleLog.levels.WARN);

moduleLog.enableAll(false);
moduleLog.enableAll();
moduleLog.disableAll(true);
moduleLog.disableAll();

const logLevel = moduleLog.getLevel();

const testLogger: moduleLog.Logger = moduleLog.getLogger('TestLogger');

testLogger.setDefaultLevel(logLevel);
testLogger.setLevel(logLevel);
testLogger.warn('logging test');

const logging = moduleLog.noConflict();

logging.error("still pretty easy");

// TODO: only works in a global environment
// moduleLog.methodFactory = (methodName: string, level: number, loggerName :string) => {
//   return function(...messages: any[]) {
//   };
// };

// ----------- global tests ----------

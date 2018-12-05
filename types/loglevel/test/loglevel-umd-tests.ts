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

log.setDefaultLevel(1);
log.setDefaultLevel("warn");
log.setDefaultLevel(log.levels.INFO);

log.enableAll(false);
log.enableAll();
log.disableAll(true);
log.disableAll();

const logLevel = log.getLevel();

const testLogger: log.Logger = log.getLogger("TestLogger");

testLogger.setDefaultLevel(logLevel);
testLogger.setLevel(logLevel);
testLogger.warn("logging test");

const logging = log.noConflict();

logging.error("still pretty easy");

log.methodFactory = (methodName: string, level: number, loggerName: string) => {
    return (...messages: any[]) => {};
};

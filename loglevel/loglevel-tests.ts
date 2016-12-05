

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

log.setLevel(LogLevel.WARN);
log.setLevel(LogLevel.WARN, false);

log.enableAll(false);
log.enableAll();
log.disableAll(true);
log.disableAll();

var logLevel = log.getLevel();

var testLogger = log.getLogger("TestLogger");

testLogger.setLevel(logLevel);
testLogger.warn("logging test");

var logging = log.noConflict();

logging.error("still pretty easy");

log.methodFactory = function(methodName: string, level: LogLevel, loggerName :string) {
    return function(...messages: any[]) {
    };
};
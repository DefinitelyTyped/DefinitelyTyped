/// <reference path="loglevel.d.ts" />

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

var logging = log.noConflict();

logging.error("still pretty easy");

import consoleLogLevel = require("console-log-level");

const logger1 = consoleLogLevel({
    level: "trace",
    stderr: undefined,
    prefix: () => "SOME PREFIX"
});

const logger2 = consoleLogLevel({
    level: "trace",
    stderr: true,
    prefix: "OTHER PREFIX"
});

logger1.trace("hello %s", "world");
logger2.debug("hello %s", "world");
logger2.info("hello %s", "world");
logger2.warn("hello %s", "world");
logger2.error("hello %s", "world");
logger2.fatal("hello %s", "world");

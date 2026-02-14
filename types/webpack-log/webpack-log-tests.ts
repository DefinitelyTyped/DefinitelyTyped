import getLogger = require("webpack-log");

// Create logger with default options
const log = getLogger();

// Create logger with name
const namedLog = getLogger({ name: "my-webpack-plugin" });

// Create logger with all options
const fullLog = getLogger({
    name: "webpack-plugin",
    level: "debug",
    timestamp: true,
    unique: false,
});

// Test log methods
log.trace("trace message");
log.debug("debug message");
log.info("info message");
log.warn("warning message");
log.error("error message");

// Test with multiple arguments
log.info("message", { data: 123 });
log.error("error", new Error("test"));

// Test log level options
getLogger({ level: "trace" });
getLogger({ level: "debug" });
getLogger({ level: "info" });
getLogger({ level: "warn" });
getLogger({ level: "error" });
getLogger({ level: "silent" });

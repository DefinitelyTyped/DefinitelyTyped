// Default logger (writes at 'info' level)
// const log = require("log");
import * as log from 'log';

// Log 'info' level message:
log.info("some info message %s", "injected string");

// Get namespaced logger (debug lib style)
const myLibLog = log.get("my-lib");

// Log 'info' level message in context of 'my-lib' namespace:
myLibLog.info("some info message in 'my-lib' namespace context");

// Namespaces can be further nested
const myLibFuncLog = log.get("func");

// Log 'info' level message in context of 'my-lib:func' namespace:
myLibFuncLog.info("some info message in 'my-lib:func' namespace context");

// Log 'error' level message in context of 'my-lib:func' namespace:
myLibFuncLog.error("some error message");

// log output can be dynamically enabled/disabled during runtime
const { restore } = myLibFuncLog.error.disable();
myLibFuncLog.error("error message not really logged");
// Restore previous logs visibility state
restore();
myLibFuncLog.error("error message to be logged");

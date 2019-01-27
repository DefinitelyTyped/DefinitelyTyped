import debug = require("debug");

debug.disable();
debug.enable("DefinitelyTyped:*");

const log: debug.Debugger = debug("DefinitelyTyped:log");

log("Just text");
log("Formatted test (%d arg)", 1);
log("Formatted %s (%d args)", "test", 2);

log("Enabled?: %s", debug.enabled("DefinitelyTyped:log"));
log("Name Enabled: %s", debug.names.some(name => name.test("DefinitelyTyped:log")));
log("Namespace: %s", log.namespace);

const error: debug.Debugger = debug("DefinitelyTyped:error");
error.log = console.error.bind(console);
error("This should be printed to stderr");

const extendedLog: debug.Debugger = log.extend('extended');
extendedLog("Testing this is also an IDebugger.");

const extendedWithCustomDelimiter: debug.Debugger = log.extend('with-delim', '.');
extendedWithCustomDelimiter("Testing this is an IDebugger, too.");



import debug = require("debug");

debug.disable();
debug.enable("DefinitelyTyped:*");

var log:debug.IDebugger = debug("DefinitelyTyped:log");

log("Just text");
log("Formatted test (%d arg)", 1);
log("Formatted %s (%d args)", "test", 2);

log("Enabled?: %s", debug.enabled("DefinitelyTyped:log"));
log("Name Enabled: %s", debug.names.some(name => name.test("DefinitelyTyped:log")));
log("Namespace: %s", log.namespace);

var error:debug.IDebugger = debug("DefinitelyTyped:error");
error.log = console.error.bind(console);
error("This should be printed to stderr");

var extendedLog: debug.IDebugger = log.extend('extended');
extendedLog("Testing this is also an IDebugger.");

var extendedWithCustomDelimiter: debug.IDebugger = log.extend('with-delim', '.');
extendedWithCustomDelimiter("Testing this is an IDebugger, too.");
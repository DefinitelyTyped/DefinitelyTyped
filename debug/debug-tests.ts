/// <reference path="../node/node.d.ts" />
/// <reference path="debug.d.ts" />

import debug = require("debug");

debug.disable();
debug.enable("DefinitelyTyped:*");

var log: debug.Debugger = debug("DefinitelyTyped:log");

log("Just text");
log("Formatted test (%d arg)", 1);
log("Formatted %s (%d args)", "test", 2);

log("Enabled?: %s", debug.enabled("DefinitelyTyped:log"));
log("Namespace: %s", log.namespace);

var error: debug.Debugger = debug("DefinitelyTyped:error");
error.log = console.error.bind(console);
error("This should be printed to stderr");

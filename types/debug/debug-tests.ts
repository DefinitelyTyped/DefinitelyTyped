

import { debug, IDebugger } from "debug"

debug.disable();
debug.enable("DefinitelyTyped:*");

var log: IDebugger = debug("DefinitelyTyped:log");

log("Just text");
log("Formatted test (%d arg)", 1);
log("Formatted %s (%d args)", "test", 2);

log("Enabled?: %s", debug.enabled("DefinitelyTyped:log"));
log("Name Enabled: %s", debug.names.some(name => name.test("DefinitelyTyped:log")));
log("Namespace: %s", log.namespace);

var error: IDebugger = debug("DefinitelyTyped:error");
error.log = console.error.bind(console);
error("This should be printed to stderr");

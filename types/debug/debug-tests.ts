import * as debug1 from "debug";
/*tslint:disable-next-line:no-duplicate-imports*/
import debug2 from 'debug';

const log2: debug1.Debugger = debug2("DefinitelyTyped:log");
log2("Just text");
log2("Formatted test (%d arg)", 1);
log2("Formatted %s (%d args)", "test", 2);

debug1.disable();
debug1.enable("DefinitelyTyped:*");

const log: debug1.Debugger = debug1("DefinitelyTyped:log");

log("Just text");
log("Formatted test (%d arg)", 1);
log("Formatted %s (%d args)", "test", 2);

log("Enabled?: %s", debug1.enabled("DefinitelyTyped:log"));
log("Name Enabled: %s", debug1.names.some(name => name.test("DefinitelyTyped:log")));
log("Namespace: %s", log.namespace);

const error: debug1.Debugger = debug1("DefinitelyTyped:error");
error.log = console.error.bind(console);
error("This should be printed to stderr");

const extendedLog: debug1.Debugger = log.extend('extended');
extendedLog("Testing this is also an IDebugger.");

const extendedWithCustomDelimiter: debug1.Debugger = log.extend('with-delim', '.');
extendedWithCustomDelimiter("Testing this is an IDebugger, too.");

debug2.log = console.log.bind(console);
const anotherLogger = debug2("DefinitelyTyped:error");
anotherLogger("This should be printed to stdout");

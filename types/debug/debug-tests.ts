import * as debug1 from "debug";
/*eslint-disable-next-line no-duplicate-imports*/
import debug2 from "debug";

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

const extendedLog: debug1.Debugger = log.extend("extended");
extendedLog("Testing this is also an IDebugger.");

const extendedWithCustomDelimiter: debug1.Debugger = log.extend("with-delim", ".");
extendedWithCustomDelimiter("Testing this is an IDebugger, too.");

debug2.log = console.log.bind(console);
const anotherLogger = debug2("DefinitelyTyped:error");
anotherLogger("This should be printed to stdout");

// $ExpectType string | number
debug1.selectColor("DefinitelyTyped:log");
// $ExpectType string | number
debug2.selectColor("DefinitelyTyped:log");

debug2.formatArgs = function(args) {
    // $ExpectType string
    const diff = debug2.humanize(this.diff);
    args[0] = `[${this.namespace}] ${args[0]}`;
    args.push(`+${diff}`);
};
debug2.log = function(this: debug1.Debugger, ...args) {
    const diff = debug2.humanize(this.diff);
    console.log({
        namespace: this.namespace,
        args,
        diff,
    });
};

if (debug2.inspectOpts) {
    debug2.inspectOpts.depth = 12;
}

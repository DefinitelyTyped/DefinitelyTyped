import * as deasync from "deasync";

function asyncFunction(input: number, cb: (res: number) => void) {}
function handle(res: number) {}

// base case
asyncFunction(42, handle);

// deasync
const wrapped = deasync(asyncFunction);
handle(wrapped(42));

// deasync.loopWhile
let done = false;
asyncFunction(42, () => {
    done = true;
});
deasync.loopWhile(() => !done);

// deasync.runLoopOnce
deasync.runLoopOnce();

// deasync.sleep
deasync.sleep(100);

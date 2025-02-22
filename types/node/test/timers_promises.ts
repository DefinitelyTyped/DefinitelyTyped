import { TimerOptions } from "node:timers";
import { scheduler, setImmediate, setInterval, setTimeout } from "node:timers/promises";

const opts: TimerOptions = {
    ref: false,
    signal: new AbortController().signal,
};

// $ExpectType Promise<number>
setImmediate(123, opts);
// $ExpectType Promise<number>
setImmediate(123);
// $ExpectType Promise<void>
setImmediate();

// $ExpectType Promise<string>
setTimeout(123, "asd", opts);
// $ExpectType Promise<string>
setTimeout(123, "asd");
// $ExpectType Promise<void>
setTimeout(123);
// $ExpectType Promise<void>
setTimeout();

// $ExpectType AsyncIterator<string, any, any>
setInterval(123, "asd", opts);
// $ExpectType AsyncIterator<string, any, any>
setInterval(123, "asd");
// $ExpectType AsyncIterator<void, any, any>
setInterval(123);
// $ExpectType AsyncIterator<void, any, any>
setInterval();

// $ExpectType Promise<void>
scheduler.wait(123, { signal: new AbortController().signal });
// $ExpectType Promise<void>
scheduler.wait(123);
// @ts-expect-error
scheduler.wait();

// $ExpectType Promise<void>
scheduler.yield();

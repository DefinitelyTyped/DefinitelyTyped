import { TimerOptions } from "node:timers";
import { scheduler, setImmediate, setInterval, setTimeout } from "node:timers/promises";
const opts: TimerOptions = {
    ref: false,
    signal: new AbortController().signal,
};

const res: Promise<number> = setImmediate(123, opts);
setImmediate(); // $ExpectType Promise<void>

const res2: Promise<string> = setTimeout(123, "asd", opts);
setTimeout(); // $ExpectType Promise<void>

const res3: AsyncIterable<string> = setInterval(123, "asd", opts);
setInterval(); // $ExpectType AsyncIterable<void>

const res4: Promise<void> = scheduler.yield();
scheduler.yield(); // $ExpectType Promise<void>

const res5: Promise<void> = scheduler.wait(123);
scheduler.wait(); // $ExpectType Promise<void>

(async () => {
    for await (const test of setInterval(123, 1)) {
        test; // $ExpectType number
    }
});

import { setImmediate, setTimeout, setInterval } from 'node:timers/promises';
import { TimerOptions } from 'node:timers';
const opts: TimerOptions = {
    ref: false,
    signal: new AbortController().signal,
};

const res: Promise<number> = setImmediate(123, opts);
setImmediate(); // $ExpectType Promise<void>

const res2: Promise<string> = setTimeout(123, 'asd', opts);
setTimeout(); // $ExpectType Promise<void>

const res3: AsyncIterable<string> = setInterval(123, 'asd', opts);
setInterval(); // $ExpectType AsyncIterable<void>

(async () => {
    for await (const test of setInterval(123, 1)) {
        test; // $ExpectType number
    }
});

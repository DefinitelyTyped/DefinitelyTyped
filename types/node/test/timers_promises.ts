import { setImmediate, setTimeout, setInterval } from 'timers/promises';
import { TimerOptions } from 'timers';
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

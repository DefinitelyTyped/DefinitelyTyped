import { setImmediate, setTimeout, setInterval } from 'node:timers/promises';
import { TimerOptions } from 'node:timers';
const opts: TimerOptions = {
    ref: false,
    signal: new AbortController().signal,
};

const res: Promise<number> = setImmediate(123);
const res1: Promise<number> = setImmediate(123, opts);

const res2: Promise<void> = setTimeout(123);
const res3: Promise<string> = setTimeout(123, 'asd');
const res4: Promise<string> = setTimeout(123, 'asd', opts);

const res5: AsyncIterableIterator<void> = setInterval(123);
const res6: AsyncIterableIterator<string> = setInterval(123, 'asd');
const res7: AsyncIterableIterator<string> = setInterval(123, 'asd', opts);

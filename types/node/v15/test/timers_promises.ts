import { setImmediate, setTimeout } from 'node:timers/promises';
import { TimerOptions } from 'node:timers';
const opts: TimerOptions = {
    ref: false,
    signal: new AbortController().signal,
};

const res: Promise<number> = setImmediate(123, opts);

const res2: Promise<string> = setTimeout(123, 'asd', opts);

import { setImmediate, setTimeout } from 'timers/promises';
import { TimerOptions } from 'timers';
const opts: TimerOptions = {
    ref: false,
    signal: new AbortController().signal,
};

const res: Promise<number> = setImmediate(123, opts);

const res2: Promise<string> = setTimeout(123, 'asd', opts);

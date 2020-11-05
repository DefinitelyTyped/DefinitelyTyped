import { promisify } from 'util';
import * as timers from 'timers';

{
    const setTimeout = promisify(timers.setTimeout);

    const ac = new AbortController();

    const signal = ac.signal;
    setTimeout(10, undefined, { signal });
    ac.abort();
}

{
    const setImmediate = promisify(timers.setImmediate);

    const ac = new AbortController();

    const signal = ac.signal;
    setImmediate(10, { signal });
    ac.abort();
}

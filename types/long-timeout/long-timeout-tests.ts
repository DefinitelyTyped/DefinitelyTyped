import * as lt from 'long-timeout';

const interval = lt.setInterval(() => {
    // Do things
}, 4000);

interval.close();

lt.clearInterval(interval);

const timeout = lt.setTimeout(() => {
    // Do things
}, 50);

lt.clearTimeout(timeout);

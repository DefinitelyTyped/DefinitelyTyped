import {
    maxInterval,
    Timeout,
    setTimeout,
    setTimeoutAt,
    clearTimeout,
    Interval,
    setInterval,
    clearInterval,
} from 'safe-timers';

const maxIntervalTest: number = maxInterval;

const timeout: Timeout = setTimeout(() => {}, 1000);
const timeoutWithArgs: Timeout = setTimeout((hero: string, powerLevel: number) => {}, 1000, 'Goku', 9000);

const timeoutAt: Timeout = setTimeoutAt(() => {}, 1000);
const timeoutAtWithArgs: Timeout = setTimeoutAt((hero: string, powerLevel: number) => {}, 1000, 'Goku', 9000);

timeout.clear();

clearTimeout(timeout);

const interval: Interval = setInterval(() => {}, 1000);
const intervalWithArgs: Interval = setInterval((hero: string, powerLevel: number) => {}, 1000, 'Goku', 9000);

interval.clear();

clearInterval(interval);

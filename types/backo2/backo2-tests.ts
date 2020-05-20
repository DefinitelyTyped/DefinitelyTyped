import Backoff = require("backo2");

const backoff = new Backoff();
const backoff2 = new Backoff({});
const backoff3 = new Backoff({
    min: 0,
    max: 0,
    jitter: 0,
    factor: 0
});

const y: number = backoff3.duration();
const attempts: number = backoff3.attempts;
const min: number = backoff3.ms;
const max: number = backoff3.max;
const jitter: number = backoff3.jitter;
const factor: number = backoff3.factor;
backoff3.reset();

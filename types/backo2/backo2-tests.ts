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
backoff3.reset();

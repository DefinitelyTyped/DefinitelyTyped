import slowDown = require('express-slow-down');

const slowerAllDefaults = slowDown({});

const slowerWithOptions = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes,
    delayAfter: 1,
    delayMs: 0, // disabled
    maxDelayMs: 20000,
    skipFailedRequests: false,
    skipSuccessfulRequests: true,
});

const slowerWithCallbacks = slowDown({
    keyGenerator: (req, res) => req.ip,
    skip: (req, res) => false,
    onLimitReached: (req, res, opts) => {
        console.log(req.slowDown.current);
        console.log(req.slowDown.remaining);
        console.log(req.slowDown.limit);
    },
});

class MockStore implements slowDown.Store {
    incr(key: string, cb: slowDown.StoreIncrementCallback) {}
    decrement(key: string) {}
    resetKey(key: string) {}
}

const slowerWithStore = slowDown({
    store: new MockStore(),
});

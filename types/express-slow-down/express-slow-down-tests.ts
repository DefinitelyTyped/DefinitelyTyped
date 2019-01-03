import SlowDown = require("express-slow-down");

const slowerAllDefaults = new SlowDown({});

const slowerWithOptions = new SlowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes,
    delayAfter: 1,
    delayMs: 0, // disabled
    skipFailedRequests: false,
    skipSuccessfulRequests: true,
});

const slowerWithCallbacks = new SlowDown({
    keyGenerator: (req, res) => req.ip,
    skip: (req, res) => false,
    onLimitReached: (req, res, opts) => {},
});

class MockStore implements SlowDown.Store {
    incr(key: string, cb: SlowDown.StoreIncrementCallback) { }
    decrement(key: string) { }
    resetKey(key: string) { }
}

const slowerWithStore = new SlowDown({
    store: new MockStore()
});

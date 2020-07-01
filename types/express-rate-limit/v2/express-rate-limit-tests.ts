import RateLimit = require('express-rate-limit');

const apiLimiter = new RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    delayMs: 0, // disabled
});
apiLimiter.resetKey('testKey');

const apiLimiterWithMessageObject = new RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: {
        status: 429,
        message: 'To many requests, try again later',
    },
});

const createAccountLimiter = new RateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    delayAfter: 1, // begin slowing down responses after the first request
    delayMs: 3 * 1000, // slow down subsequent responses by 3 seconds per request
    max: 5, // start blocking after 5 requests
    message: 'Too many accounts created from this IP, please try again after an hour',
    handler: (req, _, next) => next(new Error(`TooManyRequests: ${req.ip}`)),
});

const callbackWithFewerParams = new RateLimit({
    handler: (req, res) => res.status(429).json(`TooManyRequests: ${req.ip}`),
});

class SomeStore implements RateLimit.Store {
    incr(key: string, cb: RateLimit.StoreIncrementCallback) {}
    decrement(key: string) {}
    resetKey(key: string) {}
}

const limiterWithStore = new RateLimit({
    store: new SomeStore(),
});

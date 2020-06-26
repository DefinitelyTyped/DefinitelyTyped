import rateLimit = require('express-rate-limit');
import express = require('express');

const app = express();

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    headers: false,
    skipFailedRequests: false,
    skipSuccessfulRequests: true,
});

apiLimiter.resetKey('testKey'); // $ExpectType void

const apiLimiterWithMaxFn = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: () => 5,
});

const apiLimiterWithMaxPromiseFn = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: () => Promise.resolve(5),
});

const apiLimiterWithMessageObject = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: {
        status: 429,
        message: 'To many requests, try again later',
    },
});

const createAccountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 5, // start blocking after 5 requests
    message: 'Too many accounts created from this IP, please try again after an hour',
    handler: (req, _, next) => next(new Error(`TooManyRequests: ${req.ip}`)),
});

const callbackWithFewerParams = rateLimit({
    handler: (req, res) => res.status(429).json(`TooManyRequests: ${req.ip}`),
});

class SomeStore implements rateLimit.Store {
    incr(key: string, cb: rateLimit.StoreIncrementCallback) {}
    decrement(key: string) {}
    resetKey(key: string) {}
    resetAll() {}
}

const limiterWithStore = rateLimit({
    store: new SomeStore(),
});

app.use(apiLimiter);
app.use('/api/', apiLimiter);
app.post('/create-user', apiLimiter, (req: Express.Request, resp, next) => {
    req.rateLimit; // $ExpectType RateLimitInfo
    req.rateLimit.current; // $ExpectType number
    req.rateLimit.limit; // $ExpectType number
    req.rateLimit.remaining; // $ExpectType number
    req.rateLimit.resetTime; // $ExpectType Date | undefined
});

import limiterFactory = require('lambda-rate-limiter');

// test type exports
type Options = limiterFactory.Options;
type RateLimiter = limiterFactory.RateLimiter;

const limiter = limiterFactory(); // $ExpectType RateLimiter
limiterFactory({ interval: 1000 }); // $ExpectType RateLimiter
limiterFactory({ uniqueTokenPerInterval: 50 }); // $ExpectType RateLimiter

limiter.check(10, 'USER_TOKEN'); // $ExpectType Promise<number>

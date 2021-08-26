import * as limiter from 'lambda-rate-limiter';

limiter({
    interval: 60000, // rate limit interval in ms, starts on first request
    uniqueTokenPerInterval: 500 // excess causes earliest seen to drop, per instantiation
  });

  limiter
    .check(10, 'USER_TOKEN') // define maximum of 10 requests per interval
    .catch(() => {
      // rate limit exceeded: 429
    })
    .then(() => {
      // ok
    });

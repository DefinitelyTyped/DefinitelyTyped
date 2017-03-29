import * as express from 'express';
import * as redis from 'redis';
import * as rateLimiter from 'redis-rate-limiter';

var num: number;
var str: string;
var options: redis.ClientOpts;
var redisClient = redis.createClient(num, str, options);

var limit = rateLimiter.create({
  redis: redisClient,
  key: function(x) { return x.ip },
  rate: '100/minute'
});

var request = {} as express.Request;
limit(request, function(err, rate) {
  if (err) {
    console.warn('Rate limiting not available');
  } else {
    console.log('Rate window: '  + rate.window);  // 60
    console.log('Rate limit: '   + rate.limit);   // 100
    console.log('Rate current: ' + rate.current); // 74
    if (rate.over) {
      console.error('Over the limit!');
    }
  }
});

var middleware = rateLimiter.middleware({
  redis: redisClient,
  key: 'ip',
  rate: '100/minute'
});

var app = express();
app.use(middleware);

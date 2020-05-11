import koaResponseTime = require('koa-response-time');

koaResponseTime();
koaResponseTime({});
koaResponseTime({ hrtime: true });

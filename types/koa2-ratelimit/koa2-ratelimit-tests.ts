import Koa = require('koa');
import Koa2Ratelimit = require('koa2-ratelimit');
import mongoose = require('mongoose');
import Sequelize = require('sequelize');

const { RateLimit, Stores } = Koa2Ratelimit;

const getId = (ctx: Koa.Context) => ctx.state.userId ?? ctx.ip;

RateLimit.defaultOptions({
    message: 'Get out.',
    interval: { sec: 30, hour: 1, ms: 200 },
    delayAfter: 9,
    max: 3,
    timeWait: 500,
    getUserId: getId,
    keyGenerator: getId,
    async handler(ctx) {
        ctx.status = 420;
        ctx.body = { status: 420, message: 'Enhance Your Calm' };
    },
    headers: false,
    weight: async () => 5,
    onLimitReached: async () => console.log('limit reached'),
});

const rate1 = RateLimit.middleware();
const rate2 = RateLimit.middleware({
    interval: 50000,
    message: 'Nope',
    store: new Stores.Memory(),
    statusCode: 420,
});
const rate3 = RateLimit.middleware({
    store: new Stores.Redis({
        host: 'localhost',
        db: 2,
        password: 'password',
    }),
    whitelist: ['1234567890'],
});
const rate4 = RateLimit.middleware({
    store: new Stores.Mongodb(mongoose.connection),
    skip: async () => false,
});
const rate5 = RateLimit.middleware({
    store: new Stores.Sequelize(new Sequelize({})),
});

const app = new Koa();
app.use(rate2);

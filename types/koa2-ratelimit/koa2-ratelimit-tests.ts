import Koa = require('koa');
import Koa2Ratelimit = require('koa2-ratelimit');
import mongoose = require('mongoose');
import Sequelize = require('sequelize');

const { RateLimit, Stores } = Koa2Ratelimit;

RateLimit.defaultOptions({
    message: 'Get out.',
    interval: { sec: 30 },
    max: 3,
    timeWait: 500,
    getUserId(ctx) {
        return ctx.state.userId ?? ctx.ip;
    },
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

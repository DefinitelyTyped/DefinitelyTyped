import Koa = require('koa');
import session = require('koa-session');
import * as ContextSession from "koa-session/lib/context";
import Router = require('koa-router');

import {
    encode,
    decode,
    hash,
} from "koa-session/lib/util";

encode({ a: "b" });

decode("123");

hash("abc");

const app = new Koa();

app.use(session({
    valid: (ctx, sess) => {
        const { session: s } = ctx;
        if (s) {
            s.sess = "validated";
            s.save();
            return true;
        }
        return false;
    },
    store: {
        get: async (key) => {
            return "abc";
        },
        set: (key, val) => {
            console.log(key, val);
        },
        destroy: (key) => {
            console.log(key);
        },
    },
    path: "/",
}, app));

// test for correct type in `ParameterizedContext`
const router = new Router();

router.get('/', (ctx) => {
    ctx.session!.hello = true;
});

app.use(router.routes());

// can still use koa-session events, although without autocomplete
app.on('session:missed', () => {});
app.on('session:expired', () => {});
app.on('session:invalid', () => {});

app.use((ctx, next) => {
    // reset the session
    ctx.session = null;

    // does not interfere with Application->EventEmitter #32389
    ctx.app.emit('error', new Error('this is an user-generated Error'));

    return next();
});

app.listen(3000);

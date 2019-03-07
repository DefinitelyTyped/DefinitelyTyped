import Koa = require('koa');
import session = require('koa-session');
import * as ContextSession from "koa-session/lib/context";

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

app.use((ctx, next) => {
    // reset the session
    ctx.session = null;

    return next();
});

app.listen(3000);

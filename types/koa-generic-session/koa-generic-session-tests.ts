import * as Koa from "koa";
import {MemoryStore, Session} from "koa-generic-session";
import session = require("koa-generic-session");

const app = new Koa();

app.use(session({
    key: 'sessionKey',
    store: MemoryStore(),
    ttl: 60 * 60,
    prefix: 'a-prefix',
    cookie: {
        path: '/test',
        rewrite: false,
        signed: false,
        maxAge: 60 * 60,
        secure: true,
        httpOnly: true,
    },
    allowEmpty: false,
    defer: false,
    reconnectTimeout: 100,
    rolling: false,
    sessionIdStore: {
        get: () => 'something',
        set: (sid: string, session: Session) => {},
        reset: () => {}
    },
    genSid: (length: number) => 'aSid',
    errorHandler: (error: Error, type: string, ctx: Koa.Context) => {},
    valid: (ctx: Koa.Context, session: Session) => true,
    beforeSave: (ctx: Koa.Context, session: Session) => {}
}));

app.use((context: Koa.Context) => {
    if (! context.session) {
        return;
    }

    context.regenerateSession();
    context.sessionSave = true;
    context.session.cookie;
    context.session['key'] = 'value';
    context.session = null;
});

app.listen(80);

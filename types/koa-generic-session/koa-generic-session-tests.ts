import Koa = require('koa');

import { MemoryStore, Session } from 'koa-generic-session';
import session = require('koa-generic-session');

const app = new Koa();

app.use(
    session({
        key: 'sessionKey',
        store: new MemoryStore(),
        ttl: 60 * 60,
        prefix: 'a-prefix',
        cookie: {
            path: '/test',
            domain: 'localhost',
            signed: false,
            maxAge: 60 * 60,
            secure: true,
            httpOnly: true,
            overwrite: true,
        },
        allowEmpty: false,
        defer: false,
        reconnectTimeout: 100,
        rolling: false,
        sessionIdStore: {
            get() {
              return this.cookies.get('koa.sid', { signed: true });
            },

            set(sid, session) {
              this.cookies.set('koa.sid', sid, session.cookie);
            },

            reset() {
              this.cookies.set('koa.sid', null, { expires: new Date(0) });
            }
        },
        genSid(length: number) {
          if (this.hostname === 'foo' && length > 20) {
            return 'aSid';
          } else {
            return Promise.resolve('bSid');
          }
        },
        errorHandler: (error: Error, type: string, ctx: Koa.Context) => {},
        valid: (ctx: Koa.Context, session: Session) => true,
        beforeSave: (ctx: Koa.Context, session: Session) => {},
    }),
);

// Test module augmentation
declare module 'koa-generic-session' {
  interface Session {
    foo: 'bar';
  }
}

app.use((context: Koa.Context) => {
    if (!context.session) {
        return;
    }

    if (!context.sessionId) {
        return;
    }

    context.regenerateSession();
    context.sessionSave = true;
    context.session.cookie;
    context.session.foo = 'bar';
    context.session = null;
});

app.listen(80);

import express = require('express');
import session = require('express-session');
import { SessionData, Store, MemoryStore, Session } from 'express-session';

const app = express();

app.use(
    session({
        secret: 'keyboard cat',
        cookie: { secure: true },
    }),
);
app.use(
    session({
        secret: 'keyboard cat',
        cookie: { secure: 'auto' },
    }),
);
app.use(
    session({
        secret: 'keyboard cat',
        cookie: { sameSite: 'none' },
    }),
);
app.use(
    session({
        secret: 'keyboard cat',
        cookie: { sameSite: 'lax' },
    }),
);
app.use(
    session({
        secret: 'keyboard cat',
        cookie: { sameSite: 'strict' },
    }),
);
app.use(
    session({
        secret: 'keyboard cat',
        name: 'connect.sid',
        store: new MemoryStore(),
        cookie: { path: '/', httpOnly: true, secure: false, sameSite: true },
        genid: (req: express.Request): string => '',
        rolling: false,
        resave: true,
        proxy: true,
        saveUninitialized: true,
    }),
);
app.use(
    session({
        secret: 'keyboard cat',
        unset: 'destroy',
    }),
);
app.use(
    session({
        secret: 'keyboard cat',
        unset: 'keep',
    }),
);

// Example of adding additional properties to SessionData using declaration merging
declare module 'express-session' {
    interface SessionData {
        views: number;
    }
}

app.use((req, res, next) => {
    const sess = req.session;
    if (!!sess.views) {
        sess.views++;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<p>views: ${sess.views}</p>`);
        res.write(`<p>expires in: ${(sess.cookie.maxAge || 0) / 1000}s</p>`);
        res.end();
    } else {
        sess.views = 1;
        res.end('welcome to the session demo. refresh!');
    }
});

// Custom Session Store

class MyStore extends Store {
    private sessions: { [sid: string]: string | undefined };

    constructor() {
        super();
        this.sessions = {};
    }

    get = (sid: string, callback: (err: any, session?: SessionData | null) => void): void => {
        const sessionString: string | undefined = this.sessions[sid];
        const sessionData: SessionData | null = sessionString ? JSON.parse(sessionString) : null;
        callback(null, sessionData);
    }

    set = (sid: string, session: SessionData, callback?: (err?: any) => void): void => {
        this.sessions[sid] = JSON.stringify(session);
        if (callback) callback();
    }

    touch = (sid: string, session: SessionData, callback?: (err?: any) => void) => {
        const currentSession = this.sessions[sid];
        const sessionData: SessionData | null = currentSession ? JSON.parse(currentSession) : null;

        if (sessionData) {
            // Real case could compare cookie timestamps to determine if touch to Store backend is needed
            sessionData.cookie = session.cookie;
            this.sessions[sid] = JSON.stringify(sessionData);
        }
        if (callback) callback();
    }

    destroy = (sid: string, callback?: (err?: any) => void): void => {
        this.sessions[sid] = undefined;
        this.sessions = JSON.parse(JSON.stringify(this.sessions));
        if (callback) callback();
    }
}

app.use(
    session({
        secret: 'keyboard cat',
        store: new MyStore(),
    }),
);

app.use((req, res, next) => {
    let sess = req.session;
    const store = req.sessionStore;
    store.get(sess.id, (err, session) => { });
    store.set(sess.id, { views: 0, cookie: sess.cookie }, (err) => { });
    sess = store.createSession(req, { views: 0, cookie: sess.cookie });
    store.destroy(sess.id, (err) => { });
    store.generate(req);
    store.regenerate(req, (err) => { });
    res.end();
});

import express = require('express');
import session = require('express-session');

const app = express();

app.use(session({
  secret: 'keyboard cat',
  cookie: { secure: 'auto' }
}));
app.use(session({
  secret: 'keyboard cat',
  name: 'connect.sid',
  store: new session.MemoryStore(),
  cookie: { path: '/', httpOnly: true, secure: false, sameSite: true },
  genid: (req: express.Request): string => '',
  rolling: false,
  resave: true,
  proxy: true,
  saveUninitialized: true,
  unset: 'keep'
}));

interface MySession extends Express.Session {
  views: number;
}

app.use((req, res, next) => {
  const sess = req.session as MySession;
  if (sess.views) {
    sess.views++;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<p>views: ${sess.views}</p>`);
    res.write(`<p>expires in: ${((sess.cookie.maxAge || 0) / 1000)}s</p>`);
    res.end();
  } else {
    sess.views = 1;
    res.end('welcome to the session demo. refresh!');
  }
});

// Custom Session Store

class MyStore extends session.Store {
  private sessions: { [sid: string]: string | undefined };

  constructor() {
    super();
    this.sessions = {};
  }

  get = (sid: string, callback: (err: any, session?: Express.SessionData | null) => void): void => {
    const sessionString: string | undefined = this.sessions[sid];
    const sessionData: Express.SessionData | null = sessionString ? JSON.parse(sessionString) : null;
    callback(null, sessionData);
  }

  set = (sid: string, session: Express.SessionData, callback?: (err?: any) => void): void => {
    this.sessions[sid] = JSON.stringify(session);
    if (callback) callback();
  }

  destroy = (sid: string, callback?: (err?: any) => void): void => {
    this.sessions[sid] = undefined;
    this.sessions = JSON.parse(JSON.stringify(this.sessions));
    if (callback) callback();
  }
}

app.use(session({
  secret: 'keyboard cat',
  store: new MyStore()
}));

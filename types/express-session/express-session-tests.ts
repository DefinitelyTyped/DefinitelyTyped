import express = require('express');
import session, { MemoryStore, Store, Session } from 'express-session';

const app = express();

app.use(session({
  secret: 'keyboard cat',
  cookie: { secure: true }
}));
app.use(session({
  secret: 'keyboard cat',
  cookie: { secure: 'auto' }
}));
app.use(session({
  secret: 'keyboard cat',
  cookie: { sameSite: 'none' }
}));
app.use(session({
  secret: 'keyboard cat',
  cookie: { sameSite: 'lax' }
}));
app.use(session({
  secret: 'keyboard cat',
  cookie: { sameSite: 'strict' }
}));
app.use(session({
  secret: 'keyboard cat',
  name: 'connect.sid',
  store: new MemoryStore(),
  cookie: { path: '/', httpOnly: true, secure: false, sameSite: true },
  genid: (req: express.Request): string => '',
  rolling: false,
  resave: true,
  proxy: true,
  saveUninitialized: true,
  unset: 'keep'
}));

// Custom session data using declaration merging
declare global {
  interface SessionData {
    views: number;
  }
}

app.use((req, res, next) => {
  if (req.session.views) {
    req.session.views++;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<p>views: ${req.session.views}</p>`);
    res.write(`<p>expires in: ${((req.session.cookie.maxAge || 0) / 1000)}s</p>`);
    res.end();
  } else {
    req.session.views = 1;
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

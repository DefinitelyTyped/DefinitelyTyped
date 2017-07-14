import express = require('express');
import session = require('express-session');

let app = express();

app.use(session({
  secret: 'keyboard cat',
  cookie: { secure: 'auto' }
}));
app.use(session({
  secret: 'keyboard cat',
  name: 'connect.sid',
  store: new session.MemoryStore(),
  cookie: { path: '/', httpOnly: true, secure: false, maxAge: null },
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
  let sess = req.session as MySession;
  if (sess.views) {
    sess.views++;
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>views: ' + sess.views + '</p>');
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
    res.end();
  } else {
    sess.views = 1;
    res.end('welcome to the session demo. refresh!');
  }
});

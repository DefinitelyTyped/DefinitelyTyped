

import express = require('express');
import cookieSession = require('cookie-session');

var app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use(function (req, res, next) {
  // Update views
  req.session['views'] = (req.session['views'] || 0) + 1

  // Write response
  res.end(req.session['views'] + ' views')
})

app.listen(3000);


var app2 = express()

app2.set('trust proxy', 1) // trust first proxy

app2.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

// This allows you to set req.session.maxAge to let certain sessions
// have a different value than the default.
app2.use(function (req, res, next) {
  req.sessionOptions.maxAge = req.session['maxAge'] || req.sessionOptions.maxAge
});
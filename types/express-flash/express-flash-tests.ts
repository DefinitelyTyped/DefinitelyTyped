import express = require('express');
import flash = require('express-flash');

const app = express();

app.use(flash());

app.use((req) => {
  req.flash();
  req.flash('message');
  req.flash('event', 'message');
});

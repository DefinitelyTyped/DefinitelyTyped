import express = require('express');
import flash = require('express-flash');

const app = express();

app.use(flash());

app.use(req => {
    req.flash();
    req.flash('message');
    req.flash('event', 'message');
});

app.get('/add-messages', (req, res) => {
    req.flash('info', 'Flash Message 1 Added');
    req.flash('info', 'Flash Message 2 Added');
    req.flash('info', 'Flash Message 3 Added');
    res.redirect('/');
});

app.get('/add-and-show-message', (req, res) => {
    req.flash('info', 'Flash Message Added');
    req.flash('info', ['Welcome', 'Please Enjoy']);
    res.render('index', {
        title: 'Add and Show Message',
    });
});

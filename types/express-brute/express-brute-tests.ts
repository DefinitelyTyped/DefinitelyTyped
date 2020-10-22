import express = require('express');
import ExpressBrute = require('express-brute');

var store = new ExpressBrute.MemoryStore();
store = new ExpressBrute.MemoryStore({ prefix: 'prefix' });
store.set('key', 'value', 0, (error: any) => {});
store.get('key', (error: any, data: Object) => {});
store.reset('key', (error: any) => {});

var app = express();
var bruteforce = new ExpressBrute(store);
app.post('/auth', bruteforce.prevent, (req, res, next) => {
    res.send('Success!');
});

app.get(
    '/expensive',
    bruteforce.getMiddleware({
        key(req, res, next) {
            // prevent too many attempts for the same username
            next(req.body.username);
        },
        failCallback: (req, res, next, nextValidRequestDate) => {
            res.status(429).send(`Try again at ${nextValidRequestDate.toDateString()}`);
        },
    }),
    (req, res, next) => {
        res.send('Success!');
    },
);

app.post('/expensive', bruteforce.getMiddleware({ failCallback: ExpressBrute.FailMark }), (req, res, next) => {
    res.send('Success!');
});

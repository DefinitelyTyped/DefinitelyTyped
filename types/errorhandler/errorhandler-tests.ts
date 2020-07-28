import express = require('express');
import errorhandler = require('errorhandler');
import notifier = require('node-notifier');
import errorHandler = require('errorhandler');

const app = express();

const errorNotification: errorhandler.LoggingCallback = (err, str, req) => {
    const title = `Error in ${req.method} ${req.url}`;
    notifier.notify({
        title,
        message: str,
    });
};

if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
}

app.use(errorhandler({ log: true }));
app.use(errorhandler({ log: false }));
app.use(errorhandler({ log: errorNotification }));

app.use(
    errorhandler({
        log: (err, str, req, res) => {
            const { message, name, stack } = err;
            const messageIsStr = message === str;
            const requestWasFresh = req && req.fresh;
            const responseContentType = res && res.contentType;
        },
    }),
);

errorHandler.title; // $ExpectType string

/// <reference path="morgan.d.ts"/>
/**
 * Created by staticfunction on 8/3/14.
 */

import morgan = require('morgan');

// a pre-defined name
morgan('combined')
morgan('common')
morgan('short')
morgan('tiny')

// a format string
morgan(':remote-addr :method :url')

// a custom function
morgan(function (req, res) {
    return req.method + ' ' + req.url
})

morgan('combined', {
    buffer: true,
    immediate: true,
    skip: function (req, res) { return res.statusCode < 400 },
    stream: (str: string) => {
        console.log(str);
    }
});

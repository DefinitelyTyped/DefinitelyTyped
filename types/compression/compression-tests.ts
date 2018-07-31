import express = require('express');
import compress = require('compression');

var app = express();
app.use(compress());
app.use(compress({
    threshold: 512
}));
app.use(compress({
    threshold: 512,
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            // don't compress responses with this request header
            return false;
        }

        // fallback to standard filter function
        return compress.filter(req, res);
    }
}));
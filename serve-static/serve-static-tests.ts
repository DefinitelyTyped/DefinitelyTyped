/// <reference path="serve-static.d.ts" />

import express = require('express');
import serveStatic = require('serve-static');
var app = express();

app.use(serveStatic('/1'));
app.use(serveStatic('/2', { }));
app.use(serveStatic('/3', {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['html'],
    index: true,
    lastModified: true,
    maxAge: 0,
    redirect: true,
    setHeaders: function(res: express.Response, path: string, stat: any) {
        res.setHeader('Server', 'server-static middleware');
    }
}));

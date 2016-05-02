/// <reference path="serve-static.d.ts" />
/// <reference path="../express/express.d.ts" />

import * as express from 'express';
import * as serveStatic from 'serve-static';
var app = express();

app.use(serveStatic('/1'));
app.use(serveStatic('/2', { }));
app.use(serveStatic('/3', {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['html'],
    fallthrough: true,
    index: true,
    lastModified: true,
    maxAge: 0,
    redirect: true,
    setHeaders: function(res: express.Response, path: string, stat: any) {
        res.setHeader('Server', 'server-static middleware');
    }
}));

serveStatic.mime.define({
    'application/babylon': ['babylon'],
    'application/babylonmeshdata': ['babylonmeshdata'],
    'application/fx': ['fx']
});

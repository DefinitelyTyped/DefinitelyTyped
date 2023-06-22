
import express = require('express');
import lessMiddleware = require('less-middleware');
var app = express();

app.use(lessMiddleware('public', {
    cacheFile: undefined,
    debug: false,
    dest: 'dest',
    force: false,
    once: false,
    pathRoot: 'root',
    postprocess: {
        css: function(css, req) { return css; },
    },
    preprocess: {
        less: function(src, req) { return src; },
        path: function(pathname, req) { return pathname; },
        importPaths: function(paths, req) { return paths; }
    },
    render: {
        compress: 'auto',
        yuicompress: false,
        paths: ['foo', 'bar']
    },
    storeCss: function(css, req, next) {},
}));

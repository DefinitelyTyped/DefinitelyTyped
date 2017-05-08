
import express = require('express');
import debug = require('express-debug');
var app = express();

debug(app, {
    depth: 4,
    theme: 'public/css/debug.css',
    extra_panels: [{
        name: 'mypanel',
        template: '/absolute/path/to/mypanel.jade',
        process: function(locals) {
            return { locals: { mypanel: true, }};
        }
    }],
    panels: ['locals', 'request', 'session'],
    path: '/express-debug',
    extra_attrs: '',
    sort: false,
});

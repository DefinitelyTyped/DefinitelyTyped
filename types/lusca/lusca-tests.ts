import express = require('express');
import lusca = require('lusca');

const app = express();

app.use(lusca({
    csrf: true,
    csp: { policy: "referrer no-referrer"},
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    hsts: {maxAge: 31536000, includeSubDomains: true, preload: true},
    xssProtection: true,
    nosniff: true,
    referrerPolicy: 'same-origin'
}));

app.use(lusca.csrf());
app.use(lusca.csp({policy: [{ "img-src": "'self' http:" }, "block-all-mixed-content"], reportOnly: false}));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.p3p('ABCDEF'));
app.use(lusca.hsts({ maxAge: 31536000 }));
app.use(lusca.xssProtection(true));
app.use(lusca.nosniff());
app.use(lusca.referrerPolicy('same-origin'));

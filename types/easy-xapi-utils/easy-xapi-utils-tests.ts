/**
 * Created by karl on 14/07/15.
 */

import express = require('express');
import eXapi = require('easy-xapi');
import eUtils = require('easy-xapi-utils');

eXapi.init({
    jSend: {
        partial: true
    }
});

var xApi = eXapi.create({
    root: __dirname,
    log: {
        name: 'Log',
        level: 'info'
    },
    port: 3000,
    name: 'test',
    mount: function (app) {
        app.get('/', eUtils.isLoggedIn(), function (req, res) {
            res.send('ok');
        });
        app.get('/role', eUtils.isLoggedIn('admin'), function (req, res) {
            res.send('ok');
        });
        app.get('/', eUtils.isLoggedOut(), function (req, res) {
            res.send('ok');
        });
        app.get('/role', eUtils.hasRole('guest'), function (req, res) {
            res.send('ok');
        });
    }
});

xApi.listen();

/**
 * Created by karl on 14/07/15.
 */

/// <reference path="../express/express.d.ts" />
/// <reference path="../easy-xapi/easy-xapi.d.ts" />
/// <reference path="./easy-xapi-utils.d.ts" />

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
        app.get('/role2', eUtils.isLoggedIn('admin', true), function (req, res) {
            res.send('ok');
        });
        app.get('/role3', eUtils.isLoggedIn(['admin', 'user']), function (req, res) {
            res.send('ok');
        });
        app.get('/role4', eUtils.isLoggedIn(['admin', 'user'], true), function (req, res) {
            res.send('ok');
        });
        app.get('/loggedout', eUtils.isLoggedOut(), function (req, res) {
            res.send('ok');
        });
        app.get('/role5', eUtils.hasRole('guest'), function (req, res) {
            res.send('ok');
        });
        app.get('/role6', eUtils.hasRole(['guest', 'user']), function (req, res) {
            res.send('ok');
        });
        app.get('/role6', eUtils.hasRole(['guest', 'user'], true), function (req, res) {
            res.send('ok');
        });
    }
});

xApi.listen();

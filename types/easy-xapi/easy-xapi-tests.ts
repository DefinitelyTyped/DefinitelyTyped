/**
 * Created by karl on 14/07/15.
 */




import express = require('express');
import eXapi = require('easy-xapi');

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
        app.get('/', function (req, res) {
            res.send('ok');
        });
    }
});

xApi.listen();

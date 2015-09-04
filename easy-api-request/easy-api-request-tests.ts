/**
 * Created by karl on 14/07/15.
 */

/// <reference path="../express/express.d.ts" />
/// <reference path="./easy-api-request.d.ts" />

import express = require('express');
import APIRequest = require('easy-api-request');

APIRequest.create({
    name: 'testAPI',
    config: {
        url: 'http://example.com'
    }
});

var app = express();

app.get('/', function (req:any, res:express.Response) {
    var rMaker = <APIRequest.RequestMaker>req.testAPI;
    var r = rMaker();
    r.get('/', function (err, resp) {
        if(err) {
            console.error(err);
        }
        res.json(err || resp);
    });
});

app.get('/', function (req:any, res:express.Response) {
    var rMaker = <APIRequest.RequestMaker>req.testAPI;
    var r = rMaker();
    r.get('/')
        .then(function (resp) {
            res.json(resp);
        })
        .catch(function (err){
            if(err) {
                console.error(err);
            }
            res.json(err);
        });
});

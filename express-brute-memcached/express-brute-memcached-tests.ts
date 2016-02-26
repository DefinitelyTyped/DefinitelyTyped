/// <reference path="../express-brute/express-brute.d.ts"/>
/// <reference path="../mongodb/mongodb.d.ts"/>
/// <reference path="express-brute-memcached.d.ts"/>

import express = require("express");
import ExpressBrute = require("express-brute");
import MemcachedStore = require("express-brute-memcached");

var app = express();
var store = new MemcachedStore("127.0.0.1");
var bruteforce = new ExpressBrute(store);

app.post('/auth',
    bruteforce.prevent, // error 403 if we hit this route too often
    function (req, res, next) {
        res.send('Success!');
    }
);

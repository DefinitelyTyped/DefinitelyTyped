import express = require("express");
import ExpressBrute = require("express-brute");
import MemcachedStore from "express-brute-memcached";

var app = express();
var store = new MemcachedStore("127.0.0.1");
var bruteforce = new ExpressBrute(store);

app.post('/auth',
    bruteforce.prevent, // error 403 if we hit this route too often
    function (req, res, next) {
        res.send('Success!');
    }
);

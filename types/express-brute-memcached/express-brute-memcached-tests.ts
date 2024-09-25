import express = require("express");
import ExpressBrute = require("express-brute");
import MemcachedStore from "express-brute-memcached";

var app = express();
var store = new MemcachedStore("127.0.0.1");
var bruteforce = new ExpressBrute(store);

app.post(
    "/auth",
    (req, res, next) => void bruteforce.prevent(req, res, next), // error 403 if we hit this route too often
    function(req, res, next) {
        res.send("Success!");
    },
);

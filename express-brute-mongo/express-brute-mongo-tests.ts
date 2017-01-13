import express = require("express");
import ExpressBrute = require("express-brute");
import MongoStore = require("express-brute-mongo");
import mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var store = new MongoStore(ready => {
    MongoClient.connect("mongodb://127.0.0.1:27017/test", (err, db) => {
        if (err) {
            throw err;
        }

        var collection = db.collection("bruteforce-store");
        ready(collection);
    });
});

var app = express();
var bruteforce = new ExpressBrute(store);

app.post("/auth", bruteforce.prevent, (req, res, next) => {
    res.send("Success!");
});

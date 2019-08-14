import express = require("express");
import ExpressBrute = require("express-brute");
import MongoStore = require("express-brute-mongo");
import mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const store = new MongoStore(ready => {
    MongoClient.connect("mongodb://127.0.0.1:27017/test", (err, db) => {
        if (err) {
            throw err;
        }

        const collection = db.collection("bruteforce-store");
        ready(collection);
    });
});

const app = express();
const bruteforce = new ExpressBrute(store);

app.post("/auth", bruteforce.prevent, (req, res, next) => {
    res.send("Success!");
});

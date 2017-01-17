import express = require("express");
import ExpressBrute = require("express-brute");

var store = new ExpressBrute.MemoryStore();
store = new ExpressBrute.MemoryStore({ prefix: "prefix" });
store.set("key", "value", 0, (error: any) => { });
store.get("key", (error: any, data: Object) => { });
store.reset("key", (error: any) => { });

var app = express();
var bruteforce = new ExpressBrute(store);
app.post("/auth", bruteforce.prevent, (req, res, next) => {
    res.send("Success!");
});

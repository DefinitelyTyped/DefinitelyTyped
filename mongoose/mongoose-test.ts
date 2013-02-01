/// <reference path="mongoose.d.ts" />

import mongoose = module("mongoose");

var mongoose2 = mongoose.Mongoose();

mongoose.connect('localhost', 'test').disconnect(()=>{});
mongoose.disconnect();

mongoose.set("key", "value").set("key", "value");
mongoose.get("key");

mongoose.model("model");
//@todo add tests for other model creation signatures

mongoose.plugin(()=>{}).plugin(()=>{}, {});
mongoose.exports.get("key");

//Connection Interface
var conn = new mongoose.Connection(mongoose2);
conn.open("test").open("test2", "db", 3, {}, ()=>{});
conn.openSet("test").openSet("test2", "db", {t: 3}, ()=>{});
conn.close().close(()=>{});
conn.collection("test");
conn.collection("test", {});
conn.model("test");
conn.setProfiling("0", 50);
conn.db;
conn.collections.test;
conn.readyState;



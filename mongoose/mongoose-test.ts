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

//Document Interface

//Model Interface
var model = mongoose.model("model");
model.save().save(()=>{});
model.increment().increment();
model.remove().remove(()=>{});
model.model("test").save();
model.$where('this.comments.length &gt; 5');
model.$where(()=>{});
model.ensureIndexes();
model.ensureIndexes(()=>{});
model.remove({title: ""});
model.remove({title: ""}, ()=>{});
model.find({ name: 'john', age: { $gte: 18 }});
model.find({ name: /john/i }, null, { skip: 10 }, function (err, docs) {});
model.findById("", 'name', { lean: true }, function (err, doc) {});
model.findById("", function (err, adventure) {});
model.findOne({ type: 'iphone' }, 'name', { lean: true }, ()=>{});
model.count({ type: 'jungle' }, function (err, count) {});
model.count({ type: 'test'});
model.distinct("test");
model.distinct("test", {}, ()=>{});
model.where('test');
model.where('test', {});
model.findOneAndUpdate({ name: 'test'}, { name: 'jason borne' }, {}, ()=>{});
model.findByIdAndUpdate("", { name: 'jason borne' }, {}, ()=>{});
model.findOneAndRemove({val: "test"});
model.findOneAndRemove({val: "tst"}, {}, ()=>{});
model.findByIdAndRemove("");
model.findByIdAndRemove("", {}, ()=>{});
model.create({ type: 'test' }, { type: 'test2' }, ()=>{});
model.create([{ type: 'test' }, { type: 'test2' }], ()=>{});
model.update({test: "test"}, {test: "tst2"});
model.update({test: "test"}, {test: "tst2"}, {safe: true, upsert: false}, ()=>{});
model.mapReduce({}, ()=>{});
model.aggregate([]);
model.aggregate([], {}, ()=>{});
model.base.get("key");
model.schema;
model.collection;
model.db;

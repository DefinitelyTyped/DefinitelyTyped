/// <reference path="redis-scripto.d.ts" />
/// <reference path="../redis/redis.d.ts" />

import redis = require("redis");
import Scripto = require("redis-scripto");

var client:redis.RedisClient = redis.createClient();
var scriptManager: Scripto = new Scripto(client);
var scripts = {
  "script-one": "return 1000"
};

scriptManager.load(scripts);
scriptManager.loadFromFile("test", "./luascripts/test.lua");
scriptManager.loadFromDir("./luascripts");



scriptManager.run("test", ["test:key:1", "test:key:2"], [1, "2"], function (err: Error, result:any): void {
  
});

scriptManager.eval("test", ["test:key:1", "test:key:2"], [1, "2"], function (err: Error, result: any): void {

});

scriptManager.evalSha("test", ["test:key:1", "test:key:2"], [1, "2"], function (err: Error, result: any): void {

});



scriptManager.run("test", ["test:key:1", "test:key:2"], [1, "2"], function (err: Error): void {

});

scriptManager.eval("test", ["test:key:1", "test:key:2"], [1, "2"], function (err: Error): void {

});

scriptManager.evalSha("test", ["test:key:1", "test:key:2"], [1, "2"], function (err: Error): void {

});
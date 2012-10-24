/// <reference path="../Definitions/node_redis-0.8.d.ts" />

import redis = module('redis');

function test1() { 
    var client = redis.createClient();

    client.on("error", function (err) {
        console.log("Error " + err);
    });

    client.set("string key", "string val", redis.print);
    client.hset("hash key", "hashtest 1", "some value", redis.print);
    client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
    client.hkeys("hash key", (err, replies) => {
        console.log(replies.length + " replies:");
        replies.forEach((reply, i) => {
            console.log("    " + i + ": " + reply);
        });
        client.quit();
    });

    client.mset(["test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) { });
    client.mset("test keys 1", "test val 1", "test keys 2", "test val 2", function (err, res) { });
    client.set("some key", "some val");
    client.set(["some other key", "some val"]);
    client.get("missingkey", (err, reply) => { });
}

function test2() { {
    var client = redis.createClient(null, null, {
        detect_buffers: true
    });

    client.set("foo_rand000000000000", "OK");
    client.get("foo_rand000000000000", (err, reply) => {
        console.log(reply.toString());
    });
    client.get(new Buffer("foo_rand000000000000"), (err, reply) => {
        console.log(reply.toString());
    });
    client.end();
}

function test3() {
    var client = redis.createClient();

    client.set("foo_rand000000000000", "some fantastic value");
    client.get("foo_rand000000000000", (err, reply) => {
        console.log(reply.toString());
    });
    client.end();

    client.hmset("hosts", "mjr", "1", "another", "23", "home", "1234");
    client.hgetall("hosts", function (err, obj) {
        console.dir(obj);
    });

    client.HMSET(key2, {
        "0123456789": "abcdefghij", // NOTE: the key and value must both be strings
        "some manner of key": "a type of value"
    });

    client.HMSET(key1, "0123456789", "abcdefghij", "some manner of key", "a type of value");
}

function test4() {
    var client1 = redis.createClient(), client2 = redis.createClient(),
        msg_count = 0;

    client1.on("subscribe", function (channel, count) {
        client2.publish("a nice channel", "I am sending a message.");
        client2.publish("a nice channel", "I am sending a second message.");
        client2.publish("a nice channel", "I am sending my last message.");
    });

    client1.on("message", function (channel, message) {
        console.log("client1 channel " +channel + ": " +message);
        msg_count += 1;
        if(msg_count === 3) {
            client1.unsubscribe();
            client1.end();
            client2.end();
    }});

    client1.incr("did a thing");
    client1.subscribe("a nice channel");
}

function test5() {
    var client = redis.createClient(), set_size = 20;

    client.sadd("bigset", "a member");
    client.sadd("bigset", "another member");

    while (set_size > 0) {
        client.sadd("bigset", "member " + set_size);
        set_size -= 1;
    }

    client.multi()
        .scard("bigset")
        .smembers("bigset")
        .keys("*", function (err, replies) {
            client.mget(replies, redis.print);
        })
        .dbsize()
        .exec(function (err, replies) {
            console.log("MULTI got " + replies.length + " replies");
            replies.forEach(function (reply, index) {
                console.log("Reply " + index + ": " + reply.toString());
            });
        }
    } );
}

function test6() {
    var client = redis.createClient(), multi;

    multi = client.multi();
    multi.incr("incr thing", redis.print);
    multi.incr("incr other thing", redis.print);

    client.mset("incr thing", 100, "incr other thing", 1, redis.print);

    multi.exec(function (err, replies) {
        console.log(replies); 
    });

    multi.exec(function (err, replies) {
        console.log(replies); 
        client.quit();
    });
}

function test7() {
  var client = redis.createClient(), multi;

    client.multi([
        ["mget", "multifoo", "multibar", redis.print],
        ["incr", "multifoo"],
        ["incr", "multibar"]
    ]).exec(function (err, replies) {
        console.log(replies);
    });
}

function test8() {
    var util = require("util");

    client.monitor(function (err, res) {
        console.log("Entering monitoring mode.");
    });

    client.on("monitor", function (time, args) {
        console.log(time + ": " +util.inspect(args));
    });
}

function test9() {
    var client = redis.createClient();

    client.on("connect", function () {
        client.set("foo_rand000000000000", "some fantastic value", redis.print);
        client.get("foo_rand000000000000", redis.print);
    });
}

function test10() {
    var client = redis.createClient();

    redis.debug_mode = true;

    client.on("connect", function () {
        client.set("foo_rand000000000000", "some fantastic value");
    });

    var args = ['myzset', 1, 'one', 2, 'two', 3, 'three', 99, 'ninety-nine'];
    client.zadd(args, function (err, response) {
        if (err) throw err;
        console.log('added ' + response + ' items.');

        var args1 = ['myzset', '+inf', '-inf'];
        client.zrevrangebyscore(args1, function (err, response) {
            if (err) throw err;
            console.log('example1', response);
        });

        var max = 3, min = 1, offset = 1, count = 2;
        var args2 = ['myzset', max, min, 'WITHSCORES', 'LIMIT', offset, count];
        client.zrevrangebyscore(args2, function (err, response) {
            if (err) throw err;
            console.log('example2', response);
        });
    });
}
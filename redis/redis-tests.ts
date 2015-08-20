/// <reference path="redis.d.ts" />

import redis = require('redis');

var value: any;
var valueArr: any[];
var commandArr: any[][];
var num: number;
var str: string;
var bool: boolean;
var err: Error;
var args: any[];
var options: redis.ClientOpts;
var client: redis.RedisClient;
var info: redis.ServerInfo;
var resCallback: (err: Error, res: any) => void;
var numCallback: (err: Error, res: number) => void;
var strCallback: (err: Error, res: string) => void;
var messageHandler: (channel: string, message: any) => void;

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

bool = redis.debug_mode;
redis.print(err, value);

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

client = redis.createClient(num, str, options);

bool = client.connected;
num = client.retry_delay;
num = client.retry_backoff;
valueArr = client.command_queue;
valueArr = client.offline_queue;
info = client.server_info;

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

client.end();

// Connection (http://redis.io/commands#connection)
client.auth(str, resCallback);
client.ping(numCallback);
client.unref();

// Strings (http://redis.io/commands#strings)
client.append(str, str, numCallback);
client.bitcount(str, numCallback);
client.bitcount(str, num, num, numCallback);
client.set(str, str, strCallback);
client.get(str, strCallback);
client.exists(str, numCallback);

// Event handlers
client.on(str, messageHandler);
client.once(str, messageHandler);

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

// some of the bulk methods
client.get(args);
client.get(args, resCallback);
client.set(args);
client.set(args, resCallback);
client.mset(args, resCallback);

client.incr(str, resCallback);

// Friendlier hash commands
client.hgetall(str, resCallback);
client.hmset(str, value, resCallback);
client.hmset(str, str, str, str, str, resCallback);

// Publish / Subscribe
client.publish(str, value);
client.subscribe(str);

// Multi
client.multi()
    .scard(str)
    .smembers(str)
    .keys('*', resCallback)
    .dbsize()
    .exec(resCallback);

client.multi(commandArr).exec();

// Monitor mode
client.monitor(resCallback);
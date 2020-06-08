import asyncRedis = require("async-redis");

// $ExpectType Promisified<RedisClient>
const client = asyncRedis.createClient();

// $ExpectType Promisified<RedisClient>
asyncRedis.createClient(8080);

// $ExpectType Promisified<RedisClient>
asyncRedis.createClient(8080, "localhost");

// $ExpectType Promisified<RedisClient>
asyncRedis.createClient("./awesome-redis.sock", {
  host: "localhost",
  port: 8080,
  path: "/",
});

// $ExpectType Promisified<RedisClient>
asyncRedis.createClient({
  host: "localhost",
  port: 8080,
  path: "/",
});

// $ExpectType Multi
client.multi();

// $ExpectType Multi
client.batch();

// $ExpectType (string | symbol)[]
client.eventNames();

// $ExpectType RedisClient
client.on("event", (data) => data);

// $ExpectType boolean
client.connected;

// promisified

// $ExpectType Promise<boolean>
client.append("some", "value");

// $ExpectType Promise<boolean>
client.hdel("some", "value");

// $ExpectType Promise<boolean>
client.bitcount("key", 0, 1000);

// $ExpectType Promise<boolean>
client.discard((err, data) => data);

// $ExpectType Promise<boolean>
client.brpoplpush("some", "value", 1000, (err, data) => data);

// overloaded method

// $ExpectError
client.set();

// $ExpectError
client.set("arg1");

// $ExpectError
client.set("arg1", false);

// $ExpectType Promise<boolean>
client.set("arg1", "arg2");

// $ExpectType Promise<boolean>
client.set("key", "value", "flag");

// $ExpectType Promise<boolean>
client.set("key", "value", "flag", (err, reply) => {});

// $ExpectType Promise<boolean>
client.set("key", "value", "arg3", (err, reply) => {});

// $ExpectType Promise<boolean>
client.set("key", "value", "mode", 1000, (err, reply) => {});

// $ExpectType Promise<boolean>
client.set("key", "value", "mode", 1000, "flag");

// $ExpectType Promise<boolean>
client.set("key", "value", "mode", 1000, "flag", (err, reply) => {});

// $ExpectError
client.set("key", "value", "mode", 1000, "flag", 100);

// $ExpectError
client.set("key", "value", "mode", 1000, (err, reply) => {}, "flag");

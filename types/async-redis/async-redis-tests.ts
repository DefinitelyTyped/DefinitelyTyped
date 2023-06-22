import asyncRedis = require("async-redis");

// $ExpectType AsyncRedisClient
const client = asyncRedis.createClient();

// $ExpectType AsyncRedisClient
asyncRedis.createClient(8080);

// $ExpectType AsyncRedisClient
asyncRedis.createClient(8080, "localhost");

// $ExpectType AsyncRedisClient
asyncRedis.createClient("./awesome-redis.sock", {
  host: "localhost",
  port: 8080,
  path: "/",
});

// $ExpectType AsyncRedisClient
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

// $ExpectType Promise<string | null>
client.get("key");

// $ExpectType Promise<"OK">
client.set("key", "value");

// $ExpectType Promise<string>
client.ping();

// $ExpectType Promise<string>
client.ping("asdf");

// $ExpectType Promise<number>
client.del("asdf");

// $ExpectType Promise<"asdf">
client.echo("asdf");

// $ExpectType Promise<number>
client.append("some", "value");

// $ExpectType Promise<number>
client.hdel("some", "value");

// $ExpectType Promise<number>
client.bitcount("key", 0, 1000);

// $ExpectType Promise<"OK">
client.discard();

// $ExpectType Promise<string | null>
client.brpoplpush("some", "value", 1000);

// overloaded method

// @ts-expect-error
client.set();

// @ts-expect-error
client.set("arg1");

// @ts-expect-error
client.set("arg1", false);

// $ExpectType Promise<"OK">
client.set("arg1", "arg2");

// $ExpectType Promise<"OK">
client.set("key", "value", "flag");

// $ExpectType Promise<"OK">
client.set("key", "value", "flag");

// $ExpectType Promise<"OK">
client.set("key", "value", "arg3");

// $ExpectType Promise<"OK" | undefined>
client.set("key", "value", "mode", 1000);

// $ExpectType Promise<"OK" | undefined>
client.set("key", "value", "mode", 1000, "flag");

// $ExpectType Promise<"OK" | undefined>
client.set("key", "value", "mode", 1000, "flag");

// @ts-expect-error
client.set("key", "value", "mode", 1000, "flag", 100);

// @ts-expect-error
client.set("key", "value", "mode", 1000, (err, reply) => {}, "flag");

// $ExpectType Promise<number>
client.bitpos("key", 5, 7);

// $ExpectType Promise<number>
client.bitpos("key", 5, 7, 14);

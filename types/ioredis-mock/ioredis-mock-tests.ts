import IORedis, { RedisOptions } from "ioredis-mock";

// see https://www.npmjs.com/package/ioredis-mock for MockRedisInput input
// see https://github.com/luin/ioredis/tree/master/examples

const emptyOption = new IORedis();

const redis = new IORedis({
    data: {
        user_next: "3",
        emails: {
            "clark@daily.planet": "1",
            "bruce@wayne.enterprises": "2",
        },
        "user:1": { id: "1", username: "superman", email: "clark@daily.planet" },
        "user:2": { id: "2", username: "batman", email: "bruce@wayne.enterprises" },
    },
    port: 1234,
    host: process.env.redisEndpoint,
    username: process.env.redisUsername,
    password: process.env.redisPW,
});

// ioredis supports all Redis commands:
redis.set("foo", "bar"); // returns promise which resolves to string, "OK"

// the format is: redis[SOME_REDIS_COMMAND_IN_LOWERCASE](ARGUMENTS_ARE_JOINED_INTO_COMMAND_STRING)
// the js: ` redis.set("mykey", "Hello") ` is equivalent to the cli: ` redis> SET mykey "Hello" `

// ioredis supports the node.js callback style
redis.get("foo", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result); // Promise resolves to "bar"
    }
});

// Or ioredis returns a promise if the last argument isn't a function
redis.get("foo").then(result => {
    console.log(result);
});

redis.del("foo");

// Arguments to commands are flattened, so the following are the same:
redis.sadd("set", 1, 3, 5, 7);
redis.sadd("set", [1, 3, 5, 7]);
redis.spop("set"); // Promise resolves to "5" or another item in the set

// Most responses are strings, or arrays of strings
redis.zadd("sortedSet", 1, "one", 2, "dos", 4, "quatro", 3, "three");
// Promise resolves to ["one", "1", "dos", "2", "three", "3"] as if the command was ` redis> ZRANGE sortedSet 0 2 WITHSCORES `
redis.zrange("sortedSet", 0, 2, "WITHSCORES").then(res => console.log(res));

// Some responses have transformers to JS values
redis.hset("myhash", "field1", "Hello");
// Promise resolves to Object {field1: "Hello"} rather than a string, or array of strings
redis.hgetall("myhash").then(res => console.log(res));

// All arguments are passed directly to the redis server:
redis.set("key", 100, "EX", 10); // set's key to value 100 and expires it after 10 seconds

const options: RedisOptions = {};
console.log(options.port);

const f = async () => {
    const channel = "ioredis_channel";
    // specify the channel. you want to know how many messages
    // have been written in this channel
    const messageCount1 = await redis.xlen(channel);
    console.log(`current message count in channel ${channel} is ${messageCount1} messages`);

    // specify channel to write a message into,
    // messages are key value
    const myMessage = "hello world";
    await redis.xadd(channel, "*", myMessage, "message");

    const messageCount2 = await redis.xlen(channel);
    console.log(`current message count in channel ${channel} is ${messageCount2} messages`);
    // now you can see we have one new message

    // use xread to read all messages in channel
    const messages1 = await redis.xread("STREAMS", channel, 0);
    const messages2 = messages1![0][1];
    console.log(`reading messages from channel ${channel}, found ${messages2.length} messages`);
    for (const msg1 of messages2) {
        const msg2 = msg1[1][0].toString();
        console.log("reading message:", msg2);
    }
    process.exit(0);
};
f();

const redisCluster = new IORedis.Cluster([{ host: process.env.redisEndpoint, port: 1234 }], {
    redisOptions: {
        data: {
            user_next: "3",
            emails: {
                "clark@daily.planet": "1",
                "bruce@wayne.enterprises": "2",
            },
            "user:1": { id: "1", username: "superman", email: "clark@daily.planet" },
            "user:2": { id: "2", username: "batman", email: "bruce@wayne.enterprises" },
        },
        username: process.env.redisUsername,
        password: process.env.redisPW,
    },
});

// ioredis cluster supports all Redis commands as well:
redisCluster.set("foo", "bar");

// ioredis supports the node.js callback style
redisCluster.get("foo", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result); // Promise resolves to "bar"
    }
});

// ioredis cluster supports additional commands
redisCluster.refreshSlotsCache(err => {
    if (err) {
        console.error(err);
    }
});

// which either supports node.js callback style
redisCluster.asking((err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
// or promises
redisCluster.asking().then(console.log);

redisCluster.readwrite((err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

redisCluster.readwrite().then(console.log);

redisCluster.readonly((err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

redisCluster.readonly().then(console.log);

// Most cluster sub-commands are abstracted into the cluster function
redisCluster.cluster("FAILOVER", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

redisCluster.cluster("FAILOVER", "FORCE", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

redisCluster.cluster("FAILOVER", "TAKEOVER", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

redisCluster.cluster("ADDSLOTSRANGE", "100", 101, "102", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

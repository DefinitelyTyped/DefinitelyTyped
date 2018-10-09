import NRP = require("node-redis-pubsub");
import { RedisClient } from "redis";

const options = {
    port: 6379
};
const nrp: NRP.NodeRedisPubSub = NRP(options);

nrp.on<string>("message:*", (data, channel) => {});

nrp.subscribe<string>("message:*", (data, channel) => {});

const redis: RedisClient = nrp.getRedisClient();

nrp.emit<string>("message:test", "hello world");
nrp.publish<string>("message:test2", "hello world2");

nrp.quit();
nrp.end();

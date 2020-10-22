import NRP = require("node-redis-pubsub");
import { RedisClient } from "redis";

const options = {
    port: 6379
};
const nrp: NRP.NodeRedisPubSub = NRP(options);

nrp.on("message:*", (data, channel) => {});

nrp.subscribe("message:*", (data, channel) => {});

const redis: RedisClient = nrp.getRedisClient();

nrp.emit("message:test", "hello world");
nrp.publish("message:test2", "hello world2");

nrp.quit();
nrp.end();

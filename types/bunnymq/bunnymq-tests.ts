import * as bunnymq from "bunnymq";

// Basic usage
var instance = bunnymq({ host: 'amqp://localhost' });

// Publisher
instance.publish("queue:name", "message");
// Subscriber
instance.subscribe('queue:name', (message: string) => "hello,world");

// RPC Support
instance.publish('queue:name', { message: 'content' }, { routingKey: 'my-routing-key', rpc: true }).then((consumerResponse: string) => { });

// Config
var custom = bunnymq({
    host: 'amqp://localhost',
    prefetch: 5,
    requeue: true,
    timeout: 1000,
    consumerSuffix: "",
    hostname: "",
    transport: new Object()
});

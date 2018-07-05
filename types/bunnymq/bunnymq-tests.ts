import * as bunnymq from "bunnymq";

// Basic usage
const instance = bunnymq({ host: "amqp://localhost" });

// Publisher
instance.publish("queue:name", "message");
instance.producer.produce("queue:name", "message");

// Subscriber
instance.subscribe("queue:name", (message: string) => "response");
instance.consumer.consume("queue:name", (message: string) => "response");

// RPC Support
instance.publish("queue:name", { message: "content" }, { routingKey: "my-routing-key", rpc: true, timeout: 1000 }).then((consumerResponse: string) => "response");
instance.producer.produce("queue:name", { message: "content" }, { rpc: true, routingKey: "my-routing-key", timeout: 1000 });

// Config
const instanceWithCustomOptions = bunnymq({
    host: "amqp://localhost",
    prefetch: 5,
    requeue: true,
    timeout: 1000,
    consumerSuffix: "",
    hostname: "",
    transport: new Object()
});

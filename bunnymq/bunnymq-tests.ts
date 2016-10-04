/// <reference path="bunnymq.d.ts"/>

import * as bunnymq from "bunnymq";

// Basic usage
var instance = bunnymq({ host: 'amqp://localhost' });

// Publisher
instance.producer.produce('queue:name', 'Hello World!');
// Subscriber
instance.consumer.consume('queue:name', message => { });

// RPC Support
instance.producer.produce('queue:name', { message: 'content' }, { rpc: true })
    .then(function (consumerResponse) {
        console.log(consumerResponse);
    });

// Routing keys
instance.producer.produce('queue:name', { message: 'content' }, { routingKey: 'my-routing-key' });

// Config
var custom = bunnymq({
    host: 'amqp://localhost',
    //number of fetched messages at once on the channel
    prefetch: 5,
    //requeue put back message into the broker if consumer crashes/trigger exception
    requeue: true,
    //time between two reconnect (ms)
    timeout: 1000,
    consumerSuffix: '',
    //generate a hostname so we can track this connection on the broker (rabbitmq management plugin)
    hostname: "",
    //the transport to use to debug. if provided, bunnymq will show some logs
    transport: new Object()
});
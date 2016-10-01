/// <reference path="amqplib.d.ts" />

import amqp = require("amqplib");

var msg = "Hello World";

amqp.connect("amqp://localhost")
    .then(connection => {
        return connection.createChannel()
            .tap(channel => channel.checkQueue("myQueue"))
            .then(channel => channel.sendToQueue("myQueue", new Buffer(msg)))
            .ensure(() => connection.close());
    });

amqp.connect("amqp://localhost")
    .then(connection => {
        return connection.createChannel()
            .tap(channel => channel.checkQueue("myQueue"))
            .then(channel => channel.consume("myQueue", newMsg => console.log("New Message: " + newMsg.content.toString())))
            .ensure(() => connection.close());
    });

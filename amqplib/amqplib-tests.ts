/// <reference path="amqplib.d.ts" />

// promise api tests
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

// callback api tests
import amqpcb = require("amqplib/callback_api");

amqpcb.connect("amqp://localhost", (err, connection) => {
    if(!err) {
        connection.createChannel((err, channel) => {
          if (!err) {
              channel.assertQueue("myQueue", (err, ok) => {
                  if(!err) {
                      channel.sendToQueue("myQueue", new Buffer(msg));
                  }
              });
          }
        });
    }
});

amqpcb.connect("amqp://localhost", (err, connection) => {
    if(!err) {
        connection.createChannel((err, channel) => {
          if (!err) {
              channel.assertQueue("myQueue", (err, ok) => {
                  if(!err) {
                      channel.consume("myQueue", newMsg => console.log("New Message: " + newMsg.content.toString()));
                  }
              });
          }
        });
    }
});

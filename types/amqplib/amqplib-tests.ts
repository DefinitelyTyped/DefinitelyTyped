// promise api tests
import amqp = require("amqplib");

const msg = "Hello World";

// test promise api
amqp.connect("amqp://localhost")
    .then(connection => {
        return connection.createChannel()
            .then(channel => {
                channel.connection;
                channel.checkQueue("myQueue");
                return channel;
            })
            .then(channel => channel.sendToQueue("myQueue", new Buffer(msg)))
            .finally(() => connection.close());
    });

amqp.connect("amqp://localhost")
    .then(connection => {
        connection.connection.serverProperties.copyright; // $ExpectType string | undefined
        connection.connection.serverProperties.platform; // $ExpectType string
        connection.connection.serverProperties.information; // $ExpectType string
        connection.connection.serverProperties.host; // $ExpectType string
        connection.connection.serverProperties.product; // $ExpectType string
        connection.connection.serverProperties.version; // $ExpectType string
        connection.connection.serverProperties.customField; // $ExpectType string | undefined

        return connection.createChannel()
            .then(channel => {
                channel.connection;
                channel.checkQueue("myQueue");
                return channel;
            })
            .then(channel => {
                return channel.consume("myQueue", newMsg => {
                    if (newMsg != null) {
                        // test promise api properties
                        if (newMsg.properties.contentType === "application/json") {
                            console.log("New Message: " + newMsg.content.toString());
                        }
                    }
                });
            })
            .finally(() => connection.close());
    });

let amqpAssertExchangeOptions: amqp.Options.AssertExchange;
let anqpAssertExchangeReplies: amqp.Replies.AssertExchange;

// callback api tests
import amqpcb = require("amqplib/callback_api");

amqpcb.connect("amqp://localhost", (err, connection) => {
    if (!err) {
        connection.connection.serverProperties.copyright; // $ExpectType string | undefined
        connection.connection.serverProperties.platform; // $ExpectType string
        connection.connection.serverProperties.information; // $ExpectType string
        connection.connection.serverProperties.host; // $ExpectType string
        connection.connection.serverProperties.product; // $ExpectType string
        connection.connection.serverProperties.version; // $ExpectType string
        connection.connection.serverProperties.customField; // $ExpectType string | undefined

        connection.createChannel((err, channel) => {
            if (!err) {
                channel.connection;
                channel.assertQueue("myQueue", {}, (err, ok) => {
                    if (!err) {
                        channel.sendToQueue("myQueue", new Buffer(msg));
                    }
                });
            }
        });
    }
});

amqpcb.connect("amqp://localhost", (err, connection) => {
    if (!err) {
        connection.createChannel((err, channel) => {
            if (!err) {
                channel.connection;
                channel.assertQueue("myQueue", {}, (err, ok) => {
                    if (!err) {
                        channel.consume("myQueue", newMsg => {
                            if (newMsg != null) {
                                // test callback api properties
                                if (newMsg.properties.contentType === "application/json") {
                                    console.log("New Message: " + newMsg.content.toString());
                                }
                            }
                        });
                    }
                });
            }
        });
    }
});

let amqpcbAssertExchangeOptions: amqpcb.Options.AssertExchange;
let anqpcbAssertExchangeReplies: amqpcb.Replies.AssertExchange;

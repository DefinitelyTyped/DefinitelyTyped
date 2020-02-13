import * as amqp from "amqplib";
import * as amqpConMgr from 'amqp-connection-manager';

// from README.md
const connection = amqpConMgr.connect(['amqp://localhost']);
const channelWrapper: amqpConMgr.ChannelWrapper = connection.createChannel({
    json: true,
    setup: async (channel: amqp.ConfirmChannel): Promise<void> => {
        // `channel` here is a regular amqplib `ConfirmChannel`. Unfortunately its typings make it return a bluebird-specific promise
		// tslint:disable-next-line:await-promise
        await channel.assertQueue('rxQueueName', {durable: true});
    }
});

connection.on("connect", (_arg: { connection: amqp.Connection, url: string }): void => undefined);
connection.on("disconnect", (_arg: { err: Error }): void => undefined);

channelWrapper.on("close", () => undefined);
channelWrapper.on("connect", () => undefined);
channelWrapper.on("error", (_error: Error) => undefined);

channelWrapper.sendToQueue("foo", Buffer.from("bar"))
    .catch((error: Error): void => {
        // nothing
    });

// Test that plain objects are implicitly serialized.
channelWrapper.sendToQueue("foo", {a: 'bar'}).catch(_ => {});

// Checking connection options
amqpConMgr.connect(["foo", "bar"], {
    findServers(callback) {
        callback("x");
    }
});

amqpConMgr.connect(["foo", "bar"], {
    findServers(callback) {
        callback(["x", "y"]);
    }
});

amqpConMgr.connect(["foo", "bar"], {
    findServers() {
        return Promise.resolve("x");
    }
});

amqpConMgr.connect(["foo", "bar"], {
    findServers() {
        return Promise.resolve(["x", "y"]);
    }
});

amqpConMgr.connect(["foo", "bar"], {
    reconnectTimeInSeconds: 123
});

amqpConMgr.connect(["foo", "bar"], {
    heartbeatIntervalInSeconds: 123
});

amqpConMgr.connect(["foo", "bar"], {
    connectionOptions: {
        ca: "some CA",
        servername: "foo.example.com"
    }
});

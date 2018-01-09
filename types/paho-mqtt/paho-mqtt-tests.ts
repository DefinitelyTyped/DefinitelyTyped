let client = new Paho.MQTT.Client("ws://localhost/mqtt", "client-1");
client = new Paho.MQTT.Client("localhost", 80, "client-2");
client = new Paho.MQTT.Client("localhost", 80, "/mqtt", "client-3");

const willMsg = new Paho.MQTT.Message("");

declare var console: any;

client.connect({
    timeout: 10,
    userName: "username",
    password: "pa$$word",
    willMessage: willMsg,
    keepAliveInterval: 10,
    cleanSession: true,
    useSSL: true,
    invocationContext: {
        asdf: true
    },
    onSuccess: (o) => {
        console.log("connected: ", o.invocationContext.asdf);
    },
    mqttVersion: 3,
    onFailure: (e) => {
        console.error("could not connect: ", e.errorMessage);
    },
    hosts: ["localhost", "8.8.8.8"],
    ports: [80, 443],
});

console.log(`created new client on "${client.host}:${client.port}/${client.path}" with id "${client.clientId}"`);

console.log(`connected?: ${client.isConnected()}`);

client.trace = (msg) => {
    console.log(`mqtt trace msg: ${msg}`);
};

client.startTrace();
console.log(`trace log: ${client.getTraceLog()}`);
client.stopTrace();

client.onMessageArrived = (msg) => {
    console.log(`arrived: ${msg.destinationName}: ${msg.payloadString}`);
    console.log(`len: ${msg.payloadBytes.byteLength}, retained: ${msg.retained}, dup: ${msg.duplicate}, qos: ${msg.qos}`);
};

client.onConnectionLost = (err) => {
    console.log(`connection lost (code ${err.errorCode}): ${err.errorMessage}`);
};

client.onMessageDelivered = (msg) => {
    console.log(`delivered: ${msg.destinationName}: ${msg.payloadString}`);
    console.log(`len: ${msg.payloadBytes.byteLength}, retained: ${msg.retained}, dup: ${msg.duplicate}, qos: ${msg.qos}`);
};

client.subscribe("test/topic", {
    qos: 2,
    invocationContext: { asdf: true },
    onSuccess: (o) => {
        console.log(`subscribed: ${o.invocationContext.asdf}`);
    },
    onFailure: (e) => {
        console.error("error subscribing: ", e.errorMessage);
    },
    timeout: 10,
});

client.unsubscribe("test/topic", {
    invocationContext: { asdf: true },
    onSuccess: (o) => {
        console.log(`subscribed: ${o.invocationContext.asdf}`);
    },
    onFailure: (e) => {
        console.error("error subscribing: ", e.errorMessage);
    },
    timeout: 10,
});

client.send("test/topic2", "hello world!", 0, true);
client.send("test/topic3", "hello world 2!", 1);
client.send("test/topic4", new ArrayBuffer(3));
const msg = new Paho.MQTT.Message(new ArrayBuffer(4));
msg.destinationName = "test/topic5";
msg.qos = 2;

client.disconnect();

import { Message, Client, Qos } from "paho-mqtt";
new Message("some string").destinationName = "test/topic6";
const qos: Qos = new Message(new Uint8Array(4)).qos = 0;

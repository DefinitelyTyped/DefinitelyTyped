// Adapted from README

import { create, destroy } from "socketcluster-client";
import { ClientOptions } from "socketcluster-client/lib/scclientsocket";

const secureClientOptions: ClientOptions = {
    hostname: "securedomain.com",
    secure: true,
    port: 443,
    rejectUnauthorized: false
};

let socket = create(secureClientOptions);

socket.on("connect", () => {
    console.log("CONNECTED");
});

// Listen to an event called 'rand' from the server
socket.on("rand", (num: any) => {
    console.log("RANDOM: " + num);
});

const options: ClientOptions = {
    path: "/socketcluster/",
    port: 8000,
    hostname: "127.0.0.1",
    autoConnect: true,
    secure: false,
    rejectUnauthorized: false,
    connectTimeout: 10000, // milliseconds
    ackTimeout: 10000, // milliseconds
    channelPrefix: null,
    disconnectOnUnload: true,
    multiplex: true,
    autoReconnectOptions: {
        initialDelay: 10000, // milliseconds
        randomness: 10000, // milliseconds
        multiplier: 1.5, // decimal
        maxDelay: 60000 // milliseconds
    },
    authEngine: null,
    codecEngine: null,
    subscriptionRetryOptions: {},
    query: {
        yourparam: "hello"
    }
};
socket = create(options);

socket.on("subscribe", channelname => {
    console.log("subscribe:" + channelname);
});

socket.on("subscribeFail", channelname => {
    console.log("subscribeFail:" + channelname);
});

socket.on("unsubscribe", channelname => {
    console.log("unsubscribe:" + channelname);
});

socket.on("subscribeStateChange", data => {
    console.log("subscribeStateChange:" + JSON.stringify(data));
});

socket.on("message", data => {
    console.log("message:" + data);
});

const channels = socket.channels;
const testChannel = channels["test"];
const state = testChannel.getState();

destroy(socket);

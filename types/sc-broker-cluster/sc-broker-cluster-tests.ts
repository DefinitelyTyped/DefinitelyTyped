import { Client } from "sc-broker-cluster";
import { SCServer, SCServerSocket } from "socketcluster-server";
import WebSocket = require("ws");

const client = new Client({
    brokers: [],
    secretKey: "secretKey",
    pubSubBatchDuration: 100,
    connectRetryErrorThreshold: 5
});

client.on("error", err => {});
client.on("warning", err => {});

const exchange = client.exchange();

const scServer = new SCServer();
client.setSCServer(scServer);

client.once("ready", () => {});

const wsSocket = new WebSocket("address");
const socket = new SCServerSocket("id", scServer, wsSocket);
client.subscribeSocket(socket, "channelName", err => {});

client.unsubscribeSocket(socket, "channelName");

const data: any = {};
exchange.publish("channelName", data, err => {});

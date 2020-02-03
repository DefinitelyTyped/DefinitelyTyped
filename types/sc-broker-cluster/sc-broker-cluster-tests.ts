import { Client } from 'sc-broker-cluster';
import { AGServer, AGServerSocket } from 'socketcluster-server';
import WebSocket = require('ws');

// Client tests

const client = new Client({
    brokers: [],
    secretKey: 'secretKey',
    pubSubBatchDuration: 100,
    connectRetryErrorThreshold: 5,
});

client.on('error', err => {});
client.on('warning', err => {});

const agServer = new AGServer();
client.setSCServer(agServer);

client.once('ready', () => {});

client.subscribe('channel');
client.subscribe('channel', () => {});
client.subscribe('channel', err => {});

client.unsubscribe('channel');
client.unsubscribe('channel', () => {});

client.unsubscribeAll();
client.unsubscribeAll(() => {});
client.unsubscribeAll(err => {});
client.unsubscribeAll((err, results) => {});

client.isSubscribed('channel');
client.isSubscribed('channel', true);

const wsSocket = new WebSocket('address');
const socket = new AGServerSocket('id', agServer, wsSocket, 2);
client.subscribeSocket(socket, 'channelName');
client.subscribeSocket(socket, 'channelName', err => {});

client.unsubscribeSocket(socket, 'channelName');
client.unsubscribeSocket(socket, 'channelName', () => {});

client.destroy();
client.destroy(() => {});
client.destroy(err => {});
client.destroy((err, results) => {});

// SCExchange tests

const exchange = client.exchange();

exchange.send({}, null);
exchange.send('dummy', 1, () => {});
exchange.send('dummy', ['1', '2'], err => {});
exchange.send(123, '*', (err, results) => {});

exchange.publish('channelName', {}, err => {});
exchange.publish('channelName', {});

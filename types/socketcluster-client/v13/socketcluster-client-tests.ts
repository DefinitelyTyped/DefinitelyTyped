// Adapted from README

import { create, destroy } from 'socketcluster-client';
import { ClientOptions, SubscribeStateChangeData } from 'socketcluster-client/lib/scclientsocket';
import { SCChannel } from 'sc-channel';
import WebSocket = require('ws');

const secureClientOptions: ClientOptions = {
    hostname: 'securedomain.com',
    secure: true,
    port: 443,
    rejectUnauthorized: false,
};

let socket = create(secureClientOptions);

socket.on('connect', () => {
    console.log('CONNECTED');
});

// Listen to an event called 'rand' from the server
socket.on('rand', (num: any) => {
    console.log('RANDOM: ' + num);
});

const options: ClientOptions = {
    path: '/socketcluster/',
    port: 8000,
    hostname: '127.0.0.1',
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
        maxDelay: 60000, // milliseconds
    },
    authEngine: null,
    codecEngine: null,
    subscriptionRetryOptions: {},
    query: {
        yourparam: 'hello',
    },
};
socket = create(options);

// Check some of the standard events, with normal subscription,
// one-time subscription and unsubscription.
const subscribeListener: (
    channelName: string,
    subscriptionOptions: SCChannel.SCChannelOptions,
) => void = channelname => {
    console.log('subscribe:' + channelname);
};
socket.on('subscribe', subscribeListener);
socket.once('subscribe', subscribeListener);
socket.off('subscribe', subscribeListener);
socket.off('subscribe');

const subscribeFailListener: (
    err: Error,
    channelName: string,
    subscriptionOptions: SCChannel.SCChannelOptions,
) => void = channelname => {
    console.log('subscribeFail:' + channelname);
};
socket.on('subscribeFail', subscribeFailListener);
socket.once('subscribeFail', subscribeFailListener);
socket.off('subscribeFail', subscribeFailListener);
socket.off('subscribeFail');

const unsubscribeListener: (channelName: string) => void = channelname => {
    console.log('unsubscribe:' + channelname);
};
socket.on('unsubscribe', unsubscribeListener);
socket.once('unsubscribe', unsubscribeListener);
socket.off('unsubscribe', unsubscribeListener);
socket.off('unsubscribe');

const subscribeStateChangeListener: (stateChangeData: SubscribeStateChangeData) => void = data => {
    console.log('subscribeStateChange:' + JSON.stringify(data));
};
socket.on('subscribeStateChange', subscribeStateChangeListener);
socket.once('subscribeStateChange', subscribeStateChangeListener);
socket.off('subscribeStateChange', subscribeStateChangeListener);
socket.off('subscribeStateChange');

const messageListener: (message: WebSocket.Data) => void = data => {
    console.log('message:' + data);
};
socket.on('message', messageListener);
socket.once('message', messageListener);
socket.off('message', messageListener);
socket.off('message');

const channels = socket.channels;
const testChannel = channels['test'];

// $ExpectType ChannelState
testChannel.getState();

destroy(socket);

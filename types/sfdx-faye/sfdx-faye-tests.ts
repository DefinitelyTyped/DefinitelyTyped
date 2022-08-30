import { Client, Subscription, logger, StreamingExtension } from "sfdx-faye";

// $ExpectType Subscription
const subscription = new Subscription(() => {});
const streamingExtension: StreamingExtension = {};

// $ExpectType Client
const client = new Client();
// $ExpectType void
client.disable('label');
// $ExpectType void
client.addExtension(streamingExtension);
// $ExpectType void
client.setHeader('name', 'value');
// $ExpectType void
client.handshake(() => {});
// $ExpectType CometSubscription
client.subscribe('channel', () => {});
// $ExpectType void
client.unsubscribe('channel', subscription);
// $ExpectType void
client.disconnect();

// $ExpectType void
subscription.cancel();
// $ExpectType void
subscription.unsubscribe();
// $ExpectType void
subscription.withChannel(() => {});

// $ExpectType any
const theLogger = logger;

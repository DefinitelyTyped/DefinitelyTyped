import {
    Connection,
    ConnectionMonitor,
    Consumer,
    createWebSocketURL,
    INTERNAL,
    Subscription,
    Subscriptions,
    MessageTypes,
    DisconnectReasons,
} from '@rails/actioncable';

INTERNAL.message_types.welcome;
INTERNAL.message_types.disconnect;
INTERNAL.message_types.ping;
INTERNAL.message_types.confirmation;
INTERNAL.message_types.rejection;

INTERNAL.disconnect_reasons.unauthorized;
INTERNAL.disconnect_reasons.invalid_request;
INTERNAL.disconnect_reasons.server_restart;

createWebSocketURL('url'); // $ExpectType string

/**
 * Consumer
 */
const consumer = new Consumer('url'); // $ExpectType Consumer

consumer.url; // $ExpectType string

consumer.send({}); // $ExpectType boolean
consumer.connect(); // $ExpectType boolean
consumer.disconnect(); // $ExpectType any
consumer.ensureActiveConnection(); // $ExpectType boolean | void

/**
 * Connection
 */
Connection.reopenDelay; // $ExpectType number
// $ExpectType any
Connection.events.message({
    data: {
        identifier: 'string',
        message: 'message',
        reason: DisconnectReasons.invalid_request,
        reconnect: true,
        type: MessageTypes.confirmation,
    },
});
Connection.events.open(); // $ExpectType void
Connection.events.close(); // $ExpectType void
Connection.events.error(); // $ExpectType void

const connection = new Connection(consumer); // $ExpectType Connection

connection.send({}); // $ExpectType boolean
connection.open(); // $ExpectType boolean
connection.close(); // $ExpectType any
connection.close({ allowReconnect: true }); // $ExpectType any
connection.reopen(); // $ExpectType void
connection.getProtocol(); // $ExpectType string | void
connection.isOpen(); // $ExpectType boolean
connection.isActive(); // $ExpectType boolean

/**
 * Connection Monitor
 */
ConnectionMonitor.staleThreshold; // $ExpectType number
ConnectionMonitor.reconnectionBackoffRate; // $ExpectType number

const connectionMonitor = new ConnectionMonitor(connection); // $ExpectType ConnectionMonitor

connectionMonitor.start(); // $ExpectType void
connectionMonitor.stop(); // $ExpectType void
connectionMonitor.isRunning(); // $ExpectType boolean
connectionMonitor.recordPing(); // $ExpectType void
connectionMonitor.recordConnect(); // $ExpectType void
connectionMonitor.recordDisconnect(); // $ExpectType void

/**
 * Subscription
 */
const subscription = new Subscription(consumer); // $ExpectType Subscription

subscription.perform('action'); // $ExpectType boolean
subscription.perform('action', {}); // $ExpectType boolean
subscription.send({}); // $ExpectType boolean
subscription.unsubscribe(); // $ExpectType Subscription

/**
 * Subscriptions
 */
const subscriptions = new Subscriptions(consumer); // $ExpectType Subscriptions

subscriptions.create('channel'); // $ExpectType Subscription
subscriptions.create({ channel: 'channel' }); // $ExpectType Subscription

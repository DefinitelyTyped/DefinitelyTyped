import {
    Connection,
    ConnectionMonitor,
    Consumer,
    createWebSocketURL,
    createConsumer,
    INTERNAL,
    Subscription,
    Subscriptions,
    MessageTypes,
    DisconnectReasons,
    logger,
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
logger.enabled = true;

/**
 * Consumer
 */
const consumer = new Consumer('url'); // $ExpectType Consumer
createConsumer('url'); // $ExpectType Consumer

consumer.url; // $ExpectType string

consumer.send({}); // $ExpectType boolean
consumer.connect(); // $ExpectType boolean
consumer.disconnect(); // $ExpectType any
consumer.ensureActiveConnection(); // $ExpectType boolean | void

{
    const subscription = consumer.subscriptions.create(
        { channel: 'channel', room: 'room', chat_id: 1 },
        {
            received(data) {
                this.appendLine(data);
            },
            appendLine(data: any) {
                const html = this.createLine(data);
                const element = document.querySelector("[data-chat-room='Best Room']");

                if (element) {
                    element.insertAdjacentHTML('beforeend', html);
                }
            },
            createLine(data: any) {
                return `
                    <article class="chat-line">
                        <span class="speaker">${data['sent_by']}</span>
                        <span class="body">${data['body']}</span>
                    </article>
                `;
            },
            initialized() {
                this.update = this.update.bind(this);
            },
            connected() {
                this.install();
                this.update();
            },
            disconnected() {
                this.uninstall();
            },
            rejected() {
                this.uninstall();
            },
            update() {
                if (this.documentIsActive) {
                    this.appear();
                } else {
                    this.away();
                }
            },
            appear() {
                this.perform('appear', { appearing_on: this.appearingOn });
            },
            away() {
                this.perform('away');
            },
            install() {
                window.addEventListener('focus', this.update);
                window.addEventListener('blur', this.update);
                document.addEventListener('turbolinks:load', this.update);
                document.addEventListener('visibilitychange', this.update);
            },
            uninstall() {
                window.removeEventListener('focus', this.update);
                window.removeEventListener('blur', this.update);
                document.removeEventListener('turbolinks:load', this.update);
                document.removeEventListener('visibilitychange', this.update);
            },
        },
    );

    subscription.uninstall();
    subscription.away();
    subscription.update();
}

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

const connection = new Connection(consumer); // $ExpectType Connection<Consumer>

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

const connectionMonitor = new ConnectionMonitor(connection); // $ExpectType ConnectionMonitor<Connection<Consumer>>

connectionMonitor.start(); // $ExpectType void
connectionMonitor.stop(); // $ExpectType void
connectionMonitor.isRunning(); // $ExpectType boolean
connectionMonitor.recordPing(); // $ExpectType void
connectionMonitor.recordConnect(); // $ExpectType void
connectionMonitor.recordDisconnect(); // $ExpectType void

/**
 * Subscription
 */
const subscription = new Subscription(consumer); // $ExpectType Subscription<Consumer>

subscription.perform('action'); // $ExpectType boolean
subscription.perform('action', {}); // $ExpectType boolean
subscription.send({}); // $ExpectType boolean
subscription.unsubscribe(); // $ExpectType Subscription<Consumer>

/**
 * Subscriptions
 */
const subscriptions = new Subscriptions(consumer); // $ExpectType Subscriptions<Consumer>

subscriptions.create('channel'); // $ExpectType Subscription<Consumer> & Mixin
subscriptions.create({ channel: 'channel', room: 'room' }); // $ExpectType Subscription<Consumer> & Mixin
// @ts-expect-error
subscriptions.add(subscription);
// @ts-expect-error
subscriptions.remove(subscription);
// @ts-expect-error
subscriptions.reject(subscription.identifier);
// @ts-expect-error
subscriptions.forget(subscription);
// @ts-expect-error
subscriptions.findAll(subscription.identifier);
// @ts-expect-error
subscriptions.reload();
// @ts-expect-error
subscriptions.notifyAll('callbackName');
// @ts-expect-error
subscriptions.notify(subscription, 'callbackName');
// @ts-expect-error
subscriptions.subscribe(subscription);
// @ts-expect-error
subscriptions.confirmSubscription(subscription.identifier);
// @ts-expect-error
subscriptions.sendCommand(subscription, {});

import { adapters, createConsumer, logger } from "@rails/actioncable";

adapters.logger = window.console;
adapters.WebSocket = window.WebSocket;

logger.enabled = true;

const consumer = createConsumer("url"); // $ExpectType Consumer
createConsumer(() => "url"); // $ExpectType Consumer

consumer.url; // $ExpectType string

consumer.connect(); // $ExpectType boolean
consumer.disconnect(); // $ExpectType void

{
    const subscription = consumer.subscriptions.create(
        { channel: "channel", room: "room", chat_id: 1 },
        {
            initialized() {
            },
            connected(_arg: { reconnected: boolean }) {
                this.update();
            },
            disconnected(_arg: { willAttemptReconnect: boolean | undefined }) {
            },
            rejected() {
            },
            received(data: any) {
                this.appendLine(data);
            },

            isActive: true,
            appendLine(_data: any) {
            },
            update() {
                const active = this.isActive; // $ExpectType boolean
                if (active) {
                    this.appear();
                } else {
                    this.away();
                }
            },
            appear() {
                this.perform("appear"); // $ExpectType boolean
            },
            away() {
                this.perform("away"); // $ExpectType boolean
            },
        },
    );

    subscription.away();
    subscription.perform("action"); // $ExpectType boolean
    subscription.perform("action", {}); // $ExpectType boolean
    subscription.unsubscribe();

    // @ts-expect-error (typo)
    subscription.apear();
}

consumer.subscriptions.create("channel"); // $ExpectType Subscription<BaseMixin>
consumer.subscriptions.create({ channel: "channel", room: "room" }); // $ExpectType Subscription<BaseMixin>

consumer.subscriptions.create("channel", {
    // @ts-expect-error
    connected(wrongArgument: string) {
    },
});

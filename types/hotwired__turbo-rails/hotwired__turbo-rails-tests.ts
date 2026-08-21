import { cable, Turbo } from "@hotwired/turbo-rails";

// === Turbo re-export ===

// $ExpectType void
Turbo.visit("https://example.com");

// $ExpectType void
Turbo.visit("https://example.com", { action: "advance" });

// $ExpectType void
Turbo.start();

const source: Turbo.StreamSource = {
    addEventListener(
        type: "message",
        listener: (event: MessageEvent) => void,
        options?: AddEventListenerOptions,
    ): void {},
    removeEventListener(
        type: "message",
        listener: (event: MessageEvent) => void,
        options?: EventListenerOptions,
    ): void {},
};

// $ExpectType void
Turbo.connectStreamSource(source);

// $ExpectType void
Turbo.disconnectStreamSource(source);

// === cable namespace ===

async function testCable() {
    // $ExpectType Consumer
    const consumer = await cable.getConsumer();

    // $ExpectType Consumer
    cable.setConsumer(consumer);

    // $ExpectType Consumer
    const newConsumer = await cable.createConsumer();

    // $ExpectType Subscription<BaseMixin>
    const subscription = await cable.subscribeTo("ChatChannel");

    // $ExpectType Subscription<BaseMixin>
    const subscriptionWithParams = await cable.subscribeTo({ channel: "ChatChannel", room: "1" });

    // subscribeTo with mixin
    const sub = await cable.subscribeTo("ChatChannel", {
        connected() {},
        received(data: any) {
            console.log(data);
        },
    });
}

// @ts-expect-error
cable.setConsumer("not a consumer");

// === turbo-cable-stream-source custom element ===

const streamSource = document.querySelector("turbo-cable-stream-source")!;

// $ExpectType TurboCableStreamSourceElement
streamSource;

// $ExpectType Promise<void>
streamSource.connectedCallback();

// $ExpectType void
streamSource.disconnectedCallback();

// $ExpectType boolean
streamSource.dispatchMessageEvent("<turbo-stream action='replace'></turbo-stream>");

// $ExpectType ChannelNameWithParams
streamSource.channel;

// @ts-expect-error — channel is readonly
streamSource.channel = { channel: "test" };

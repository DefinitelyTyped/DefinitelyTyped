import Channel = require("@storybook/channels");

const transport: Channel.Transport = {
    setHandler(handler) { },
    send(event) { },
};
const channel = new Channel({ transport, async: true });
const listener = (...args: any) => { };
channel.addListener("event", listener);
channel.addPeerListener("event", listener);
channel.emit("event", 42);
channel.on("event", listener);
channel.once("event", listener);
channel.prependListener("event", listener);

const events: PropertyKey[] = channel.eventNames();
const count: number = channel.listenerCount("event");
const listeners: Array<(...args: any) => void> = channel.listeners("event");

channel.removeListener("event", listener);
channel.removeAllListeners("event");

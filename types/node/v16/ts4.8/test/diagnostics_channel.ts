import { Channel, channel, hasSubscribers, subscribe, unsubscribe } from "node:diagnostics_channel";

const ch1: Channel = channel(Symbol.for("test"));
function listener(data: unknown) {}
function anotherListener(data: unknown, name: string | symbol) {}

const active: boolean = ch1.hasSubscribers;
const name: string | symbol = ch1.name;

ch1.publish({ some: "message" });

ch1.subscribe(listener);
ch1.subscribe(anotherListener);

ch1.unsubscribe(listener);
ch1.unsubscribe(anotherListener);

subscribe("test", listener);
unsubscribe("test", listener);

subscribe(Symbol.for("test-symbol"), listener);
unsubscribe(Symbol.for("test-symbol"), listener);

const hasSubs = hasSubscribers("test");

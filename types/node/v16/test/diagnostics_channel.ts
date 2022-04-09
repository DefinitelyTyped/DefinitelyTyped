import { Channel, channel, hasSubscribers } from 'node:diagnostics_channel';

const ch1: Channel = channel('test');
function listener(data: unknown) {}
function anotherListener(data: unknown, name: string) {}

const active: boolean = ch1.hasSubscribers;
const name: string = ch1.name;

ch1.publish({ some: 'message' });

ch1.subscribe(listener);
ch1.subscribe(anotherListener);

ch1.unsubscribe(listener);
ch1.unsubscribe(anotherListener);

const hasSubs = hasSubscribers('test');

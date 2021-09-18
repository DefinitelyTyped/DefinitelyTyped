import { Channel, channel, hasSubscribers } from 'node:diagnostics_channel';

const ch1: Channel = channel('test');
function listener(name: string, data: unknown) {
}

const active: boolean = ch1.hasSubscribers;
const name: string = ch1.name;

ch1.subscribe(listener);

ch1.unsubscribe(listener);

const hasSubs = hasSubscribers('test');

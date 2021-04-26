import { Channel, channel, hasSubscribers } from 'diagnostic_channel';

const ch1: Channel<string> = channel<string>('test');
const ch2: Channel<number> = channel<number>('test2');

function listener(name: string, data: string | number) {

}

ch1.subscribe(listener);
ch2.subscribe(listener);

ch1.unsubscribe(listener);
ch2.unsubscribe(listener);

const hasSubs = hasSubscribers('test');


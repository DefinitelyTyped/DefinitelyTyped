import { createConsumer, Channel, ChannelNameWithParams } from '@rails/actioncable';

interface HelloChannel extends Channel {
    hello(world: string, name?: string): void;
}

const cable = createConsumer();
const helloChannel = cable.subscriptions.create('NetworkChannel', {
    connected(): void {
        console.log('connected');
    },
    disconnected(): void {
        console.log('disconnected');
    },
    received(obj: any): void {
        console.log(obj);
    },
    hello(world: string, name: string = 'John Doe'): void {
        console.log(`Hello, ${world}! name[${name}]`);
    },
}) as HelloChannel;

helloChannel.hello('World');

const channelParams: ChannelNameWithParams = {
    channel: 'NetworkChannel',
    token: 'foo',
    data: {
        bar: 'baz',
    },
};
const channelWithParams = cable.subscriptions.create(channelParams, {
    connected(): void {
        console.log('connected');
    },
    disconnected(): void {
        console.log('disconnected');
    },
    received(obj: any): void {
        console.log(obj);
    },
});

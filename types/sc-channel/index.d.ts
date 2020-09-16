// Type definitions for sc-channel 2.0
// Project: https://github.com/SocketCluster/sc-channel
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import AsyncIterableStream = require('async-iterable-stream');
import StreamDemux = require('stream-demux');
import DemuxedConsumableStream = require('stream-demux/demuxed-consumable-stream');

declare class SCChannel<T> extends AsyncIterableStream<T> {
    readonly PENDING: 'pending';
    readonly SUBSCRIBED: 'subscribed';
    readonly UNSUBSCRIBED: 'unsubscribed';

    name: string;
    client: SCChannel.Client;

    state: SCChannel.ChannelState;
    options: object;

    constructor(name: string, client: SCChannel.Client, eventDemux: StreamDemux<T>, dataStream: AsyncIterableStream<T>);

    createAsyncIterator(timeout?: number): AsyncIterableStream.AsyncIterator<T>;

    listener(eventName: string): DemuxedConsumableStream<T>;
    closeListener(eventName: string): void;
    closeAllListeners(): void;

    close(): void;

    subscribe(options?: any): void;
    unsubscribe(): void;

    isSubscribed(includePending?: boolean): boolean;

    publish(data: any): any;
}

export = SCChannel;

declare namespace SCChannel {
    interface Client {
        closeChannel(channelName: string): void;

        getChannelState(channelName: string): ChannelState;
        getChannelOptions(channelName: string): object;

        subscribe(channelName: string): SCChannel<any>;
        unsubscribe(channelName: string): void;
        isSubscribed(channelName: string, includePending?: boolean): boolean;

        publish(channelName: string, data: any): any;
    }

    type ChannelState = 'pending' | 'subscribed' | 'unsubscribed';
}

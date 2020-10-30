// Type definitions for ag-channel 4.0
// Project: https://github.com/SocketCluster/ag-channel
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ConsumableStream = require('consumable-stream');
import StreamDemux = require('stream-demux');
import DemuxedConsumableStream = require('stream-demux/demuxed-consumable-stream');
import Consumer = require('writable-consumable-stream/consumer');

declare class AGChannel<T> extends ConsumableStream<T> {
    readonly PENDING: 'pending';
    readonly SUBSCRIBED: 'subscribed';
    readonly UNSUBSCRIBED: 'unsubscribed';

    name: string;
    client: AGChannel.Client;

    state: AGChannel.ChannelState;
    options: object;

    constructor(name: string, client: AGChannel.Client, eventDemux: StreamDemux<T>, dataDemux: StreamDemux<T>);

    createConsumer(timeout?: number): ConsumableStream.Consumer<T>;

    listener(eventName: string): DemuxedConsumableStream<T>;

    close(): void;

    kill(): void;
    killOutputConsumer(consumerId: number): void;
    killListenerConsumer(consumerId: number): void;

    getOutputConsumerStats(consumerId: number): Consumer.ConsumerStats | undefined;
    getListenerConsumerStats(consumerId: number): Consumer.ConsumerStats | undefined;

    getBackpressure(): number;
    getListenerConsumerBackpressure(consumerId: number): number;
    getOutputConsumerBackpressure(consumerId: number): any;

    closeOutput(): void;
    closeListener(eventName: string): void;
    closeAllListeners(): void;

    killOutput(): void;
    killListener(eventName: string): void;
    killAllListeners(): void;

    getOutputConsumerStatsList(): Consumer.ConsumerStats;
    getListenerConsumerStatsList(eventName: string): Consumer.ConsumerStats[];

    getOutputBackpressure(): number;
    getListenerBackpressure(eventName: string): number;
    getAllListenersBackpressure(): number;

    hasOutputConsumer(consumerId: number): boolean;
    hasListenerConsumer(eventName: string, consumerId: number): boolean;
    hasAnyListenerConsumer(consumerId: number): boolean;

    subscribe(options?: any): void;
    unsubscribe(): void;

    isSubscribed(includePending?: boolean): boolean;

    transmitPublish(data: any): Promise<void>;
    invokePublish(data: any): Promise<void>;
}

export = AGChannel;

declare namespace AGChannel {
    interface Client {
        closeChannel(channelName: string): void;

        killChannel(channelName: string): void;

        killChannelOutputConsumer(consumerId: number): void;
        killChannelListenerConsumer(consumerId: number): void;

        getChannelOutputConsumerStats(consumerId: number): Consumer.ConsumerStats;
        getChannelListenerConsumerStats(consumerId: number): Consumer.ConsumerStats;

        getChannelBackpressure(channelName: string): number;

        getChannelListenerConsumerBackpressure(consumerId: number): number;
        getChannelOutputConsumerBackpressure(consumerId: number): number;

        channelCloseOutput(channelName: string): void;
        channelCloseListener(channelName: string, eventName: string): void;
        channelCloseAllListeners(channelName: string): void;

        channelKillOutput(channelName: string): void;
        channelKillListener(channelName: string, eventName: string): void;
        channelKillAllListeners(channelName: string): void;

        channelGetOutputConsumerStatsList(channelName: string): Consumer.ConsumerStats[];
        channelGetListenerConsumerStatsList(channelName: string, eventName: string): Consumer.ConsumerStats[];
        channelGetAllListenersConsumerStatsList(channelName: string): Consumer.ConsumerStats[];

        channelGetOutputBackpressure(channelName: string): number;
        channelGetListenerBackpressure(channelName: string, eventName: string): number;
        channelGetAllListenersBackpressure(channelName: string): number;

        channelHasOutputConsumer(channelName: string, consumerId: number): boolean;
        channelHasListenerConsumer(channelName: string, eventName: string, consumerId: number): boolean;
        channelHasAnyListenerConsumer(channelName: string, consumerId: number): boolean;

        getChannelState(channelName: string): ChannelState;
        getChannelOptions(channelName: string): object;

        subscribe(channelName: string): AGChannel<any>;
        unsubscribe(channelName: string): Promise<void>;
        isSubscribed(channelName: string, includePending?: boolean): boolean;

        transmitPublish(channelName: string, data: any): Promise<void>;
        invokePublish(channelName: string, data: any): Promise<any>;
    }

    type ChannelState = 'pending' | 'subscribed' | 'unsubscribed';
}

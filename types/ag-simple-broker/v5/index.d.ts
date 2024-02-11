import AsyncStreamEmitter = require("async-stream-emitter");
import AGServer = require("socketcluster-server/server");
import ConsumableStream = require("consumable-stream");
import AGChannel = require("ag-channel");
import Consumer = require("writable-consumable-stream/consumer");

declare class AGSimpleBroker extends AsyncStreamEmitter<any> {
    isReady: boolean;

    emit(eventName: "ready", data: {}): void;
    emit(eventName: "subscribe", data: AGSimpleBroker.SubscribeData): void;
    emit(eventName: "unsubscribe", data: AGSimpleBroker.UnsubscribeData): void;
    emit(eventName: "error", data: AGSimpleBroker.ErrorData): void;
    emit(eventName: "publish", data: AGSimpleBroker.PublishData): void;

    listener(eventName: "ready"): ConsumableStream<{}>;
    listener(eventName: "subscribe"): ConsumableStream<AGSimpleBroker.SubscribeData>;
    listener(eventName: "unsubscribe"): ConsumableStream<AGSimpleBroker.UnsubscribeData>;
    listener(eventName: "error"): ConsumableStream<AGSimpleBroker.ErrorData>;
    listener(eventName: "publish"): ConsumableStream<AGSimpleBroker.PublishData>;

    exchange(): AGSimpleBroker.SimpleExchange;

    subscribeClient(client: { id: string }, channelName: string): Promise<void>;
    subscribeSocket(client: { id: string }, channelName: string): Promise<void>;

    unsubscribeClient(client: { id: string }, channelName: string): Promise<void>;
    unsubscribeSocket(client: { id: string }, channelName: string): Promise<void>;

    subscriptions(): string[];
    isSubscribed(channelName: string): boolean;

    setCodecEngine(codec: AGServer.CodecEngine): void;

    invokePublish(channelName: string, data: any, suppressEvent?: boolean): Promise<void>;
    transmitPublish(channelName: string, data: any, suppressEvent?: boolean): Promise<void>;
}

export = AGSimpleBroker;

declare namespace AGSimpleBroker {
    class SimpleExchange extends AsyncStreamEmitter<any> implements AGChannel.Client {
        id: string;

        constructor(broker: AGSimpleBroker);

        emit(eventName: "subscribe", data: SubscribeData): void;
        emit(eventName: "unsubscribe", data: UnsubscribeData): void;

        listener(eventName: "subscribe"): ConsumableStream<SubscribeData>;
        listener(eventName: "unsubscribe"): ConsumableStream<UnsubscribeData>;

        /* AGChannel.Client start */

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

        getChannelState(channelName: string): AGChannel.ChannelState;
        getChannelOptions(channelName: string): object;

        subscribe(channelName: string): AGChannel<any>;
        unsubscribe(channelName: string): Promise<void>;
        isSubscribed(channelName: string, includePending?: boolean): boolean;

        transmitPublish(channelName: string, data: any): Promise<void>;
        invokePublish(channelName: string, data: any): Promise<void>;

        /* AGChannel.Client end */

        transmit(event: string, packet: any): void;

        destroy(): void;

        channel(channelName: string): AGChannel<any>;

        closeAllChannelOutputs(): void;
        closeAllChannelListeners(): void;
        closeAllChannels(): void;

        killAllChannelOutputs(): void;
        killAllChannelListeners(): void;
        killAllChannels(): void;

        getAllChannelOutputsConsumerStatsList(): Consumer.ConsumerStats[];

        getAllChannelListenersConsumerStatsList(): Consumer.ConsumerStats[];

        getBackpressure(): number;
        getAllChannelOutputsBackpressure(): number;
        getAllChannelListenersBackpressure(): number;
        getAllChannelsBackpressure(): number;

        hasAnyChannelOutputConsumer(consumerId: number): boolean;
        hasAnyChannelListenerConsumer(consumerId: number): boolean;

        subscriptions(includePending?: boolean): string[];
    }

    interface SubscribeData {
        channel: string;
    }

    interface UnsubscribeData {
        channel: string;
    }

    interface ErrorData {
        error: any;
    }

    interface PublishData {
        channel: string;
        data: any;
    }
}

// Type definitions for sc-channel 1.2
// Project: https://github.com/SocketCluster/sc-channel
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Emitter = require('component-emitter');

declare class SCChannel extends Emitter {
    readonly PENDING: 'pending';
    readonly SUBSCRIBED: 'subscribed';
    readonly UNSUBSCRIBED: 'unsubscribed';

    name: string;
    state: SCChannel.ChannelState;
    waitForAuth: boolean;
    batch: boolean;
    data: any;

    constructor(name: string, client: SCChannel.SCClient, options?: SCChannel.SCChannelOptions);

    setOptions(options?: SCChannel.SCChannelOptions): void;
    getState(): SCChannel.ChannelState;

    subscribe(options?: any): void;
    unsubscribe(): void;
    isSubscribed(includePending?: boolean): boolean;

    publish(data: any, callback?: (err?: Error) => void): void;

    watch(handler: SCChannel.HandlerFunction): void;
    unwatch(handler?: SCChannel.HandlerFunction): void;
    watchers(): SCChannel.HandlerFunction[];

    destroy(): void;
}

export { SCChannel };

declare namespace SCChannel {
    type ChannelState = 'pending' | 'subscribed' | 'unsubscribed';

    type HandlerFunction = (data: any) => void;

    interface SCChannelOptions {
        waitForAuth?: boolean;
        batch?: boolean;
        data?: any;
    }

    interface SCClient {
        subscribe(channelName: string, options?: any): SCChannel;
        unsubscribe(channelName: string): void;
        isSubscribed(channelName: string, includePending?: boolean): boolean;

        publish(channelName: string, data: any, callback?: (err?: Error) => void): void;

        watch(channelName: string, handler: HandlerFunction): void;
        unwatch(channelName: string, handler?: HandlerFunction): void;
        watchers(channelName: string): HandlerFunction[];

        destroyChannel(channelName: string): void;
    }
}

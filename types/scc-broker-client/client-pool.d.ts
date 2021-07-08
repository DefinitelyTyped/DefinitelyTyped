import AsyncStreamEmitter = require('async-stream-emitter');
import { AGClientSocket } from 'socketcluster-client';
import { Secret } from 'jsonwebtoken';
import AGChannel = require('ag-channel');
import ConsumableStream = require('consumable-stream');

import Hasher = require('./hasher');

interface ClientPoolOptions {
    clientCount?: number | undefined;
    targetURI: string;
    authKey?: Secret | undefined;
}

interface BrokenDownURI {
    hostname: string;
    port?: string | undefined;
    secure?: true | undefined;
}

declare class ClientPool extends AsyncStreamEmitter<any> {
    hasher: Hasher;
    clientCount: number;
    targetURI: string;
    authKey?: Secret | undefined;
    clients: AGClientSocket[];

    constructor(options?: ClientPoolOptions);

    emit(eventName: 'error', data: { error: Error }): void;
    emit(eventName: 'subscribe', data: ClientPool.SubscribeData): void;
    emit(eventName: 'subscribeFail', data: ClientPool.SubscribeFailData): void;
    emit(eventName: 'publish', data: ClientPool.PublishData): void;
    emit(eventName: 'publishFail', data: ClientPool.PublishFailData): void;

    listener(eventName: 'error'): ConsumableStream<{ error: Error }>;
    listener(eventName: 'subscribe'): ConsumableStream<ClientPool.SubscribeData>;
    listener(eventName: 'subscribeFail'): ConsumableStream<ClientPool.SubscribeFailData>;
    listener(eventName: 'publish'): ConsumableStream<ClientPool.PublishData>;
    listener(eventName: 'publishFail'): ConsumableStream<ClientPool.PublishFailData>;

    breakDownURI(uri: string): BrokenDownURI;

    selectClient(key: string): AGClientSocket;

    invokePublish(channelName: string, data: any): Promise<void>;

    subscriptions(includePending?: boolean): string[];

    subscribe(channelName: string, options?: AGClientSocket.SubscribeOptions): AGChannel<any>;
    unsubscribe(channelName: string): Promise<void>;
    isSubscribed(channelName: string, includePending?: boolean): boolean;

    closeChannel(channelName: string): void;

    destroy(): void;
}

export = ClientPool;

declare namespace ClientPool {
    interface SubscribeData {
        targetURI: string;
        poolIndex: number;
        channel: string;
    }

    interface SubscribeFailData extends SubscribeData {
        error: Error;
    }

    interface PublishData {
        targetURI: string;
        poolIndex: number;
        channel: string;
        data: any;
    }

    interface PublishFailData {
        targetURI: string;
        poolIndex: number;
        channel: string;
        error: Error;
    }
}
